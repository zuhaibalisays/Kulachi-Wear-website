import { getAllProducts } from '@/lib/data'
import ProductCard from '@/components/storefront/ProductCard'

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>
}

export const metadata = {
  title: 'Search | Kulachi Wear',
  description: 'Search our collection of elegant women\'s clothing.',
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams
  const query = q || ''
  
  let products: Awaited<ReturnType<typeof getAllProducts>> = []
  if (query) {
    products = await getAllProducts({ search: query, limit: 100 })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="font-serif text-4xl md:text-5xl text-kulachi-charcoal text-center mb-4">
        Search
      </h1>
      
      {/* Search Form */}
      <form className="max-w-xl mx-auto mb-12">
        <div className="flex gap-2">
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="Search products..."
            className="flex-1 px-4 py-3 border border-gray-300 focus:border-kulachi-charcoal focus:outline-none font-sans"
          />
          <button type="submit" className="btn-primary">
            Search
          </button>
        </div>
      </form>

      {query && (
        <p className="text-center text-gray-600 mb-8">
          {products.length} result{products.length !== 1 ? 's' : ''} for &quot;{query}&quot;
        </p>
      )}

      {!query ? (
        <div className="text-center py-16">
          <p className="font-sans text-gray-500">Enter a search term to find products.</p>
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-16">
          <p className="font-sans text-gray-500 mb-4">No products found for &quot;{query}&quot;.</p>
          <a href="/shop" className="btn-secondary inline-block">
            Browse All Products
          </a>
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
