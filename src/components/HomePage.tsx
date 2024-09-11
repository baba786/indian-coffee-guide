import React, { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button
    className={`px-4 py-2 rounded font-semibold text-white ${className}`}
    {...props}
  >
    {children}
  </button>
);

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`} {...props}>
    {children}
  </div>
);

const CardContent: React.FC<CardProps> = ({ children, className = '', ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter: React.FC<CardProps> = ({ children, className = '', ...props }) => (
  <div className={`p-4 bg-gray-50 ${className}`} {...props}>
    {children}
  </div>
);

interface IconProps extends React.SVGProps<SVGSVGElement> {
  d: string;
}

const Icon: React.FC<IconProps> = ({ d, className = '', ...props }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
  </svg>
);

const ChevronDown: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <Icon d="M19 9l-7 7-7-7" {...props} />;
const Coffee: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <Icon d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" {...props} />;
const Leaf: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <Icon d="M3 21c3 0 7-1 7-8V5c3 3 5 6 5 8a7 7 0 11-7 7" {...props} />;
const MapPin: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <Icon d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" {...props} />;
const Clock: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <Icon d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" {...props} />;
const Droplet: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <Icon d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" {...props} />;

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[70vh] md:min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundPosition: "center right",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
        <div className="relative z-10 text-white px-4 py-8 w-full max-w-3xl mx-auto text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Indian Coffee Guide</h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            Discover the rich flavors of Indian coffee
          </p>
          <Button className="bg-[#8b593e] hover:bg-[#6d4631]">
            Explore Guides
          </Button>
        </div>
        <div className="absolute bottom-4 left-0 right-0 justify-center hidden md:flex">
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 md:py-12 relative overflow-hidden bg-[#f5f5f5]">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center md:text-left text-[#4a3728]">About Indian Coffee</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { Icon: MapPin, title: "Origin", content: "Grown in the Southern states, mainly in the Western Ghats." },
              { Icon: Leaf, title: "Varieties", content: "Arabica and Robusta, each with unique flavors." },
              { Icon: Coffee, title: "Flavor", content: "Full-bodied with subtle spicy and chocolatey notes." }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold mb-2 flex items-center text-[#8b593e]">
                  <item.Icon className="mr-2 w-5 h-5" /> {item.title}
                </h3>
                <p className="text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brewing Guide Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center md:text-left text-[#4a3728]">Brewing Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Moka Pot",
                description: "Rich, espresso-like coffee",
                time: "5-10 min",
                grind: "Fine"
              },
              {
                name: "Aeropress",
                description: "Quick, smooth coffee",
                time: "1-2 min",
                grind: "Medium-fine"
              },
              {
                name: "South Indian Filter",
                description: "Traditional strong coffee",
                time: "15-20 min",
                grind: "Fine"
              }
            ].map((method, i) => (
              <Card key={i}>
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Coffee className="h-5 w-5 mr-2" />
                    {method.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{method.description}</p>
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" /> {method.time}
                    </span>
                    <span className="flex items-center">
                      <Droplet className="h-4 w-4 mr-1" /> {method.grind}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#4A321F] hover:bg-[#2C1E13]">
                    View Guide
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4a3728] text-white py-4 md:py-6">
        <div className="container mx-auto px-4 text-center md:text-left text-xs sm:text-sm">
          <p>&copy; 2023 Indian Coffee Guide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage;