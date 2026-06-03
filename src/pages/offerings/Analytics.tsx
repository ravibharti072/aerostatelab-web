import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  TrendingUp,
  Target,
  FileText,
  Link as LinkIcon
} from 'lucide-react';

function Analytics() {
  const coreFeatures = [
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      title: "Real-Time Dashboards",
      desc: "Live KPI tracking and interactive performance visuals.",
      points: ["Executive summaries", "Department-wise views", "Custom metrics"]
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Data Visualization",
      desc: "Advanced charts, drill‑downs, and trend analysis.",
      points: ["Multi-source analysis", "Comparative reports", "Graphical insights"]
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Predictive Forecasting",
      desc: "AI‑driven demand, sales, and risk prediction.",
      points: ["Revenue projections", "Resource planning", "Growth modeling"]
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "KPI Monitoring",
      desc: "Goal tracking and benchmarking across departments.",
      points: ["Productivity analysis", "Target dashboards", "Strategic reporting"]
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Automated Reporting",
      desc: "Scheduled reports in multiple formats with zero manual effort.",
      points: ["Custom templates", "Multi‑format export", "Compliance reports"]
    },
    {
      icon: <LinkIcon className="w-5 h-5" />,
      title: "Data Integration",
      desc: "Unified analytics from ERP, CRM, HR, and cloud sources.",
      points: ["API connectivity", "Real‑time sync", "Cross‑department consolidation"]
    }
  ];

  const capabilities = [
    {
      title: "BI Automation",
      points: ["Scheduled dashboards", "Auto‑alerts", "Validation workflows"]
    },
    {
      title: "Enterprise Visibility",
      points: ["Cross‑functional views", "Financial transparency", "Unified reporting"]
    },
    {
      title: "Mobile Intelligence",
      points: ["Mobile dashboards", "Real‑time notifications", "Interactive charts"]
    },
    {
      title: "Security & Control",
      points: ["Role‑based access", "Audit logs", "Encrypted storage"]
    }
  ];

  const benefits = [
    { metric: "2x", desc: "Faster decision‑making" },
    { metric: "100%", desc: "Real‑time visibility" },
    { metric: "40%", desc: "Reduction in manual reporting" },
    { metric: "24/7", desc: "Cloud‑based access" }
  ];

  const industries = [
    "Manufacturing", "Retail", "Healthcare", "Logistics",
    "Financial Services", "Education", "IT Services", "Corporate"
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
        .animate-delay-400 { animation-delay: 0.4s; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 3s ease infinite; }
        @keyframes pulse-soft { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        .animate-pulse-soft { animation: pulse-soft 4s ease-in-out infinite; }
      `}</style>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white pt-28 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-white to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          <Link to="/solutions" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mb-6 transition-colors">
            ← Back to Solutions
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Business Intelligence{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 animate-gradient-x">
              & Analytics Suite
            </span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            Turn raw data into strategic insights with AI‑powered dashboards, forecasting, and real‑time KPI monitoring.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Dashboards", "Forecasting", "Reporting", "KPI Tracking"].map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-extrabold text-gray-900">Core Analytics Features</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Everything you need to transform data into decisions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feat, i) => (
            <div
              key={i}
              className={`group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animate-delay-${(i % 3) * 100}`}
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-3 mb-4">
                {/* Modern icon container */}
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

      {/* ADVANCED CAPABILITIES */}
      <section className="bg-blue-50/50 border-y border-blue-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-extrabold text-gray-900">Enterprise‑Ready Architecture</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Secure, scalable, and seamlessly integrated with your entire tech stack.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm animate-fade-in-up animate-delay-${i * 100}`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cap.title}</h3>
                <ul className="space-y-3">
                  {cap.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold">
                        ✓
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS + WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8 animate-fade-in-up">
              Measurable Impact
            </h2>
            <div className="space-y-6">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 animate-fade-in-up animate-delay-${i * 100}`}
                >
                  <div className="text-3xl font-extrabold text-blue-600 w-16 shrink-0">
                    {b.metric}
                  </div>
                  <p className="text-gray-600">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6 animate-fade-in-up">
                Why Businesses Choose Us
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Scalable from startup to enterprise",
                  "Intuitive dashboards for all roles",
                  "Real‑time decision intelligence",
                  "End‑to‑end data consolidation"
                ].map((reason, idx) => (
                  <div
                    key={reason}
                    className={`flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 animate-fade-in-up animate-delay-${idx * 100}`}
                  >
                    <span className="text-blue-500">▹</span>
                    <span className="text-gray-700 font-medium">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-up">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Trusted Across Industries</h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-sm text-blue-700 font-medium hover:bg-blue-100 transition-colors cursor-default"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-24 text-center">
        <div className="bg-blue-600 rounded-3xl p-10 shadow-xl shadow-blue-200 animate-fade-in-up">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Unlock Your Data's Full Potential
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Schedule a personalized demo and see how our BI suite can drive smarter decisions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-600 rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors shadow-md animate-pulse-soft"
          >
            Book a Demo
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Analytics;