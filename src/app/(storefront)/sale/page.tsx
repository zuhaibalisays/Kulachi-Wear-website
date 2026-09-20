import { getAllProducts } from '@/lib/data'
import ProductCard from '@/components/storefront/ProductCard'

export const metadata = {
  title: 'Sale | Kulachi Wear',
  description: 'Shop our sale collection and find amazing deals on elegant women\'s clothing.',
}

export default async function SalePage() {
  const allProducts = await getAllProducts({ limit: 100 })
  const saleProducts = allProducts.filter(p => p.salePrice && p.salePrice < p.basePrice)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl text-kulachi-charcoal mb-4">
          Sale
        </h1>
        <p className="font-sans text-gray-600 max-w-2xl mx-auto">
          Discover exceptional deals on our premium collection. Limited quantities available.
        </p>
      </div>

      {saleProducts.length === 0 ? (
        <div className="text-center py-16">
          <p className="font-sans text-gray-500 mb-4">No sale items available at the moment.</p>
          <a href="/shop" className="btn-secondary inline-block">
            Browse Shop
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {saleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
