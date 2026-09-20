import { getSiteSettings } from '@/lib/data'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ type: string }>
}

const policyTypes: Record<string, { title: string; settingKey: string }> = {
  shipping: { title: 'Shipping Policy', settingKey: 'shippingPolicy' },
  returns: { title: 'Returns & Exchanges', settingKey: 'returnPolicy' },
  privacy: { title: 'Privacy Policy', settingKey: 'privacyPolicy' },
  terms: { title: 'Terms of Service', settingKey: 'termsOfService' },
}

export async function generateStaticParams() {
  return Object.keys(policyTypes).map((type) => ({ type }))
}

export async function generateMetadata({ params }: Props) {
  const { type } = await params
  const policy = policyTypes[type]
  if (!policy) {
    return { title: 'Policy Not Found | Kulachi Wear' }
  }
  return {
    title: `${policy.title} | Kulachi Wear`,
    description: `Read our ${policy.title.toLowerCase()}.`,
  }
}

export default async function PolicyPage({ params }: Props) {
  const { type } = await params
  const policy = policyTypes[type]
  
  if (!policy) {
    notFound()
  }

  const settings = await getSiteSettings()
  const content = settings?.[policy.settingKey as keyof typeof settings] as string | null | undefined

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="font-serif text-4xl md:text-5xl text-kulachi-charcoal text-center mb-8">
        {policy.title}
      </h1>
      
      <div className="prose prose-lg max-w-none">
        {content ? (
          <p className="font-sans text-gray-700 leading-relaxed whitespace-pre-line">{content}</p>
        ) : (
          <div className="text-center py-8">
            <p className="font-sans text-gray-500 mb-4">
              This policy content is being prepared. Please contact us for more information.
            </p>
            <a href="/contact" className="btn-secondary inline-block">
              Contact Us
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
