import React, { useState } from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from "../components/shared/Footer";
import data from '../data/data.json';

const Contact = () => {
  const { name, contact } = data;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    if (!formData.privacy) {
      alert('Please agree to the privacy policy.');
      return;
    }

    // Show success message
    setShowSuccess(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      privacy: false
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-50">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2 min-h-[600px]">

            {/* Contact Information Section */}
            <div className="bg-gradient-to-br from-slate-800 to-blue-600 text-white p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-4 animate-fade-in-left">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">
                    📍
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Our Office</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 animate-fade-in-left animation-delay-200">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">
                    📞
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Phone Support</h3>
                    <p className="text-white/90 text-sm">
                      <a href={`tel:${contact.phone}`} className="hover:text-white transition-colors">
                        {contact.phone}
                      </a>
                      <br />
                      <span className="text-xs">Mon-Fri: 9:00 AM - 6:00 PM</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 animate-fade-in-left animation-delay-400">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                    <p className="text-white/90 text-sm">
                      <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                        {contact.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 animate-fade-in-left animation-delay-600">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">
                    🌐
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Website</h3>
                    <p className="text-white/90 text-sm">
                      <a
                        href={contact.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        {contact.website}
                      </a>
                      <br />
                      <span className="text-xs">Digital Solutions & Web Development</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="p-8 lg:p-12">
              <div className="animate-fade-in-right">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Get In Touch
                </h1>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Thank you for your interest in {name}. After reviewing your inquiry,
                  our team will contact you promptly. Please fill in all fields and agree
                  to our privacy policy before submitting.
                </p>
              </div>

              {showSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl mb-6 animate-fade-in">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-fade-in-right animation-delay-100">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:-translate-y-1"
                  />
                </div>

                <div className="animate-fade-in-right animation-delay-200">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:-translate-y-1"
                  />
                </div>

                <div className="animate-fade-in-right animation-delay-300">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:-translate-y-1"
                  />
                </div>

                <div className="animate-fade-in-right animation-delay-400">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:-translate-y-1"
                  >
                    <option value="">Please select...</option>
                    <option value="website">Website Development</option>
                    <option value="consultation">General Consultation</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="animate-fade-in-right animation-delay-500">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Please describe your inquiry in detail..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 bg-gray-50 focus:bg-white hover:-translate-y-1 resize-vertical"
                  />
                </div>

                <div className="flex items-start space-x-3 animate-fade-in-right animation-delay-600">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-5 h-5 text-indigo-600 border-2 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed">
                    I agree to the{' '}
                    <a href="#" className="text-indigo-600 font-semibold hover:underline">
                      Privacy Policy
                    </a>{' '}
                    and consent to the handling of my personal information.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-full font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 focus:ring-4 focus:ring-indigo-100 relative overflow-hidden group animate-fade-in-right animation-delay-700"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </form>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in-left {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fade-in-right {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-fade-in-left {
            animation: fade-in-left 0.6s ease forwards;
          }

          .animate-fade-in-right {
            animation: fade-in-right 0.6s ease forwards;
          }

          .animate-fade-in {
            animation: fade-in 0.3s ease forwards;
          }

          .animation-delay-100 {
            animation-delay: 0.1s;
          }

          .animation-delay-200 {
            animation-delay: 0.2s;
          }

          .animation-delay-300 {
            animation-delay: 0.3s;
          }

          .animation-delay-400 {
            animation-delay: 0.4s;
          }

          .animation-delay-500 {
            animation-delay: 0.5s;
          }

          .animation-delay-600 {
            animation-delay: 0.6s;
          }

          .animation-delay-700 {
            animation-delay: 0.7s;
          }
        `}</style>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
