import Image from 'next/image';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link"; // Importing Link for client-side navigation

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
    

      {/* Hero Section */}
      <section className="text-center py-10 bg-blue-500 text-white">
        <h1 className="text-4xl font-extrabold mb-4">Drive Your Dreams, Rent with GoCars!</h1>
        <p className="text-xl">Choose from a variety of vehicles to suit your needs.</p>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4 sm:px-8 md:px-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Vehicle Categories</h2>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Motorcycle Category */}
          <Link href="/motorcycles" className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-300">
            <Image 
              src="/harley-1921700_1920.jpg" 
              alt="Motorcycle Rental" 
              width={500} 
              height={300} 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Motorcycles</h3>
              <p className="text-gray-600">Fast and fun rentals for your adventures.</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Explore
              </button>
            </div>
          </Link>

          {/* Rickshaw Category */}
          <Link href="/rickshaws" className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-300">
            <Image 
              src="/auto.jpg" 
              alt="Rickshaw Rental" 
              width={500} 
              height={300} 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Rickshaws</h3>
              <p className="text-gray-600">Affordable and eco-friendly transport.</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Explore
              </button>
            </div>
          </Link>

          {/* Car Category */}
          <Link href="/cars" className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-300">
            <Image 
              src="/car-4965498_1280.jpg" 
              alt="Car Rental" 
              width={500} 
              height={300} 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Cars</h3>
              <p className="text-gray-600">Comfortable and reliable rentals for all needs.</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Explore
              </button>
            </div>
          </Link>

          {/* Bus Category */}
          <Link href="/buses" className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-300">
            <Image 
              src="/bus.jpg" 
              alt="Bus Rental" 
              width={500} 
              height={300} 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Buses</h3>
              <p className="text-gray-600">Ideal for group travel or corporate rentals.</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Explore
              </button>
            </div>
          </Link>

        </div>
      </section>

  
    </div>
  );
};

export default Home;
