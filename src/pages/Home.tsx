import HeroSection from "../components/layout/HeroSection";
import FeatureCard from "../components/shared/FeatureCard";
import TrustRow from "../components/shared/TrustRow";

import {
  HrIllustration,
  InventoryIllustration,
  CrmIllustration,
  FinanceIllustration,
  ManufacturingIllustration,
  RetailIllustration,
  ProcurementIllustration,
  PayrollIllustration,
  AnalyticsIllustration,
} from "../components/shared/FeatureIllustrations";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M4 10.4 8 14l8-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M4 10h12m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M12 21s7-5.25 7-12a7 7 0 1 0-14 0c0 6.75 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="9"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <ellipse
        cx="12"
        cy="5"
        rx="8"
        ry="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M4 5v7c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M5 19V9m5 10V5m5 14v-7m4 7V3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AutomationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M8 4h8v4H8V4Zm0 12h8v4H8v-4ZM4 10h6v4H4v-4Zm10 0h6v4h-6v-4ZM12 8v2m0 4v2M8 12h2m4 0h2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Home() {
  const erpModules = [
    {
      badge: "HR & Analytics",
      title: "Human Resource Management",
      description:
        "Handle employee files, payroll, attendance, and team tasks all from one single place.",
      link: "/solutions/hrms",
      illustration: <HrIllustration />,
    },
    {
      badge: "Supply Chain & Logistics",
      title: "Inventory & Warehouse Management",
      description:
        "Stop running out of stock with smart inventory tracking, live multi-store monitoring, and automatic count updates.",
      link: "/solutions/inventory",
      illustration: <InventoryIllustration />,
    },
    {
      badge: "Sales & Client Management",
      title: "Customer Relationship Management",
      description:
        "Manage customer relationships, sales opportunities, follow-ups, proposals, and conversion stages from one dashboard.",
      link: "/solutions/crm",
      illustration: <CrmIllustration />,
    },
    {
      badge: "Ledger & Taxation",
      title: "Finance & Accounting",
      description:
        "Maintain absolute data integrity with real-time bookkeeping and instant financial reporting.",
      link: "/solutions/finance",
      illustration: <FinanceIllustration />,
    },
    {
      badge: "Factory & Workflow",
      title: "Manufacturing Operations",
      description:
        "Synchronize floor operations with live material tracking, workflow routing, and quality logging.",
      link: "/solutions/manufacturing",
      illustration: <ManufacturingIllustration />,
    },
    {
      badge: "Retail & Inventory Sync",
      title: "Retail & POS Systems",
      description:
        "Integrate billing, sales management, and inventory updates across physical and online stores.",
      link: "/solutions/pos",
      illustration: <RetailIllustration />,
    },
    {
      badge: "Procurement & Vendor Tracking",
      title: "Supply Chain Operations",
      description:
        "Automate vendor selection, send requests instantly, and create purchase orders with a single click.",
      link: "/solutions/procurement",
      illustration: <ProcurementIllustration />,
    },
    {
      badge: "Compensation & Financial Sync",
      title: "Payroll Management",
      description:
        "Send direct deposits automatically, handle tax calculations, and manage employee benefits in one place.",
      link: "/solutions/payroll",
      illustration: <PayrollIllustration />,
    },
    {
      badge: "Data Matrix & Reporting",
      title: "Business Intelligence",
      description:
        "Combine data from all your business branches into simple, real-time visual dashboards.",
      link: "/solutions/analytics",
      illustration: <AnalyticsIllustration />,
    },
  ];

  const analyticsFeatures = [
    {
      title: "Multi-Location Visibility",
      description: "View branch and facility performance from one dashboard.",
      icon: <LocationIcon />,
      style: "bg-blue-400/10 text-blue-300 border-blue-400/20",
    },
    {
      title: "Centralized Business Data",
      description: "Bring disconnected operational records into one system.",
      icon: <DatabaseIcon />,
      style: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
    },
    {
      title: "Live Performance Metrics",
      description: "Track sales, teams, payments, inventory, and projects.",
      icon: <ChartIcon />,
      style: "bg-indigo-400/10 text-indigo-300 border-indigo-400/20",
    },
    {
      title: "Automated Reporting",
      description: "Convert daily activity into useful management reports.",
      icon: <AutomationIcon />,
      style: "bg-violet-400/10 text-violet-300 border-violet-400/20",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <HeroSection />

      <TrustRow />

      {/* Unified Analytics Section */}
      <section className="relative isolate overflow-hidden border-y border-slate-800 bg-slate-950">
        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0 -z-20 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "38px 38px",
            backgroundPosition: "0 0",
          }}
        />

        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-36 -top-36 h-[480px] w-[480px] rounded-full bg-blue-600/20 blur-[130px]" />

          <div className="absolute bottom-[-220px] right-[-100px] h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[140px]" />

          <div className="absolute left-[50%] top-[40%] h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
        </div>

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-10 lg:py-24 xl:px-16">
          {/* Left content */}
          <div className="relative z-10">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300 sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>

              Unified Business Intelligence
            </span>

            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Turn Business Data Into
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                Clear Decisions.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-300 sm:text-lg sm:leading-8">
              AeroState brings information from sales, payments, employees,
              projects, customers, inventory, and multiple locations into one
              centralized analytics environment.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Replace disconnected spreadsheets and isolated systems with
              real-time dashboards that give management a complete view of
              business performance.
            </p>

            {/* Feature list */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Real-time operational visibility",
                "Branch-level performance reports",
                "Centralized management dashboard",
                "Secure role-based data access",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-slate-200 backdrop-blur"
                >
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                    <CheckIcon />
                  </span>

                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/solutions/analytics"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/50 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Explore Analytics Engine
                <ArrowIcon />
              </a>

              <a
                href="/contact"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.1] sm:w-auto sm:text-base"
              >
                Discuss Your Requirements
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative mx-auto w-full max-w-[720px] lg:max-w-none">
            <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.07] p-3 shadow-[0_35px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-4">
              {/* Window header */}
              <div className="flex items-center justify-between rounded-t-[18px] border-b border-white/10 bg-slate-900/80 px-4 py-3">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
                    Analytics Engine • Live
                  </span>
                </div>
              </div>

              {/* Main image */}
              <div className="relative overflow-hidden rounded-b-[18px] bg-gradient-to-br from-slate-100 via-white to-blue-100">
                <img
                  src="/data-pipeline.png"
                  alt="AeroState centralized business analytics and data processing"
                  className="aspect-[16/10] w-full object-cover object-center"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-white/5" />
              </div>
            </div>

            {/* Floating revenue card */}
            <div className="absolute -left-3 top-8 hidden min-w-[180px] rounded-2xl border border-white/15 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl sm:block lg:-left-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Revenue Overview
                  </p>

                  <p className="mt-1 text-xl font-bold text-white">₹18.6L</p>
                </div>

                <span className="rounded-lg bg-emerald-400/10 px-2 py-1 text-[9px] font-bold text-emerald-300">
                  +16.8%
                </span>
              </div>
            </div>

            {/* Floating locations card */}
            <div className="absolute -bottom-5 right-3 hidden min-w-[190px] rounded-2xl border border-white/15 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl sm:block lg:-right-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <LocationIcon />
                </span>

                <div>
                  <p className="text-sm font-bold text-white">
                    8 Locations Connected
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Data synchronized in real time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics capability cards */}
        <div className="mx-auto w-full max-w-[1440px] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24 xl:px-16">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {analyticsFeatures.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.075]"
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border ${feature.style}`}
                >
                  {feature.icon}
                </span>

                <h3 className="mt-4 text-sm font-bold text-white sm:text-base">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Modules */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end lg:mb-16">
            <div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Core Software Modules
              </span>

              <h2 className="max-w-4xl text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                Enterprise Software Modules Built for Modern Business Operations
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                Manage finance, HR, inventory, manufacturing, CRM, procurement,
                payroll, and enterprise workflows through scalable cloud-based
                management systems.
              </p>
            </div>

            <a
              href="/solutions"
              className="group inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
            >
              View all solutions
              <ArrowIcon />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {erpModules.map((module) => (
              <FeatureCard
                key={module.title}
                badge={module.badge}
                title={module.title}
                description={module.description}
                link={module.link}
                illustration={module.illustration}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;