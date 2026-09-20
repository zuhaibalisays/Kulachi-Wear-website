import { getProductBySlug, getAllProducts, calculateDiscountedPrice } from '@/lib/data'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const products = await getAllProducts({ limit: 100 })
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const product = await getProductBySlug((await params).slug)
  if (!product) {
    return { title: 'Product Not Found | Kulachi Wear' }
  }
  return {
    title: `${product.name} | Kulachi Wear`,
    description: product.description || `Shop ${product.name} at Kulachi Wear.`,
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const pricing = await calculateDiscountedPrice(product.id, product.basePrice)
  const mainImage = product.images[0]?.url || '/assets/brand/placeholder.png'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-kulachi-offwhite overflow-hidden">
            <Image
              src={mainImage}
              alt={product.images[0]?.altText || product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(1).map((img, idx) => (
                <div key={idx} className="aspect-square bg-kulachi-offwhite overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                  <Image
                    src={img.url}
                    alt={img.altText || product.name}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="font-serif text-3xl md:text-4xl text-kulachi-charcoal mb-4">
            {product.name}
          </h1>

          {/* Price */}
          <div className="mb-6">
            {pricing.appliedDiscount ? (
              <div>
                <span className="font-sans text-2xl font-semibold text-kulachi-charcoal">
                  Rs. {pricing.finalPrice}
                </span>
                <span className="font-sans text-lg text-gray-400 line-through ml-3">
                  Rs. {pricing.originalPrice}
                </span>
                <span className="inline-block mt-2 bg-kulachi-gold text-white text-xs px-2 py-1 uppercase tracking-wider">
                  Save {Math.round((1 - pricing.finalPrice / pricing.originalPrice) * 100)}%
                </span>
              </div>
            ) : (
              <span className="font-sans text-2xl font-semibold text-kulachi-charcoal">
                Rs. {product.basePrice}
              </span>
            )}
          </div>

          {/* Description */}
          {product.description && (
            <div className="prose prose-sm max-w-none mb-6">
              <p className="font-sans text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          )}

          {/* Categories */}
          {product.categories.length > 0 && (
            <div className="mb-6">
              <span className="font-sans text-xs uppercase tracking-wider text-gray-500">Category</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.categories.map((pc) => (
                  <span key={pc.id} className="px-3 py-1 bg-kulachi-offwhite text-kulachi-charcoal text-sm">
                    {pc.category.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Collections */}
          {product.collections.length > 0 && (
            <div className="mb-6">
              <span className="font-sans text-xs uppercase tracking-wider text-gray-500">Collection</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.collections.map((pc) => (
                  <a 
                    key={pc.id}
                    href={`/collections/${pc.collection.slug}`}
                    className="px-3 py-1 border border-gray-300 text-gray-600 text-sm hover:border-kulachi-charcoal hover:text-kulachi-charcoal transition-colors"
                  >
                    {pc.collection.name}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Variants (Sizes) */}
          {product.variants.length > 0 && (
            <div className="mb-6">
              <span className="font-sans text-xs uppercase tracking-wider text-gray-500">Available Sizes</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.variants.map((variant) => (
                  <span key={variant.id} className="px-3 py-1 border border-gray-300 text-gray-600 text-sm">
                    {variant.size || 'One Size'}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Order Button */}
          <div className="mt-auto pt-6">
            <a
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="btn-primary w-full block text-center"
            >
              Inquire to Order
            </a>
            <p className="font-sans text-xs text-gray-500 text-center mt-4">
              Contact us via WhatsApp or email to place your order.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
