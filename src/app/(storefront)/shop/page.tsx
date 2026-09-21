import { getAllProducts, getAllCategories } from '@/lib/data'
import ProductCard from '@/components/storefront/ProductCard'

export const metadata = {
  title: 'Shop All | Kulachi Wear',
  description: 'Browse our complete collection of elegant women\'s clothing.',
}

export default async function ShopPage() {
  const products = await getAllProducts({ limit: 100 })
  const categories = await getAllCategories()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="font-serif text-4xl md:text-5xl text-kulachi-charcoal text-center mb-4">
        Shop All
      </h1>
      <p className="font-sans text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Discover our complete range of premium women's clothing.
      </p>

      {/* Categories Filter */}
      {categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a 
            href="/shop" 
            className="px-4 py-2 text-sm uppercase tracking-wider border border-kulachi-charcoal text-kulachi-charcoal hover:bg-kulachi-charcoal hover:text-white transition-colors"
          >
            All
          </a>
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/shop?category=${category.slug}`}
              className="px-4 py-2 text-sm uppercase tracking-wider border border-gray-300 text-gray-600 hover:border-kulachi-charcoal hover:text-kulachi-charcoal transition-colors"
            >
              {category.name}
            </a>
          ))}
        </div>
      )}

      {products.length === 0 ? (
        <div className="text-center py-16">
          <p className="font-sans text-gray-500">No products available at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
