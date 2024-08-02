import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
return (
    <footer className="bg-[#2f4b65] text-white py-8 px-6">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center gap-2 mb-4 md:mb-0">
      <Link href="#" className="flex items-center justify-center " prefetch={false}>
    <Image
          src="/logo.JPEG"
          alt="Jakeo Tile logan Utah's go to company for luxury tile work"
         
          width={90}
          height={24}
          priority
        />
    </Link>
      </div>
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
    </div>
  </footer>
);
};

export default Footer;