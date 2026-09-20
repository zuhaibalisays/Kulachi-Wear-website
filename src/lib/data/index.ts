import { prisma } from './db'

export async function getSiteSettings() {
  return prisma.siteSettings.findUnique({
    where: { id: 'settings' },
  })
}

export async function getAllProducts(options?: { 
  isActive?: boolean 
  isFeatured?: boolean 
  isNew?: boolean 
  limit?: number 
  collectionId?: string 
  categoryId?: string 
  search?: string 
}) {
  const { isActive = true, isFeatured, isNew, limit, collectionId, categoryId, search } = options || {}
  
  const where: any = { isActive }
  
  if (isFeatured !== undefined) where.isFeatured = isFeatured
  if (isNew !== undefined) where.isNew = isNew
  
  if (search) {
    where.OR = [
      { name: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
      { sku: { contains: search, mode: 'insensitive' } },
    ]
  }
  
  if (collectionId) {
    where.collections = {
      some: { collectionId }
    }
  }
  
  if (categoryId) {
    where.categories = {
      some: { categoryId }
    }
  }
  
  return prisma.product.findMany({
    where,
    include: {
      images: { orderBy: { sortOrder: 'asc' } },
      categories: { include: { category: true } },
      collections: { include: { collection: true } },
      variants: true,
    },
    orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    take: limit,
  })
}

export async function getProductBySlug(slug: string) {
  return prisma.product.findUnique({
    where: { slug },
    include: {
      images: { orderBy: { sortOrder: 'asc' } },
      categories: { include: { category: true } },
      collections: { include: { collection: true } },
      variants: true,
    },
  })
}

export async function getProductById(id: string) {
  return prisma.product.findUnique({
    where: { id },
    include: {
      images: { orderBy: { sortOrder: 'asc' } },
      categories: { include: { category: true } },
      collections: { include: { collection: true } },
      variants: true,
    },
  })
}

export async function getAllCategories() {
  return prisma.category.findMany({
    orderBy: { sortOrder: 'asc' },
    include: {
      _count: { select: { products: true } },
    },
  })
}

export async function getCategoryBySlug(slug: string) {
  return prisma.category.findUnique({
    where: { slug },
    include: {
      products: {
        include: {
          product: {
            include: {
              images: { orderBy: { sortOrder: 'asc' } },
            },
          },
        },
      },
    },
  })
}

export async function getAllCollections() {
  return prisma.collection.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: 'asc' },
    include: {
      _count: { select: { products: true } },
    },
  })
}

export async function getCollectionBySlug(slug: string) {
  return prisma.collection.findUnique({
    where: { slug },
    include: {
      products: {
        include: {
          product: {
            include: {
              images: { orderBy: { sortOrder: 'asc' } },
            },
          },
        },
      },
    },
  })
}

export async function getActiveDiscounts() {
  const now = new Date()
  return prisma.discount.findMany({
    where: {
      isActive: true,
      OR: [
        { startDate: null, endDate: null },
        { startDate: { lte: now }, endDate: null },
        { startDate: null, endDate: { gte: now } },
        { startDate: { lte: now }, endDate: { gte: now } },
      ],
    },
    include: {
      discountProducts: { include: { product: true } },
      discountCollections: { include: { collection: true } },
    },
    orderBy: { priority: 'desc' },
  })
}

export async function getStorefrontSections() {
  return prisma.storefrontSection.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: 'asc' },
    include: {
      collection: true,
      sectionProducts: {
        orderBy: { sortOrder: 'asc' },
        include: {
          product: {
            include: {
              images: { orderBy: { sortOrder: 'asc' } },
            },
          },
        },
      },
    },
  })
}

export async function calculateDiscountedPrice(productId: string, basePrice: number) {
  const discounts = await getActiveDiscounts()
  
  let finalPrice = basePrice
  let appliedDiscount = null
  
  for (const discount of discounts) {
    if (discount.scope === 'product') {
      const appliesToProduct = discount.discountProducts.some(dp => dp.productId === productId)
      if (appliesToProduct) {
        if (discount.type === 'percentage') {
          finalPrice = basePrice * (1 - discount.value / 100)
        } else {
          finalPrice = Math.max(0, basePrice - discount.value)
        }
        appliedDiscount = discount
        break
      }
    }
  }
  
  if (!appliedDiscount) {
    for (const discount of discounts) {
      if (discount.scope === 'collection') {
        const product = await getProductById(productId)
        if (product) {
          const appliesToCollection = discount.discountCollections.some(dc => 
            product.collections.some(pc => pc.collectionId === dc.collectionId)
          )
          if (appliesToCollection) {
            if (discount.type === 'percentage') {
              finalPrice = basePrice * (1 - discount.value / 100)
            } else {
              finalPrice = Math.max(0, basePrice - discount.value)
            }
            appliedDiscount = discount
            break
          }
        }
      }
    }
  }
  
  if (!appliedDiscount) {
    for (const discount of discounts) {
      if (discount.scope === 'storewide') {
        if (discount.type === 'percentage') {
          finalPrice = basePrice * (1 - discount.value / 100)
        } else {
          finalPrice = Math.max(0, basePrice - discount.value)
        }
        appliedDiscount = discount
        break
      }
    }
  }
  
  return { finalPrice: Math.round(finalPrice), appliedDiscount, originalPrice: basePrice }
}
