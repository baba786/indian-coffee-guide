import React from 'react';
import { ChevronDown, Coffee, Leaf, MapPin, Clock, Droplet, ThermometerSun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

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
      <section className="py-12 sm:py-20 relative overflow-hidden bg-[#F5F5F5] text-[#4A321F]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat"
               style={{
                 backgroundImage: `url('/images/coffee-leaf-pattern.jpg')`,
                 backgroundSize: '200px',
               }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Brewing Guides</h2>
          <p className="text-center mb-8 max-w-2xl mx-auto">Master the art of brewing perfect Indian coffee with these easy-to-follow guides. Whether you&apos;re using a Moka Pot, Aeropress, or traditional South Indian filter, we&apos;ve got you covered.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Moka Pot",
                description: "Create rich, espresso-like coffee on your stovetop",
                steps: [
                  "Fill the bottom chamber with water up to the valve",
                  "Insert the funnel and fill with ground coffee",
                  "Screw on the upper chamber and place on medium heat",
                  "Once the top is full of coffee, remove from heat and serve"
                ],
                time: "5-10 minutes",
                grindSize: "Fine",
                waterTemp: "Off boil"
              },
              {
                name: "Aeropress",
                description: "Quick and easy method for smooth, rich coffee",
                steps: [
                  "Place a filter in the cap and rinse with hot water",
                  "Attach the cap to the chamber and place on a mug",
                  "Add coffee grounds and hot water",
                  "Stir, then press the plunger down slowly"
                ],
                time: "1-2 minutes",
                grindSize: "Medium-fine",
                waterTemp: "80°C"
              },
              {
                name: "South Indian Filter Coffee",
                description: "Traditional method for strong, aromatic coffee",
                steps: [
                  "Add ground coffee to the upper chamber",
                  "Gently tamp down the coffee",
                  "Pour hot water and let it drip slowly",
                  "Mix the decoction with hot milk and sugar to taste"
                ],
                time: "15-20 minutes",
                grindSize: "Fine",
                waterTemp: "95°C"
              }
            ].map((method, i) => (
              <Card key={i} className="overflow-hidden transition-shadow hover:shadow-lg">
                <CardContent className="p-4">
                  <h3 className="text-2xl font-semibold mb-2 flex items-center">
                    <Coffee className="h-6 w-6 mr-2" />
                    {method.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{method.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">Brew Time: {method.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Droplet className="h-4 w-4 mr-2" />
                      <span className="text-sm">Grind Size: {method.grindSize}</span>
                    </div>
                    <div className="flex items-center">
                      <ThermometerSun className="h-4 w-4 mr-2" />
                      <span className="text-sm">Water Temperature: {method.waterTemp}</span>
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Brewing Steps:</h4>
                  <ol className="list-decimal list-inside text-sm">
                    {method.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </CardContent>
                <CardFooter className="p-4 bg-gray-50">
                  <Button className="w-full bg-[#4A321F] hover:bg-[#2C1E13] text-white">
                    View Detailed Guide
                  </Button>
                </CardFooter>
              </Card>
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