import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  await prisma.adminUser.upsert({
    where: { email: 'admin@kulachiwear.com' },
    update: {},
    create: {
      email: 'admin@kulachiwear.com',
      password: hashedPassword,
      name: 'Store Admin',
    },
  })
  console.log('✅ Admin user created (email: admin@kulachiwear.com, password: admin123)')

  // Create site settings
  await prisma.siteSettings.upsert({
    where: { id: 'settings' },
    update: {},
    create: {
      id: 'settings',
      siteName: 'Kulachi Wear',
      tagline: 'Elegant Women\'s Clothing',
      currency: 'PKR',
      currencySymbol: 'Rs.',
      whatsappNumber: '+923000000000',
      instagramUrl: 'https://instagram.com/kulachi.wear',
      tiktokUrl: 'https://www.tiktok.com/@kulachi.wear',
    },
  })
  console.log('✅ Site settings created')

  // Create categories
  const tops = await prisma.category.create({
    data: { name: 'Tops', slug: 'tops', sortOrder: 1 },
  })
  const bottoms = await prisma.category.create({
    data: { name: 'Bottoms', slug: 'bottoms', sortOrder: 2 },
  })
  const dresses = await prisma.category.create({
    data: { name: 'Dresses', slug: 'dresses', sortOrder: 3 },
  })
  const kurtis = await prisma.category.create({
    data: { name: 'Kurtis', slug: 'kurtis', sortOrder: 4 },
  })
  console.log('✅ Categories created')

  // Create collections
  const summerCollection = await prisma.collection.create({
    data: { name: 'Summer Collection', slug: 'summer-collection', isActive: true, sortOrder: 1 },
  })
  const festiveCollection = await prisma.collection.create({
    data: { name: 'Festive Collection', slug: 'festive-collection', isActive: true, sortOrder: 2 },
  })
  const casualWear = await prisma.collection.create({
    data: { name: 'Casual Wear', slug: 'casual-wear', isActive: true, sortOrder: 3 },
  })
  console.log('✅ Collections created')

  // Create demo products (clearly marked as demo)
  const demoProducts = [
    {
      name: '[DEMO] Embroidered Lawn Kurti',
      slug: 'demo-embroidered-lawn-kurti',
      description: 'Beautiful embroidered lawn kurti perfect for summer. This is DEMO content.',
      basePrice: 4500,
      isActive: true,
      isFeatured: true,
      isNew: true,
      sortOrder: 1,
    },
    {
      name: '[DEMO] Printed Cotton Dress',
      slug: 'demo-printed-cotton-dress',
      description: 'Comfortable printed cotton dress with elegant design. This is DEMO content.',
      basePrice: 5500,
      isActive: true,
      isFeatured: true,
      isNew: false,
      sortOrder: 2,
    },
    {
      name: '[DEMO] Silk Blend Tunic',
      slug: 'demo-silk-blend-tunic',
      description: 'Premium silk blend tunic with subtle sheen. This is DEMO content.',
      basePrice: 6200,
      isActive: true,
      isFeatured: false,
      isNew: true,
      sortOrder: 3,
    },
    {
      name: '[DEMO] Linen Palazzo Set',
      slug: 'demo-linen-palazzo-set',
      description: 'Breathable linen palazzo set for casual elegance. This is DEMO content.',
      basePrice: 7800,
      isActive: true,
      isFeatured: true,
      isNew: false,
      sortOrder: 4,
    },
    {
      name: '[DEMO] Floral Print Kurta',
      slug: 'demo-floral-print-kurta',
      description: 'Vibrant floral print kurta with modern cut. This is DEMO content.',
      basePrice: 3900,
      isActive: true,
      isFeatured: false,
      isNew: false,
      sortOrder: 5,
    },
    {
      name: '[DEMO] Chiffon Evening Dress',
      slug: 'demo-chiffon-evening-dress',
      description: 'Elegant chiffon evening dress for special occasions. This is DEMO content.',
      basePrice: 9500,
      isActive: true,
      isFeatured: true,
      isNew: true,
      sortOrder: 6,
    },
  ]

  for (const productData of demoProducts) {
    const product = await prisma.product.create({
      data: {
        ...productData,
        images: {
          create: {
            url: '/assets/products/placeholder.jpg',
            altText: `${productData.name} - Demo Image`,
            sortOrder: 0,
          },
        },
        variants: {
          create: [
            { size: 'S', color: 'Default', stock: 10, sku: `${productData.slug}-s` },
            { size: 'M', color: 'Default', stock: 15, sku: `${productData.slug}-m` },
            { size: 'L', color: 'Default', stock: 10, sku: `${productData.slug}-l` },
          ],
        },
      },
    })

    // Add to categories
    await prisma.productCategory.create({
      data: {
        productId: product.id,
        categoryId: kurtis.id,
      },
    })

    // Add to collections
    await prisma.productCollection.create({
      data: {
        productId: product.id,
        collectionId: summerCollection.id,
      },
    })
  }
  console.log('✅ Demo products created (6 products)')

  // Create storefront sections
  await prisma.storefrontSection.create({
    data: {
      title: 'Featured Products',
      type: 'featured',
      isActive: true,
      sortOrder: 1,
    },
  })
  await prisma.storefrontSection.create({
    data: {
      title: 'New Arrivals',
      type: 'new_arrivals',
      isActive: true,
      sortOrder: 2,
    },
  })
  await prisma.storefrontSection.create({
    data: {
      title: 'Summer Collection',
      type: 'collection',
      collectionId: summerCollection.id,
      isActive: true,
      sortOrder: 3,
    },
  })
  console.log('✅ Storefront sections created')

  // Create a sample discount
  await prisma.discount.create({
    data: {
      name: 'Launch Sale',
      code: 'LAUNCH20',
      type: 'percentage',
      value: 20,
      scope: 'storewide',
      isActive: true,
      startDate: new Date(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      priority: 1,
    },
  })
  console.log('✅ Sample discount created')

  console.log('🎉 Seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
