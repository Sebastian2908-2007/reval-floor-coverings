import Image from "next/image";
import dynamic from "next/dynamic";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uLXGZQFK8Fi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import SmsCall from "./components/SmsCall";
import StyleSubway from '../public/subway-tiles.jpg';
import StyleMosaic from '../public/mosaic-tiles.jpg';
import StyleLrgFormat from '../public/large-format-tiles.jpg';
import StyleZellige from '../public/zellige-tiles.jpg';
const ScrollFromRight = dynamic(() =>import('./components/ScrollFromRight'), {ssr: false});
const ScrollFromLeft = dynamic(() =>import('./components/ScrollFromLeft'), {ssr: false});

const StaticScrollOpacity = dynamic(() =>import( "./components/StaticScrollOpacity"), {ssr: false});;

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#FFFFFF]">
      
      <section className="w-full py-8 md:py-14 lg:py-32 bg-[#2f4b65]">
        <div className="container px-4 md:px-6 ">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl w-[85%] font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                Experienced Tile Installation Services Near Logan, Utah 
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">
                Do you Need tile work done in Logan, Utah? Our friendly team offers expert tile installation, serving Logan and nearby communities. From floors to backsplashes,
                 we provide quality craftsmanship with a personal touch. Contact us to start your project!
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
              src="/hero-home-edit-2.JPEG"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto md:aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
           
          </div>
        </div>
      </section>
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <StaticScrollOpacity>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-[#2f4b65] sm:text-5xl">
                Key Features of Jakeo Tile
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Jakeo Tile, we specialize in creating stunning kitchen backsplashes, installing high-quality floor tiles,designing elegant fireplace surrounds, not to mention full bathroom remodels! 
              Our expert team will work with you to bring your vision to life, transforming your space into a work of art.
              </p>
            </div>
            </StaticScrollOpacity>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <StaticScrollOpacity>
            <div className="grid gap-1">
              <div className="flex items-center justify-center bg-[#2f4b65] rounded-full w-12 h-12">
                <TableIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2f4b65]">Wide Variety of Styles</h3>
              <p className="text-muted-foreground">
              At Jakeo Tile, we provide top-quality porcelain, ceramic, and natural stone tiles to match any style, from sleek and modern to classic and timeless.
              </p>
            </div>
            </StaticScrollOpacity>
            <StaticScrollOpacity>
            <div className="grid gap-1">
              <div className="flex items-center justify-center bg-[#2f4b65] rounded-full w-12 h-12">
                <DiscIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2f4b65]">Exceptional Durability</h3>
              <p className="text-muted-foreground">
                Our tiles are built to last, with superior resistance to wear, tear, and weather conditions.
              </p>
            </div>
            </StaticScrollOpacity>
            <StaticScrollOpacity>
            <div className="grid gap-1">
              <div className="flex items-center justify-center bg-[#2f4b65] rounded-full w-12 h-12">
                <HomeIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2f4b65]">Easy Maintenance</h3>
              <p className="text-muted-foreground">
                Enjoy the convenience of easy-to-clean tiles that require minimal upkeep to maintain their beautiful
                appearance.
              </p>
            </div>
            </StaticScrollOpacity>
          </div>
        </div>
      </section>


      <section id="tiles" className="bg-muted py-16 px-6 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Our Tile Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <ScrollFromRight>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src="/nat-stone-floor.webp" width={400} height={300} alt="Tile 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-[#2f4b65]">Natural Stone</h3>
                <p className="text-muted-foreground">
                Refined and enduring, our natural stone tiles bring a sophisticated, organic elegance to any environment.
                </p>
              </div>
            </div>
            </ScrollFromRight>
            <ScrollFromLeft>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src="/ceramic-tile.webp" width={400} height={300} alt="Tile 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-[#2f4b65]">Ceramic Tile</h3>
                <p className="text-muted-foreground">
                  Durable and versatile, our ceramic tiles are perfect for any room.
                </p>
              </div>
            </div>
            </ScrollFromLeft>
            <ScrollFromRight>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src="/porcelain-tile.webp" width={400} height={300} alt="Tile 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-[#2f4b65]">Porcelain Tile</h3>
                <p className="text-muted-foreground">
                  Sophisticated and modern, our porcelain tiles offer a sleek look.
                </p>
              </div>
            </div>
            </ScrollFromRight>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-14 lg:py-32 bg-[#f5f5f5]">
        <div className="container px-1 min-[390px]:px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-[#2f4b65] sm:text-5xl">
                Explore Our Tile Styles
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tile styles to fit your luxury flooring project.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            
            <div className="grid grid-cols-2">
            <div className="grid min-[375px]:gap-1 min-[768px]:p-2 min-[820px]:p-4">
              <div className="flex items-center justify-center bg-[#2f4b65] rounded-full w-12 h-12">
                <TableIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2f4b65]">Subway Tiles</h3>
              <p className="text-muted-foreground">
              Classic and versatile, subway tiles offer a clean and modern look perfect for any space.
              </p>
            </div>
            <div className="
             relative
             flex 
             w-[100%]
             
             rounded-xl
             min-[1024px]:w-[80%]
             
             min-[1024px]:mb-8
             min-[1920px]:mb-14
             
           ">
           <Image
             className="
           shadow-xl
            rounded-xl"
             src={StyleSubway}
             alt="St George's BJ's Painting and Epoxy Floors applying an epoxy floor"
             sizes='80vw'
            
           />
         </div>
          </div>

          <div className="grid grid-cols-2">
          <div className="
             relative
             flex 
             w-[100%]
             
             rounded-xl
             min-[1024px]:w-[80%]
             
             min-[1024px]:mb-8
             min-[1920px]:mb-14
             
           ">
           <Image
             className="
           shadow-xl
            rounded-xl"
             src={StyleLrgFormat}
             alt="St George's BJ's Painting and Epoxy Floors applying an epoxy floor"
             sizes='80vw'
            
           />
         </div>
            <div className="grid min-[375px]:gap-1 pl-[.5em] min-[768px]:p-2 min-[820px]:p-4">
              <div className=" flex items-center justify-center bg-[#2f4b65] rounded-full w-12 h-12">
                <TableIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg  font-bold text-[#2f4b65]">Large Format Tiles</h3>
              <p className="text-muted-foreground ">
              Sleek and expansive, large format tiles create a seamless, contemporary aesthetic.
              </p>
            </div>
            </div>

            <div className="grid grid-cols-2">
            <div className="grid min-[375px]:gap-1 min-[768px]:p-2 min-[820px]:p-4">
              <div className="flex items-center justify-center bg-[#2f4b65] rounded-full w-12 h-12">
                <TableIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2f4b65]">Zellige Tiles</h3>
              <p className="text-muted-foreground">
              Handcrafted and unique, Zellige tiles bring a rich, artisanal charm with their organic imperfections.
              </p>
            </div>
            <div className="
             relative
             flex 
             w-[100%]
             
             rounded-xl
             min-[1024px]:w-[80%]
             
             min-[1024px]:mb-8
             min-[1920px]:mb-14
             
           ">
           <Image
             className="
           shadow-xl
            rounded-xl"
             src={StyleZellige}
             alt="St George's BJ's Painting and Epoxy Floors applying an epoxy floor"
             sizes='80vw'
            
           />
         </div>
          </div>

          <div className="grid grid-cols-2">
          <div className="
             relative
             flex 
             w-[100%]
             
             rounded-xl
             min-[1024px]:w-[80%]
             
             min-[1024px]:mb-8
             min-[1920px]:mb-14
             
           ">
           <Image
             className="
           shadow-xl
            rounded-xl"
             src={StyleMosaic}
             alt="St George's BJ's Painting and Epoxy Floors applying an epoxy floor"
             sizes='80vw'
            
           />
         </div>
            <div className="grid min-[375px]:gap-1 pl-[.5em] min-[768px]:p-2 min-[820px]:p-4">
              <div className="flex items-center justify-center bg-[#2f4b65] rounded-full w-12 h-12">
                <TableIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2f4b65]">Mosaic Tiles</h3>
              <p className="text-muted-foreground">
              Intricate and eye-catching, mosaic tiles add vibrant detail and texture to any design.
              </p>
            </div>
            </div>
          
          </div>
        </div>
      </section>
      <section id="about" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 min-[912px]:px-28">
          <div className="lg:grid lg:gap-6 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/owner-2.jpg"
              width="550"
              height="310"
              alt="About"
              className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="mt-4 flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-[#2f4b65] sm:text-4xl md:text-5xl">
                  About Jakeo Tile
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                 
                Jake Jones, the heart behind Reval Floor Coverings, always had a passion for all types of flooring.
                 However, as he worked more with tiles, he found himself increasingly drawn to their versatility and beauty.
                  
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                This newfound love led him to narrow his focus and rebrand his business as Jakeo Tile. 
                  The new name captures the personal touch and dedication Jake brings to every project, highlighting his
                   love for creating stunning tile installations. 
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Jakeo Tile is a reflection of Jake's journey and growth. Specializing in custom tile solutions,
                 the company has become a trusted name in Logan, Utah. Jake takes pride in crafting unique and beautiful
                 spaces, offering a warm and personalized experience for each client.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                 The transition to Jakeo Tile was
                   more than just a name change; it was a heartfelt shift towards a niche that Jake truly loves, allowing
                    him to pour his creativity and care into every tile he installs..
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="tel:435-994-4143"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#2f4b65] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#1e3648] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-[#f5f5f5]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-[#2f4b65] sm:text-5xl">
                Benefits of going with Jakeo Tile
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Jakeo Tile, we offer personalized service and attention to detail, ensuring your tile project exceeds your expectations.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-1">
              <div className="flex items-center justify-center bg-[#2f4b65] rounded-full w-12 h-12">
                <DiscIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2f4b65]">Expert Craftsmanship</h3>
              <p className="text-muted-foreground">
                Our flooring jobs are crafted to withstand heavy foot traffic, moisture, and other environmental factors, ensuring
                long-lasting performance and stunning beauty.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center justify-center bg-[#2f4b65] rounded-full w-12 h-12">
                <HomeIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2f4b65]">Easy Maintenance</h3>
              <p className="text-muted-foreground">
                Enjoy the convenience of tiles that are simple to clean and maintain, keeping your space looking its
                best with minimal effort.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center justify-center bg-[#2f4b65] rounded-full w-12 h-12">
                <TableIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2f4b65]">Stylish Luxury Materials</h3>
              <p className="text-muted-foreground">
              Our tiles come in a wide range of designs to complement any decor.Choose from a wide selection of high-quality porcelain, ceramic, marble, and granite tiles.
              </p>
            </div>
          </div>
        </div>
      </section>

{/**Bottom half*/}

<section id="testimonials" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-background rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img src="/review-1.png" width={222} height={222} alt="Customer 1" className=" mr-4" />
               
              </div>
              <p className="text-muted-foreground">
              Jake is an incredible craftsman! His ideas were inspired and the execution flawless!
               This is the second job he has done and they are both amazing. Any tile work you need he is the man!💯
              </p>
            </div>

            <div className="bg-background rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img src="/review-5.png" width={222} height={222} alt="Customer 3" className=" mr-4" />
              
              </div>
              <p className="text-muted-foreground">
              Jake did an outstanding job at a very competitive price
              </p>
            </div>

           

            <div className="bg-background rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img src="/review-3.png" width={222} height={222} alt="Customer 3" className=" mr-4" />
              
              </div>
              <p className="text-muted-foreground">
              Jake has done a great job and done 3 projects for us.  All of them have gone smoothly, and quality work, and completed on schedule.
                Give Jake a call for your next tile project, you wont be disappointed.
              </p>
            </div>

            <div className="bg-background rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img src="/review-4.png" width={222} height={222} alt="Customer 3" className=" mr-4" />
              
              </div>
              <p className="text-muted-foreground">
              I had an odd circumstance.  My needs were not only met but exceeded my expectations.  I know Jake went out of his way to help me problem solve which added more time to his day. He was very patient with me and not only got the job done it was fantastic.
                Thank you for all that you did I will definitely use and recommend.
              </p>
            </div>

            

            <div className="bg-background rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img src="/review-2.png" width={222} height={222} alt="Customer 2" className=" mr-4" />
               
              </div>
              <p className="text-muted-foreground">
              Jake (Jakeo Tile ) did the BEST tile work we’ve ever had done. He tiled our large entry floor and tiled around our fireplace. From start to finish, he did an excellent job. He was very nice to work with. He listened to our ideas, and discussed how he could accomplish what we wanted. 
              </p>
              <p className="text-muted-foreground">
              He is very neat too. He hung plastic right from the beginning to keep the rest of our home clean. He removed the baseboards carefully so they didn't get damaged. After the tile work was done, he trimmed the baseboards so they fit perfectly.   
              </p>
              <p className="text-muted-foreground">
              We used 60” x 30” tiles in our entry. Jake was great working with these extra large tiles. He had to cut around 4 pillars and a rounded stair. His cuts were amazing! There is no lippage between tiles because Jake lined each one up perfectly with the tile next to it.     
              </p>
              <p className="text-muted-foreground">
              It feels smooth under my bare feet. He pays close attention to every detail.  His prices are very competitive.
Over the last 30 years we’ve had many different tile jobs done between the 2 homes we’ve had built & remodeled. We hired some really good tilers, but Jake Jones’ tile work is SUPERIOR to all of the others. We highly recommend him & we will definitely use him again!  
              </p>
            
            </div>

          </div>
        </div>
      </section>
      <section id="contact" className="bg-[#000000] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg mb-8">Contact us today to get a free quote and start your tile project.</p>
         <SmsCall/>
        </div>
      </section>

      



    </div>
  )
}

function DiscIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function TableIcon(props) {
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
      <path d="M12 3v18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
    </svg>
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}