// components/SectionThree.js
const SectionThree = () => {
    return (
      <section className="bg-gray-50 text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Create your own oasis…</h2>
            <p className="text-lg md:text-xl mb-8">With our premium marble, onyx, or tile options for bathroom walls, floors, and countertops, you can elevate your space and enjoy a serene and luxurious bathroom.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center">
              <img src="/path/to/your/tiles-bathroom-image.jpg" alt="Tiles Bathroom" className="w-full h-auto rounded-lg shadow-lg mb-4" />
              <p className="text-lg md:text-xl mb-4">Tiles, Bathroom</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/path/to/your/marble-bathroom-image.jpg" alt="Marble Bathroom" className="w-full h-auto rounded-lg shadow-lg mb-4" />
              <p className="text-lg md:text-xl mb-4">Marble Bathroom</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Quote
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default SectionThree;
  