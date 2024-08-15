import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import Footer from "./components/Footer";
import Header from "./components/Header";
export const metadata = {
  title: "Gallery of Bathroom Remodeling & Tile Services Near Logan, Utah | Tiled Showers, Backsplashes, Flooring, & More",
  description: "Explore our gallery showcasing our expert bathroom remodeling and tile services near Logan, Utah. View stunning transformations, including custom tiled showers, elegant backsplashes, high-quality tile flooring, and beautiful fireplace surrounds. Get inspired by our craftsmanship.",
  keywords: [
    'bathroom remodeling gallery Logan Utah',
    'tile work gallery Logan Utah',
    'tiled showers gallery Logan Utah',
    'tile backsplashes gallery Logan Utah',
    'tile flooring gallery Logan Utah',
    'fireplace surrounds gallery Logan Utah',
    'bathroom renovation photos Logan Utah',
    'tile installation pictures Logan Utah',
    'bathroom remodel gallery Logan Utah',
    'tile services gallery Logan Utah',
  ],
  metadataBase: new URL('https://reval-floor-coverings.vercel.app/'),
  alternates: {
    canonical: '/gallery',
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES',
    },
  },
  openGraph: {
    images: '/og-gallery-image.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      

      <body className={inter.className}>
      <Header/>

        {children}
      <Footer/>
      </body>
     
    </html>
  );
}
