'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Tenant Screening',
    'Employment Background Checks',
    'Personal Background Checks',
    'Asset Protection',
    'Corporate Investigations',
    'Insurance Claims',
    'Infidelity Investigations',
    'Child Custody Investigations',
    'Missing Person Investigations',
    'Criminal Investigations',
    'Cybersecurity',
    'Surveillance & Security',
    'Executive Protection',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual form handler)
    try {
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0b2a6f] to-[#1e40af] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-blue-200">
                Ready to get started? Contact us today for a confidential consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-[#0b2a6f]">Get In Touch</h2>
                <p className="text-lg text-gray-700 mb-8">
                  We're here to help you with all your investigative needs. Contact us today to discuss 
                  your case and learn how we can assist you in uncovering the truth.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0b2a6f] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#facc15]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <a href="tel:786-556-3313" className="text-[#0b2a6f] hover:text-[#facc15] transition-colors">
                        786-556-3313
                      </a>
                      <p className="text-gray-600 text-sm">Available 24/7 for urgent matters</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0b2a6f] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#facc15]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <a href="mailto:Prestigeinvestigations@outlook.com" className="text-[#0b2a6f] hover:text-[#facc15] transition-colors">
                        Prestigeinvestigations@outlook.com
                      </a>
                      <p className="text-gray-600 text-sm">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0b2a6f] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#facc15]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Service Area</h3>
                      <p className="text-gray-700">South Florida</p>
                      <p className="text-gray-600 text-sm">Licensed throughout Florida</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0b2a6f] rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#facc15]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-700">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-gray-600 text-sm">Emergency services available 24/7</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-[#0b2a6f] rounded-lg text-white">
                  <h3 className="text-lg font-semibold mb-2 text-[#facc15]">Licensed Professional</h3>
                  <p className="text-sm">Florida Private Investigator License #A1700257</p>
                  <p className="text-sm text-blue-200">Fully licensed, bonded, and insured</p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-[#0b2a6f]">Send Us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    There was an error sending your message. Please try again or call us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b2a6f] focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b2a6f] focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b2a6f] focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b2a6f] focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b2a6f] focus:border-transparent"
                      placeholder="Please describe your situation and how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>

                <p className="text-sm text-gray-600 mt-4">
                  * Required fields. All information is kept strictly confidential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#0b2a6f]">Need Immediate Assistance?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              For urgent matters that require immediate attention, don't hesitate to call us directly. 
              We understand that some situations can't wait.
            </p>
            <a href="tel:786-556-3313" className="btn-primary text-xl px-10 py-4 inline-flex items-center space-x-2">
              <Phone className="w-6 h-6" />
              <span>Call Now: 786-556-3313</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
