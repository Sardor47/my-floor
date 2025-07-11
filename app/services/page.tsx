'use client';

import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Industrial Floors",
      description: "Heavy-duty flooring solutions for manufacturing facilities, warehouses, and industrial complexes",
      image: "https://readdy.ai/api/search-image?query=Industrial%20warehouse%20floor%20with%20heavy%20machinery%2C%20concrete%20surface%20with%20industrial%20coating%2C%20manufacturing%20facility%20environment%2C%20professional%20industrial%20flooring%20installation%2C%20durable%20surface%20for%20heavy%20equipment%2C%20clean%20industrial%20background&width=600&height=400&seq=service1&orientation=landscape",
      features: [
        "Heavy load capacity",
        "Chemical resistance",
        "Easy maintenance",
        "Long-lasting durability",
        "Anti-slip surface options"
      ],
      price: "From $20/m²"
    },
    {
      id: 2,
      title: "Epoxy Self-Leveling",
      description: "Smooth, seamless epoxy flooring systems that provide excellent durability and aesthetics",
      image: "https://readdy.ai/api/search-image?query=Smooth%20epoxy%20self-leveling%20floor%20installation%20process%2C%20glossy%20reflective%20surface%20coating%2C%20professional%20flooring%20contractor%20applying%20epoxy%20material%2C%20modern%20facility%20with%20seamless%20flooring%20finish%2C%20industrial%20construction%20environment%20with%20clean%20background&width=600&height=400&seq=service2&orientation=landscape",
      features: [
        "Seamless finish",
        "High gloss appearance",
        "Chemical resistant",
        "Easy to clean",
        "Custom colors available"
      ],
      price: "From $30/m²"
    },
    {
      id: 3,
      title: "Waterproofing and Preparation",
      description: "Complete substrate preparation and waterproofing solutions for optimal floor performance",
      image: "https://readdy.ai/api/search-image?query=Concrete%20floor%20preparation%20and%20waterproofing%20process%2C%20professional%20contractor%20applying%20waterproof%20membrane%2C%20substrate%20preparation%20tools%20and%20materials%2C%20construction%20site%20with%20surface%20treatment%20work%2C%20industrial%20facility%20preparation%20stage&width=600&height=400&seq=service3&orientation=landscape",
      features: [
        "Moisture barrier systems",
        "Surface preparation",
        "Crack repair",
        "Primer application",
        "Quality testing"
      ],
      price: "From $12/m²"
    },
    {
      id: 4,
      title: "Turnkey Floors",
      description: "Complete flooring solutions from design to installation with full project management",
      image: "https://readdy.ai/api/search-image?query=Complete%20turnkey%20flooring%20project%20in%20modern%20facility%2C%20finished%20industrial%20floor%20with%20professional%20installation%2C%20comprehensive%20flooring%20solution%20from%20start%20to%20finish%2C%20project%20management%20documentation%2C%20completed%20warehouse%20flooring%20system&width=600&height=400&seq=service4&orientation=landscape",
      features: [
        "Design consultation",
        "Material selection",
        "Project management",
        "Installation",
        "Final inspection"
      ],
      price: "Custom Quote"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1F1F1F]">
      {/* Header */}
      <header className="bg-[#1F1F1F] border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-[#F9A826] text-2xl font-bold cursor-pointer">
            FloorPro
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-[#F9A826] transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/services" className="text-[#F9A826] font-semibold cursor-pointer">
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
      <section className="py-20 bg-gradient-to-b from-gray-900 to-[#1F1F1F]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive flooring solutions for industrial and commercial applications. 
            From basic installations to complex turnkey projects.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <i className="ri-check-line text-[#F9A826] mr-3"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-[#F9A826]">{service.price}</div>
                    <Link href="/order" className="bg-[#F9A826] text-[#1F1F1F] px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer">
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F9A826] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#1F1F1F]">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Consultation</h3>
              <p className="text-gray-300">Site assessment and requirement analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F9A826] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#1F1F1F]">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Planning</h3>
              <p className="text-gray-300">Design and material selection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F9A826] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#1F1F1F]">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Installation</h3>
              <p className="text-gray-300">Professional installation by certified team</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F9A826] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#1F1F1F]">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quality Check</h3>
              <p className="text-gray-300">Final inspection and warranty activation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1F1F1F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your flooring project. Our experts are ready to help you choose the best solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order" className="bg-[#F9A826] text-[#1F1F1F] px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer">
              Get Free Quote
            </Link>
            <Link href="/" className="border-2 border-[#F9A826] text-[#F9A826] px-8 py-4 rounded-lg font-semibold hover:bg-[#F9A826] hover:text-[#1F1F1F] transition-all whitespace-nowrap cursor-pointer">
              View Portfolio
            </Link>
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