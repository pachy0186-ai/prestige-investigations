
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Shield, 
  Search, 
  Users, 
  FileText, 
 
  Building, 
  Heart, 
  Baby, 
  UserSearch, 
  Gavel, 
  Lock, 
  Camera,
  ShieldCheck,
  Star,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Tenant Screening",
      description: "Comprehensive background checks including rental history, credit reports, and criminal records."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Employment Background Checks",
      description: "Verify work history, education, and criminal background for confident hiring decisions."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Personal Background Checks",
      description: "Detailed reports including identity verification, criminal records, and financial history."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Asset Protection",
      description: "Proactive strategies to prevent theft, damage, and loss of valuable assets."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Corporate Investigations",
      description: "Protect your business from fraud, employee misconduct, and corporate espionage."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Insurance Claims",
      description: "Detect fraudulent claims through surveillance, interviews, and verification."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Infidelity Investigations",
      description: "Professional surveillance and discreet evidence gathering to uncover the truth."
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Child Custody Investigations",
      description: "Ensure child safety with investigations into parental care and living conditions."
    },
    {
      icon: <UserSearch className="w-8 h-8" />,
      title: "Missing Person Investigations",
      description: "Locate lost individuals using advanced investigative techniques and resources."
    },
    {
      icon: <Gavel className="w-8 h-8" />,
      title: "Criminal Investigations",
      description: "Evidence gathering, surveillance, and analysis for criminal cases and legal matters."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Protect digital infrastructure and sensitive data from cyber threats."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Surveillance & Security",
      description: "24/7 monitoring with advanced systems to deter crime and provide evidence."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Executive Protection",
      description: "Tailored protection services for leadership teams during travel and events."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Business Owner",
      content: "Prestige Investigations helped us uncover employee theft that was costing our company thousands. Their professionalism and discretion were exceptional.",
      rating: 5
    },
    {
      name: "Michael R.",
      role: "Attorney",
      content: "I've worked with many PI firms, but Prestige stands out for their thorough investigations and court-ready reports. Highly recommended.",
      rating: 5
    },
    {
      name: "Jennifer L.",
      role: "Property Manager",
      content: "Their tenant screening services have been invaluable. We've avoided several problematic tenants thanks to their comprehensive background checks.",
      rating: 5
    }
  ];

  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0b2a6f] to-[#1e40af] text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Uncover <span className="text-[#facc15]">THE TRUTH</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-4 text-blue-100">
                Discreet. Professional. Court-Ready.
              </p>
              <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto">
                Your trusted partner in professional investigative services throughout South Florida. 
                Licensed, experienced, and committed to delivering results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="btn-secondary text-lg px-8 py-4 inline-block text-center">
                  Our Services
                </Link>
                <Link href="/contact" className="bg-white text-[#0b2a6f] hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg inline-block text-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#0b2a6f] rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-[#facc15]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Licensed Professional</h3>
                <p className="text-gray-600">Florida License #A1700257</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#0b2a6f] rounded-full flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-[#facc15]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                <p className="text-gray-600">Years of investigative expertise</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#0b2a6f] rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-[#facc15]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Confidential Service</h3>
                <p className="text-gray-600">Discreet and professional approach</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#0b2a6f]">
                Welcome to Prestige Executive Investigations
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to Prestige Executive Investigations LLC, your trusted partner in professional investigative services. 
                We specialize in a wide range of investigative solutions, including background checks, corporate investigations, 
                infidelity investigations, child custody investigations, insurance claims investigations, and much more. 
                Our team is dedicated to providing you with confidential, reliable, and thorough services to meet your needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                At Prestige Investigations, we understand that your safety, security, and peace of mind are important. 
                Whether you're an individual looking for personal services or a business in need of corporate investigations, 
                we are here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#0b2a6f]">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive investigative services tailored to your specific needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-[#0b2a6f] mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#0b2a6f]">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/services" className="btn-primary text-lg px-8 py-4">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#0b2a6f]">What Our Clients Say</h2>
              <p className="text-lg text-gray-600">Trusted by individuals and businesses across South Florida</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#facc15] fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-[#0b2a6f]">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0b2a6f] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
              Contact us today for a confidential consultation. We're here to help you uncover the truth 
              and protect your interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-[#facc15]" />
                <a href="tel:786-556-3313" className="text-lg hover:text-[#facc15] transition-colors">
                  786-556-3313
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-[#facc15]" />
                <a href="mailto:Prestigeinvestigations@outlook.com" className="text-lg hover:text-[#facc15] transition-colors">
                  Prestigeinvestigations@outlook.com
                </a>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Contact Us Today
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
