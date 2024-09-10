import { ChevronDown, Coffee, Leaf, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-background.png')",
            backgroundPosition: "center right",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        <div className="relative z-10 text-white px-4 py-12 max-w-2xl mx-auto md:ml-8 lg:ml-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">Indian Coffee Guide</h1>
          <p className="text-lg sm:text-xl md:text-2xl">
            Explore the rich flavors and traditions of Indian coffee, from the misty hills of Coorg to the aromatic plantations of Kerala.
          </p>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat"
               style={{
                 backgroundImage: `url('/images/coffee-leaf-pattern.jpg')`,
                 backgroundSize: '200px',
               }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-[#4a3728]">About Indian Coffee</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: MapPin, title: "Origin", content: "Indian coffee is grown in the southern states, primarily in the Western Ghats. The unique climate and altitude contribute to its distinct flavor profile." },
              { icon: Leaf, title: "Varieties", content: "The two main varieties grown are Arabica and Robusta. Arabica is known for its smooth taste, while Robusta is stronger and often used in espresso blends." },
              { icon: Coffee, title: "Flavor Profile", content: "Indian coffee is known for its full body, low acidity, and subtle spicy notes. It often has a hint of chocolate or nuts in its flavor profile." }
            ].map((item, index) => (
              <div key={index} className="bg-white bg-opacity-90 rounded-lg p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center text-[#8b593e]">
                  <item.icon className="mr-2 w-5 h-5 sm:w-6 sm:h-6" /> {item.title}
                </h3>
                <p className="text-sm sm:text-base">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brewing Guide Section */}
      <section className="py-12 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat"
               style={{
                 backgroundImage: `url('/images/geometric-pattern.jpg')`,
                 backgroundSize: '300px',
               }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-[#4a3728]">Brewing Guide</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {[
              {
                title: "South Indian Filter Coffee",
                steps: [
                  "Add coarsely ground coffee to the upper chamber of the filter.",
                  "Gently pour hot water over the grounds and let it drip.",
                  "Once brewed, mix the decoction with hot milk and sugar to taste.",
                  "Pour between two vessels to create a frothy texture."
                ]
              },
              {
                title: "French Press Method",
                steps: [
                  "Add coarsely ground Indian coffee to the French press.",
                  "Pour hot water (just off the boil) over the grounds.",
                  "Stir gently and let it steep for 4 minutes.",
                  "Press the plunger down slowly and serve immediately."
                ]
              }
            ].map((method, methodIndex) => (
              <div key={methodIndex} className="bg-white bg-opacity-90 rounded-lg p-4 sm:p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#8b593e]">{method.title}</h3>
                <div className="space-y-3 sm:space-y-4">
                  {method.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start">
                      <span className="bg-[#8b593e] text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 text-sm sm:text-base">{stepIndex + 1}</span>
                      <p className="text-sm sm:text-base">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4a3728] text-white py-6 sm:py-8">
        <div className="container mx-auto px-4 text-center text-sm sm:text-base">
          <p>&copy; 2023 Indian Coffee Guide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}