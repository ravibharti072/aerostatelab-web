import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface CatalogItem {
  badge: string;
  title: string;
  path: string;
  description: string;
  icon: ReactNode;
  iconStyle: string;
  glowStyle: string;
  accentStyle: string;
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

function HumanResourceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7-6a3 3 0 0 1 0 6m3 9v-1.5a3.5 3.5 0 0 0-2.6-3.38"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InventoryIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="m12 3 8 4-8 4-8-4 8-4Zm-8 4v10l8 4 8-4V7M12 11v10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrmIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M4 19V9m5 10V5m5 14v-7m5 7V3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="m4 13 5-4 5 3 5-7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FinanceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M3 10h18M7 15h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ManufacturingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M3 21V9l6 3V8l6 4V6l6 4v11H3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M7 17h2m3 0h2m3 0h2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RetailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M4 10h16v10H4V10Zm-1-6h18l-2 6H5L3 4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8 14h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProcurementIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M7 7h12l-1.5 8h-9L7 7Zm0 0L6 4H3m6 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PayrollIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M7 4h10M7 8h10M8 4c3 0 5 1.6 5 4s-2 4-5 4H7l7 8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M5 20V10m5 10V4m5 16v-7m4 7V7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M7 18h10a4 4 0 0 0 .55-7.96A6 6 0 0 0 6.1 8.8 4.6 4.6 0 0 0 7 18Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M12 3 19 6v5c0 4.6-2.75 8.15-7 10-4.25-1.85-7-5.4-7-10V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="m9 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IntegrationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3M8 16v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3M5 8h6v8H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Zm8 0h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-6V8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect
        x="7"
        y="2"
        width="10"
        height="20"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M10 5h4M11 19h2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Solutions() {
  useEffect(() => {
    document.title = "Business Software Solutions | AeroState Lab";

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const catalog: CatalogItem[] = [
    {
      badge: "HR & Analytics",
      title: "Human Resource Management",
      path: "/solutions/hrms",
      description:
        "Manage employees, attendance, payroll, onboarding, roles, performance, and daily workforce operations.",
      icon: <HumanResourceIcon />,
      iconStyle:
        "border-violet-200 bg-violet-50 text-violet-700",
      glowStyle: "bg-violet-300/35",
      accentStyle:
        "from-violet-500 via-fuchsia-500 to-purple-500",
    },
    {
      badge: "Supply Chain & Logistics",
      title: "Inventory & Warehouse",
      path: "/solutions/inventory",
      description:
        "Track stock, warehouses, item movement, purchase activity, multiple locations, and automatic inventory updates.",
      icon: <InventoryIcon />,
      iconStyle:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
      glowStyle: "bg-cyan-300/35",
      accentStyle:
        "from-cyan-500 via-sky-500 to-blue-500",
    },
    {
      badge: "Sales & Client Management",
      title: "Customer Relationship Management",
      path: "/solutions/crm",
      description:
        "Manage leads, follow-ups, proposals, conversion stages, customer records, communication, and sales activity.",
      icon: <CrmIcon />,
      iconStyle:
        "border-blue-200 bg-blue-50 text-blue-700",
      glowStyle: "bg-blue-300/35",
      accentStyle:
        "from-blue-500 via-indigo-500 to-cyan-500",
    },
    {
      badge: "Ledger & Taxation",
      title: "Finance & Accounting",
      path: "/solutions/finance",
      description:
        "Maintain payments, expenses, ledgers, tax records, financial reporting, and complete transaction visibility.",
      icon: <FinanceIcon />,
      iconStyle:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
      glowStyle: "bg-emerald-300/35",
      accentStyle:
        "from-emerald-500 via-teal-500 to-cyan-500",
    },
    {
      badge: "Factory & Workflow",
      title: "Manufacturing Operations",
      path: "/solutions/manufacturing",
      description:
        "Connect materials, production stages, shop-floor activity, quality checks, workflow routing, and output tracking.",
      icon: <ManufacturingIcon />,
      iconStyle:
        "border-orange-200 bg-orange-50 text-orange-700",
      glowStyle: "bg-orange-300/35",
      accentStyle:
        "from-orange-500 via-amber-500 to-yellow-500",
    },
    {
      badge: "Retail & Inventory Sync",
      title: "Retail & POS Systems",
      path: "/solutions/pos",
      description:
        "Connect billing, sales, customers, payments, inventory, store operations, and online or offline transactions.",
      icon: <RetailIcon />,
      iconStyle:
        "border-rose-200 bg-rose-50 text-rose-700",
      glowStyle: "bg-rose-300/35",
      accentStyle:
        "from-rose-500 via-pink-500 to-orange-500",
    },
    {
      badge: "Procurement & Vendors",
      title: "Supply Chain Operations",
      path: "/solutions/procurement",
      description:
        "Manage vendors, purchase requests, quotations, approvals, purchase orders, sourcing, and delivery tracking.",
      icon: <ProcurementIcon />,
      iconStyle:
        "border-teal-200 bg-teal-50 text-teal-700",
      glowStyle: "bg-teal-300/35",
      accentStyle:
        "from-teal-500 via-emerald-500 to-cyan-500",
    },
    {
      badge: "Compensation & Salary",
      title: "Payroll Management",
      path: "/solutions/payroll",
      description:
        "Calculate salaries, attendance deductions, benefits, incentives, taxes, payment history, and employee compensation.",
      icon: <PayrollIcon />,
      iconStyle:
        "border-amber-200 bg-amber-50 text-amber-700",
      glowStyle: "bg-amber-300/35",
      accentStyle:
        "from-amber-500 via-orange-500 to-yellow-500",
    },
    {
      badge: "Data & Reporting",
      title: "Business Intelligence",
      path: "/solutions/analytics",
      description:
        "Bring business information together in clear dashboards, live reports, performance summaries, and management insights.",
      icon: <AnalyticsIcon />,
      iconStyle:
        "border-indigo-200 bg-indigo-50 text-indigo-700",
      glowStyle: "bg-indigo-300/35",
      accentStyle:
        "from-indigo-500 via-blue-500 to-violet-500",
    },
  ];

  const platformBenefits = [
    {
      title: "Cloud-Based Access",
      description: "Access authorised business data from any device.",
      icon: <CloudIcon />,
      style: "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      title: "Secure Permissions",
      description: "Control modules, records, and actions for every role.",
      icon: <ShieldIcon />,
      style:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      title: "Connected Integrations",
      description: "Connect APIs, payments, messaging, and other services.",
      icon: <IntegrationIcon />,
      style:
        "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      title: "Mobile Responsive",
      description: "Professional interface across mobile, tablet, and desktop.",
      icon: <MobileIcon />,
      style: "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
  ];

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      {/* Page hero */}
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div
          className="pointer-events-none absolute inset-0 -z-20 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />

        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 -top-48 h-[520px] w-[520px] rounded-full bg-blue-300/30 blur-[135px]" />
          <div className="absolute -bottom-48 right-[-140px] h-[560px] w-[560px] rounded-full bg-cyan-300/25 blur-[140px]" />
        </div>

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>

              AeroState Business Solutions
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              Software Solutions for
              <span className="block">Modern Business</span>

              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Operations and Growth.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              Explore cloud-based modules for managing people, sales,
              customers, inventory, finance, manufacturing, procurement,
              payroll, retail, and business reporting.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Use individual modules",
                "Connect modules into one system",
                "Control access by user role",
                "Expand as your business grows",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-left text-sm font-semibold text-slate-700 shadow-sm backdrop-blur"
                >
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckIcon />
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#solution-catalog"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Explore Solutions
                <ArrowIcon />
              </a>

              <Link
                to="/contact"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700 hover:shadow-md sm:w-auto sm:text-base"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>

          {/* Overview panel */}
          <div className="relative mx-auto w-full max-w-[590px]">
            <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/25 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white/95 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.16)] backdrop-blur sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                    Solutions Overview
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    Connected Business Modules
                  </h2>
                </div>

                <span className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
                  9 Modules
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  {
                    label: "People",
                    value: "HR & Payroll",
                    style: "bg-violet-50 text-violet-700",
                  },
                  {
                    label: "Sales",
                    value: "CRM & Retail",
                    style: "bg-blue-50 text-blue-700",
                  },
                  {
                    label: "Operations",
                    value: "Stock & Production",
                    style: "bg-cyan-50 text-cyan-700",
                  },
                  {
                    label: "Insights",
                    value: "Finance & Reports",
                    style: "bg-emerald-50 text-emerald-700",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-2xl border border-slate-200 p-4 ${item.style}`}
                  >
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] opacity-70">
                      {item.label}
                    </p>

                    <p className="mt-2 text-sm font-bold sm:text-base">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      Business Coverage
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                      From daily work to management reporting
                    </p>
                  </div>

                  <span className="text-xl font-bold text-blue-600">
                    100%
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {["Cloud", "Secure", "Scalable", "Responsive"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-white px-2 py-3 text-center text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500 shadow-sm"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution catalog */}
      <section
        id="solution-catalog"
        className="relative isolate overflow-hidden bg-slate-50 scroll-mt-24"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0f172a 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Core Software Solutions
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Select the Modules Your Business Needs
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Start with one module or connect multiple solutions into a
                complete cloud-based business management platform.
              </p>
            </div>

            <Link
              to="/services/custom-software-development"
              className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
            >
              Need a custom solution?
              <ArrowIcon />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {catalog.map((item) => (
              <article
                key={item.path}
                className="group relative h-full"
              >
                <div
                  className={`pointer-events-none absolute -inset-2 rounded-[30px] opacity-15 blur-2xl transition-opacity duration-300 group-hover:opacity-45 ${item.glowStyle}`}
                />

                <div className="relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.055)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-slate-300 group-hover:shadow-[0_22px_55px_rgba(15,23,42,0.11)]">
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${item.accentStyle}`}
                  />

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl border ${item.iconStyle}`}
                      >
                        {item.icon}
                      </span>

                      <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-slate-500">
                        AeroState
                      </span>
                    </div>

                    <span className="mt-5 block text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                      {item.badge}
                    </span>

                    <h3 className="mt-3 text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-600 sm:text-[22px]">
                      {item.title}
                    </h3>

                    <p className="mt-4 flex-grow text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-5 border-t border-slate-100 pt-4">
                      <Link
                        to={item.path}
                        className="group/link inline-flex min-h-11 items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-600 hover:text-white"
                      >
                        Explore Solution

                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
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
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Platform benefits */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              One Connected Technology Platform
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Consistent Security, Access, and Experience
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Every solution follows the same modern design, cloud
              architecture, permission system, and responsive experience.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platformBenefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-[20px] border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border ${benefit.style}`}
                >
                  {benefit.icon}
                </span>

                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="relative isolate overflow-hidden rounded-[28px] bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 px-6 py-12 text-center shadow-[0_30px_80px_rgba(37,99,235,0.25)] sm:px-10 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />

            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Not Sure Which Solution Fits Your Business?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
              Share your current process and operational problems. AeroState
              Lab will help you identify the right modules or plan a custom
              software system.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Book Free Consultation
                <ArrowIcon />
              </Link>

              <Link
                to="/services/custom-software-development"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto sm:text-base"
              >
                Explore Custom Development
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solutions;