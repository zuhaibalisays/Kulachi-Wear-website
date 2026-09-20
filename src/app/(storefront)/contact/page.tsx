export const metadata = {
  title: 'Contact | Kulachi Wear',
  description: 'Get in touch with Kulachi Wear. We\'d love to hear from you.',
}

export default async function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="font-serif text-4xl md:text-5xl text-kulachi-charcoal text-center mb-8">
        Contact Us
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="font-serif text-2xl text-kulachi-charcoal mb-4">Get in Touch</h2>
          <p className="font-sans text-gray-700 mb-6">
            Have questions about our products or need help placing an order? We're here to help.
          </p>
          
          <div className="space-y-4">
            <div>
              <span className="font-sans text-xs uppercase tracking-wider text-gray-500">WhatsApp</span>
              <p className="font-sans text-kulachi-charcoal">+92 300 0000000</p>
            </div>
            <div>
              <span className="font-sans text-xs uppercase tracking-wider text-gray-500">Email</span>
              <p className="font-sans text-kulachi-charcoal">hello@kulachiwear.com</p>
            </div>
            <div>
              <span className="font-sans text-xs uppercase tracking-wider text-gray-500">Instagram</span>
              <p className="font-sans text-kulachi-charcoal">@kulachi.wear</p>
            </div>
            <div>
              <span className="font-sans text-xs uppercase tracking-wider text-gray-500">TikTok</span>
              <p className="font-sans text-kulachi-charcoal">@kulachi.wear</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-serif text-xl text-kulachi-charcoal mb-3">Business Hours</h3>
            <p className="font-sans text-gray-700">Monday - Saturday: 10:00 AM - 7:00 PM</p>
            <p className="font-sans text-gray-700">Sunday: Closed</p>
          </div>
        </div>

        {/* Contact Form Placeholder */}
        <div>
          <h2 className="font-serif text-2xl text-kulachi-charcoal mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-sans text-sm text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-kulachi-charcoal focus:outline-none font-sans"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-sans text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-kulachi-charcoal focus:outline-none font-sans"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-sans text-sm text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-kulachi-charcoal focus:outline-none font-sans resize-none"
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
          <p className="font-sans text-xs text-gray-500 mt-4">
            Note: This is a demo form. Please contact us via WhatsApp or email for actual inquiries.
          </p>
        </div>
      </div>
    </div>
  )
}
