// components/Hero.js
const Hero = () => {
    return (
      <section className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('/path/to/your/hero-image.jpg')" }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Reval Floor Coverings</h1>
            <p className="text-xl md:text-2xl mb-8">High-Quality Custom Shower Installations</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get a Quote
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  