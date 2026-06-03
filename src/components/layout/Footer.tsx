import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 pt-16 pb-8 mt-auto">
      
      {/* THE FIX: Changed max-w-7xl mx-auto to w-full px-8 so it stretches 100% of the screen */}
      <div className="w-full px-8">
        
        {/* Top Grid: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 group mb-6 inline-flex">
              <div className="relative w-8 h-8">
                <div className="absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-sm shadow-lg shadow-blue-500/50 group-hover:bg-blue-400 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-teal-500 rounded-sm shadow-lg shadow-teal-500/50 group-hover:bg-teal-400 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 bg-slate-200 rounded-sm shadow-lg shadow-slate-200/10 group-hover:bg-white transition-colors z-10"></div>
              </div>
              <span className="font-bold text-xl tracking-wider text-white group-hover:text-blue-400 transition-colors">
                AEROSTATELAB
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Architecting scalable Enterprise Resource Planning (ERP) and Retail Management Systems (RMS) for high-volume, data-driven organizations.
            </p>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-sm uppercase">Solutions</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/solutions/hrms" className="hover:text-blue-400 transition-colors">Human Resources</Link></li>
              <li><Link to="/solutions/finance" className="hover:text-blue-400 transition-colors">Finance Ledger</Link></li>
              <li><Link to="/solutions/inventory" className="hover:text-blue-400 transition-colors">Supply Chain</Link></li>
              <li><Link to="/solutions/pos" className="hover:text-blue-400 transition-colors">Retail RMS</Link></li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-sm uppercase">Industries</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/industries/manufacturing" className="hover:text-blue-400 transition-colors">Manufacturing</Link></li>
              <li><Link to="/industries/healthcare" className="hover:text-blue-400 transition-colors">Healthcare</Link></li>
              <li><Link to="/industries/retail" className="hover:text-blue-400 transition-colors">Retail & POS</Link></li>
              <li><Link to="/industries/logistics" className="hover:text-blue-400 transition-colors">Logistics</Link></li>
           </ul>
         </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-sm uppercase">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link to="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Row: Copyright & Social Media */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800/60 gap-4">
          
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Aerostatelab. Architected for Enterprise.
          </p>

          {/* Social Media Links – Update href with your URLs */}
          <div className="flex items-center gap-5">

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/aerostatelab" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a href="https://x.com/aerostatelab" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="X (Twitter)">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/aerostatelab" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-pink-400 transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <circle cx="12" cy="12" r="5"></circle>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"></circle>
              </svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com/ravibharti072" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/918273329609" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-green-400 transition-colors" aria-label="WhatsApp">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;