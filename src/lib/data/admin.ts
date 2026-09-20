import { prisma } from '../db'

export async function getAllAdminUsers() {
  return prisma.adminUser.findMany({
    select: { id: true, email: true, name: true, createdAt: true },
  })
}

export async function getAdminUserByEmail(email: string) {
  return prisma.adminUser.findUnique({
    where: { email },
  })
}

export async function createAdminUser(data: { email: string; password: string; name?: string }) {
  return prisma.adminUser.create({ data })
}

export async function updateAdminUser(id: string, data: { name?: string; password?: string }) {
  return prisma.adminUser.update({ where: { id }, data })
}

export async function deleteAdminUser(id: string) {
  return prisma.adminUser.delete({ where: { id } })
}

// Products
export async function createProduct(data: any) {
  return prisma.product.create({
    data: {
      ...data,
      images: data.images ? { create: data.images } : undefined,
      categories: data.categories ? { create: data.categories } : undefined,
      collections: data.collections ? { create: data.collections } : undefined,
      variants: data.variants ? { create: data.variants } : undefined,
    },
    include: {
      images: true,
      categories: { include: { category: true } },
      collections: { include: { collection: true } },
      variants: true,
    },
  })
}

export async function updateProduct(id: string, data: any) {
  return prisma.product.update({
    where: { id },
    data: {
      ...data,
      images: data.images ? {
        deleteMany: {},
        create: data.images.map((img: any) => ({
          url: img.url,
          altText: img.altText,
          sortOrder: img.sortOrder || 0,
        }))
      } : undefined,
    },
    include: {
      images: true,
      categories: { include: { category: true } },
      collections: { include: { collection: true } },
      variants: true,
    },
  })
}

export async function deleteProduct(id: string) {
  return prisma.product.delete({ where: { id } })
}

// Categories
export async function createCategory(data: { name: string; slug: string; description?: string; parentId?: string; sortOrder?: number }) {
  return prisma.category.create({ data })
}

export async function updateCategory(id: string, data: any) {
  return prisma.category.update({ where: { id }, data })
}

export async function deleteCategory(id: string) {
  return prisma.category.delete({ where: { id } })
}

// Collections
export async function createCollection(data: { name: string; slug: string; description?: string; isActive?: boolean; sortOrder?: number }) {
  return prisma.collection.create({ data })
}

export async function updateCollection(id: string, data: any) {
  return prisma.collection.update({ where: { id }, data })
}

export async function deleteCollection(id: string) {
  return prisma.collection.delete({ where: { id } })
}

// Storefront Sections
export async function createStorefrontSection(data: { title?: string; type: string; collectionId?: string; isActive?: boolean; sortOrder?: number }) {
  return prisma.storefrontSection.create({ data })
}

export async function updateStorefrontSection(id: string, data: any) {
  return prisma.storefrontSection.update({ where: { id }, data })
}

export async function deleteStorefrontSection(id: string) {
  return prisma.storefrontSection.delete({ where: { id } })
}

export async function reorderSections(order: { id: string; sortOrder: number }[]) {
  const updates = order.map(item => 
    prisma.storefrontSection.update({
      where: { id: item.id },
      data: { sortOrder: item.sortOrder },
    })
  )
  return prisma.$transaction(updates)
}

// Discounts
export async function createDiscount(data: any) {
  return prisma.discount.create({
    data: {
      ...data,
      discountProducts: data.productIds ? {
        create: data.productIds.map((productId: string) => ({ productId }))
      } : undefined,
      discountCollections: data.collectionIds ? {
        create: data.collectionIds.map((collectionId: string) => ({ collectionId }))
      } : undefined,
    },
    include: {
      discountProducts: { include: { product: true } },
      discountCollections: { include: { collection: true } },
    },
  })
}

export async function updateDiscount(id: string, data: any) {
  return prisma.discount.update({
    where: { id },
    data: {
      ...data,
      discountProducts: data.productIds !== undefined ? {
        deleteMany: {},
        create: data.productIds.map((productId: string) => ({ productId }))
      } : undefined,
      discountCollections: data.collectionIds !== undefined ? {
        deleteMany: {},
        create: data.collectionIds.map((collectionId: string) => ({ collectionId }))
      } : undefined,
    },
    include: {
      discountProducts: { include: { product: true } },
      discountCollections: { include: { collection: true } },
    },
  })
}

export async function deleteDiscount(id: string) {
  return prisma.discount.delete({ where: { id } })
}

// Site Settings
export async function updateSiteSettings(data: any) {
  return prisma.siteSettings.upsert({
    where: { id: 'settings' },
    update: data,
    create: { id: 'settings', ...data },
  })
}

// Orders
export async function createOrder(data: any) {
  return prisma.order.create({ data })
}

export async function getAllOrders() {
  return prisma.order.findMany({ orderBy: { createdAt: 'desc' } })
}

export async function getOrderById(id: string) {
  return prisma.order.findUnique({ where: { id } })
}

export async function updateOrderStatus(id: string, status: string) {
  return prisma.order.update({ where: { id }, data: { status } })
}
