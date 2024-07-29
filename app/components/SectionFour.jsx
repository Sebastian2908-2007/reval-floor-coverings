// components/SectionFour.js
const SectionFour = () => {
    return (
      <section className="bg-white text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">YOU WILL LOVE</h2>
            <p className="text-lg md:text-xl mb-8">Our Products</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-2">Cultured Marble</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Click Here
              </button>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-2">Onyx</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Click Here
              </button>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-2">Granite</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Click Here
              </button>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-2">Tiles</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Click Here
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SectionFour;
  