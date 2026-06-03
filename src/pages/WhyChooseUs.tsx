import { Link } from 'react-router-dom';

function WhyChooseUs() {
  const highlights = ["Custom Development", "Cloud ERP", "Multi-Currency Support", "GDPR Compliance", "API Integrations", "Mobile Ready", "AI Reporting"];

  const features = [
    {
      title: "Custom Development",
      desc: "Software Built Around Your Business — Not Generic Templates",
      caps: ["Fully customized modules and workflows", "Industry-specific ERP configurations", "Scalable architecture for future expansion", "Custom dashboards and reports", "Flexible UI/UX design options", "On-demand feature development"],
      summary: "You get a system that matches your operations 100%, improving efficiency and reducing manual work."
    },
    {
      title: "Cloud ERP",
      desc: "Access Your Business Anytime, Anywhere",
      caps: ["99.9% uptime cloud infrastructure", "Secure data hosting & backups", "Real-time data synchronization", "Multi-location access control", "Auto-scaling performance", "No hardware dependency"],
      summary: "Eliminate IT overhead and manage your business from anywhere in the world."
    },
    {
      title: "Multi-Currency Support",
      desc: "Go Global Without Complexity",
      caps: ["Real-time currency conversion", "Multi-currency invoicing", "Region-based pricing control", "Global financial reporting", "Automated exchange rate updates", "Multi-country tax handling"],
      summary: "Perfect for global businesses, exporters, and multi-country operations."
    },
    {
      title: "GDPR-Ready Compliance",
      desc: "Security & Privacy at Enterprise Level",
      caps: ["GDPR-compliant data handling", "Role-based access control", "Data encryption (in transit & at rest)", "User consent management", "Audit logs & tracking", "Data export & deletion controls"],
      summary: "Stay compliant with global regulations and build trust with your customers."
    },
    {
      title: "API Integrations",
      desc: "Connect Everything. Automate Everything.",
      caps: ["RESTful API architecture", "Easy third-party integrations", "Payment gateway integration", "CRM/ERP system connectivity", "Logistics & shipping integration", "Webhooks for real-time sync"],
      summary: "Your business ecosystem becomes fully connected and automated."
    },
    {
      title: "Mobile Friendly",
      desc: "Manage Your Business On the Go",
      caps: ["Mobile-responsive dashboards", "Android & iOS support", "Real-time notifications", "Mobile POS & approvals", "Field staff tracking tools", "Offline mode capabilities"],
      summary: "Your business never stops—even when you're away from your desk."
    },
    {
      title: "AI Reporting",
      desc: "Turn Data Into Smart Decisions",
      caps: ["AI-driven dashboards", "Predictive analytics", "Sales forecasting", "Operational insights", "Automated report generation", "Anomaly detection"],
      summary: "Make faster and smarter business decisions with real-time intelligence."
    }
  ];

  const targetIndustries = [
    "Manufacturing companies", "Retail & POS businesses", "Healthcare organizations", 
    "Logistics & supply chain firms", "Education institutions", "Hospitality & hotel chains", 
    "Construction companies", "Enterprises & startups"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-100/40 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Built for Modern Enterprises. <span className="text-blue-600">Designed for Scale.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 max-w-3xl mx-auto">
            We don’t just build software—we build end-to-end digital ecosystems that help businesses operate faster, smarter, and more efficiently.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {highlights.map(tag => <span key={tag} className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-semibold uppercase text-gray-700">{tag}</span>)}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">Software Built Around Your Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 p-8 rounded-2xl hover:border-blue-200 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-blue-600 text-sm mb-6 font-medium">{item.desc}</p>
              <ul className="space-y-2 mb-6">
                {item.caps.map((cap, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-blue-500">•</span> {cap}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm italic text-gray-500">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Target Industries */}
      <section className="bg-gray-100/50 border-y border-gray-200 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Who This Is Built For</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {targetIndustries.map((ind, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200 text-center text-sm font-medium text-gray-700 shadow-sm">
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="bg-blue-50 border border-blue-200 p-12 rounded-2xl shadow-md">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Build a Smarter, Scalable Business System Today</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Upgrade from traditional software to a next-generation ERP platform built for automation, intelligence, and global scalability.</p>
          <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg text-sm font-bold transition-all shadow-md shadow-blue-200">
            Start Your Custom Solution
          </Link>
        </div>
      </section>
    </div>
  );
}

export default WhyChooseUs;