'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const formDataToSend = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend
      });

      if (response.ok) {
        // Redirect to feedback page after successful login
        window.location.href = '/feedback';
      } else {
        setErrors({ general: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrors({ general: 'Login failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
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
            <Link href="/order" className="text-white hover:text-[#F9A826] transition-colors cursor-pointer">
              Order
            </Link>
            <Link href="/feedback" className="text-white hover:text-[#F9A826] transition-colors cursor-pointer">
              Feedback
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link href="/login" className="bg-[#F9A826] text-[#1F1F1F] px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer">
              Login
            </Link>
            <Link href="/register" className="text-white hover:text-[#F9A826] transition-colors cursor-pointer">
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Login Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-gray-800 rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-gray-300">Sign in to your FloorPro account</p>
            </div>

            {errors.general && (
              <div className="bg-red-600 text-white p-4 rounded-lg mb-6 text-center">
                {errors.general}
              </div>
            )}

            <form id="login-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 text-white rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-600'} focus:border-[#F9A826] focus:outline-none text-sm`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 text-white rounded-lg border ${errors.password ? 'border-red-500' : 'border-gray-600'} focus:border-[#F9A826] focus:outline-none text-sm`}
                  placeholder="Your password"
                />
                {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F9A826] text-[#1F1F1F] py-4 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Signing In...' : 'Sign In'}
              </button>

              <div className="text-center">
                <p className="text-gray-300">
                  Don't have an account?{' '}
                  <Link href="/register" className="text-[#F9A826] hover:underline cursor-pointer">
                    Create one here
                  </Link>
                </p>
              </div>
            </form>
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
                <li><Link href="/feedback" className="text-gray-300 hover:text-[#F9A826] transition-colors cursor-pointer">Feedback</Link></li>
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