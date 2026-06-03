import { Link } from 'react-router-dom';

function Navbar() {
  const solutionLinks = [
    { name: "Human Resource Management", path: "/solutions/hrms" },
    { name: "Inventory & Warehouse", path: "/solutions/inventory" },
    { name: "Customer Relationship", path: "/solutions/crm" },
    { name: "Finance & Accounting", path: "/solutions/finance" },
    { name: "Manufacturing Operations", path: "/solutions/manufacturing" },
    { name: "Retail & POS Systems", path: "/solutions/pos" },
    { name: "Supply Chain Operations", path: "/solutions/procurement" },
    { name: "Payroll Management", path: "/solutions/payroll" },
    { name: "Business Intelligence", path: "/solutions/analytics" },
  ];

  const industryLinks = [
    { name: "Manufacturing", path: "/industries/manufacturing" },
    { name: "Healthcare", path: "/industries/healthcare" },
    { name: "Retail & POS", path: "/industries/retail" },
    { name: "Logistics", path: "/industries/logistics" },
    { name: "Construction", path: "/industries/construction" },
    { name: "Education", path: "/industries/education" },
    { name: "Trading", path: "/industries/trading" },
    { name: "Hospitality", path: "/industries/hospitality" },
  ];

  return (
    <nav className="flex items-center justify-between py-6 px-8 border-b border-slate-700 bg-slate-950 sticky top-0 z-50 shadow-md">
      
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-3 group">
        <div className="relative w-8 h-8">
          <div className="absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-sm shadow-lg shadow-blue-500/50"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-teal-500 rounded-sm shadow-lg shadow-teal-500/50"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-slate-200 rounded-sm shadow-lg shadow-slate-200/10 z-10"></div>
        </div>
        <span className="font-bold text-xl tracking-wider text-white">AEROSTATELAB</span>
      </Link>
      
      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-8 text-base font-semibold text-slate-300">
        <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>

        {/* Solutions Dropdown */}
        <div className="relative group">
          <button className="hover:text-blue-400 transition-colors flex items-center gap-1">
            Solutions
            <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div className="absolute top-full left-0 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-2 flex flex-col">
              {solutionLinks.map((link) => (
                <Link key={link.name} to={link.path} className="px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-blue-500/20 rounded-lg">{link.name}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* Industries Dropdown */}
        <div className="relative group">
          <button className="hover:text-blue-400 transition-colors flex items-center gap-1">
            Industries
            <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-2 flex flex-col">
              {industryLinks.map((link) => (
                <Link key={link.name} to={link.path} className="px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-teal-500/20 rounded-lg">{link.name}</Link>
              ))}
            </div>
          </div>
        </div>

        <Link to="/services" className="hover:text-blue-400 transition-colors">Our Approach</Link>
        <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
        <Link to="/why-choose-us" className="hover:text-blue-400 transition-colors">Why Choose Us</Link>
        <Link to="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link>
      </div>

      {/* Right Flank: Login + Contact */}
      <div className="flex items-center gap-4">
        <Link to="/login" className="text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 font-semibold px-5 py-2 rounded-lg text-sm transition-all bg-slate-800/20">Login</Link>
        <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-blue-500/20">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;