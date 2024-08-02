// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <header className="bg-[#000000] lg:px-6 h-auto flex flex-col items-center">
    <Link href="/" className="flex items-center justify-center " prefetch={false}>
    <Image
          src="/logo.JPEG"
          alt="Jakeo Tile logan Utah's go to company for luxury tile work"
         
          width={150}
          height={100}
          priority
        />
    </Link>
    <nav className=" flex flex-wrap justify-center bg-[#2f4b65] w-[100%] pt-2 gap-4 sm:gap-6 ">
    <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4" prefetch={false}>
       Bathroom Remodels
      </Link>
      <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4" prefetch={false}>
       Backsplashes
      </Link>
      <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4" prefetch={false}>
      Floor Tile
      </Link>
      <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4" prefetch={false}>
      Fireplace Surrounds
      </Link>
      <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4" prefetch={false}>
      Gallery 
      </Link>
      <Link href="/Contact" className="text-sm font-medium text-white hover:underline underline-offset-4" prefetch={true}>
        Contact
      </Link>
    </nav>
  </header>
  );
};

export default Header;