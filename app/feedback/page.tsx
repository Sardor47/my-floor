'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Feedback() {
  const [formData, setFormData] = useState({
    projectType: '',
    rating: 5,
    serviceQuality: 5,
    communication: 5,
    timeliness: 5,
    valueForMoney: 5,
    title: '',
    feedback: '',
    recommend: 'yes',
    improvements: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name.includes('rating') || name.includes('Quality') || name.includes('communication') || 
             name.includes('timeliness') || name.includes('valueForMoney') || name === 'rating' 
             ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.feedback.length > 500) {
      alert('Feedback must be 500 characters or less');
      setIsSubmitting(false);
      return;
    }

    if (formData.improvements.length > 500) {
      alert('Improvements section must be 500 characters or less');
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value.toString());
      });

      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          projectType: '',
          rating: 5,
          serviceQuality: 5,
          communication: 5,
          timeliness: 5,
          valueForMoney: 5,
          title: '',
          feedback: '',
          recommend: 'yes',
          improvements: ''
        });
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const StarRating = ({ rating, onRatingChange, name }: { rating: number, onRatingChange: (rating: number) => void, name: string }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className={`text-2xl transition-colors cursor-pointer ${
              star <= rating ? 'text-[#F9A826]' : 'text-gray-600'
            }`}
          >
            <i className="ri-star-fill"></i>
          </button>
        ))}
      </div>
    );
  };

  const existingFeedbacks = [
    {
      id: 1,
      name: "Alexander Petrov",
      company: "Industrial Solutions LLC",
      project: "Warehouse Flooring",
      rating: 5,
      date: "March 2024",
      feedback: "Outstanding work! The team was professional, completed the project on time, and the quality exceeded our expectations. Our warehouse floor looks fantastic and has been holding up perfectly."
    },
    {
      id: 2,
      name: "Maria Kozlova",
      company: "FoodTech Manufacturing",
      project: "Food Grade Flooring",
      rating: 5,
      date: "February 2024",
      feedback: "Excellent service from start to finish. The food-grade epoxy flooring meets all our sanitary requirements and the installation was completed with minimal disruption to our operations."
    },
    {
      id: 3,
      name: "Viktor Smirnov",
      company: "AutoParts Factory",
      project: "Chemical Resistant Flooring",
      rating: 4,
      date: "January 2024",
      feedback: "Very satisfied with the chemical-resistant flooring solution. The team was knowledgeable and the finished product is exactly what we needed for our automotive parts manufacturing facility."
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
            <Link href="/about" className="text-white hover:text-[#F9A826] transition-colors cursor-pointer">
              About
            </Link>
            <Link href="/order" className="text-white hover:text-[#F9A826] transition-colors cursor-pointer">
              Order
            </Link>
            <Link href="/feedback" className="text-[#F9A826] font-semibold cursor-pointer">
              Feedback
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link href="/login" className="text-white hover:text-[#F9A826] transition-colors cursor-pointer">
              Login
            </Link>
            <Link href="/register" className="text-white hover:text-[#F9A826] transition-colors cursor-pointer">
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-[#1F1F1F]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Share Your Experience</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your feedback helps us improve our services and helps other customers make informed decisions.
            Please share your experience with FloorPro.
          </p>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Feedback Form */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Submit Your Feedback</h2>
              
              {isSubmitted ? (
                <div className="bg-green-600 text-white p-6 rounded-lg text-center">
                  <i className="ri-check-circle-line text-4xl mb-4 block"></i>
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p>Your feedback has been submitted successfully. We appreciate your time and input!</p>
                </div>
              ) : (
                <form id="customer-feedback" onSubmit={handleSubmit} className="space-y-6">
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
                        <option value="">Select your project type</option>
                        <option value="industrial-floors">Industrial Floors</option>
                        <option value="epoxy-self-leveling">Epoxy Self-Leveling</option>
                        <option value="waterproofing">Waterproofing & Preparation</option>
                        <option value="turnkey">Turnkey Solution</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Overall Rating *</label>
                    <StarRating 
                      rating={formData.rating} 
                      onRatingChange={(rating) => setFormData(prev => ({...prev, rating}))}
                      name="rating"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Service Quality</label>
                      <StarRating 
                        rating={formData.serviceQuality} 
                        onRatingChange={(rating) => setFormData(prev => ({...prev, serviceQuality: rating}))}
                        name="serviceQuality"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Communication</label>
                      <StarRating 
                        rating={formData.communication} 
                        onRatingChange={(rating) => setFormData(prev => ({...prev, communication: rating}))}
                        name="communication"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Timeliness</label>
                      <StarRating 
                        rating={formData.timeliness} 
                        onRatingChange={(rating) => setFormData(prev => ({...prev, timeliness: rating}))}
                        name="timeliness"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Value for Money</label>
                      <StarRating 
                        rating={formData.valueForMoney} 
                        onRatingChange={(rating) => setFormData(prev => ({...prev, valueForMoney: rating}))}
                        name="valueForMoney"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Feedback Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-[#F9A826] focus:outline-none text-sm"
                      placeholder="Brief title for your feedback"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Your Feedback *</label>
                    <textarea
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleChange}
                      required
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-[#F9A826] focus:outline-none text-sm resize-none"
                      placeholder="Share your experience with our services..."
                    ></textarea>
                    <div className="text-right text-sm text-gray-400 mt-1">
                      {formData.feedback.length}/500 characters
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Would you recommend us? *</label>
                    <div className="flex space-x-6">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="recommend"
                          value="yes"
                          checked={formData.recommend === 'yes'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="text-white">Yes, definitely</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="recommend"
                          value="maybe"
                          checked={formData.recommend === 'maybe'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="text-white">Maybe</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="recommend"
                          value="no"
                          checked={formData.recommend === 'no'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="text-white">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Suggestions for Improvement</label>
                    <textarea
                      name="improvements"
                      value={formData.improvements}
                      onChange={handleChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-[#F9A826] focus:outline-none text-sm resize-none"
                      placeholder="How can we improve our services? (optional)"
                    ></textarea>
                    <div className="text-right text-sm text-gray-400 mt-1">
                      {formData.improvements.length}/500 characters
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F9A826] text-[#1F1F1F] py-4 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                  </button>
                </form>
              )}
            </div>

            {/* Existing Feedbacks */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Customer Reviews</h2>
              <div className="space-y-6">
                {existingFeedbacks.map((feedback) => (
                  <div key={feedback.id} className="bg-gray-800 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-white font-semibold text-lg">{feedback.name}</h3>
                        <p className="text-gray-400 text-sm">{feedback.company}</p>
                        <p className="text-[#F9A826] text-sm">{feedback.project}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex mb-1">
                          {[...Array(feedback.rating)].map((_, i) => (
                            <i key={i} className="ri-star-fill text-[#F9A826] text-sm"></i>
                          ))}
                        </div>
                        <p className="text-gray-400 text-sm">{feedback.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">"{feedback.feedback}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our satisfied customers and experience professional flooring solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order" className="bg-[#F9A826] text-[#1F1F1F] px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer">
              Get Free Quote
            </Link>
            <Link href="/register" className="border-2 border-[#F9A826] text-[#F9A826] px-8 py-4 rounded-lg font-semibold hover:bg-[#F9A826] hover:text-[#1F1F1F] transition-all whitespace-nowrap cursor-pointer">
              Create Account
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