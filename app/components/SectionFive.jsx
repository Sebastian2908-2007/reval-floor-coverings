// components/SectionFive.js
const SectionFive = () => {
    return (
      <section className="bg-gray-100 text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">YOU WON’T REGRET IT</h2>
            <p className="text-lg md:text-xl mb-8">The Benefits of a Bathroom Remodel You Can’t Afford to Miss.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Beauty</h3>
              <p className="text-lg">
                Let us help you create a luxurious and stylish space that suits your needs and preferences.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Functionality</h3>
              <p className="text-lg">
                Improve your bathroom’s storage, lighting, and plumbing fixtures.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Comfort</h3>
              <p className="text-lg">
                Create a relaxing and rejuvenating retreat tailored to your needs.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Value</h3>
              <p className="text-lg">
                Increase the resale value of your home with a well-designed and updated bathroom.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get A Quote
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default SectionFive;
  