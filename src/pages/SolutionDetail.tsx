import { useParams, Link } from 'react-router-dom';

// Type definitions for our enterprise system data mapping
interface ModuleContent {
  title: string;
  badge: string;
  description: string;
  extendedSummary: string;
  features: string[];
  metrics: { label: string; value: string }[];
}

function SolutionDetail() {
  const { moduleId } = useParams<{ moduleId: string }>();

  // Centralized data repository for all 9 core enterprise modules
  const dynamicContent: Record<string, ModuleContent> = {
    hrms: {
      title: "Human Resource Management",
      badge: "HR & Analytics",
      description: "Handle employee files, payroll, attendance, and team tasks all from one single place.",
      extendedSummary: "Our premium HRMS architecture isolates resource planning data to optimize operational team velocity, track performance metrics natively, and eliminate tracking overlaps across multi-branch environments.",
      features: ["Automated onboarding workflows", "Role-based metric tracking dashboards", "Granular time-log auditing nodes"],
      metrics: [{ label: "Processing Speed", value: "< 1.2s" }, { label: "Data Integrity", value: "99.99%" }]
    },
    inventory: {
      title: "Inventory & Warehouse Management",
      badge: "Supply Chain & Logistics",
      description: "Stop running out of stock with smart inventory tracking, live multi-store monitoring, and automatic count updates.",
      extendedSummary: "A highly resilient material allocation engine built to manage inventory pipelines, map multisite assets, and handle predictive vendor restocking schedules automatically.",
      features: ["Predictive stocking node tracking", "Live multisite asset mapping", "Automated inventory sync filters"],
      metrics: [{ label: "Stock Accuracy", value: "100%" }, { label: "Sync Latency", value: "Real-time" }]
    },
    crm: {
      title: "Customer Relationship Management",
      badge: "Sales & Client Management",
      description: "Track staff records, clock-ins, payroll, and daily team operations in one easy dashboard.",
      extendedSummary: "Accelerate pipeline transaction velocities and maximize client engagement lifetime metrics using a secure, unified client lifecycle tracking matrix.",
      features: ["Automated routing pipelines", "Integrated valuation matrices", "Native milestone activity logs"],
      metrics: [{ label: "Lead Conversion", value: "+28.4%" }, { label: "Routing Latency", value: "0ms" }]
    },
    finance: {
      title: "Finance & Accounting",
      badge: "Ledger & Taxation",
      description: "Maintain absolute data integrity with real-time bookkeeping and instant financial reporting.",
      extendedSummary: "Engineered specifically for multi-tenant B2B commerce structures, bringing absolute isolation, compliance logging accuracy, and deep visual audits to financial ledgers.",
      features: ["Real-time dual-entry ledgers", "Isolated credit routing pathways", "Instant taxation report compiler"],
      metrics: [{ label: "Audit Accuracy", value: "Auditable" }, { label: "Encryption", value: "AES-256" }]
    },
    manufacturing: {
      title: "Manufacturing Operations",
      badge: "Factory & Workflow",
      description: "Synchronize floor operations with live material tracking, workflow routing, and quality logging.",
      extendedSummary: "Brings complete visibility to shop floor processes by connecting materials depletion data directly with operational assembly schedules and quality logging pipelines.",
      features: ["Live shop-floor data streams", "Automated item routing steps", "Quality compliance checkpoints"],
      metrics: [{ label: "Floor Efficiency", value: "+18.2%" }, { label: "Defect Rate", value: "0.001%" }]
    },
    pos: {
      title: "Retail & POS Systems",
      badge: "Retail & Inventory Sync",
      description: "Integrate billing, sales management, and inventory updates across physical and online stores.",
      extendedSummary: "An omnichannel store checkout module built to withstand high transactional throughput, bridging physical registers cleanly with digital inventory streams.",
      features: ["High-throughput checkout matrix", "Omnichannel order pooling", "Offline transaction buffers"],
      metrics: [{ label: "Max TPS", value: "10k+" }, { label: "Uptime SLA", value: "99.999%" }]
    },
    procurement: {
      title: "Supply Chain Operations",
      badge: "Procurement & Vendor Tracking",
      description: "Automate vendor selection, send requests instantly, and create purchase orders with a single click.",
      extendedSummary: "Streamlines institutional purchasing channels by automatically compiling RFPs, tracking material sources, and formatting supply sheets.",
      features: ["Automated vendor selection logic", "Instant RFP broadcast arrays", "Single-click purchase generators"],
      metrics: [{ label: "Sourcing Speed", value: "3x Faster" }, { label: "Cost Leakage", value: "0.0%" }]
    },
    payroll: {
      title: "Payroll Management",
      badge: "Compensation & Financial Sync",
      description: "Send direct deposits automatically, handle tax calculations, and manage employee benefits in one place.",
      extendedSummary: "An isolated fiscal sub-node executing localized compliance calculations, automated clearing house wire distributions, and compensation benefit layers securely.",
      features: ["Automated deposit triggers", "Dynamic tax code compliance", "Unified benefits tracking"],
      metrics: [{ label: "Compliance Score", value: "100%" }, { label: "Error Margin", value: "0.00%" }]
    },
    analytics: {
      title: "Business Intelligence",
      badge: "Data Matrix & Reporting",
      description: "Combine data from all your business branches into simple, real-time visual dashboards.",
      extendedSummary: "An advanced data compilation dashboard that aggregates segmented corporate operational metrics, transforming high-volume data streams into readable business intelligence signals.",
      features: ["Multi-branch data collectors", "Sleek charts visualization layout", "Predictive business logic engines"],
      metrics: [{ label: "Processing Power", value: "PetaFLOPS" }, { label: "Refresh Delta", value: "< 50ms" }]
    }
  };

  const module = moduleId ? dynamicContent[moduleId] : null;

  // Fallback view if the module key does not exist in our system mapping registry
  if (!module) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-2xl font-bold text-white mb-4">System Node Not Found</h2>
        <p className="text-slate-400 mb-8">The requested module path is invalid or undergoing server updates.</p>
        <Link to="/" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-colors">
          Return to Core Console
        </Link>
      </div>
    );
  }

  return (
    <section className="relative max-w-5xl mx-auto px-6 py-16 lg:py-24">
      {/* Visual Ambient Glow Background Layer */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Nav Breadcrumb */}
      <div className="mb-8">
        <Link to="/" className="text-sm font-mono text-blue-400 hover:text-blue-300 transition-colors">
          &larr; console // systems_grid
        </Link>
      </div>

      {/* Header Container */}
      <div className="border-b border-slate-800/60 pb-10 mb-12">
        <span className="text-xs font-bold text-blue-500 uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full inline-block mb-4">
          {module.badge}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
          {module.title}
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
          {module.extendedSummary}
        </p>
      </div>

      {/* Grid Details Block */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Core System Features Column */}
        <div className="md:col-span-2 space-y-6">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Architecture Features
          </h3>
          <ul className="space-y-4">
            {module.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300 bg-slate-900/40 border border-slate-800/40 p-4 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(45,212,191,0.6)]"></div>
                <span className="text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Operational Performance Node Column */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Performance Metrics
          </h3>
          <div className="bg-slate-900/60 border border-slate-800/60 p-6 rounded-xl space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none"></div>
            {module.metrics.map((metric, idx) => (
              <div key={idx} className="border-b border-slate-800/60 last:border-0 pb-4 last:pb-0">
                <span className="text-xs font-mono text-slate-500 block mb-1 uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="text-2xl font-bold text-white font-sans tracking-tight">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Quick System Action CTA Link */}
          <Link 
            to="/contact" 
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg shadow-blue-500/20 text-center block text-sm"
          >
            Request Deployment Setup
          </Link>
        </div>

      </div>
    </section>
  );
}

export default SolutionDetail;