import { Metadata } from 'next';
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
  Phone,
  Mail
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | Prestige Executive Investigations LLC',
  description: 'Comprehensive private investigation services including background checks, surveillance, corporate investigations, and more. Licensed PI in South Florida.',
};

export default function Services() {
  const services = [
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Tenant Screening",
      description: "Ensure you're renting to reliable tenants with our comprehensive background checks, including rental history, credit reports, and criminal records.",
      features: ["Credit report analysis", "Criminal background checks", "Rental history verification", "Employment verification", "Reference checks"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Employment Background Checks",
      description: "Hire with confidence by verifying a candidate's work history, education, and criminal background.",
      features: ["Employment history verification", "Education verification", "Criminal background checks", "Professional license verification", "Reference checks"]
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Personal Background Checks",
      description: "Get detailed background reports on individuals, including identity verification, criminal records, and financial history.",
      features: ["Identity verification", "Criminal record searches", "Financial history", "Address history", "Social media analysis"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Asset Protection and Loss Prevention",
      description: "Safeguard your assets with proactive strategies designed to prevent theft, damage, and loss.",
      features: ["Security assessments", "Risk analysis", "Loss prevention strategies", "Asset tracking", "Security consulting"]
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Corporate Investigations",
      description: "Protect your business from fraud, employee misconduct, or corporate espionage with discreet and thorough investigations.",
      features: ["Employee misconduct investigations", "Fraud detection", "Corporate espionage prevention", "Due diligence", "Compliance investigations"]
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Insurance Claim Investigations",
      description: "Detect fraudulent claims with surveillance, interviews, and thorough verification processes.",
      features: ["Claim verification", "Surveillance operations", "Witness interviews", "Document analysis", "Expert testimony"]
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Infidelity Investigations",
      description: "Uncover the truth with professional surveillance and discreet evidence gathering.",
      features: ["Discreet surveillance", "Evidence documentation", "Activity monitoring", "Digital forensics", "Court-admissible reports"]
    },
    {
      icon: <Baby className="w-12 h-12" />,
      title: "Child Custody Investigations",
      description: "Ensure the safety and well-being of your child with investigations into parental care and living conditions.",
      features: ["Parental fitness evaluation", "Living condition assessment", "Activity monitoring", "Safety evaluations", "Court testimony"]
    },
    {
      icon: <UserSearch className="w-12 h-12" />,
      title: "Missing Person Investigations",
      description: "Locate lost or missing individuals using advanced investigative techniques and resources.",
      features: ["Skip tracing", "Database searches", "Field investigations", "Social media analysis", "Family reunification"]
    },
    {
      icon: <Gavel className="w-12 h-12" />,
      title: "Criminal Investigations",
      description: "Gather evidence, conduct surveillance, and analyze records to assist in criminal cases, fraud, or legal matters.",
      features: ["Evidence collection", "Witness interviews", "Crime scene analysis", "Legal support", "Expert testimony"]
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Cybersecurity",
      description: "Secure your digital infrastructure and protect sensitive data from cyber threats with our tailored solutions.",
      features: ["Security assessments", "Vulnerability testing", "Digital forensics", "Incident response", "Security training"]
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Surveillance and Security Cameras",
      description: "Monitor your property 24/7 with advanced surveillance systems to deter crime and provide critical evidence.",
      features: ["Video surveillance", "Covert operations", "Mobile surveillance", "Equipment installation", "Evidence documentation"]
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Executive Protection",
      description: "Protect your leadership team with our tailored Executive Protection services, ensuring their safety during travel, events, and daily activities.",
      features: ["Personal protection", "Threat assessment", "Security planning", "Travel security", "Event security"]
    }
  ];

  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0b2a6f] to-[#1e40af] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-blue-200">
                Comprehensive investigative services tailored to your specific needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#0b2a6f]">Professional Investigation Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Prestige Executive Investigations, we offer a comprehensive range of professional investigative services 
                designed to meet the diverse needs of our clients throughout South Florida.
              </p>
            </div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                      <div className="text-[#0b2a6f] mb-6">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-[#0b2a6f]">{service.title}</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#facc15] rounded-full"></div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-gray-100 h-64 lg:h-80 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="text-[#0b2a6f] mb-4 flex justify-center">
                          {service.icon}
                        </div>
                        <p className="text-lg font-semibold">{service.title}</p>
                        <p className="text-sm">Professional Service</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#0b2a6f]">Why Choose Our Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0b2a6f] rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8 text-[#facc15]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Licensed & Professional</h3>
                  <p className="text-gray-600">Florida License #A1700257 - fully licensed and insured for your protection.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0b2a6f] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-[#facc15]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Confidential & Discreet</h3>
                  <p className="text-gray-600">Complete confidentiality and discretion in all our investigative work.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0b2a6f] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gavel className="w-8 h-8 text-[#facc15]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Court-Ready Reports</h3>
                  <p className="text-gray-600">Professional reports that meet legal standards and can be used in court.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0b2a6f] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Our Services?</h2>
            <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
              Contact us today to discuss your specific needs. We're here to provide professional, 
              confidential investigative services tailored to your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:786-556-3313" className="btn-secondary text-lg px-8 py-4">
                Call Now
              </a>
              <a href="/contact" className="bg-white text-[#0b2a6f] hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg">
                Get Quote
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
