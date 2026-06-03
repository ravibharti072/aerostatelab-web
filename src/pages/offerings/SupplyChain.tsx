import { Link } from 'react-router-dom';
import {
  ShoppingCart,
  Users,
  Package,
  Warehouse,
  Truck,
  ClipboardCheck,
  TrendingUp,
  BarChart3,
} from 'lucide-react';

function SupplyChain() {
  // Reduced tags
  const tags = ["Procurement", "Logistics", "Inventory Flow", "Distribution"];

  // Core features – each with icon, short desc, and only 4 points
  const coreFeatures = [
    { icon: <ShoppingCart className="w-5 h-5" />, title: "Procurement Management", desc: "Simplify purchasing and supplier coordination.", points: ["Purchase requisitions", "Vendor comparison", "Approval automation", "Contract tracking"] },
    { icon: <Users className="w-5 h-5" />, title: "Supplier & Vendor Mgmt", desc: "Monitor vendor performance centrally.", points: ["Supplier database", "Performance tracking", "Compliance monitoring", "Risk analysis"] },
    { icon: <Package className="w-5 h-5" />, title: "Inventory Flow", desc: "Track movement across channels.", points: ["Real-time visibility", "Stock transfers", "Batch & serial tracking", "Replenishment planning"] },
    { icon: <Warehouse className="w-5 h-5" />, title: "Warehouse & Distribution", desc: "Optimize warehousing operations.", points: ["Goods receiving", "Dispatch scheduling", "Storage optimization", "Picking & packing"] },
    { icon: <Truck className="w-5 h-5" />, title: "Logistics & Transportation", desc: "Manage shipments in real time.", points: ["Route optimization", "Delivery tracking", "Freight cost management", "Carrier performance"] },
    { icon: <ClipboardCheck className="w-5 h-5" />, title: "Order Fulfillment", desc: "Accelerate order processing.", points: ["Order integration", "Fulfillment tracking", "Return management", "Customer visibility"] },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Demand Planning", desc: "Predictive forecasting tools.", points: ["Demand analytics", "Supply planning", "Seasonal analysis", "Sales trend tracking"] },
    { icon: <BarChart3 className="w-5 h-5" />, title: "Supply Chain Analytics", desc: "Actionable performance insights.", points: ["Procurement cost analysis", "Logistics efficiency", "Inventory turnover", "KPI dashboards"] }
  ];

  // Advanced capabilities – condensed to 4 main areas
  const capabilities = [
    { title: "Supply Chain Automation", points: ["Procurement workflows", "Smart replenishment", "Shipment notifications", "Inventory sync"] },
    { title: "End-to-End Visibility", points: ["Live dashboards", "Shipment tracking", "Supplier monitoring", "Warehouse tracking"] },
    { title: "Mobile Operations", points: ["Shipment tracking", "Inventory status", "Delivery updates", "Mobile dashboards"] },
    { title: "Security & Access", points: ["Role-based access", "Audit logs", "Data encryption", "Approval workflows"] }
  ];

  // Benefits – measurable impacts
  const benefits = [
    { metric: "25%", desc: "Reduced logistics costs" },
    { metric: "30%", desc: "Faster order fulfillment" },
    { metric: "20%", desc: "Lower inventory carrying costs" },
    { metric: "100%", desc: "Real-time supply chain visibility" }
  ];

  // Why choose – 4 simple reasons
  const whyChoose = [
    "Scalable for businesses of all sizes",
    "Real-time operational visibility",
    "Intelligent workflow automation",
    "Cloud & mobile accessibility"
  ];

  // Industries served – condensed list
  const industries = [
    "Manufacturing", "Retail & E-commerce", "Logistics & Distribution",
    "Wholesale", "Pharmaceuticals", "Automotive", "FMCG", "Healthcare"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Animation keyframes */}
      <style>{`
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
        .animate-delay-300 { animation-delay: 0.3s; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 3s ease infinite; }
        @keyframes pulse-soft { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        .animate-pulse-soft { animation: pulse-soft 4s ease-in-out infinite; }
      `}</style>

      {/* HERO – gradient background, back link */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white pt-28 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-white to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          <Link to="/solutions" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mb-6 transition-colors">
            ← Back to Solutions
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Intelligent Supply Chain{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 animate-gradient-x">
              Operations Suite
            </span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            Optimize procurement, logistics, inventory movement, and distribution with a centralized supply chain platform.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CORE FEATURES – card grid with icons */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-extrabold text-gray-900">Core Supply Chain Modules</h2>
          <p className="text-gray-500 mt-2">Complete control over end-to-end operations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feat, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${(i % 3) * 0.1}s` }}
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                  {feat.icon}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{feat.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{feat.desc}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {feat.points.map((p, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ADVANCED CAPABILITIES – light blue background */}
      <section className="bg-blue-50/50 border-y border-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-extrabold text-gray-900">Advanced Supply Chain Architecture</h2>
            <p className="text-gray-500 mt-2">Automation, visibility, mobility, and security.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cap.title}</h3>
                <ul className="space-y-3">
                  {cap.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS + WHY CHOOSE + INDUSTRIES – two-column layout */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Measurable Impact */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8 animate-fade-in-up">Measurable Impact</h2>
            <div className="space-y-5">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="text-3xl font-extrabold text-blue-600 w-24 shrink-0">{b.metric}</div>
                  <p className="text-gray-600">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Why Choose + Industries */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6 animate-fade-in-up">Why Choose Our Solution</h2>
              <div className="grid grid-cols-1 gap-3">
                {whyChoose.map((reason, idx) => (
                  <div key={reason} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <span className="text-blue-500 text-lg">▹</span>
                    <span className="text-gray-700 font-medium">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in-up">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Industries We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <span key={ind} className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-sm text-blue-700 font-medium hover:bg-blue-100 transition-colors cursor-default">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA – matching style */}
      <section className="max-w-4xl mx-auto px-6 pb-24 text-center">
        <div className="bg-blue-600 rounded-3xl p-10 shadow-xl shadow-blue-200 animate-fade-in-up">
          <h2 className="text-3xl font-extrabold text-white mb-4">Transform Your Supply Chain Operations</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Modernize procurement, logistics, and distribution for efficiency, visibility, and operational excellence.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-600 rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors shadow-md animate-pulse-soft">
            Deploy Supply Chain Architecture <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SupplyChain;