import { useParams, Link } from 'react-router-dom';

// Type definitions for industry data mapping
interface IndustryContent {
  title: string;
  badge: string;
  description: string;
  extendedSummary: string;
  coreSolutions: string[];
  metrics: { label: string; value: string }[];
}

function IndustryDetail() {
  const { sectorId } = useParams<{ sectorId: string }>();

  // Centralized data repository for all 8 target industries
  const dynamicContent: Record<string, IndustryContent> = {
    manufacturing: {
      title: "Manufacturing Operations",
      badge: "Factory Operations",
      description: "Live shop-floor telemetry, automated raw material depletion sync, and precision quality-control milestone logging.",
      extendedSummary: "Aerostatelab engineers high-tolerance ERP networks for the manufacturing sector. We connect your raw material pipeline directly to shop-floor telemetry, ensuring zero operational bottlenecks and automated compliance logging.",
      coreSolutions: ["Real-time yield monitoring", "Predictive material depletion algorithms", "Automated quality-control checkpoints"],
      metrics: [{ label: "Efficiency Gain", value: "+22.4%" }, { label: "Downtime", value: "< 0.1%" }]
    },
    healthcare: {
      title: "Healthcare Systems",
      badge: "Clinical Data",
      description: "HIPAA-compliant patient record architecture, secure pharmaceutical inventory tracking, and staff allocation grids.",
      extendedSummary: "We build isolated, ultra-secure data matrices for clinical environments. Our systems ensure absolute HIPAA compliance while synchronizing complex staff rotas with real-time pharmaceutical inventory depletion.",
      coreSolutions: ["Encrypted patient ledger nodes", "Pharmaceutical asset tracking", "Dynamic clinical staff routing"],
      metrics: [{ label: "Compliance", value: "HIPAA" }, { label: "Data Uptime", value: "99.999%" }]
    },
    retail: {
      title: "Retail & Omnichannel",
      badge: "Omnichannel RMS",
      description: "Live point-of-sale synchronization, automated multi-store inventory routing, and digital checkout integration.",
      extendedSummary: "Our Retail Management Systems (RMS) are built for massive transaction volumes. We seamlessly bridge your physical storefront hardware with your digital e-commerce pipelines, creating a single source of inventory truth.",
      coreSolutions: ["High-throughput POS synchronization", "Multi-branch asset reconciliation", "Native consumer loyalty tracking"],
      metrics: [{ label: "Max TPS", value: "10k+" }, { label: "Sync Speed", value: "Real-time" }]
    },
    logistics: {
      title: "Logistics & Freight",
      badge: "Supply Pipeline",
      description: "Predictive freight routing, live fleet telemetry arrays, and automated cross-border compliance documentation.",
      extendedSummary: "Take absolute control over your supply chain. We deploy tracking architectures that process live fleet telemetry, automate border compliance generation, and predict routing bottlenecks before they occur.",
      coreSolutions: ["Live fleet telemetry arrays", "Automated border documentation", "Predictive maintenance scheduling"],
      metrics: [{ label: "Route Efficiency", value: "+18%" }, { label: "Tracking Latency", value: "0ms" }]
    },
    construction: {
      title: "Construction & Development",
      badge: "Project Ledger",
      description: "Lifecycle project bidding pipelines, contractor payout synchronization, and heavy equipment allocation trackers.",
      extendedSummary: "Aerostatelab structures massive project ledgers. Connect your on-site equipment allocation directly to your back-office contractor payout pipelines, ensuring your development stays strictly within budget parameters.",
      coreSolutions: ["Heavy asset allocation matrices", "Automated contractor ledger payouts", "Lifecycle bidding pipelines"],
      metrics: [{ label: "Budget Leakage", value: "0.0%" }, { label: "Asset Visibility", value: "100%" }]
    },
    education: {
      title: "Education Networks",
      badge: "Campus Hub",
      description: "Centralized student credential databases, faculty scheduling matrices, and automated tuition ledger reconciliation.",
      extendedSummary: "Unify your campus operations. We build centralized hubs that securely manage student credentials, automate complex faculty scheduling grids, and route tuition processing through secure payment gateways.",
      coreSolutions: ["Centralized student credentialing", "Algorithmic faculty scheduling", "Automated tuition reconciliation"],
      metrics: [{ label: "Data Security", value: "AES-256" }, { label: "Processing", value: "Automated" }]
    },
    trading: {
      title: "Global Trading",
      badge: "Market Matrix",
      description: "High-frequency commodity tracking, automated international procurement logic, and real-time ledger conversions.",
      extendedSummary: "Engineered for speed. We deploy ultra-low latency procurement grids that track international commodities in real-time, executing complex currency conversions and multi-region tax compliance on the fly.",
      coreSolutions: ["Ultra-low latency tracking", "Live multi-currency reconciliation", "Automated tariff compliance logic"],
      metrics: [{ label: "Ledger Speed", value: "< 50ms" }, { label: "Global Sync", value: "Multi-Region" }]
    },
    hospitality: {
      title: "Hospitality & Service",
      badge: "Service Network",
      description: "Real-time reservation pooling, seasonal pricing automation matrices, and dynamic facility maintenance scheduling.",
      extendedSummary: "Elevate your guest experience by automating your backend. We engineer property management matrices that dynamically adjust pricing based on algorithmic demand, pooling reservations across all your booking channels.",
      coreSolutions: ["Algorithmic pricing automation", "Multi-channel reservation pooling", "Predictive facility maintenance"],
      metrics: [{ label: "Booking Uptime", value: "99.99%" }, { label: "Revenue Lift", value: "+14.5%" }]
    }
  };

  const sector = sectorId ? dynamicContent[sectorId] : null;

  // Fallback view with light styling
  if (!sector) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 bg-white">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Sector Not Found</h2>
        <p className="text-gray-500 mb-8">The requested industry architecture is currently undergoing updates.</p>
        <Link to="/industries" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-sm">
          Return to Industries Grid
        </Link>
      </div>
    );
  }

  // Animations keyframes (matching other pages)
  const animationStyles = `
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes gradient-x {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animate-fade-in-up { opacity: 0; animation: fade-in-up 0.7s ease-out forwards; }
    .animate-delay-100 { animation-delay: 0.1s; }
    .animate-delay-200 { animation-delay: 0.2s; }
    .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 3s ease infinite; }
  `;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <style>{animationStyles}</style>

      {/* Ambient light glow (light version) */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 bg-blue-100/40 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        {/* Breadcrumb */}
        <div className="mb-8 animate-fade-in-up">
          <Link to="/industries" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
            ← Back to Industries
          </Link>
        </div>

        {/* Header */}
        <div className="border-b border-gray-200 pb-10 mb-12 animate-fade-in-up">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block mb-4">
            {sector.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            {sector.title}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
            {sector.extendedSummary}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left column: Core solutions */}
          <div className="md:col-span-2 space-y-6 animate-fade-in-up animate-delay-100">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
              Engineered Solutions
            </h3>
            <ul className="space-y-4">
              {sector.coreSolutions.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700 bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0 shadow-sm"></div>
                  <span className="text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: Metrics + CTA */}
          <div className="space-y-6 animate-fade-in-up animate-delay-200">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
              Sector Metrics
            </h3>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-6 shadow-sm">
              {sector.metrics.map((metric, idx) => (
                <div key={idx} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                  <span className="text-xs font-mono text-gray-500 block mb-1 uppercase tracking-wide">
                    {metric.label}
                  </span>
                  <span className="text-2xl font-bold text-gray-900 tracking-tight">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md shadow-blue-200 text-center text-sm"
            >
              Request Sector Specs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustryDetail;