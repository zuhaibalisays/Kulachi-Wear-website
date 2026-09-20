import { getSession, logout } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()
  
  if (!session) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-kulachi-charcoal text-white flex-shrink-0">
        <div className="p-6">
          <Link href="/admin" className="font-serif text-xl tracking-wide">
            KULACHI ADMIN
          </Link>
        </div>
        <nav className="mt-6">
          <Link href="/admin" className="block px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
            Dashboard
          </Link>
          <Link href="/admin/products" className="block px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
            Products
          </Link>
          <Link href="/admin/collections" className="block px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
            Collections
          </Link>
          <Link href="/admin/categories" className="block px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
            Categories
          </Link>
          <Link href="/admin/sections" className="block px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
            Storefront Sections
          </Link>
          <Link href="/admin/sales" className="block px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
            Sales & Discounts
          </Link>
          <Link href="/admin/settings" className="block px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
            Settings
          </Link>
          <form action={async () => {
            'use server'
            await logout()
          }} className="mt-8">
            <button type="submit" className="w-full text-left px-6 py-3 text-sm text-red-300 hover:bg-gray-800 transition-colors">
              Logout
            </button>
          </form>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="font-serif text-2xl text-kulachi-charcoal">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="font-sans text-sm text-gray-600">{session.email}</span>
              <a href="/" target="_blank" className="text-sm text-kulachi-rose hover:underline">
                View Store
              </a>
            </div>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
