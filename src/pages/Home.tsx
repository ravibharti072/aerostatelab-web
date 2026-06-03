import HeroSection from '../components/layout/HeroSection';
import FeatureCard from '../components/shared/FeatureCard';
import TrustRow from '../components/shared/TrustRow';
import { 
  HrIllustration, 
  InventoryIllustration, 
  CrmIllustration, 
  FinanceIllustration, 
  ManufacturingIllustration, 
  RetailIllustration, 
  ProcurementIllustration, 
  PayrollIllustration, 
  AnalyticsIllustration 
} from '../components/shared/FeatureIllustrations'; 

function Home() {
  const erpModules = [
    {
      badge: "HR & Analytics",
      title: "Human Resource Management",
      description: "Handle employee files, payroll, attendance, and team tasks all from one single place.",
      link: "/solutions/hrms",
      illustration: <HrIllustration />
    },
    {
      badge: "Supply Chain & Logistics",
      title: "Inventory & Warehouse Management",
      description: "Stop running out of stock with smart inventory tracking, live multi-store monitoring, and automatic count updates.",
      link: "/solutions/inventory",
      illustration: <InventoryIllustration />
    },
    {
      badge: "Sales & Client Management",
      title: "Customer Relationship Management",
      description: "Track staff records, clock-ins, payroll, and daily team operations in one easy dashboard.",
      link: "/solutions/crm",
      illustration: <CrmIllustration />
    },
    {
      badge: "Ledger & Taxation",
      title: "Finance & Accounting",
      description: "Maintain absolute data integrity with real-time bookkeeping and instant financial reporting.",
      link: "/solutions/finance",
      illustration: <FinanceIllustration />
    },
    {
      badge: "Factory & Workflow",
      title: "Manufacturing Operations",
      description: "Synchronize floor operations with live material tracking, workflow routing, and quality logging.",
      link: "/solutions/manufacturing",
      illustration: <ManufacturingIllustration />
    },
    {
      badge: "Retail & Inventory Sync",
      title: "Retail & POS Systems",
      description: "Integrate billing, sales management, and inventory updates across physical and online stores.",
      link: "/solutions/pos",
      illustration: <RetailIllustration />
    },
    {
      badge: "Procurement & Vendor Tracking",
      title: "Supply Chain Operations",
      description: "Automate vendor selection, send requests instantly, and create purchase orders with a single click.",
      link: "/solutions/procurement",
      illustration: <ProcurementIllustration />
    },
    {
      badge: "Compensation & Financial Sync",
      title: "Payroll Management",
      description: "Send direct deposits automatically, handle tax calculations, and manage employee benefits in one place.",
      link: "/solutions/payroll",
      illustration: <PayrollIllustration />
    },
    {
      badge: "Data Matrix & Reporting",
      title: "Business Intelligence",
      description: "Combine data from all your business branches into simple, real-time visual dashboards.",
      link: "/solutions/analytics",
      illustration: <AnalyticsIllustration />
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      <HeroSection />
      <TrustRow />

      {/* Intelligent Analytics & Data Pipeline Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16 border-t border-gray-100 mt-8">
        {/* Left Side: The Copy */}
        <div className="lg:w-1/2">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">
            Intelligent Analytics
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
            Unify Multi-Facility Operations in Real Time.
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Managing multiple locations, complex staff designations, and isolated databases creates operational blind spots. AEROSTATELAB automatically captures fragmented data from every corner of your business—processing it through a centralized engine. See global performance metrics, isolated facility reports, and live financial tracking all from one unified command center.
          </p>
          <a href="/solutions/analytics" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
            Explore Analytics Engine
          </a>
        </div>

        {/* Right Side: The Image */}
        <div className="lg:w-1/2 w-full">
          {/* Ensure the image is saved in your 'public' folder as 'data-pipeline.png' */}
          <img 
            src="/data-pipeline.png" 
            alt="Data processing pipeline transforming raw data into clean charts" 
            className="w-full h-auto drop-shadow-2xl rounded-2xl"
          />
        </div>
      </section>

      {/* Core ERP Modules Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              CORE ERP MODULES
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Enterprise Software Modules Built for Modern Business Operations
            </h2>
            <p className="text-gray-600 max-w-xl mt-3 text-sm md:text-base leading-relaxed">
              Manage finance, HR, inventory, manufacturing, CRM, procurement, and enterprise workflows through scalable cloud-based ERP systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {erpModules.map((module, index) => (
            <FeatureCard
              key={index}
              badge={module.badge}
              title={module.title}
              description={module.description}
              link={module.link}
              illustration={module.illustration} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;