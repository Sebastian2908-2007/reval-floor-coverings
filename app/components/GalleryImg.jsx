import Link from "next/link";
import Image from "next/image";
const GalleryImg = ({photo}) => {
    const {
        path,
        alt,
        description
    } = photo;
    return(
        <div className="relative group overflow-hidden rounded-lg">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View photo</span>
        </Link>
        <Image
          src={path}
          alt={alt}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ aspectRatio: "400/400", objectFit: "cover" }}
          description={description}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ZoomInIcon className="w-8 h-8 text-white" />
        </div>
      </div>
    );
};

function ZoomInIcon(props) {
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
        <circle cx="11" cy="11" r="8" />
        <line x1="21" x2="16.65" y1="21" y2="16.65" />
        <line x1="11" x2="11" y1="8" y2="14" />
        <line x1="8" x2="14" y1="11" y2="11" />
      </svg>
    )
  }

export default GalleryImg;