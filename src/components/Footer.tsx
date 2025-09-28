import Link from 'next/link';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-prestige-black text-white border-t border-white/10">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-prestige-gold">
              Prestige Executive Investigations LLC
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in professional investigative services throughout South Florida. 
              Licensed, experienced, and committed to delivering results with complete confidentiality.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-prestige-gold" />
              <span className="text-prestige-gold font-semibold">
                Florida License #A1700257
              </span>
            </div>
            <p className="text-sm text-gray-400">
              All investigations conducted within legal boundaries. Confidential & Court-Ready reports.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-prestige-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-prestige-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-prestige-gold transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-prestige-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-prestige-gold transition-colors">
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-prestige-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-prestige-gold">Contact Info</h4>
            <div className="space-y-3">
              <a 
                href="tel:786-556-3313" 
                className="flex items-center gap-3 text-gray-300 hover:text-prestige-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>786-556-3313</span>
              </a>
              <a 
                href="mailto:Prestigeinvestigations@outlook.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-prestige-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Prestigeinvestigations@outlook.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>South Florida</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2 text-prestige-gold">Business Hours</h5>
              <p className="text-sm text-gray-400">
                24/7 Emergency Services Available
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Prestige Executive Investigations LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <span className="text-gray-400">Licensed • Bonded • Insured</span>
            <span className="text-prestige-gold font-semibold">Court-Ready Reports</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
