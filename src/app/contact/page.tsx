'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

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

  // Pre-select service from URL parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam && services.includes(serviceParam)) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, []);

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
    
    try {
      // Simulate form submission (replace with actual form handler like Formspree)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
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
    }
  };

  return (
    <>
      <Navigation />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-prestige-black text-white py-20">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                Request a Free <span className="text-prestige-gold">Consultation</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Ready to get started? Contact us today for a confidential consultation. 
                We&apos;re here to help you uncover the truth and protect your interests.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-prestige-black">
                  Get In Touch
                </h2>
                <p className="text-lg text-prestige-gray mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours. 
                  All consultations are completely confidential.
                </p>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800">
                      Thank you! Your message has been sent successfully. We&apos;ll contact you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-800">
                      Sorry, there was an error sending your message. Please try again or call us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-prestige-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prestige-gold focus:border-prestige-gold transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-prestige-black mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prestige-gold focus:border-prestige-gold transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-prestige-black mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prestige-gold focus:border-prestige-gold transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-prestige-black mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prestige-gold focus:border-prestige-gold transition-colors"
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
                    <label htmlFor="message" className="block text-sm font-semibold text-prestige-black mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-prestige-gold focus:border-prestige-gold transition-colors resize-vertical"
                      placeholder="Please describe your situation and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-prestige-black mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-prestige-black">
                  Contact Information
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-prestige-gold/10 rounded-full">
                      <Phone className="w-6 h-6 text-prestige-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-prestige-black mb-1">Phone</h3>
                      <a 
                        href="tel:786-556-3313" 
                        className="text-lg text-prestige-gold hover:text-prestige-black transition-colors"
                      >
                        786-556-3313
                      </a>
                      <p className="text-sm text-prestige-gray">24/7 Emergency Services Available</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-prestige-gold/10 rounded-full">
                      <Mail className="w-6 h-6 text-prestige-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-prestige-black mb-1">Email</h3>
                      <a 
                        href="mailto:Prestigeinvestigations@outlook.com" 
                        className="text-lg text-prestige-gold hover:text-prestige-black transition-colors break-all"
                      >
                        Prestigeinvestigations@outlook.com
                      </a>
                      <p className="text-sm text-prestige-gray">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-prestige-gold/10 rounded-full">
                      <MapPin className="w-6 h-6 text-prestige-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-prestige-black mb-1">Service Area</h3>
                      <p className="text-lg text-prestige-gray">South Florida</p>
                      <p className="text-sm text-prestige-gray">Miami-Dade, Broward, Palm Beach Counties</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-prestige-gold/10 rounded-full">
                      <Clock className="w-6 h-6 text-prestige-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-prestige-black mb-1">Business Hours</h3>
                      <div className="text-prestige-gray">
                        <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                        <p>Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: Emergency Services Only</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* License Information */}
                <div className="bg-prestige-paper p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-prestige-gold mb-4">
                    Licensed Professional
                  </h3>
                  <p className="text-white mb-2">
                    <strong>Florida Private Investigator License #A1700257</strong>
                  </p>
                  <p className="text-gray-300 text-sm">
                    Licensed, bonded, and insured. All investigations conducted within legal boundaries 
                    with complete confidentiality and court-ready documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-prestige-black text-white">
          <div className="container max-w-6xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              For urgent matters requiring immediate attention, call us directly. 
              We provide 24/7 emergency investigative services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="tel:786-556-3313" size="lg">
                Call Now: 786-556-3313
              </Button>
              <Button href="mailto:Prestigeinvestigations@outlook.com" variant="secondary" size="lg">
                Send Email
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
