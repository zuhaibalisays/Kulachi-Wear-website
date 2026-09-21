import { getCollectionBySlug, getAllCollections } from '@/lib/data'
import ProductCard from '@/components/storefront/ProductCard'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const collections = await getAllCollections()
  return collections.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props) {
  const collection = await getCollectionBySlug((await params).slug)
  if (!collection) {
    return { title: 'Collection Not Found | Kulachi Wear' }
  }
  return {
    title: `${collection.name} | Kulachi Wear`,
    description: collection.description || `Shop our ${collection.name} collection.`,
  }
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params
  const collection = await getCollectionBySlug(slug)

  if (!collection) {
    notFound()
  }

  const products = collection.products.map(pc => pc.product)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl text-kulachi-charcoal mb-4">
          {collection.name}
        </h1>
        {collection.description && (
          <p className="font-sans text-gray-600 max-w-2xl mx-auto">
            {collection.description}
          </p>
        )}
      </div>

      {products.length === 0 ? (
        <div className="text-center py-16">
          <p className="font-sans text-gray-500">No products in this collection yet.</p>
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
