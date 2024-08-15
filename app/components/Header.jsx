// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <header className="bg-[#000000]  h-auto flex flex-col items-center">
    <Link href="/" className="flex items-center justify-center " prefetch={false}>
    <Image
          src="/logo.JPEG"
          alt="Jakeo Tile logan Utah's go to company for luxury tile work"
         
          width={150}
          height={100}
          priority
        />
    </Link>
    <nav className=" flex flex-wrap justify-center p-2 bg-[#2f4b65] w-[100%] pt-2 gap-4 sm:gap-6 ">
    <Link href="/Services" className="text-sm font-medium text-white hover:underline underline-offset-4" prefetch={false}>
       Services
      </Link>
    
      <Link href="/Gallery" className="text-sm font-medium text-white hover:underline underline-offset-4" prefetch={false}>
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