// components/SectionTwo.js
const SectionTwo = () => {
    return (
        <section className="bg-[#EFEBE5] text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">WHO WE ARE</h2>
          <p className="text-lg md:text-xl mb-8">Premium Bathroom Remodeling Services</p>
          <p className="text-lg md:text-xl mb-8">
            We specialize in transforming bathrooms into beautiful and functional spaces using top-quality tiles, marble, and onyx. Our team of experts in Logan, Utah, offers a range of services, from design and installation to repair and maintenance. Let us help you create the bathroom of your dreams.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Tub Surround & Shower</h3>
            <p className="text-lg">
              Remodeling your bathtub surround and shower not only enhances the appearance of your bathroom but also protects it from water damage, giving you peace of mind.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Walls</h3>
            <p className="text-lg">
              Bathroom walls with premium marble, tiles, or onyx can add timeless elegance and durability, enhancing the value of your home.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Vanity Countertop</h3>
            <p className="text-lg">
              A new bathroom vanity countertop with our premium stones and tiles can enhance the aesthetic appeal of your bathroom while providing functionality and durability.
            </p>
          </div>
        </div>
      </div>
    </section>
      );
    
  };
  
  export default SectionTwo;
  