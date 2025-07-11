
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const galleryImages = [
    {
      id: 1,
      title: "Industrial Warehouse Flooring",
      image: "https://readdy.ai/api/search-image?query=Modern%20industrial%20warehouse%20with%20polished%20concrete%20flooring%2C%20professional%20lighting%2C%20clean%20spacious%20interior%2C%20high-quality%20epoxy%20coating%20with%20reflective%20surface%2C%20industrial%20setting%20with%20minimal%20background%2C%20professional%20photography%20style&width=600&height=400&seq=gallery1&orientation=landscape"
    },
    {
      id: 2,
      title: "Epoxy Self-Leveling Floor",
      image: "https://readdy.ai/api/search-image?query=Smooth%20epoxy%20self-leveling%20floor%20in%20modern%20facility%2C%20glossy%20blue-tinted%20surface%2C%20professional%20industrial%20environment%2C%20clean%20minimal%20background%2C%20high-end%20finish%20with%20perfect%20reflection%2C%20construction%20industry%20professional%20photography&width=600&height=400&seq=gallery2&orientation=landscape"
    },
    {
      id: 3,
      title: "Commercial Kitchen Flooring",
      image: "https://readdy.ai/api/search-image?query=Commercial%20kitchen%20with%20professional%20non-slip%20flooring%2C%20hygienic%20surface%20coating%2C%20stainless%20steel%20equipment%2C%20clean%20industrial%20environment%2C%20waterproof%20flooring%20solution%2C%20professional%20food%20service%20facility%2C%20minimal%20clean%20background&width=600&height=400&seq=gallery3&orientation=landscape"
    },
    {
      id: 4,
      title: "Factory Production Floor",
      image: "https://readdy.ai/api/search-image?query=Factory%20production%20floor%20with%20durable%20industrial%20coating%2C%20heavy%20machinery%20area%2C%20chemical%20resistant%20surface%2C%20professional%20manufacturing%20environment%2C%20smooth%20concrete%20finish%2C%20industrial%20facility%20with%20clean%20background&width=600&height=400&seq=gallery4&orientation=landscape"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Dmitry Volkov",
      company: "MetalTech Industries",
      rating: 5,
      text: "Excellent work quality! The team completed our 2000 sq.m warehouse floor on time and within budget. Highly professional approach."
    },
    {
      id: 2,
      name: "Anna Petrova",
      company: "FoodProcess LLC",
      rating: 5,
      text: "Perfect epoxy coating for our food production facility. Meets all sanitary requirements and looks fantastic after 2 years of operation."
    },
    {
      id: 3,
      name: "Sergei Ivanov",
      company: "AutoService Center",
      rating: 5,
      text: "Chemical-resistant floor coating exceeded our expectations. No stains from oils and chemicals, easy to clean and maintain."
    }
  ];

  const packages = [
    {
      id: 1,
      name: "Basic Package",
      price: "From $15/m²",
      features: [
        "Surface preparation",
        "Basic epoxy coating",
        "Standard colors",
        "1 year warranty"
      ]
    },
    {
      id: 2,
      name: "Professional Package",
      price: "From $25/m²",
      features: [
        "Complete surface preparation",
        "Premium epoxy system",
        "Custom colors available",
        "Anti-slip additives",
        "3 years warranty"
      ]
    },
    {
      id: 3,
      name: "Premium Package",
      price: "From $40/m²",
      features: [
        "Full substrate preparation",
        "Multi-layer epoxy system",
        "Decorative options",
        "Chemical resistance",
        "UV protection",
        "5 years warranty"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#1F1F1F]">
      {/* Header */}
      <header className="bg-[#1F1F1F] border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-[#F9A826] text-2xl font-bold">
            FloorPro
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-[#F9A826] transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-[#F9A826] transition-colors cursor-pointer">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-[#F9A826] transition-colors cursor-pointer">
              About
            </Link>
            <Link href="/order" className="text-white hover:text-[#F9A826] transition-colors cursor-pointer">
              Order
            </Link>
          </nav>
          <div className="flex space-x-4">
            <button className="text-white hover:text-[#F9A826] transition-colors cursor-pointer">RU</button>
            <button className="text-gray-400 hover:text-[#F9A826] transition-colors cursor-pointer">TJ</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
               style={{backgroundImage: `linear-gradient(rgba(31, 31, 31, 0.7), rgba(31, 31, 31, 0.7)), url('https://readdy.ai/api/search-image?query=Professional%20industrial%20flooring%20contractor%20working%20with%20concrete%20surface%20preparation%20tools%20in%20modern%20warehouse%20facility%2C%20worker%20in%20protective%20gear%20applying%20epoxy%20coating%2C%20industrial%20construction%20environment%20with%20clean%20spacious%20background%2C%20professional%20contractor%20at%20work%20with%20specialized%20equipment&width=1920&height=1080&seq=hero1&orientation=landscape')`}}>
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Professional Industrial Flooring Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Expert installation of high-performance flooring systems for industrial facilities, warehouses, and commercial spaces
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/order" className="bg-[#F9A826] text-[#1F1F1F] px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer text-center">
                Get Free Quote
              </Link>
              <button className="border-2 border-[#F9A826] text-[#F9A826] px-8 py-4 rounded-lg font-semibold hover:bg-[#F9A826] hover:text-[#1F1F1F] transition-all whitespace-nowrap cursor-pointer">
                Watch Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#1F1F1F]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#F9A826] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-3xl text-[#1F1F1F]"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">High-Quality Materials</h3>
              <p className="text-gray-300">We use durable and long-lasting products from leading manufacturers</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#F9A826] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-line text-3xl text-[#1F1F1F]"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Experienced Professionals</h3>
              <p className="text-gray-300">Skilled and certified installation team with years of experience</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#F9A826] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-3xl text-[#1F1F1F]"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">On-Time Completion</h3>
              <p className="text-gray-300">Adhering to project schedules and deadlines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">See Our Process in Action</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
              <img 
                src="https://readdy.ai/api/search-image?query=Industrial%20floor%20installation%20process%20showing%20concrete%20surface%20preparation%20and%20epoxy%20coating%20application%2C%20professional%20workers%20with%20specialized%20equipment%2C%20step-by-step%20flooring%20installation%20in%20warehouse%20environment%2C%20construction%20industry%20documentation%20style%2C%20clean%20professional%20background&width=800&height=450&seq=video1&orientation=landscape"
                alt="Floor Installation Process"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <button className="w-20 h-20 bg-[#F9A826] rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all cursor-pointer">
                  <i className="ri-play-fill text-3xl text-[#1F1F1F] ml-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-[#1F1F1F]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                <div className="text-3xl font-bold text-[#F9A826] mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <i className="ri-check-line text-[#F9A826] mr-3"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/order" className="block bg-[#F9A826] text-[#1F1F1F] text-center py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer">
                  Choose Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Work Examples</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {galleryImages.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold text-center px-4">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-[#1F1F1F]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Client Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-800 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-[#F9A826]"></i>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                <div>
                  <div className="font-semibold text-white">{review.name}</div>
                  <div className="text-sm text-gray-400">{review.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#F9A826] rounded-full flex items-center justify-center mr-4">
                    <i className="ri-phone-line text-[#1F1F1F]"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-300">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#F9A826] rounded-full flex items-center justify-center mr-4">
                    <i className="ri-mail-line text-[#1F1F1F]"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">info@floorpro.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#F9A826] rounded-full flex items-center justify-center mr-4">
                    <i className="ri-map-pin-line text-[#1F1F1F]"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-gray-300">123 Industrial Street, Moscow</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.426!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzcnMDIuMyJF!5e0!3m2!1sen!2sru!4v1234567890"
                width="100%"
                height="300"
                style={{border: 0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F1F1F] border-t border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-[#F9A826] text-2xl font-bold mb-4">FloorPro</div>
              <p className="text-gray-300">Professional industrial flooring solutions for your business needs.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-300 hover:text-[#F9A826] transition-colors cursor-pointer">Industrial Floors</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-[#F9A826] transition-colors cursor-pointer">Epoxy Coatings</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-[#F9A826] transition-colors cursor-pointer">Waterproofing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-[#F9A826] transition-colors cursor-pointer">About Us</Link></li>
                <li><Link href="/order" className="text-gray-300 hover:text-[#F9A826] transition-colors cursor-pointer">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#F9A826] transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-white"></i>
                </button>
                <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#F9A826] transition-colors cursor-pointer">
                  <i className="ri-instagram-line text-white"></i>
                </button>
                <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#F9A826] transition-colors cursor-pointer">
                  <i className="ri-whatsapp-line text-white"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 FloorPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
