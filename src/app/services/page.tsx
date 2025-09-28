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
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Tenant Screening",
      description: "Ensure you&apos;re renting to reliable tenants with our comprehensive background checks, including rental history, credit reports, and criminal records.",
      features: ["Credit report analysis", "Criminal background checks", "Rental history verification", "Employment verification", "Reference checks"],
      id: "tenant-screening"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Employment Background Checks",
      description: "Hire with confidence by verifying a candidate&apos;s work history, education, and criminal background.",
      features: ["Employment history verification", "Education verification", "Criminal background checks", "Professional license verification", "Reference checks"],
      id: "employment-checks"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Personal Background Checks",
      description: "Get detailed background reports on individuals, including identity verification, criminal records, and financial history.",
      features: ["Identity verification", "Criminal record searches", "Financial history", "Address history", "Social media analysis"],
      id: "personal-checks"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Asset Protection",
      description: "Safeguard your assets with proactive strategies designed to prevent theft, damage, and loss.",
      features: ["Security assessments", "Risk analysis", "Loss prevention strategies", "Asset tracking", "Security consulting"],
      id: "asset-protection"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Corporate Investigations",
      description: "Protect your business from fraud, employee misconduct, or corporate espionage with discreet and thorough investigations.",
      features: ["Employee misconduct investigations", "Fraud detection", "Corporate espionage prevention", "Due diligence", "Internal theft investigations"],
      id: "corporate"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Insurance Claims Investigations",
      description: "Detect fraudulent claims with surveillance, interviews, and thorough verification processes.",
      features: ["Claim verification", "Surveillance operations", "Witness interviews", "Document analysis", "Expert testimony"],
      id: "insurance"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Infidelity Investigations",
      description: "Uncover the truth with professional surveillance and discreet evidence gathering.",
      features: ["Discreet surveillance", "Digital evidence collection", "Activity monitoring", "Photographic evidence", "Detailed reports"],
      id: "infidelity"
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Child Custody Investigations",
      description: "Ensure the safety and well-being of your child with investigations into parental care and living conditions.",
      features: ["Parental fitness evaluation", "Living condition assessment", "Activity monitoring", "Safety verification", "Court-ready documentation"],
      id: "custody"
    },
    {
      icon: <UserSearch className="w-8 h-8" />,
      title: "Missing Person Investigations",
      description: "Locate lost or missing individuals using advanced investigative techniques and resources.",
      features: ["Skip tracing", "Database searches", "Field investigations", "Interview techniques", "Location verification"],
      id: "missing-persons"
    },
    {
      icon: <Gavel className="w-8 h-8" />,
      title: "Criminal Investigations",
      description: "Gather evidence, conduct surveillance, and analyze records to assist in criminal cases, fraud, or legal matters.",
      features: ["Evidence collection", "Witness interviews", "Surveillance operations", "Case analysis", "Expert testimony"],
      id: "criminal"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Secure your digital infrastructure and protect sensitive data from cyber threats with our tailored solutions.",
      features: ["Security assessments", "Threat analysis", "Digital forensics", "Data protection", "Incident response"],
      id: "cybersecurity"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Surveillance & Security",
      description: "Monitor your property 24/7 with advanced surveillance systems to deter crime and provide critical evidence.",
      features: ["24/7 monitoring", "Advanced camera systems", "Motion detection", "Remote access", "Evidence documentation"],
      id: "surveillance"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Executive Protection",
      description: "Protect your leadership team with our tailored Executive Protection services, ensuring their safety during travel, events, and daily activities.",
      features: ["Personal protection", "Threat assessment", "Travel security", "Event security", "Risk mitigation"],
      id: "executive-protection"
    }
  ];

  return (
    <>
      <Navigation />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-prestige-black text-white py-20">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-white">
                Professional <span className="text-brand-gold">Investigative Services</span>
              </h1>
              <p className="text-base md:text-lg text-brand-light leading-relaxed">
                Comprehensive investigative solutions tailored to your specific needs. 
                Licensed, experienced, and committed to delivering court-ready results.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-prestige-black">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
                Our Services
              </h2>
              <p className="text-base md:text-lg text-brand-light max-w-2xl mx-auto">
                From background checks to complex investigations, we provide the expertise you need
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} id={service.id} className="card-dark group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-prestige-gold/20 rounded-full text-prestige-gold">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-brand-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
                      What&apos;s Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-brand-light">
                          <div className="w-1.5 h-1.5 bg-prestige-gold rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="w-full group-hover:shadow-gold-lg transition-all duration-200"
                  >
                    Request This Service
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-prestige-paper">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
                How We Work
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our proven process ensures thorough, professional investigations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-brand-gold mb-4">01</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Initial Consultation</h3>
                <p className="text-base text-brand-light">
                  We discuss your needs, objectives, and develop a customized investigation plan
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-brand-gold mb-4">02</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Professional Investigation</h3>
                <p className="text-base text-brand-light">
                  Our licensed investigators use legal methods and advanced techniques to gather evidence
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-brand-gold mb-4">03</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Detailed Reporting</h3>
                <p className="text-base text-brand-light">
                  You receive comprehensive, court-ready reports with actionable findings
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-prestige-black text-white">
          <div className="container max-w-6xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-white">
              Need a Custom Investigation?
            </h2>
            <p className="text-base md:text-lg mb-8 text-brand-light max-w-2xl mx-auto">
              Don&apos;t see exactly what you need? We handle unique cases and custom investigations. 
              Contact us to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Request Free Consultation
              </Button>
              <Button href="tel:786-556-3313" variant="secondary" size="lg">
                Call 786-556-3313
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
