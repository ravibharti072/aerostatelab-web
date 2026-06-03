import { Link } from 'react-router-dom';

function Solutions() {
  // Master catalog of modules
  const catalog = [
    { badge: "HR & Analytics", title: "Human Resource Management", path: "/solutions/hrms", desc: "Handle employee files, payroll, attendance, and team tasks all from one single place." },
    { badge: "Supply Chain & Logistics", title: "Inventory & Warehouse", path: "/solutions/inventory", desc: "Stop running out of stock with smart inventory tracking, live multi-store monitoring, and automatic count updates." },
    { badge: "Sales & Client Management", title: "Customer Relationship", path: "/solutions/crm", desc: "Track staff records, clock-ins, payroll, and daily team operations in one easy dashboard." },
    { badge: "Ledger & Taxation", title: "Finance & Accounting", path: "/solutions/finance", desc: "Maintain absolute data integrity with real-time bookkeeping and instant financial reporting." },
    { badge: "Factory & Workflow", title: "Manufacturing Operations", path: "/solutions/manufacturing", desc: "Synchronize floor operations with live material tracking, workflow routing, and quality logging." },
    { badge: "Retail & Inventory Sync", title: "Retail & POS Systems", path: "/solutions/pos", desc: "Integrate billing, sales management, and inventory updates across physical and online stores." },
    { badge: "Procurement & Vendor Tracking", title: "Supply Chain Operations", path: "/solutions/procurement", desc: "Automate vendor selection, send requests instantly, and create purchase orders with a single click." },
    { badge: "Compensation & Financial Sync", title: "Payroll Management", path: "/solutions/payroll", desc: "Send direct deposits automatically, handle tax calculations, and manage employee benefits in one place." },
    { badge: "Data Matrix & Reporting", title: "Business Intelligence", path: "/solutions/analytics", desc: "Combine data from all your business branches into simple, real-time visual dashboards." }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-16 pb-24">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <span className="text-blue-500 font-bold tracking-widest text-xs uppercase bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full inline-block mb-6">
          System Architecture
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Enterprise Solutions <br/> <span className="text-slate-400">Master Catalog</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Explore the individual software matrices Aerostatelab engineers to unify your business. Select a core node below to view technical specifications, features, and performance metrics.
        </p>
      </div>

      {/* Grid Layout (Reusing standard Tailwind structures to avoid needing the external component) */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalog.map((item, index) => (
            <div key={index} className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-xl shadow-xl flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:shadow-blue-500/10 hover:shadow-2xl">
              <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest mb-3 block">
                {item.badge}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>
              
              <Link 
                to={item.path} 
                className="text-sm font-bold text-blue-500 flex items-center gap-2 group-hover:text-blue-400 transition-colors"
              >
                View Specifications 
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Solutions;