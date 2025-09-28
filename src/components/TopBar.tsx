import { Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-prestige-black text-white text-sm py-2 border-b border-white/10">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a 
            href="tel:786-556-3313" 
            className="flex items-center gap-2 hover:text-prestige-gold transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>786-556-3313</span>
          </a>
          <a 
            href="mailto:Prestigeinvestigations@outlook.com" 
            className="flex items-center gap-2 hover:text-prestige-gold transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Prestigeinvestigations@outlook.com</span>
          </a>
        </div>
        <div className="text-prestige-gold font-semibold">
          Florida License #A1700257
        </div>
      </div>
    </div>
  );
}
