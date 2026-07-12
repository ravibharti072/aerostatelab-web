import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface FeatureItem {
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  result: string;
  icon: ReactNode;
  iconStyle: string;
  glowStyle: string;
  accentStyle: string;
}

interface IndustryItem {
  title: string;
  description: string;
  path: string;
  iconText: string;
  style: string;
}

interface ProcessItem {
  number: string;
  title: string;
  description: string;
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

function CheckIcon({
  className = "h-4 w-4",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
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

function CodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-9-4 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M7 18h10a4 4 0 0 0 .55-7.96A6 6 0 0 0 6.1 8.8 4.6 4.6 0 0 0 7 18Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M12 9v6m-2-2 2 2 2-2"
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
      className="h-6 w-6"
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

function ApiIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="7"
        height="7"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <rect
        x="14"
        y="13"
        width="7"
        height="7"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M10 7h4a3 3 0 0 1 3 3v3M14 17h-4a3 3 0 0 1-3-3v-3"
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
      className="h-6 w-6"
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

function AnalyticsIcon() {
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

function ScaleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M5 16V8m7 12V4m7 12V8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="m3 10 2-2 2 2m3-4 2-2 2 2m3 4 2-2 2 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M4 13v-2a8 8 0 0 1 16 0v2M6 17H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h1v5Zm12 0h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1v5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M18 17c0 2-1.5 3-4 3h-2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="m12 3 9 5-9 5-9-5 9-5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="m3 12 9 5 9-5M3 16l9 5 9-5"
        stroke="currentColor"
        strokeWidth="1.7"
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
        rx="7"
        ry="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function WhyChooseUs() {
  useEffect(() => {
    document.title =
      "Why Choose AeroState Lab | Custom Cloud Software";

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const heroHighlights = [
    "Custom Development",
    "Cloud-Based Systems",
    "Role-Based Security",
    "API Integrations",
    "Mobile Responsive",
    "Scalable Architecture",
  ];

  const features: FeatureItem[] = [
    {
      title: "Custom Development",
      subtitle: "Built Around Your Business",
      description:
        "Your software is designed around your departments, users, processes, reporting needs, and operational challenges.",
      capabilities: [
        "Custom modules and workflows",
        "Industry-focused configurations",
        "Purpose-built dashboards",
        "Flexible UI and user journeys",
        "On-demand feature development",
      ],
      result:
        "You receive software that matches how your company actually works instead of forcing your team into a generic template.",
      icon: <CodeIcon />,
      iconStyle:
        "border-violet-200 bg-violet-50 text-violet-700",
      glowStyle: "bg-violet-300/35",
      accentStyle:
        "from-violet-500 via-purple-500 to-fuchsia-500",
    },
    {
      title: "Secure Cloud Platform",
      subtitle: "Access From Anywhere",
      description:
        "Run your business through a connected cloud platform without depending on a single office computer or local network.",
      capabilities: [
        "Secure cloud deployment",
        "Centralised business data",
        "Multi-location access",
        "Backup and recovery options",
        "Expandable server infrastructure",
      ],
      result:
        "Your authorised team can access permitted business information from the office, field, or another branch.",
      icon: <CloudIcon />,
      iconStyle:
        "border-blue-200 bg-blue-50 text-blue-700",
      glowStyle: "bg-blue-300/35",
      accentStyle:
        "from-blue-500 via-cyan-500 to-sky-500",
    },
    {
      title: "Scalable Architecture",
      subtitle: "Ready for Future Growth",
      description:
        "Start with the modules you need today and expand the system as your users, locations, products, and processes grow.",
      capabilities: [
        "Modular software architecture",
        "Expandable database design",
        "New module integration",
        "Additional user roles",
        "Multi-branch expansion",
      ],
      result:
        "Your software can evolve with your business instead of requiring a complete replacement after every growth stage.",
      icon: <ScaleIcon />,
      iconStyle:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
      glowStyle: "bg-cyan-300/35",
      accentStyle:
        "from-cyan-500 via-teal-500 to-emerald-500",
    },
    {
      title: "Security and Access Control",
      subtitle: "Protect Important Business Data",
      description:
        "Control which pages, modules, records, and actions each department or user role can access.",
      capabilities: [
        "Role-based permissions",
        "Secure user authentication",
        "Protected API access",
        "Activity and audit records",
        "Controlled administrative actions",
      ],
      result:
        "Employees only access the information and actions required for their responsibilities.",
      icon: <ShieldIcon />,
      iconStyle:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
      glowStyle: "bg-emerald-300/35",
      accentStyle:
        "from-emerald-500 via-green-500 to-teal-500",
    },
    {
      title: "API and Platform Integrations",
      subtitle: "Connect Your Business Tools",
      description:
        "Connect your AeroState system with external services, payment providers, messaging platforms, and other software when required.",
      capabilities: [
        "REST API architecture",
        "Optional payment integrations",
        "Optional WhatsApp integrations",
        "Third-party software connectivity",
        "Webhook-based data updates",
      ],
      result:
        "Connected systems can reduce repeated entry, disconnected records, and manual information transfer.",
      icon: <ApiIcon />,
      iconStyle:
        "border-indigo-200 bg-indigo-50 text-indigo-700",
      glowStyle: "bg-indigo-300/35",
      accentStyle:
        "from-indigo-500 via-blue-500 to-cyan-500",
    },
    {
      title: "Mobile-First Experience",
      subtitle: "Work From Any Screen",
      description:
        "Every interface is designed to remain practical and easy to use across mobile phones, tablets, laptops, and desktops.",
      capabilities: [
        "Responsive page layouts",
        "Touch-friendly controls",
        "Mobile dashboards",
        "Optimised forms and tables",
        "Cross-device usability",
      ],
      result:
        "Owners, employees, field teams, and clients can use the platform comfortably without always needing a desktop.",
      icon: <MobileIcon />,
      iconStyle:
        "border-rose-200 bg-rose-50 text-rose-700",
      glowStyle: "bg-rose-300/35",
      accentStyle:
        "from-rose-500 via-pink-500 to-orange-500",
    },
    {
      title: "Business Reporting",
      subtitle: "Turn Records Into Decisions",
      description:
        "Bring information from sales, payments, customers, projects, employees, and operations into useful reporting views.",
      capabilities: [
        "Current operational dashboards",
        "Operational summaries",
        "Sales and payment reports",
        "Custom report filters",
        "Performance indicators",
      ],
      result:
        "Managers can understand business performance without collecting information from multiple disconnected spreadsheets.",
      icon: <AnalyticsIcon />,
      iconStyle:
        "border-amber-200 bg-amber-50 text-amber-700",
      glowStyle: "bg-amber-300/35",
      accentStyle:
        "from-amber-500 via-orange-500 to-yellow-500",
    },
    {
      title: "Continuous Support",
      subtitle: "Software That Keeps Improving",
      description:
        "A business system should continue evolving after launch as new requirements, users, workflows, and opportunities appear.",
      capabilities: [
        "Post-launch assistance",
        "Issue resolution",
        "Feature enhancements",
        "Workflow improvements",
        "Deployment guidance",
      ],
      result:
        "You gain an ongoing technology partner who can help improve the system as your requirements change.",
      icon: <SupportIcon />,
      iconStyle:
        "border-teal-200 bg-teal-50 text-teal-700",
      glowStyle: "bg-teal-300/35",
      accentStyle:
        "from-teal-500 via-cyan-500 to-blue-500",
    },
  ];

  const industries: IndustryItem[] = [
    {
      title: "Manufacturing",
      description: "Production, inventory and quality workflows",
      path: "/industries/manufacturing",
      iconText: "MF",
      style:
        "border-orange-200 bg-orange-50 text-orange-700",
    },
    {
      title: "Retail and POS",
      description: "Billing, loyalty and store operations",
      path: "/industries/retail",
      iconText: "RT",
      style:
        "border-rose-200 bg-rose-50 text-rose-700",
    },
    {
      title: "Healthcare",
      description: "Patients, appointments and administration",
      path: "/industries/healthcare",
      iconText: "HC",
      style:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      title: "Logistics",
      description: "Shipments, fleet and delivery management",
      path: "/industries/logistics",
      iconText: "LG",
      style:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
    {
      title: "Education",
      description: "Students, fees and academic management",
      path: "/industries/education",
      iconText: "ED",
      style:
        "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      title: "Hospitality",
      description: "Bookings, guests and property operations",
      path: "/industries/hospitality",
      iconText: "HS",
      style:
        "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      title: "Construction",
      description: "Projects, contractors and material control",
      path: "/industries/construction",
      iconText: "CN",
      style:
        "border-amber-200 bg-amber-50 text-amber-700",
    },
    {
      title: "Trading",
      description: "Orders, clients and business reporting",
      path: "/industries/trading",
      iconText: "TR",
      style:
        "border-indigo-200 bg-indigo-50 text-indigo-700",
    },
  ];

  const processSteps: ProcessItem[] = [
    {
      number: "01",
      title: "Understand Your Operations",
      description:
        "We study your departments, users, current tools, challenges, and expected business outcomes.",
    },
    {
      number: "02",
      title: "Design the Architecture",
      description:
        "We plan the modules, permissions, workflows, database structure, integrations, and user experience.",
    },
    {
      number: "03",
      title: "Build and Validate",
      description:
        "The system is developed in phases and tested against practical operational scenarios and user requirements.",
    },
    {
      number: "04",
      title: "Deploy and Improve",
      description:
        "We launch the platform, support adoption, resolve issues, and extend it as your business grows.",
    },
  ];

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
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
          <div className="absolute -left-44 -top-48 h-[520px] w-[520px] rounded-full bg-blue-300/25 blur-[135px]" />

          <div className="absolute -bottom-48 right-[-130px] h-[560px] w-[560px] rounded-full bg-cyan-300/25 blur-[140px]" />
        </div>

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-70" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>

              Why Choose AeroState Lab
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              Software Designed Around

              <span className="block">
                Your Business,
              </span>

              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Not a Generic Template.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              AeroState Lab builds secure, scalable, and practical
              cloud systems that connect people, customers, data,
              payments, projects, and business operations.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Built for your exact workflow",
                "Expandable modular architecture",
                "Secure role-based access",
                "Professional mobile experience",
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
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Start Your Custom Solution

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services/custom-software-development"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700 hover:shadow-md sm:w-auto sm:text-base"
              >
                Explore Development Process
              </Link>
            </div>
          </div>

          {/* Right overview panel */}
          <div className="relative mx-auto w-full max-w-[590px]">
            <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/25 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white/95 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.16)] backdrop-blur sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                    AeroState Advantage
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    Connected Software Architecture
                  </h2>
                </div>

                <span className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
                  Custom Built
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-violet-100 bg-violet-50 p-4 text-violet-700">
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] opacity-70">
                    Architecture
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-200 bg-white">
                      <LayersIcon />
                    </span>

                    <p className="text-sm font-bold">
                      Modular and Scalable
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-4 text-cyan-700">
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] opacity-70">
                    Workflow
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-200 bg-white">
                      <WorkflowIcon />
                    </span>

                    <p className="text-sm font-bold">
                      Business Specific
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-emerald-700">
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] opacity-70">
                    Security
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-200 bg-white">
                      <ShieldIcon />
                    </span>

                    <p className="text-sm font-bold">
                      Role-Based Access
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-blue-700">
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] opacity-70">
                    Data
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-200 bg-white">
                      <DatabaseIcon />
                    </span>

                    <p className="text-sm font-bold">
                      Centralised Records
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      System Alignment
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                      Designed around your actual operations
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-blue-200 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-blue-700">
                    Business Fit
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    "Users",
                    "Workflows",
                    "Reports",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-white px-2 py-2.5 text-center text-[9px] font-bold uppercase tracking-[0.08em] text-slate-500"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  "Cloud",
                  "Controlled",
                  "Flexible",
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

      {/* Highlight strip */}
      <section className="border-b border-slate-200 bg-slate-950">
        <div className="mx-auto flex w-full max-w-[1440px] flex-wrap justify-center gap-2 px-4 py-5 sm:px-6 lg:justify-between lg:px-10 xl:px-16">
          {heroHighlights.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-300 sm:text-xs"
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  index % 3 === 0
                    ? "bg-blue-400"
                    : index % 3 === 1
                      ? "bg-cyan-400"
                      : "bg-teal-400"
                }`}
              />

              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative isolate overflow-hidden bg-slate-50">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0f172a 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              The AeroState Difference
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Why Businesses Choose AeroState Lab
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We combine custom development, secure cloud
              architecture, practical user experience, and long-term
              scalability into one connected software platform.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group relative h-full"
              >
                <div
                  className={`pointer-events-none absolute -inset-2 rounded-[30px] opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-40 ${feature.glowStyle}`}
                />

                <div className="relative flex h-full min-h-[500px] flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.055)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-slate-300 group-hover:shadow-[0_22px_55px_rgba(15,23,42,0.11)]">
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${feature.accentStyle}`}
                  />

                  <div className="flex flex-1 flex-col p-5">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${feature.iconStyle}`}
                    >
                      {feature.icon}
                    </span>

                    <span className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                      {feature.subtitle}
                    </span>

                    <h3 className="mt-3 text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-600">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {feature.description}
                    </p>

                    <div className="mt-5 space-y-2.5">
                      {feature.capabilities.map((capability) => (
                        <div
                          key={capability}
                          className="flex items-start gap-2.5 text-xs font-semibold leading-5 text-slate-600"
                        >
                          <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                            <CheckIcon className="h-3.5 w-3.5" />
                          </span>

                          <span>{capability}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto border-t border-slate-100 pt-5">
                      <p className="text-xs font-semibold leading-6 text-slate-500">
                        <span className="font-bold text-slate-800">
                          Business result:
                        </span>{" "}
                        {feature.result}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Our Development Approach
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                From Business Challenge to Working Software
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                We follow a structured process that keeps the software
                connected to practical business requirements from
                initial planning through deployment and future
                improvement.
              </p>

              <Link
                to="/our-approach"
                className="group mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-6 py-3 text-sm font-bold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-600 hover:text-white"
              >
                View Our Complete Approach

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="group rounded-[22px] border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-xs font-bold text-white">
                      {step.number}
                    </span>

                    <span className="text-4xl font-extrabold text-slate-100 transition-colors group-hover:text-blue-100">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative isolate overflow-hidden bg-slate-50">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />

        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                Built for Multiple Industries
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Software Adapted to Your Industry
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Every industry has different workflows, users,
                reports, terminology, and operational challenges.
                AeroState systems are designed around those
                differences.
              </p>
            </div>

            <Link
              to="/industries"
              className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-teal-600 transition-colors hover:text-teal-700"
            >
              View All Industries

              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Link
                key={industry.path}
                to={industry.path}
                className="group flex items-center gap-4 rounded-[20px] border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
              >
                <span
                  className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl border text-[10px] font-extrabold tracking-[0.08em] ${industry.style}`}
                >
                  {industry.iconText}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-slate-900 transition-colors group-hover:text-teal-600">
                    {industry.title}
                  </span>

                  <span className="mt-1 block text-xs leading-5 text-slate-500">
                    {industry.description}
                  </span>
                </span>

                <ArrowIcon className="text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-teal-600" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="relative isolate overflow-hidden rounded-[28px] bg-gradient-to-r from-blue-700 via-blue-600 to-teal-600 px-6 py-12 text-center shadow-[0_30px_80px_rgba(37,99,235,0.25)] sm:px-10 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />

            <div className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[360px] w-[360px] rounded-full bg-cyan-300/30 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-48 right-[-100px] -z-10 h-[420px] w-[420px] rounded-full bg-teal-300/30 blur-[110px]" />

            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-50 backdrop-blur sm:text-xs">
              Start Building With AeroState Lab
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Build a Smarter and More Connected Business System
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
              Tell us about your current processes, challenges, and
              goals. We will help you plan a cloud platform designed
              around your business.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Book Free Consultation

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/solutions"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto sm:text-base"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyChooseUs;