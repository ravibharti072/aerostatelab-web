import {
  Code2,
  Server,
  Database,
  Cloud,
  Shield,
  BarChart3,
  Sparkles
} from 'lucide-react';

function About() {
  // Data array for the Tech Stack - expanded with more details
  const techStack = [
    { 
      category: "Frontend Architecture", 
      icon: <Code2 className="w-5 h-5" />,
      tech: "React 18, TypeScript, Tailwind CSS, Vite",
      details: ["Component-based UI", "Type-safe code", "Responsive design", "Fast HMR"]
    },
    { 
      category: "Backend & Ledgers", 
      icon: <Server className="w-5 h-5" />,
      tech: "Python (Django/FastAPI), Node.js, Express.js",
      details: ["RESTful APIs", "Microservices", "JWT authentication", "WebSocket support"]
    },
    { 
      category: "Database Matrix", 
      icon: <Database className="w-5 h-5" />,
      tech: "PostgreSQL, MongoDB, Redis, Elasticsearch",
      details: ["ACID compliance", "High-performance caching", "Full-text search", "Horizontal scaling"]
    },
    { 
      category: "Cloud & Infrastructure", 
      icon: <Cloud className="w-5 h-5" />,
      tech: "AWS (EC2, RDS, S3), Docker, Kubernetes, CI/CD (GitHub Actions)",
      details: ["Auto-scaling", "Container orchestration", "Zero-downtime deployment", "Infrastructure as Code"]
    },
    { 
      category: "Security & Compliance", 
      icon: <Shield className="w-5 h-5" />,
      tech: "OAuth2, SSL/TLS, GDPR-ready, Audit Logging",
      details: ["Role-based access", "Data encryption", "Penetration testing", "Compliance automation"]
    },
    { 
      category: "Monitoring & Analytics", 
      icon: <BarChart3 className="w-5 h-5" />,
      tech: "Prometheus, Grafana, Sentry, Google Analytics 4",
      details: ["Real-time metrics", "Error tracking", "User behavior insights", "Performance monitoring"]
    }
  ];

  // Animation keyframes (same as other pages)
  const animationStyles = `
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up { opacity: 0; animation: fade-in-up 0.7s ease-out forwards; }
    .animate-delay-100 { animation-delay: 0.1s; }
    .animate-delay-200 { animation-delay: 0.2s; }
    .animate-delay-300 { animation-delay: 0.3s; }
  `;

  return (
    <>
      <style>{animationStyles}</style>
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-24 flex-grow">
          {/* Header Section */}
          <div className="mb-16 animate-fade-in-up">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">AGENCY OVERVIEW</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              Engineering the Core of <br className="hidden md:block" />Modern Commerce.
            </h1>
            <p className="text-gray-600 max-w-2xl leading-relaxed text-lg">
              At Aerostatelab, we don't just build software; we architect scalable, isolated matrices that connect every system node of your business operations. From complex B2B unified ledgers to synchronized retail POS networks, our solutions bring pure clarity to complex metrics.
            </p>
          </div>

          <hr className="border-gray-200 my-16" />

          {/* Mission & Philosophy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="animate-fade-in-up animate-delay-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To replace fragmented, legacy systems with unified, modular cloud platforms. We believe that whether you are managing global logistics pipelines or native consumer loyalty at a retail storefront, your data should flow in a seamless, secure stream.
              </p>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The "Modular Block" Philosophy</h2>
              <p className="text-gray-600 leading-relaxed">
                We design our systems to be foundational. Every feature we deploy—from IAM Identity Shields to Supply Chain Automations—can operate entirely independently or lock together to form a single, impenetrable source of truth for your enterprise.
              </p>
            </div>
          </div>

          {/* Team Tech Stack Section - with icons */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 md:p-12 animate-fade-in-up animate-delay-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Engineering Arsenal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((item, index) => (
                <div key={index} className="border border-gray-200 bg-white p-6 rounded-xl hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">{item.category}</span>
                  </div>
                  <span className="text-gray-800 font-medium block mb-3">{item.tech}</span>
                  <ul className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                        <span className="text-blue-500">▹</span> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">
                 Full-stack capabilities | Agile development | 24/7 support | Enterprise-grade security
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;