import { Link } from 'react-router-dom';

function Industries() {
  // Enterprise data matrix for the 8 target industries
  const industrySectors = [
    {
      name: "Manufacturing",
      badge: "Factory Operations",
      description: "Live shop-floor telemetry, automated raw material depletion sync, and precision quality-control milestone logging.",
      icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" 
    },
    {
      name: "Healthcare",
      badge: "Clinical Data",
      description: "HIPAA-compliant patient record architecture, secure pharmaceutical inventory tracking, and staff allocation grids.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    },
    {
      name: "Retail",
      badge: "Omnichannel RMS",
      description: "Live point-of-sale synchronization, automated multi-store inventory routing, and digital checkout integration.",
      icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    },
    {
      name: "Logistics",
      badge: "Supply Pipeline",
      description: "Predictive freight routing, live fleet telemetry arrays, and automated cross-border compliance documentation.",
      icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
    },
    {
      name: "Construction",
      badge: "Project Ledger",
      description: "Lifecycle project bidding pipelines, contractor payout synchronization, and heavy equipment allocation trackers.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
      name: "Education",
      badge: "Campus Hub",
      description: "Centralized student credential databases, faculty scheduling matrices, and automated tuition ledger reconciliation.",
      icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
    },
    {
      name: "Trading",
      badge: "Market Matrix",
      description: "High-frequency commodity tracking, automated international procurement logic, and real-time ledger conversions.",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    },
    {
      name: "Hospitality",
      badge: "Service Network",
      description: "Real-time reservation pooling, seasonal pricing automation matrices, and dynamic facility maintenance scheduling.",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-16 pb-24 relative overflow-hidden">
      
      {/* Background Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-20">
          <span className="text-teal-400 font-bold tracking-widest text-xs uppercase bg-teal-400/10 border border-teal-400/20 px-4 py-1.5 rounded-full inline-block mb-6">
            Deployment Sectors
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Industries <span className="text-slate-500">Served</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Aerostatelab does not build generic software. We architect highly specialized, industry-compliant software matrices tailored to the exact operational bottlenecks of your sector.
          </p>
        </div>

        {/* 8-Sector Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industrySectors.map((sector, index) => (
            <div 
              key={index} 
              className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 p-6 rounded-xl shadow-lg flex flex-col group hover:-translate-y-1 hover:border-blue-500/40 transition-all duration-300"
            >
              {/* Top Row: Icon & Badge */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700 text-blue-400 group-hover:bg-blue-500/10 group-hover:text-blue-300 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={sector.icon} />
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  {sector.badge}
                </span>
              </div>
              
              {/* Body: Title & Desc */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {sector.name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {sector.description}
              </p>

              {/* Action Link */}
              <Link 
                to="/contact" 
                className="text-xs font-bold text-slate-300 flex items-center gap-2 group-hover:text-white transition-colors mt-auto pt-4 border-t border-slate-800/60"
              >
                Request {sector.name} Specs
                <span className="group-hover:translate-x-1 transition-transform text-blue-500">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Industries;