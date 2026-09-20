import { getSiteSettings, getStorefrontSections, getAllProducts } from '@/lib/data'
import ProductCard from '@/components/storefront/ProductCard'
import Image from 'next/image'

export default async function HomePage() {
  const settings = await getSiteSettings()
  const sections = await getStorefrontSections()
  const featuredProducts = await getAllProducts({ isFeatured: true, limit: 8 })
  const newProducts = await getAllProducts({ isNew: true, limit: 4 })

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-kulachi-sand py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-kulachi-charcoal mb-4">
            {settings?.tagline || 'Elegant Women\'s Clothing'}
          </h1>
          <p className="font-sans text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our curated collection of premium quality clothing designed for the modern woman.
          </p>
          <a href="/shop" className="btn-primary inline-block">
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Featured Collection</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* New Arrivals */}
      {newProducts.length > 0 && (
        <section className="py-12 md:py-16 bg-kulachi-offwhite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">New Arrivals</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {newProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/shop" className="btn-secondary inline-block">
                View All
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Dynamic Storefront Sections */}
      {sections.map((section) => (
        <section key={section.id} className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {section.title && <h2 className="section-title">{section.title}</h2>}
            {section.sectionProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {section.sectionProducts.map((sp) => (
                  <ProductCard key={sp.id} product={sp.product} />
                ))}
              </div>
            ) : section.collection ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {/* Show products from collection */}
                <p className="col-span-full text-center text-gray-500">
                  Products from {section.collection.name}
                </p>
              </div>
            ) : null}
          </div>
        </section>
      ))}

      {/* Brand Story Section */}
      <section className="py-16 md:py-24 bg-kulachi-rose/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-kulachi-charcoal mb-6">
              The Kulachi Wear Story
            </h2>
            <p className="font-sans text-gray-700 leading-relaxed mb-8">
              {settings?.aboutContent || 
                'Kulachi Wear brings you elegant, contemporary women\'s clothing that combines traditional craftsmanship with modern design. Each piece is carefully curated to ensure quality, comfort, and style.'}
            </p>
            <a href="/about" className="btn-secondary inline-block">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
