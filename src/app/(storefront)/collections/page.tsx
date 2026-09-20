import { getAllCollections } from '@/lib/data'
import Link from 'next/link'

export const metadata = {
  title: 'Collections | Kulachi Wear',
  description: 'Browse our curated collections of elegant women\'s clothing.',
}

export default async function CollectionsPage() {
  const collections = await getAllCollections()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="font-serif text-4xl md:text-5xl text-kulachi-charcoal text-center mb-4">
        Collections
      </h1>
      <p className="font-sans text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Explore our carefully curated collections designed for every occasion.
      </p>

      {collections.length === 0 ? (
        <div className="text-center py-16">
          <p className="font-sans text-gray-500">No collections available at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link 
              key={collection.id} 
              href={`/collections/${collection.slug}`}
              className="group"
            >
              <div className="aspect-[4/3] bg-kulachi-offwhite overflow-hidden mb-4">
                {/* Collection image placeholder - can be enhanced with collection-specific images */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-kulachi-sand to-kulachi-rose/20">
                  <span className="font-serif text-2xl text-kulachi-charcoal/50">
                    {collection.name}
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-xl text-kulachi-charcoal group-hover:text-kulachi-rose transition-colors">
                {collection.name}
              </h3>
              {collection.description && (
                <p className="font-sans text-sm text-gray-600 mt-2 line-clamp-2">
                  {collection.description}
                </p>
              )}
              <p className="font-sans text-xs text-gray-400 mt-2 uppercase tracking-wider">
                {collection._count.products} Products
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
