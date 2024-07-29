// components/BathroomMakeover.js
const SectionOne = () => {
    return (
      <section className="bg-white text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Bathroom Makeover?</h2>
            <p className="text-lg md:text-xl">Transform your bathroom with our expert shower installation services.</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="flex-1 mb-8 md:mb-0">
              <img src="/path/to/your/image1.jpg" alt="Bathroom Makeover" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="flex-1">
              <p className="text-lg md:text-xl mb-4">
                Our team of professionals is dedicated to providing high-quality custom shower installations that meet your specific needs. We offer a wide range of design options and materials to choose from, ensuring that your new shower is both functional and beautiful.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SectionOne;
  