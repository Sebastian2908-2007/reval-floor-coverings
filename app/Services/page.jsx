
import Link from "next/link";
import Image from "next/image";

export default function Component() {
  return (
    <div className="bg-[#2f4b65] text-white">
     <section className="w-full py-8 md:py-14 lg:py-32 bg-[#2f4b65]">
        <div className="container px-4 md:px-6 ">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl w-[85%] font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                Bathroom Remodeling & More Near Logan, Utah 
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">
                Transform your bathroom with our expert services. From tiled showers to backsplashes, tile flooring,
                and fireplace surrounds, we've got you covered.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="tel:435-994-4143"
                  className=" inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#2f4b65] shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
           
            <Image
              src="/service-hero.JPEG"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto md:aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
           
          </div>
        </div>
      </section>
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white text-[#2f4b65] rounded-lg shadow-lg overflow-hidden">
           <Image
              src="/placeholder.svg"
              alt="Bathroom Remodel"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
              style={{ aspectRatio: "500/300", objectFit: "cover" }}
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Bathroom Remodeling</h2>
              <p className="text-muted-foreground mb-4">
                Transform your bathroom into a luxurious oasis with our expert remodeling services.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-[#2f4b65] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#1e3549] focus:outline-none focus:ring-2 focus:ring-[#2f4b65] focus:ring-offset-2"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-white text-[#2f4b65] rounded-lg shadow-lg overflow-hidden">
           <Image
              src="/placeholder.svg"
              alt="Tiled Shower"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
              style={{ aspectRatio: "500/300", objectFit: "cover" }}
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Tiled Showers</h2>
              <p className="text-muted-foreground mb-4">
                Elevate your bathroom with a custom tiled shower that adds style and functionality.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-[#2f4b65] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#1e3549] focus:outline-none focus:ring-2 focus:ring-[#2f4b65] focus:ring-offset-2"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-white text-[#2f4b65] rounded-lg shadow-lg overflow-hidden">
           <Image
              src="/placeholder.svg"
              alt="Tile Backsplash"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
              style={{ aspectRatio: "500/300", objectFit: "cover" }}
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Tile Backsplashes</h2>
              <p className="text-muted-foreground mb-4">
                Add a touch of elegance to your kitchen with a custom tile backsplash.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-[#2f4b65] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#1e3549] focus:outline-none focus:ring-2 focus:ring-[#2f4b65] focus:ring-offset-2"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-white text-[#2f4b65] rounded-lg shadow-lg overflow-hidden">
           <Image
              src="/placeholder.svg"
              alt="Tile Flooring"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
              style={{ aspectRatio: "500/300", objectFit: "cover" }}
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Tile Flooring</h2>
              <p className="text-muted-foreground mb-4">
                Transform any room with our high-quality tile flooring solutions.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-[#2f4b65] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#1e3549] focus:outline-none focus:ring-2 focus:ring-[#2f4b65] focus:ring-offset-2"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-white text-[#2f4b65] rounded-lg shadow-lg overflow-hidden">
           <Image
              src="/placeholder.svg"
              alt="Fireplace Surround"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
              style={{ aspectRatio: "500/300", objectFit: "cover" }}
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Fireplace Surrounds</h2>
              <p className="text-muted-foreground mb-4">
                Enhance the focal point of your living space with a custom fireplace surround.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-[#2f4b65] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#1e3549] focus:outline-none focus:ring-2 focus:ring-[#2f4b65] focus:ring-offset-2"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}