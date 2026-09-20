import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: string
  slug: string
  name: string
  basePrice: number
  salePrice?: number | null
  images: Array<{ url: string; altText?: string | null }>
  isFeatured?: boolean
  isNew?: boolean
}

interface ProductCardProps {
  product: Product
  showDiscount?: boolean
}

export default function ProductCard({ product, showDiscount = true }: ProductCardProps) {
  const mainImage = product.images[0]?.url || '/assets/brand/placeholder.png'
  const altText = product.images[0]?.altText || product.name
  const hasDiscount = showDiscount && product.salePrice && product.salePrice < product.basePrice
  
  return (
    <Link href={`/products/${product.slug}`} className="product-card group">
      <div className="product-image-container">
        <Image
          src={mainImage}
          alt={altText}
          fill
          className="product-image"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-kulachi-charcoal text-white text-xs px-2 py-1 uppercase tracking-wider">
            New
          </span>
        )}
        {hasDiscount && (
          <span className="absolute top-2 right-2 bg-kulachi-gold text-white text-xs px-2 py-1 uppercase tracking-wider">
            Sale
          </span>
        )}
      </div>
      <div className="mt-3 text-center">
        <h3 className="font-sans text-sm text-kulachi-charcoal group-hover:text-kulachi-rose transition-colors line-clamp-2">
          {product.name}
        </h3>
        <div className="mt-1 flex justify-center items-center gap-2">
          {hasDiscount ? (
            <>
              <span className="font-sans font-semibold text-kulachi-charcoal">
                Rs. {Math.round(product.salePrice!)}
              </span>
              <span className="font-sans text-sm text-gray-400 line-through">
                Rs. {Math.round(product.basePrice)}
              </span>
            </>
          ) : (
            <span className="font-sans font-semibold text-kulachi-charcoal">
              Rs. {Math.round(product.basePrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
