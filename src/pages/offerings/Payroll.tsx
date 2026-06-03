import { Link } from 'react-router-dom';
import {
  Calculator,
  CalendarDays,
  FileText,
  Receipt,
  Building2,
  User,
  BarChart3,
  Landmark,
} from 'lucide-react';

function Payroll() {
  // Reduced tags
  const tags = ["Salary Processing", "Tax Compliance", "Attendance Sync", "Payroll Automation"];

  // Core features – each with icon, short desc, and only 4 points
  const coreFeatures = [
    { icon: <Calculator className="w-5 h-5" />, title: "Salary Processing", desc: "Automate monthly payroll operations.", points: ["Automated calculations", "Multi-structure support", "Bonus & incentives", "Salary adjustments"] },
    { icon: <CalendarDays className="w-5 h-5" />, title: "Attendance & Leave Sync", desc: "Integrate attendance with payroll.", points: ["Leave deduction auto", "Overtime calculation", "Shift-based payroll", "Attendance analytics"] },
    { icon: <FileText className="w-5 h-5" />, title: "Tax & Compliance", desc: "Ensure statutory compliance.", points: ["Income tax calculations", "PF/ESI management", "Compliance reporting", "Statutory filing"] },
    { icon: <Receipt className="w-5 h-5" />, title: "Payslip & Compensation", desc: "Generate secure payslips.", points: ["Digital payslip", "Reimbursement processing", "Loan & advance", "Employee portal"] },
    { icon: <Building2 className="w-5 h-5" />, title: "Multi-Branch Payroll", desc: "Centralized multi-location processing.", points: ["Branch-wise payroll", "Regional compliance", "Consolidated reporting", "Entity-level controls"] },
    { icon: <User className="w-5 h-5" />, title: "Employee Self-Service", desc: "Secure access for employees.", points: ["Payslip downloads", "Tax documents", "Leave balance", "Reimbursement requests"] },
    { icon: <BarChart3 className="w-5 h-5" />, title: "Payroll Analytics", desc: "Real-time expense visibility.", points: ["Payroll expense reports", "Salary cost analysis", "Compensation trends", "KPI dashboards"] },
    { icon: <Landmark className="w-5 h-5" />, title: "Banking Integration", desc: "Simplify salary disbursement.", points: ["Direct salary transfers", "Bank integration", "Bulk disbursement", "Payment reconciliation"] }
  ];

  // Advanced capabilities – condensed to 4 main areas
  const capabilities = [
    { title: "Payroll Automation", points: ["Automated scheduling", "Tax calculations", "Attendance sync", "Payslip generation"] },
    { title: "Integration Ready", points: ["HRM systems", "Attendance devices", "Accounting software", "Banking platforms"] },
    { title: "Mobile Payroll", points: ["Payslip access", "Payroll notifications", "Reimbursement submission", "Mobile dashboards"] },
    { title: "Security & Control", points: ["Role-based access", "Audit trails", "Data encryption", "Multi-level approvals"] }
  ];

  // Benefits – measurable impacts
  const benefits = [
    { metric: "90%", desc: "Reduction in payroll errors" },
    { metric: "60%", desc: "Faster processing time" },
    { metric: "100%", desc: "Tax compliance accuracy" },
    { metric: "24/7", desc: "Employee self-service access" }
  ];

  // Why choose – 4 simple reasons
  const whyChoose = [
    "Scalable from startups to enterprises",
    "Real-time payroll visibility",
    "Intelligent automation workflows",
    "Cloud & mobile accessibility"
  ];

  // Industries served – condensed list
  const industries = [
    "Manufacturing", "Retail & E-commerce", "Healthcare", "Logistics",
    "Construction", "Hospitality", "Education", "IT Services"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Animation keyframes (matching other pages) */}
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
            Intelligent Payroll{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 animate-gradient-x">
              Management Suite
            </span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            Automate salary processing, ensure compliance, manage compensation, and streamline payroll operations from a secure, centralized platform.
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
          <h2 className="text-3xl font-extrabold text-gray-900">Core Payroll Modules</h2>
          <p className="text-gray-500 mt-2">Complete control over salary and compliance.</p>
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
            <h2 className="text-3xl font-extrabold text-gray-900">Advanced Payroll Architecture</h2>
            <p className="text-gray-500 mt-2">Automation, integration, mobility, and security.</p>
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
          <h2 className="text-3xl font-extrabold text-white mb-4">Transform Your Payroll Operations</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Modernize salary processing and workforce compensation for automation, compliance, and efficiency.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-600 rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors shadow-md animate-pulse-soft">
            Deploy Payroll Architecture <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Payroll;