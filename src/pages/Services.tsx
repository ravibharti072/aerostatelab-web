import { Link } from 'react-router-dom';

function Services() {
  const processSteps = [
    {
      step: "01",
      title: "Consultation & Discovery",
      desc: "We begin by understanding your business workflows, identifying operational bottlenecks, and defining the exact requirements for your custom ERP or management system.",
      highlights: ["Stakeholder Interviews", "Workflow Mapping", "Goal Definition"]
    },
    {
      step: "02",
      title: "Analysis & Architecture",
      desc: "Our engineering team designs a scalable system architecture. We map out the database structure, API integrations, and UI/UX wireframes to ensure the solution fits your exact needs.",
      highlights: ["System Blueprinting", "Security Modeling", "Tech Stack Selection"]
    },
    {
      step: "03",
      title: "Agile Development",
      desc: "We build your software using modern, cloud-native frameworks. We develop in modular sprints, allowing you to see progress, test features, and provide feedback in real-time.",
      highlights: ["Modular Coding", "Sprint Reviews", "Iterative Testing"]
    },
    {
      step: "04",
      title: "Deployment & Integration",
      desc: "The system is securely deployed to your cloud environment. We handle the migration of your legacy data and ensure seamless integration with your existing third-party tools.",
      highlights: ["Cloud Hosting Setup", "Data Migration", "API Connections"]
    },
    {
      step: "05",
      title: "Support & Scaling",
      desc: "Post-launch, we provide continuous monitoring, security patches, and 24/7 technical support. As your business grows, we scale the server architecture and add new modules on demand.",
      highlights: ["24/7 Uptime Monitoring", "Security Patching", "Feature Scaling"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-200 selection:text-blue-900 pb-24">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-100/40 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Our Engineering <span className="text-blue-600">Process</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            From initial discovery to post-launch scaling, discover how Aerostatelab engineers, deploys, and supports enterprise-grade software systems.
          </p>
        </div>
      </section>

      {/* The Delivery Pipeline Timeline */}
      <section className="max-w-4xl mx-auto px-6 relative">
        {/* Vertical Connecting Line */}
        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-300 via-gray-200 to-transparent hidden sm:block"></div>

        <div className="space-y-16">
          {processSteps.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={item.step} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16 group`}>
                
                {/* Timeline Node */}
                <div className="hidden sm:flex absolute left-[39px] md:left-1/2 -translate-x-1/2 top-0 w-12 h-12 rounded-full bg-white border-4 border-white shadow-[0_0_0_2px_rgba(59,130,246,0.3)] items-center justify-center z-10 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:border-blue-400 transition-all duration-300">
                  <div className="w-3 h-3 rounded-full bg-blue-500 group-hover:bg-cyan-500 transition-colors"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl hover:border-blue-200 hover:shadow-md transition-all duration-300 relative overflow-hidden">
                    {/* Subtle Background Number – repositioned to not cover text */}
                    <div className={`absolute text-5xl font-black text-gray-200/40 select-none pointer-events-none ${
                      isEven ? '-right-2 top-0' : '-left-2 top-0'
                    }`}>
                      {item.step}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3 justify-start md:justify-normal relative z-10">
                      <span className="text-blue-600 font-mono text-sm md:hidden">{item.step}</span>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">
                      {item.desc}
                    </p>
                    
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'md:justify-end justify-start'} relative z-10`}>
                      {item.highlights.map(hl => (
                        <span key={hl} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-700 font-medium shadow-sm">
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty Space for the other side of the timeline */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-6 pt-32 text-center">
        <div className="bg-blue-50 border border-blue-200 p-12 rounded-2xl shadow-md">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Ready to Start the Process?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Skip the generic templates. Let our engineering team analyze your workflows and build a system that scales with your growth.</p>
          <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg text-sm font-bold transition-all shadow-md shadow-blue-200">
            Book a Discovery Call
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Services;