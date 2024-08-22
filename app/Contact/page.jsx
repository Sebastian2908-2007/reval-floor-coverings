import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact Us | Bathroom Remodeling & Tile Services Near Logan, Utah",
  description: "Get in touch with us for expert bathroom remodeling and tile services near Logan, Utah. Whether you need a custom tiled shower, a beautiful backsplash, tile flooring, or a fireplace surround, our team is ready to help. Contact us today to start your project.",
  keywords: [
    'contact bathroom remodelers Logan Utah',
    'contact tile installers Logan Utah',
    'bathroom remodeling contact Logan Utah',
    'tile services contact Logan Utah',
    'tile contractors Logan Utah',
    'bathroom renovation inquiry Logan Utah',
    'get a quote Logan Utah',
    'contact us Logan Utah',
    'tile work consultation Logan Utah',
    'bathroom remodel quote Logan Utah',
  ],
  metadataBase: new URL('https://reval-floor-coverings.vercel.app/'),
  alternates: {
    canonical: '/contact',
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES',
    },
  },
  openGraph: {
    images: '/og-contact-image.png',
  },
};


export default function Contact() {


  return (
    <div className="bg-[#2f4b65] text-white py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Get in Touch</h1>
          <p className="text-lg md:text-xl lg:text-2xl">
            Reach out to us for consultations, quotes, or any other inquiries. We're here to help!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white text-[#2f4b65] rounded-lg shadow-lg p-6 space-y-4">
            <h2 className="text-2xl font-bold">Contact Info</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-6 h-6" />
                <a href="tel:435-994-4143">435-994-4143</a>
              </div>
              
              <div className="flex items-start space-x-2">
                <LocateIcon className="w-6 h-6 mt-1" />
                <span>
                Logan, UT 84321
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white text-[#2f4b65] rounded-lg shadow-lg p-6 col-span-1 md:col-span-2 lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold">Contact Us</h2>
           <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}