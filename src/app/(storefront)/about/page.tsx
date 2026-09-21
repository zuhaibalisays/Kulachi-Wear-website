import { getSiteSettings } from '@/lib/data'

export const metadata = {
  title: 'About Us | Kulachi Wear',
  description: 'Learn about Kulachi Wear and our commitment to elegant women\'s clothing.',
}

export default async function AboutPage() {
  const settings = await getSiteSettings()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="font-serif text-4xl md:text-5xl text-kulachi-charcoal text-center mb-8">
        About Kulachi Wear
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="font-sans text-gray-700 leading-relaxed mb-6">
          {settings?.aboutContent || 
            'Kulachi Wear is dedicated to bringing you elegant, contemporary women\'s clothing that combines traditional craftsmanship with modern design. We believe in quality, attention to detail, and creating pieces that make you feel confident and beautiful.'}
        </p>
        
        <p className="font-sans text-gray-700 leading-relaxed mb-6">
          Our curated collection features premium fabrics, thoughtful designs, and versatile styles that transition seamlessly from day to evening. Each piece is selected with care to ensure it meets our standards for quality and style.
        </p>

        <p className="font-sans text-gray-700 leading-relaxed mb-6">
          We are committed to providing exceptional customer service and ensuring that every shopping experience with Kulachi Wear is enjoyable and satisfying.
        </p>
      </div>

      {/* Contact CTA */}
      <div className="mt-12 text-center">
        <a href="/contact" className="btn-primary inline-block">
          Get in Touch
        </a>
      </div>
    </div>
  )
}
