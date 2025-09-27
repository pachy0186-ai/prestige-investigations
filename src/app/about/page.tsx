import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Award, Users, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Prestige Executive Investigations LLC',
  description: 'Learn about our professional investigative team, our mission, and our commitment to providing confidential, reliable services in South Florida.',
};

export default function About() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0b2a6f] to-[#1e40af] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Prestige Executive Investigations</h1>
              <p className="text-xl text-blue-200">
                Your trusted partner in professional investigative services throughout South Florida
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#0b2a6f]">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Prestige Executive Investigations LLC, our mission is to provide professional, confidential, 
                  and thorough investigative services that help our clients uncover the truth and protect their interests. 
                  We are committed to maintaining the highest standards of integrity, discretion, and professionalism 
                  in every case we handle.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#0b2a6f]">Who We Are</h3>
                  <p className="text-gray-700 mb-4">
                    Prestige Executive Investigations LLC is a licensed private investigation firm based in South Florida. 
                    We specialize in a comprehensive range of investigative services for individuals, businesses, 
                    attorneys, and organizations throughout the region.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our team brings years of experience in investigative work, with a deep understanding of both 
                    traditional investigation techniques and modern technology. We pride ourselves on our ability 
                    to handle sensitive matters with the utmost discretion and professionalism.
                  </p>
                  <p className="text-gray-700">
                    Whether you need background checks, surveillance, corporate investigations, or specialized 
                    services like executive protection, we have the expertise and resources to deliver results.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0b2a6f] rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-[#facc15]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Licensed & Professional</h4>
                      <p className="text-gray-600">Florida License #A1700257 - fully licensed and insured</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0b2a6f] rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-[#facc15]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Experienced Team</h4>
                      <p className="text-gray-600">Years of investigative expertise across multiple disciplines</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0b2a6f] rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-[#facc15]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Client-Focused</h4>
                      <p className="text-gray-600">Dedicated to understanding and meeting your specific needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0b2a6f] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-[#facc15]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Confidential Service</h4>
                      <p className="text-gray-600">Complete discretion and confidentiality in all our work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#0b2a6f]">Our Values</h2>
                <p className="text-lg text-gray-600">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0b2a6f] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-[#facc15]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#0b2a6f]">Integrity</h3>
                  <p className="text-gray-600">
                    We conduct all investigations with the highest ethical standards and complete honesty.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0b2a6f] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-[#facc15]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#0b2a6f]">Discretion</h3>
                  <p className="text-gray-600">
                    Your privacy and confidentiality are paramount in every case we handle.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0b2a6f] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-[#facc15]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#0b2a6f]">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in every investigation, delivering thorough and accurate results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#0b2a6f]">Why Choose Prestige Investigations?</h2>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#facc15] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Licensed and Insured</h3>
                    <p className="text-gray-700">
                      We are fully licensed by the State of Florida (License #A1700257) and carry comprehensive 
                      insurance to protect our clients and our work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#facc15] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Comprehensive Services</h3>
                    <p className="text-gray-700">
                      From background checks to complex corporate investigations, we offer a full range of 
                      investigative services to meet diverse client needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#facc15] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Local Expertise</h3>
                    <p className="text-gray-700">
                      Based in South Florida, we have deep knowledge of the local area, laws, and resources 
                      that can be crucial to successful investigations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#facc15] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Court-Ready Reports</h3>
                    <p className="text-gray-700">
                      Our detailed, professional reports are prepared to meet legal standards and can be 
                      used in court proceedings when necessary.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#facc15] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Bilingual Capabilities</h3>
                    <p className="text-gray-700">
                      We offer services in both English and Spanish to better serve our diverse South Florida community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0b2a6f] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
              Contact us today to discuss your investigative needs. We&apos;re here to help you find the answers you&apos;re looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:786-556-3313" className="btn-secondary text-lg px-8 py-4">
                Call 786-556-3313
              </a>
              <a href="mailto:Prestigeinvestigations@outlook.com" className="bg-white text-[#0b2a6f] hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg">
                Send Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
