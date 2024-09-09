import { Button } from "@/components/ui/button"
import { ChevronDown, Coffee, Leaf, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sidgtm._Abstract_Kerala_coffee_plantation_landscape_monochrom_875b7bb6-f589-4a13-ab2f-043593c81ef9_3-MYEC9FmSacpR1pTgUosCG9Hd9TbeSt.png')",
            backgroundPosition: "center right",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        <div className="relative z-10 text-white px-4 py-12 max-w-2xl ml-8 md:ml-16 lg:ml-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Indian Coffee Guide</h1>
          <p className="text-xl md:text-2xl mb-12">
            Explore the rich flavors and traditions of Indian coffee, from the misty hills of Coorg to the aromatic plantations of Kerala.
          </p>
          <div className="space-x-4">
            <Button className="bg-white text-black hover:bg-gray-200 text-lg py-6 px-8">
              Discover Varieties
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg py-6 px-8">
              Brewing Guide
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat"
               style={{
                 backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_3-2owKsU5zWqjmpChWQA0cO9dusA9OXX.jpg')`,
                 backgroundSize: '200px',
               }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#4a3728]">About Indian Coffee</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-[#8b593e]">
                <MapPin className="mr-2" /> Origin
              </h3>
              <p>
                Indian coffee is grown in the southern states, primarily in the Western Ghats. The unique climate and altitude contribute to its distinct flavor profile.
              </p>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-[#8b593e]">
                <Leaf className="mr-2" /> Varieties
              </h3>
              <p>
                The two main varieties grown are Arabica and Robusta. Arabica is known for its smooth taste, while Robusta is stronger and often used in espresso blends.
              </p>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-[#8b593e]">
                <Coffee className="mr-2" /> Flavor Profile
              </h3>
              <p>
                Indian coffee is known for its full body, low acidity, and subtle spicy notes. It often has a hint of chocolate or nuts in its flavor profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brewing Guide Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat"
               style={{
                 backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_2-x0JXwX9BbvZC92d2GlFKRxlPCw65XH.jpg')`,
                 backgroundSize: '300px',
               }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#4a3728]">Brewing Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-[#8b593e]">South Indian Filter Coffee</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-[#8b593e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                  <p>Add coarsely ground coffee to the upper chamber of the filter.</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-[#8b593e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                  <p>Gently pour hot water over the grounds and let it drip.</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-[#8b593e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                  <p>Once brewed, mix the decoction with hot milk and sugar to taste.</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-[#8b593e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                  <p>Pour between two vessels to create a frothy texture.</p>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-[#8b593e]">French Press Method</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-[#8b593e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                  <p>Add coarsely ground Indian coffee to the French press.</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-[#8b593e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                  <p>Pour hot water (just off the boil) over the grounds.</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-[#8b593e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                  <p>Stir gently and let it steep for 4 minutes.</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-[#8b593e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                  <p>Press the plunger down slowly and serve immediately.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4a3728] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Indian Coffee Guide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}