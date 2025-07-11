'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Order() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    area: '',
    location: '',
    timeline: '',
    budget: '',
    description: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.description.length > 500) {
      alert('Description must be 500 characters or less');
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          area: '',
          location: '',
          timeline: '',
          budget: '',
          description: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello! I'm interested in your flooring services. Here are my project details:\n\n` +
      `Name: ${formData.name}\n` +
      `Project Type: ${formData.projectType}\n` +
      `Area: ${formData.area} m²\n` +
      `Location: ${formData.location}\n` +
      `Description: ${formData.description}`
    );
    window.open(`https://wa.me/79991234567?text=${message}`, '_blank');
  };

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
            <Link href="/about" className="text-white hover:text-[#F9A826] transition-colors cursor-pointer">
              About
            </Link>
            <Link href="/order" className="text-[#F9A826] font-semibold cursor-pointer">
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
          <h1 className="text-5xl font-bold text-white mb-6">Request a Quote</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a free consultation and detailed quote for your industrial flooring project. 
            Our experts will help you choose the best solution for your needs.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Project Details</h2>
              
              {isSubmitted ? (
                <div className="bg-green-600 text-white p-6 rounded-lg text-center">
                  <i className="ri-check-circle-line text-4xl mb-4 block"></i>
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p>Your request has been submitted successfully. We'll contact you within 24 hours.</p>
                </div>
              ) : (
                <form id="quote-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-[#F9A826] focus:outline-none text-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-[#F9A826] focus:outline-none text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-[#F9A826] focus:outline-none text-sm"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-[#F9A826] focus:outline-none text-sm"
                        placeholder="Company name (optional)"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Project Type *</label>
                      <div className="relative">
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-[#F9A826] focus:outline-none text-sm appearance-none pr-8"
                        >
                          <option value="">Select project type</option>
                          <option value="industrial-floors">Industrial Floors</option>
                          <option value="epoxy-self-leveling">Epoxy Self-Leveling</option>
                          <option value="waterproofing">Waterproofing & Preparation</option>
                          <option value="turnkey">Turnkey Solution</option>
                        </select>
                        <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                      </div>
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Area (m²) *</label>
                      <input
                        type="number"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-[#F9A826] focus:outline-none text-sm"
                        placeholder="1000"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Location *</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-[#F9A826] focus:outline-none text-sm"
                        placeholder="City, address"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Timeline</label>
                      <div className="relative">
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-[#F9A826] focus:outline-none text-sm appearance-none pr-8"
                        >
                          <option value="">Select timeline</option>
                          <option value="urgent">Urgent (within 2 weeks)</option>
                          <option value="month">Within 1 month</option>
                          <option value="quarter">Within 3 months</option>
                          <option value="flexible">Flexible</option>
                        </select>
                        <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Budget Range</label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-[#F9A826] focus:outline-none text-sm appearance-none pr-8"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-500k">Under $50,000</option>
                        <option value="500k-1m">$50,000 - $100,000</option>
                        <option value="1m-2m">$100,000 - $200,000</option>
                        <option value="over-2m">Over $200,000</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Project Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-[#F9A826] focus:outline-none text-sm resize-none"
                      placeholder="Tell us about your project requirements, special needs, or any specific questions you have..."
                    ></textarea>
                    <div className="text-right text-sm text-gray-400 mt-1">
                      {formData.description.length}/500 characters
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F9A826] text-[#1F1F1F] py-4 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info & WhatsApp */}
            <div className="space-y-8">
              {/* WhatsApp CTA */}
              <div className="bg-green-600 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-whatsapp-line text-3xl text-green-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Quick Contact via WhatsApp</h3>
                <p className="text-green-100 mb-6">
                  Get instant response from our experts. Send us your project details directly.
                </p>
                <button
                  onClick={openWhatsApp}
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-whatsapp-line mr-2"></i>
                  Chat on WhatsApp
                </button>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
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
                      <i className="ri-time-line text-[#1F1F1F]"></i>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Working Hours</div>
                      <div className="text-gray-300">Mon-Fri: 9:00-18:00</div>
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

              {/* Process Info */}
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#F9A826] rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-sm font-bold text-[#1F1F1F]">1</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Response within 24 hours</div>
                      <div className="text-gray-300 text-sm">Our expert will contact you to discuss your project</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#F9A826] rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-sm font-bold text-[#1F1F1F]">2</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Site visit and assessment</div>
                      <div className="text-gray-300 text-sm">Free consultation and technical evaluation</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#F9A826] rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-sm font-bold text-[#1F1F1F]">3</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Detailed proposal</div>
                      <div className="text-gray-300 text-sm">Comprehensive quote with materials and timeline</div>
                    </div>
                  </div>
                </div>
              </div>
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