import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const services = [
    'Background Checks',
    'Surveillance',
    'Corporate Investigations',
    'Infidelity Investigations',
    'Child Custody Investigations',
    'Asset Protection',
  ];

  return (
    <footer className="bg-[#1f2937] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#facc15]">
              Prestige Executive Investigations LLC
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in professional investigative services. We specialize in providing confidential, reliable, and thorough services to meet your needs.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone size={16} className="text-[#facc15]" />
                <a href="tel:786-556-3313" className="hover:text-[#facc15] transition-colors">
                  786-556-3313
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail size={16} className="text-[#facc15]" />
                <a href="mailto:Prestigeinvestigations@outlook.com" className="hover:text-[#facc15] transition-colors">
                  Prestigeinvestigations@outlook.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin size={16} className="text-[#facc15]" />
                <span>South Florida</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#facc15]">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#facc15] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#facc15]">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-[#facc15] transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#facc15]">Connect With Us</h3>
            <p className="text-gray-300 text-sm">
              Follow us on social media for updates and insights.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-[#0b2a6f] rounded-full hover:bg-[#facc15] hover:text-[#0b2a6f] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-[#0b2a6f] rounded-full hover:bg-[#facc15] hover:text-[#0b2a6f] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <div className="mt-6 p-4 bg-[#0b2a6f] rounded-lg">
              <p className="text-[#facc15] font-semibold text-sm">Licensed Professional</p>
              <p className="text-white text-sm">Agency License #A1700257</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Prestige Executive Investigations LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-[#facc15] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#facc15] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
