import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-serif text-6xl md:text-8xl text-kulachi-charcoal mb-4">404</h1>
        <h2 className="font-serif text-2xl md:text-3xl text-kulachi-charcoal mb-4">Page Not Found</h2>
        <p className="font-sans text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
          <Link href="/shop" className="btn-secondary">
            Browse Shop
          </Link>
        </div>
      </div>
    </div>
  )
}
