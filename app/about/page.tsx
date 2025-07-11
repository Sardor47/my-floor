'use client';

import Link from 'next/link';

export default function About() {
  const team = [
    {
      id: 1,
      name: "Alexander Petrov",
      position: "Founder & CEO",
      experience: "15 years",
      image: "https://readdy.ai/api/search-image?query=Professional%20construction%20manager%20in%20industrial%20setting%2C%20experienced%20flooring%20contractor%20wearing%20safety%20equipment%2C%20confident%20business%20leader%20in%20warehouse%20environment%2C%20construction%20industry%20professional%20portrait%20with%20clean%20background&width=300&height=400&seq=team1&orientation=portrait"
    },
    {
      id: 2,
      name: "Maria Kozlova",
      position: "Technical Director",
      experience: "12 years",
      image: "https://readdy.ai/api/search-image?query=Female%20construction%20engineer%20with%20technical%20expertise%2C%20professional%20woman%20in%20industrial%20flooring%20industry%2C%20technical%20director%20reviewing%20construction%20plans%2C%20engineering%20professional%20in%20modern%20facility%20with%20clean%20background&width=300&height=400&seq=team2&orientation=portrait"
    },
    {
      id: 3,
      name: "Dmitry Sokolov",
      position: "Lead Installer",
      experience: "10 years",
      image: "https://readdy.ai/api/search-image?query=Skilled%20flooring%20installer%20with%20professional%20tools%2C%20experienced%20construction%20worker%20in%20protective%20gear%2C%20lead%20technician%20demonstrating%20expertise%20in%20floor%20installation%2C%20industrial%20contractor%20with%20clean%20professional%20background&width=300&height=400&seq=team3&orientation=portrait"
    }
  ];

  const partners = [
    {
      id: 1,
      name: "BASF Construction",
      description: "Leading chemical solutions provider",
      logo: "https://readdy.ai/api/search-image?query=BASF%20construction%20chemicals%20company%20logo%20style%20design%2C%20professional%20industrial%20partner%20branding%2C%20chemical%20manufacturer%20logo%20representation%2C%20corporate%20identity%20with%20clean%20minimal%20background&width=200&height=100&seq=partner1&orientation=landscape"
    },
    {
      id: 2,
      name: "Sika Technologies",
      description: "Specialty chemical manufacturer",
      logo: "https://readdy.ai/api/search-image?query=Sika%20technologies%20construction%20materials%20logo%20style%2C%20industrial%20chemical%20company%20branding%2C%20specialty%20manufacturer%20corporate%20identity%2C%20professional%20partner%20logo%20with%20clean%20background&width=200&height=100&seq=partner2&orientation=landscape"
    },
    {
      id: 3,
      name: "Mapei Solutions",
      description: "Building adhesives and chemicals",
      logo: "https://readdy.ai/api/search-image?query=Mapei%20construction%20solutions%20logo%20design%20style%2C%20building%20materials%20company%20branding%2C%20adhesives%20manufacturer%20corporate%20identity%2C%20industrial%20partner%20logo%20with%20minimal%20clean%20background&width=200&height=100&seq=partner3&orientation=landscape"
    }
  ];

  const certificates = [
    {
      id: 1,
      title: "ISO 9001:2015 Quality Management",
      year: "2023",
      image: "https://readdy.ai/api/search-image?query=ISO%209001%20quality%20management%20certificate%20document%2C%20official%20certification%20for%20construction%20company%2C%20quality%20assurance%20certification%20with%20professional%20layout%2C%20business%20certificate%20with%20clean%20background&width=300&height=200&seq=cert1&orientation=landscape"
    },
    {
      id: 2,
      title: "Industrial Safety Certification",
      year: "2023",
      image: "https://readdy.ai/api/search-image?query=Industrial%20safety%20certification%20document%20for%20construction%20company%2C%20workplace%20safety%20compliance%20certificate%2C%20professional%20safety%20standards%20certification%20with%20official%20layout%2C%20business%20safety%20award&width=300&height=200&seq=cert2&orientation=landscape"
    },
    {
      id: 3,
      title: "Environmental Management ISO 14001",
      year: "2022",
      image: "https://readdy.ai/api/search-image?query=Environmental%20management%20ISO%2014001%20certificate%2C%20eco-friendly%20construction%20certification%20document%2C%20environmental%20compliance%20award%20for%20industrial%20company%2C%20green%20building%20certificate%20with%20professional%20design&width=300&height=200&seq=cert3&orientation=landscape"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "MetalTech Manufacturing Facility",
      area: "5,000 m²",
      year: "2023",
      description: "Complete industrial flooring solution for heavy machinery production facility",
      image: "https://readdy.ai/api/search-image?query=Large%20manufacturing%20facility%20with%20completed%20industrial%20flooring%2C%20metalworking%20factory%20floor%20with%20epoxy%20coating%2C%20heavy%20machinery%20production%20area%20with%20professional%20flooring%20installation%2C%20industrial%20facility%20interior%20with%20clean%20spacious%20background&width=400&height=300&seq=project1&orientation=landscape"
    },
    {
      id: 2,
      title: "FoodProcess Distribution Center",
      area: "8,000 m²",
      year: "2023",
      description: "Hygienic flooring system for food processing and storage facility",
      image: "https://readdy.ai/api/search-image?query=Food%20processing%20facility%20with%20hygienic%20flooring%20system%2C%20clean%20food%20distribution%20center%20interior%2C%20professional%20food-grade%20floor%20coating%2C%20sanitary%20industrial%20flooring%20in%20warehouse%20environment%20with%20bright%20clean%20background&width=400&height=300&seq=project2&orientation=landscape"
    },
    {
      id: 3,
      title: "AutoLogistics Warehouse Complex",
      area: "12,000 m²",
      year: "2022",
      description: "Durable warehouse flooring for automotive parts storage and distribution",
      image: "https://readdy.ai/api/search-image?query=Large%20automotive%20warehouse%20with%20professional%20flooring%2C%20car%20parts%20distribution%20center%20interior%2C%20logistics%20facility%20with%20durable%20floor%20coating%2C%20spacious%20warehouse%20with%20organized%20storage%20and%20clean%20industrial%20background&width=400&height=300&seq=project3&orientation=landscape"
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
            <Link href="/services" className="text-white hover:text-[#F9A826] transition-colors cursor-pointer">
              Services
            </Link>
            <Link href="/about" className="text-[#F9A826] font-semibold cursor-pointer">
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
          <h1 className="text-5xl font-bold text-white mb-6">About FloorPro</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading provider of industrial flooring solutions with over 15 years of experience 
            in delivering high-quality, durable flooring systems for commercial and industrial facilities.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Experience</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Since 2009, FloorPro has been at the forefront of industrial flooring innovation. 
                We have successfully completed over 500 projects across various industries, 
                from manufacturing facilities to food processing plants.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#F9A826] mb-2">500+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#F9A826] mb-2">15+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#F9A826] mb-2">2M+</div>
                  <div className="text-gray-300">m² Installed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#F9A826] mb-2">98%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20construction%20team%20working%20on%20industrial%20flooring%20project%2C%20experienced%20contractors%20installing%20epoxy%20floor%20coating%2C%20group%20of%20skilled%20workers%20with%20specialized%20equipment%20in%20modern%20facility%2C%20construction%20industry%20teamwork%20with%20clean%20background&width=600&height=400&seq=experience1&orientation=landscape"
                alt="Our Team at Work"
                className="w-full h-96 object-cover object-top rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-gray-800 rounded-lg overflow-hidden text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <div className="text-[#F9A826] font-semibold mb-2">{member.position}</div>
                  <div className="text-gray-300">{member.experience} experience</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-[#1F1F1F]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Partners</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-gray-800 rounded-lg p-8 text-center hover:bg-gray-700 transition-all">
                <img 
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-20 object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Certificates & Awards</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div key={cert.id} className="bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                  <div className="text-[#F9A826] font-semibold">{cert.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-[#1F1F1F]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
          <div className="space-y-12">
            {projects.map((project) => (
              <div key={project.id} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={project.id % 2 === 0 ? 'md:order-2' : ''}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover object-top rounded-lg"
                  />
                </div>
                <div className={project.id % 2 === 0 ? 'md:order-1' : ''}>
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-6">
                    <div>
                      <div className="text-[#F9A826] font-semibold">Area</div>
                      <div className="text-white font-bold">{project.area}</div>
                    </div>
                    <div>
                      <div className="text-[#F9A826] font-semibold">Completed</div>
                      <div className="text-white font-bold">{project.year}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust FloorPro for their industrial flooring needs. 
            Let's discuss your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order" className="bg-[#F9A826] text-[#1F1F1F] px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer">
              Start Your Project
            </Link>
            <Link href="/" className="border-2 border-[#F9A826] text-[#F9A826] px-8 py-4 rounded-lg font-semibold hover:bg-[#F9A826] hover:text-[#1F1F1F] transition-all whitespace-nowrap cursor-pointer">
              View More Projects
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