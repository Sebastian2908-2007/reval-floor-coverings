// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/">
            Reval Floor Coverings
          </Link>
        </div>
        <nav className="space-x-4">
          <Link href="/services" className="hover:text-gray-300">Services</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;