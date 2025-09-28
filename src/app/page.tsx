import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
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
  Mail,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const trustPoints = [
    {
      icon: <Shield className="w-8 h-8 text-prestige-gold" />,
      title: "Licensed Professional",
      description: "Florida License #A1700257"
    },
    {
      icon: <Star className="w-8 h-8 text-prestige-gold" />,
      title: "Experienced Team",
      description: "Years of investigative expertise"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-prestige-gold" />,
      title: "Confidential Service",
      description: "Discreet and professional approach"
    }
  ];

  const featuredServices = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Background Checks",
      description: "Comprehensive screening for employment, tenants, and personal needs.",
      link: "/services#background-checks"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Corporate Investigations",
      description: "Protect your business from fraud and misconduct.",
      link: "/services#corporate"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Infidelity Investigations",
      description: "Discreet surveillance and evidence gathering.",
      link: "/services#infidelity"
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Child Custody",
      description: "Ensure child safety with thorough investigations.",
      link: "/services#custody"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Protect your digital assets and infrastructure.",
      link: "/services#cybersecurity"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Surveillance",
      description: "Professional monitoring and evidence collection.",
      link: "/services#surveillance"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consult",
      description: "Free confidential consultation to understand your needs"
    },
    {
      number: "02", 
      title: "Investigate",
      description: "Professional investigation using legal methods and advanced techniques"
    },
    {
      number: "03",
      title: "Report",
      description: "Detailed, court-ready reports with actionable findings"
    }
  ];

  const testimonials = [
    {
      content: "Prestige Investigations helped us uncover employee theft that was costing our company thousands. Their professionalism and discretion were exceptional.",
      name: "Sarah M.",
      role: "Business Owner",
      rating: 5
    },
    {
      content: "I&apos;ve worked with many PI firms, but Prestige stands out for their thorough investigations and court-ready reports. Highly recommended.",
      name: "Michael R.",
      role: "Attorney", 
      rating: 5
    },
    {
      content: "Their tenant screening services have been invaluable. We&apos;ve avoided several problematic tenants thanks to their comprehensive background checks.",
      name: "Jennifer L.",
      role: "Property Manager",
      rating: 5
    }
  ];

  return (
    <>
      <Navigation />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative bg-hero-pattern bg-cover bg-center">
          <div className="absolute inset-0 bg-prestige-black/80"></div>
          <div className="relative z-10 text-center py-24 md:py-36">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
              <h1 className="text-4xl md:text-6xl font-serif font-extrabold mb-6 animate-fade-in">
                Uncover the <span className="text-prestige-gold">TRUTH</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up">
                Discreet. Professional. Court-Ready. Your trusted partner in professional investigative services throughout South Florida. Licensed, experienced, and committed to delivering results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button href="/services" size="lg">
                  Our Services
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Contact Us
                </Button>
              </div>
              <p className="text-sm text-gray-300">
                Licensed • Confidential • Court-Ready Reports
              </p>
            </div>
          </div>
        </section>

        {/* Trust Points */}
        <section className="py-16 bg-prestige-paper">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trustPoints.map((point, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-prestige-black/50 rounded-full">
                      {point.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{point.title}</h3>
                  <p className="text-gray-300">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-prestige-black">
                Professional Investigative Services
              </h2>
              <p className="text-lg text-prestige-gray max-w-2xl mx-auto">
                Comprehensive investigative solutions tailored to your specific needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {featuredServices.map((service, index) => (
                <div key={index} className="card-light group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-prestige-gold/10 rounded-full text-prestige-gold">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-prestige-black">{service.title}</h3>
                  </div>
                  <p className="text-prestige-gray mb-4">{service.description}</p>
                  <a 
                    href={service.link}
                    className="text-prestige-gold hover:text-prestige-black font-medium flex items-center gap-2 transition-colors"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button href="/services" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* Process Strip */}
        <section className="py-16 bg-prestige-black">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
                Our Process
              </h2>
              <p className="text-lg text-gray-300">
                Simple, professional, and effective
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-serif font-bold text-prestige-gold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-prestige-black">
                What Our Clients Say
              </h2>
              <p className="text-lg text-prestige-gray">
                Trusted by individuals and businesses across South Florida
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card-light">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-prestige-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-prestige-gray mb-4 italic">&quot;{testimonial.content}&quot;</p>
                  <div>
                    <p className="font-semibold text-prestige-black">{testimonial.name}</p>
                    <p className="text-prestige-gray text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-prestige-black text-white">
          <div className="container max-w-6xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Contact us today for a confidential consultation. We&apos;re here to help you uncover the truth 
              and protect your interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button href="/contact" size="lg">
                Request a Free Consultation
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-prestige-gold" />
                <a href="tel:786-556-3313" className="hover:text-prestige-gold transition-colors">
                  786-556-3313
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-prestige-gold" />
                <a href="mailto:Prestigeinvestigations@outlook.com" className="hover:text-prestige-gold transition-colors">
                  Prestigeinvestigations@outlook.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
