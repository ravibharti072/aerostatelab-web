import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden bg-white">
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-white pointer-events-none" />
      
      {/* Floating orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-blue-100/50 blur-[100px] animate-float-slow" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-cyan-100/40 blur-[120px] animate-float-slower" />
      </div>

      {/* Left Column */}
      <div className="lg:w-1/2 relative z-10 animate-fade-in-up">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-100/60 border border-blue-200 px-4 py-1.5 rounded-full mb-6 opacity-0 animate-fade-in-up animate-delay-100">
          Enterprise Resource Planning
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6 opacity-0 animate-fade-in-up animate-delay-200">
          Cloud ERP{" "}
          <br className="hidden md:block" />
          Software Built{" "}
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x">
            for Scalable{" "}
            <br className="hidden md:block" />
            Business Operations.
          </span>
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl opacity-0 animate-fade-in-up animate-delay-300">
          Aerostatelab develops scalable ERP systems that help businesses automate workflows, manage operations, centralize data, and improve decision-making across finance, HR, inventory, manufacturing, CRM, and supply chain management.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animate-delay-400">
          <Link
            to="/solutions"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:scale-105 text-center"
          >
            Explore Solutions
          </Link>
          <Link
            to="/contact"
            className="bg-white border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 text-center"
          >
            Book a Consultation
          </Link>
        </div>
      </div>

      {/* Right Column – FIXED DASHBOARD */}
      <div className="lg:w-1/2 relative flex justify-center lg:justify-end w-full animate-fade-in-up animate-delay-500">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-100/40 blur-3xl rounded-full pointer-events-none animate-pulse-soft" />
        
        <div className="relative w-full max-w-lg bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl overflow-hidden z-20 flex flex-col shadow-xl shadow-gray-200/50 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100/60">
          
          {/* Top edge definition */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-60 z-30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none z-30" />

          {/* Header bar – slightly darker */}
          <div className="bg-gray-100/70 border-b border-gray-200/70 px-4 py-3 flex items-center justify-between relative z-20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            </div>
            <span className="text-xs font-mono text-gray-400">aerostatelab_os // CORE_NODE</span>
          </div>

          {/* Cards */}
          <div className="p-5 grid grid-cols-2 gap-4 bg-gray-50/40 relative z-20">
            <div className="bg-white border border-gray-200 p-4 rounded-xl col-span-2 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Revenue Matrix</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">+14.2%</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 tracking-tight">$2,484,190</div>
              <div className="flex items-end gap-2 h-12 mt-4">
                <div className="w-full bg-blue-100 h-1/3 rounded-t-sm animate-grow-bar-1"></div>
                <div className="w-full bg-blue-200 h-1/2 rounded-t-sm animate-grow-bar-2"></div>
                <div className="w-full bg-blue-300 h-2/3 rounded-t-sm animate-grow-bar-3"></div>
                <div className="w-full bg-cyan-200 h-[45%] rounded-t-sm animate-grow-bar-4"></div>
                <div className="w-full bg-blue-400 h-4/5 rounded-t-sm animate-grow-bar-5"></div>
                <div className="w-full bg-blue-500 h-[95%] rounded-t-sm shadow-[0_0_12px_rgba(59,130,246,0.4)] animate-grow-bar-6"></div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Inventory Sync</span>
              <div className="text-xl font-bold text-gray-800">94,210 <span className="text-xs text-gray-400 font-normal">Units</span></div>
              <div className="w-full bg-gray-100 rounded-full h-1.5 mt-4 overflow-hidden border border-gray-200">
                <div className="bg-blue-500 h-1.5 rounded-full w-[82%] shadow-[0_0_8px_rgba(59,130,246,0.3)] animate-pulse-bar"></div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">CRM Active</span>
              <div className="text-xl font-bold text-gray-800">1,402 <span className="text-xs text-gray-400 font-normal">Leads</span></div>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.6)]"></div>
                <span className="text-[10px] font-mono text-gray-400 tracking-wider uppercase">Live Sync</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-xl col-span-2 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">HR Analytics</span>
                <div className="text-xs text-gray-400 font-mono">Workforce Deployments</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">342</div>
                  <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Active Nodes</div>
                </div>
                <div className="w-9 h-9 rounded-full border-4 border-gray-200 border-t-blue-500 border-r-cyan-400 transform rotate-45 animate-spin-slow filter drop-shadow-[0_0_4px_rgba(59,130,246,0.2)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes float-slow { 0%, 100% { transform: translateY(0) translateX(0); } 33% { transform: translateY(-10px) translateX(5px); } 66% { transform: translateY(5px) translateX(-5px); } }
        @keyframes float-slower { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-15px) translateX(-10px); } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes gradient-x { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes pulse-soft { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; transform: scale(1.02); } }
        @keyframes spin-slow { from { transform: rotate(45deg); } to { transform: rotate(405deg); } }
        @keyframes pulse-bar { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
        @keyframes grow-bar { from { transform: scaleY(0); } }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 12s ease-in-out infinite; }
        .animate-fade-in-up { opacity: 0; animation: fade-in-up 0.7s ease-out forwards; }
        .animate-delay-100 { animation-delay: 0.1s; } .animate-delay-200 { animation-delay: 0.2s; } .animate-delay-300 { animation-delay: 0.3s; } .animate-delay-400 { animation-delay: 0.4s; } .animate-delay-500 { animation-delay: 0.5s; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 3s ease infinite; }
        .animate-pulse-soft { animation: pulse-soft 5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-pulse-bar { animation: pulse-bar 2s ease-in-out infinite; }
        .animate-grow-bar-1 { animation: grow-bar 0.6s ease-out forwards; transform-origin: bottom; }
        .animate-grow-bar-2 { animation: grow-bar 0.6s 0.1s ease-out forwards; transform-origin: bottom; }
        .animate-grow-bar-3 { animation: grow-bar 0.6s 0.2s ease-out forwards; transform-origin: bottom; }
        .animate-grow-bar-4 { animation: grow-bar 0.6s 0.3s ease-out forwards; transform-origin: bottom; }
        .animate-grow-bar-5 { animation: grow-bar 0.6s 0.4s ease-out forwards; transform-origin: bottom; }
        .animate-grow-bar-6 { animation: grow-bar 0.6s 0.5s ease-out forwards; transform-origin: bottom; }
      `}</style>
    </section>
  );
}

export default HeroSection;