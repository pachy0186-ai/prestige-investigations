'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What services does Prestige Executive Investigations offer?",
      answer: "We offer a comprehensive range of investigative services including tenant screening, employment background checks, personal background checks, asset protection, corporate investigations, insurance claims investigations, infidelity investigations, child custody investigations, missing person investigations, criminal investigations, cybersecurity services, surveillance & security, and executive protection."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, Prestige Executive Investigations LLC is fully licensed by the State of Florida with License #A1700257. We are also fully bonded and insured to protect our clients and our work."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing varies depending on the type and complexity of the investigation. We offer competitive rates and provide detailed quotes after discussing your specific needs. Contact us for a free consultation and customized quote for your case."
    },
    {
      question: "How long does an investigation typically take?",
      answer: "The duration of an investigation depends on several factors including the type of case, complexity, and available information. Simple background checks may be completed within 24-48 hours, while complex investigations can take several weeks. We'll provide you with a realistic timeline during our initial consultation."
    },
    {
      question: "Is everything confidential?",
      answer: "Absolutely. Confidentiality is paramount in our business. All information shared with us and all findings from our investigations are kept strictly confidential. We maintain the highest standards of discretion and professionalism in all our work."
    },
    {
      question: "What areas do you serve?",
      answer: "We are based in South Florida and primarily serve this region. However, as a Florida-licensed private investigation firm, we can conduct investigations throughout the state of Florida. For cases requiring work outside of Florida, we have a network of trusted partners."
    },
    {
      question: "Do you provide court testimony?",
      answer: "Yes, our investigators can provide expert testimony in court when needed. Our reports are prepared to meet legal standards and can be used as evidence in legal proceedings. We have experience testifying in various types of cases."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy. Simply contact us by phone at 786-556-3313 or email at Prestigeinvestigations@outlook.com. We'll schedule a confidential consultation to discuss your needs and determine how we can help you."
    },
    {
      question: "What information do you need to begin an investigation?",
      answer: "The information needed varies by case type. Generally, we need basic details about the subject(s) of investigation, your specific concerns or objectives, and any relevant background information you can provide. We'll guide you through what's needed during our initial consultation."
    },
    {
      question: "Are your investigations legal?",
      answer: "Yes, all our investigations are conducted within the bounds of federal, state, and local laws. As licensed professionals, we adhere to strict ethical and legal standards. We never engage in illegal activities such as trespassing, hacking, or other unlawful methods."
    },
    {
      question: "Do you work with attorneys?",
      answer: "Yes, we frequently work with attorneys on various types of cases including criminal defense, civil litigation, family law, and corporate matters. We understand the legal requirements for evidence and can provide court-ready reports and testimony."
    },
    {
      question: "Can you guarantee results?",
      answer: "While we cannot guarantee specific outcomes, we can guarantee that we will conduct a thorough, professional investigation using all legal means available. Our experienced team has a high success rate, and we'll keep you informed throughout the process."
    },
    {
      question: "Do you offer emergency or after-hours services?",
      answer: "Yes, we understand that some situations require immediate attention. We offer 24/7 emergency services for urgent matters. Contact us at 786-556-3313 and we'll respond promptly to assess your situation."
    },
    {
      question: "What makes Prestige Investigations different from other firms?",
      answer: "Our commitment to professionalism, discretion, and results sets us apart. We combine years of investigative experience with modern technology and techniques. We're locally based in South Florida, fully licensed, and offer bilingual services. Most importantly, we treat each case with the attention and care it deserves."
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-blue-200">
                Get answers to common questions about our investigative services
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#0b2a6f]">Common Questions</h2>
                <p className="text-lg text-gray-600">
                  Find answers to the most frequently asked questions about our services, process, and policies.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      onClick={() => toggleItem(index)}
                    >
                      <h3 className="text-lg font-semibold text-[#0b2a6f] pr-4">
                        {faq.question}
                      </h3>
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-[#facc15] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#facc15] flex-shrink-0" />
                      )}
                    </button>
                    {openItems.includes(index) && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#0b2a6f]">Still Have Questions?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              If you don't see your question answered here, don't hesitate to contact us. 
              We're here to help and provide you with the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:786-556-3313" className="btn-primary text-lg px-8 py-4">
                Call 786-556-3313
              </a>
              <a href="mailto:Prestigeinvestigations@outlook.com" className="bg-white text-[#0b2a6f] border-2 border-[#0b2a6f] hover:bg-[#0b2a6f] hover:text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-200">
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
