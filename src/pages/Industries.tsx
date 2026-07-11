import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface IndustrySector {
  name: string;
  badge: string;
  description: string;
  path: string;
  features: string[];
  icon: ReactNode;
  iconStyle: string;
  glowStyle: string;
  accentStyle: string;
}

interface BenefitItem {
  title: string;
  description: string;
  icon: ReactNode;
  style: string;
}

function ArrowIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 flex-none ${className}`}
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
        d="M4 10.5 8 14l8-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FactoryIcon() {
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

function HealthcareIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M12 20.5S4 16 4 9.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8 3.5c0 6.5-8 11-8 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M9 11h6m-3-3v6"
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

function LogisticsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M3 6h11v11H3V6Zm11 4h4l3 3v4h-7v-7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="7"
        cy="18"
        r="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <circle
        cx="17"
        cy="18"
        r="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ConstructionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M4 21V8h10v13M14 12h6v9M7 12h4m-4 4h4M3 21h18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="m5 8 4-5 4 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="m3 9 9-5 9 5-9 5-9-5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M7 12v5c3 2 7 2 10 0v-5M21 9v6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TradingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M4 19V5m0 14h16M7 15l4-4 3 2 5-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M16 7h3v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HospitalityIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M4 20V8h16v12M4 15h16M7 12h3m4 0h3M3 20h18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8 8V5h8v3"
        stroke="currentColor"
        strokeWidth="1.7"
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

function WorkflowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="6"
        height="6"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <rect
        x="15"
        y="14"
        width="6"
        height="6"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M9 7h4a3 3 0 0 1 3 3v4M15 17h-4a3 3 0 0 1-3-3v-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
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

function Industries() {
  useEffect(() => {
    document.title =
      "Industries We Serve | AeroState Lab";

    const hash = window.location.hash;

    if (hash === "#industry-catalog") {
      const timer = window.setTimeout(() => {
        document
          .getElementById("industry-catalog")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 180);

      return () => {
        window.clearTimeout(timer);
      };
    }

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const industrySectors: IndustrySector[] = [
    {
      name: "Manufacturing",
      badge: "Factory Operations",
      description:
        "Connect production, inventory, materials, quality checks, workforce activity, and factory reporting in one system.",
      path: "/industries/manufacturing",
      features: [
        "Production workflows",
        "Material tracking",
        "Quality management",
      ],
      icon: <FactoryIcon />,
      iconStyle:
        "border-orange-200 bg-orange-50 text-orange-700",
      glowStyle: "bg-orange-300/35",
      accentStyle:
        "from-orange-500 via-amber-500 to-yellow-500",
    },
    {
      name: "Healthcare",
      badge: "Clinical Operations",
      description:
        "Manage patients, appointments, billing, staff, records, inventory, and daily healthcare operations securely.",
      path: "/industries/healthcare",
      features: [
        "Patient records",
        "Appointments",
        "Billing and reporting",
      ],
      icon: <HealthcareIcon />,
      iconStyle:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
      glowStyle: "bg-emerald-300/35",
      accentStyle:
        "from-emerald-500 via-teal-500 to-cyan-500",
    },
    {
      name: "Retail & POS",
      badge: "Retail Operations",
      description:
        "Connect billing, inventory, customers, loyalty rewards, payments, and multiple retail locations.",
      path: "/industries/retail",
      features: [
        "POS billing",
        "Stock management",
        "Customer loyalty",
      ],
      icon: <RetailIcon />,
      iconStyle:
        "border-rose-200 bg-rose-50 text-rose-700",
      glowStyle: "bg-rose-300/35",
      accentStyle:
        "from-rose-500 via-pink-500 to-orange-500",
    },
    {
      name: "Logistics",
      badge: "Supply Operations",
      description:
        "Track shipments, fleet activity, deliveries, routes, customers, expenses, and operational performance.",
      path: "/industries/logistics",
      features: [
        "Shipment tracking",
        "Fleet operations",
        "Delivery reporting",
      ],
      icon: <LogisticsIcon />,
      iconStyle:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
      glowStyle: "bg-cyan-300/35",
      accentStyle:
        "from-cyan-500 via-sky-500 to-blue-500",
    },
    {
      name: "Construction",
      badge: "Project Operations",
      description:
        "Manage projects, contractors, materials, tasks, costs, payments, equipment, and site progress.",
      path: "/industries/construction",
      features: [
        "Project tracking",
        "Contractor records",
        "Material and cost control",
      ],
      icon: <ConstructionIcon />,
      iconStyle:
        "border-amber-200 bg-amber-50 text-amber-700",
      glowStyle: "bg-amber-300/35",
      accentStyle:
        "from-amber-500 via-orange-500 to-yellow-500",
    },
    {
      name: "Education",
      badge: "Academic Operations",
      description:
        "Manage students, staff, attendance, fees, courses, communication, and institutional reporting.",
      path: "/industries/education",
      features: [
        "Student management",
        "Fees and attendance",
        "Staff administration",
      ],
      icon: <EducationIcon />,
      iconStyle:
        "border-blue-200 bg-blue-50 text-blue-700",
      glowStyle: "bg-blue-300/35",
      accentStyle:
        "from-blue-500 via-indigo-500 to-cyan-500",
    },
    {
      name: "Trading",
      badge: "Commercial Operations",
      description:
        "Manage clients, orders, purchasing, inventory, payments, commissions, and business performance.",
      path: "/industries/trading",
      features: [
        "Order management",
        "Client and vendor records",
        "Financial reporting",
      ],
      icon: <TradingIcon />,
      iconStyle:
        "border-indigo-200 bg-indigo-50 text-indigo-700",
      glowStyle: "bg-indigo-300/35",
      accentStyle:
        "from-indigo-500 via-blue-500 to-violet-500",
    },
    {
      name: "Hospitality",
      badge: "Guest Operations",
      description:
        "Manage bookings, guests, rooms, billing, housekeeping, services, inventory, and hotel operations.",
      path: "/industries/hospitality",
      features: [
        "Booking management",
        "Guest and room records",
        "Billing and services",
      ],
      icon: <HospitalityIcon />,
      iconStyle:
        "border-violet-200 bg-violet-50 text-violet-700",
      glowStyle: "bg-violet-300/35",
      accentStyle:
        "from-violet-500 via-purple-500 to-fuchsia-500",
    },
  ];

  const platformBenefits: BenefitItem[] = [
    {
      title: "Cloud-Based Access",
      description:
        "Secure access to authorised business data from any location.",
      icon: <CloudIcon />,
      style:
        "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      title: "Role-Based Security",
      description:
        "Control modules, records, and actions for every department.",
      icon: <ShieldIcon />,
      style:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      title: "Custom Workflows",
      description:
        "Adapt each system to your actual industry process.",
      icon: <WorkflowIcon />,
      style:
        "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      title: "Mobile Responsive",
      description:
        "Professional experience across phones, tablets, and desktops.",
      icon: <MobileIcon />,
      style:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
  ];

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      {/* Hero section */}
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div
          className="pointer-events-none absolute inset-0 -z-20 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />

        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 -top-48 h-[520px] w-[520px] rounded-full bg-teal-300/25 blur-[135px]" />

          <div className="absolute -bottom-48 right-[-140px] h-[560px] w-[560px] rounded-full bg-blue-300/25 blur-[140px]" />
        </div>

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-teal-700 shadow-sm backdrop-blur sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-70" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
              </span>

              Industries Served by AeroState
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              Business Software Built for

              <span className="block">
                Industry-Specific
              </span>

              <span className="block bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Operations and Growth.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              AeroState Lab develops secure cloud software around
              the real workflows, departments, challenges, and
              reporting requirements of different industries.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Industry-specific workflows",
                "Role-based access control",
                "Connected operational data",
                "Expandable cloud architecture",
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
                href="#industry-catalog"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-200 transition-all duration-300 hover:-translate-y-1 hover:bg-teal-700 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Explore Industries

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                to="/contact"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:text-teal-700 hover:shadow-md sm:w-auto sm:text-base"
              >
                Discuss Your Requirements
              </Link>
            </div>
          </div>

          {/* Industry overview panel */}
          <div className="relative mx-auto w-full max-w-[590px]">
            <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300/25 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white/95 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.16)] backdrop-blur sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-teal-600">
                    Industry Coverage
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    Connected Industry Solutions
                  </h2>
                </div>

                <span className="rounded-xl border border-teal-100 bg-teal-50 px-3 py-2 text-xs font-bold text-teal-700">
                  8 Industries
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  {
                    label: "Production",
                    value: "Manufacturing",
                    style:
                      "bg-orange-50 text-orange-700",
                  },
                  {
                    label: "Commerce",
                    value: "Retail & Trading",
                    style:
                      "bg-blue-50 text-blue-700",
                  },
                  {
                    label: "Institutions",
                    value: "Health & Education",
                    style:
                      "bg-emerald-50 text-emerald-700",
                  },
                  {
                    label: "Services",
                    value: "Logistics & Hotels",
                    style:
                      "bg-violet-50 text-violet-700",
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
                      Operational Coverage
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                      Software adapted to your business process
                    </p>
                  </div>

                  <span className="text-xl font-bold text-teal-600">
                    100%
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-500" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  "Cloud",
                  "Secure",
                  "Custom",
                  "Responsive",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white px-2 py-3 text-center text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry catalog */}
      <section
        id="industry-catalog"
        className="relative isolate scroll-mt-24 overflow-hidden bg-slate-50"
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
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                Industries We Serve
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Select Your Business Industry
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Explore industry-focused software or contact
                AeroState Lab for a custom system designed around
                your operational requirements.
              </p>
            </div>

            <Link
              to="/services/custom-software-development"
              className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-teal-600 transition-colors hover:text-teal-700"
            >
              Need another industry solution?

              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industrySectors.map((sector) => (
              <Link
                key={sector.path}
                to={sector.path}
                className="group relative block h-full"
                aria-label={`Explore ${sector.name} software solutions`}
              >
                <div
                  className={`pointer-events-none absolute -inset-2 rounded-[30px] opacity-15 blur-2xl transition-opacity duration-300 group-hover:opacity-45 ${sector.glowStyle}`}
                />

                <article className="relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.055)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-slate-300 group-hover:shadow-[0_22px_55px_rgba(15,23,42,0.11)]">
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${sector.accentStyle}`}
                  />

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl border ${sector.iconStyle}`}
                      >
                        {sector.icon}
                      </span>

                      <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-slate-500">
                        AeroState
                      </span>
                    </div>

                    <span className="mt-5 block text-[10px] font-bold uppercase tracking-[0.16em] text-teal-600">
                      {sector.badge}
                    </span>

                    <h3 className="mt-3 text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-teal-600">
                      {sector.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {sector.description}
                    </p>

                    <div className="mt-5 space-y-2">
                      {sector.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-xs font-semibold text-slate-600"
                        >
                          <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                            <CheckIcon />
                          </span>

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto border-t border-slate-100 pt-5">
                      <span className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-teal-100 bg-teal-50 px-4 py-2.5 text-sm font-bold text-teal-700 transition-all duration-300 group-hover:border-teal-200 group-hover:bg-teal-600 group-hover:text-white">
                        Explore Industry

                        <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technology benefits */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
              One Flexible Technology Platform
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Adapted to the Way Your Industry Works
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Every system uses secure cloud architecture,
              responsive design, permission-based access, and
              workflows adapted to your operations.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platformBenefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-[20px] border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-lg"
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
          <div className="relative isolate overflow-hidden rounded-[28px] bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 px-6 py-12 text-center shadow-[0_30px_80px_rgba(13,148,136,0.25)] sm:px-10 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />

            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Cannot Find Your Industry in the List?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-teal-50">
              Tell us how your business operates. AeroState Lab can
              design secure custom software around your processes,
              teams, customers, and reporting requirements.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-teal-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Discuss Your Requirements

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
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

export default Industries;