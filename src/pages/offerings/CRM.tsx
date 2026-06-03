import { Link } from 'react-router-dom';
import {
  Users,
  TrendingUp,
  Headphones,
  Mail,
  Calendar,
  Megaphone,
  BarChart3,
  Target,
} from 'lucide-react';

function CRM() {
  // Reduced, scannable tags
  const tags = ["Lead Management", "Sales Pipeline", "Customer Support", "Analytics"];

  // Core features – each with icon, short desc, and only 4 key points
  const coreFeatures = [
    { icon: <Target className="w-5 h-5" />, title: "Lead Management", desc: "Capture and nurture leads efficiently.", points: ["Lead capture & source tracking", "Qualification workflows", "Automated assignment", "Conversion tracking"] },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Sales Pipeline", desc: "Real-time visibility into sales progress.", points: ["Opportunity tracking", "Pipeline visualization", "Revenue forecasting", "Quote & proposal management"] },
    { icon: <Users className="w-5 h-5" />, title: "Customer Management", desc: "Centralized customer database.", points: ["360° customer profiles", "Interaction history", "Segmentation tools", "Account relationship mgmt"] },
    { icon: <Mail className="w-5 h-5" />, title: "Communication & Engagement", desc: "Multi-channel customer engagement.", points: ["Email & SMS integration", "Automated follow-ups", "Call scheduling", "Campaign workflows"] },
    { icon: <Headphones className="w-5 h-5" />, title: "Support & Ticketing", desc: "Efficient customer service.", points: ["Ticket management", "SLA tracking", "Multi-channel support", "Satisfaction monitoring"] },
    { icon: <Calendar className="w-5 h-5" />, title: "Task & Activity Management", desc: "Coordinate team activities.", points: ["Task assignment", "Calendar integration", "Reminders & notifications", "Collaboration tools"] },
    { icon: <Megaphone className="w-5 h-5" />, title: "Marketing Campaigns", desc: "Plan and track campaigns.", points: ["Campaign planning", "Targeted segmentation", "Email marketing", "Performance analytics"] },
    { icon: <BarChart3 className="w-5 h-5" />, title: "Analytics & Insights", desc: "Data-driven decisions.", points: ["Customer behavior analytics", "Sales dashboards", "Retention analysis", "Forecasting reports"] }
  ];

  // Advanced capabilities – condensed to 4 main areas
  const capabilities = [
    { title: "CRM Automation", points: ["Automated lead assignment", "Follow-up automation", "Workflow approvals", "Email campaign automation"] },
    { title: "Omnichannel Experience", points: ["Email & SMS", "Live chat & social", "Phone call logging", "Customer portal"] },
    { title: "Mobile CRM", points: ["Mobile lead management", "Activity tracking", "Real-time updates", "Mobile dashboards"] },
    { title: "Security & Access", points: ["Role-based access", "Audit trails", "Data encryption", "Secure authentication"] }
  ];

  // Benefits – measurable impacts (like Analytics page)
  const benefits = [
    { metric: "35%", desc: "Higher sales conversions" },
    { metric: "50%", desc: "Faster support resolution" },
    { metric: "40%", desc: "Improved customer retention" },
    { metric: "24/7", desc: "Real-time customer insights" }
  ];

  // Why choose us – 4 reasons
  const whyChoose = [
    "Scalable for startups to enterprises",
    "Centralized customer visibility",
    "Intelligent workflow automation",
    "Cloud & mobile accessibility"
  ];

  // Industries – condensed list
  const industries = [
    "Retail & E-commerce", "Manufacturing", "Real Estate", "Healthcare",
    "Financial Services", "IT Services", "Logistics", "Education"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Animation keyframes (matching Analytics & Construction pages) */}
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
            Intelligent Customer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 animate-gradient-x">
              Relationship Management
            </span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            Strengthen customer relationships, streamline sales, and accelerate growth with a centralized CRM platform.
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
          <h2 className="text-3xl font-extrabold text-gray-900">Core CRM Features</h2>
          <p className="text-gray-500 mt-2">Complete toolkit for sales, support, and marketing.</p>
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
            <h2 className="text-3xl font-extrabold text-gray-900">Advanced CRM Capabilities</h2>
            <p className="text-gray-500 mt-2">Automation, omnichannel, mobility, and security.</p>
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
                  <div className="text-3xl font-extrabold text-blue-600 w-20 shrink-0">{b.metric}</div>
                  <p className="text-gray-600">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Why Choose + Industries */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6 animate-fade-in-up">Why Choose Our CRM</h2>
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

      {/* CTA – matching Analytics page style */}
      <section className="max-w-4xl mx-auto px-6 pb-24 text-center">
        <div className="bg-blue-600 rounded-3xl p-10 shadow-xl shadow-blue-200 animate-fade-in-up">
          <h2 className="text-3xl font-extrabold text-white mb-4">Transform Your Customer Relationships</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Empower your business with an intelligent CRM solution designed for growth and efficiency.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-600 rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors shadow-md animate-pulse-soft">
            Deploy CRM Architecture <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CRM;