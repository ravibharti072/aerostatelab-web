import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface ServiceCard {
  title: string;
  description: string;
  icon: ReactNode;
  style: string;
  glow: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
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
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
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

function DashboardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="8"
        height="8"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <rect
        x="13"
        y="3"
        width="8"
        height="5"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <rect
        x="13"
        y="10"
        width="8"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <rect
        x="3"
        y="13"
        width="8"
        height="8"
        rx="2"
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
      className="h-6 w-6"
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

function IntegrationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
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

function ReportIcon() {
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

function CustomSoftwareDevelopment() {
  useEffect(() => {
    document.title =
      "Custom Software Development | AeroState Lab";

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const services: ServiceCard[] = [
    {
      title: "Custom ERP and CRM",
      description:
        "Business management platforms designed around your departments, approvals, users, customers, and operational requirements.",
      icon: <DashboardIcon />,
      style: "border-violet-200 bg-violet-50 text-violet-700",
      glow: "bg-violet-300/30",
    },
    {
      title: "Workflow Automation",
      description:
        "Automate repeated work, approvals, notifications, assignments, calculations, and department-to-department processes.",
      icon: <WorkflowIcon />,
      style: "border-indigo-200 bg-indigo-50 text-indigo-700",
      glow: "bg-indigo-300/30",
    },
    {
      title: "Cloud Business Software",
      description:
        "Secure cloud-based applications accessible from authorised desktops, tablets, and mobile devices.",
      icon: <CloudIcon />,
      style: "border-blue-200 bg-blue-50 text-blue-700",
      glow: "bg-blue-300/30",
    },
    {
      title: "Business Dashboards",
      description:
        "Live dashboards that turn sales, operations, employee, customer, inventory, and financial information into clear insights.",
      icon: <ReportIcon />,
      style: "border-cyan-200 bg-cyan-50 text-cyan-700",
      glow: "bg-cyan-300/30",
    },
    {
      title: "API Integrations",
      description:
        "Connect your software with payment gateways, WhatsApp, external services, websites, accounting tools, and other platforms.",
      icon: <IntegrationIcon />,
      style: "border-emerald-200 bg-emerald-50 text-emerald-700",
      glow: "bg-emerald-300/30",
    },
    {
      title: "Database and Reporting",
      description:
        "Centralise business data with structured records, advanced search, exports, audit history, and management reports.",
      icon: <DatabaseIcon />,
      style: "border-teal-200 bg-teal-50 text-teal-700",
      glow: "bg-teal-300/30",
    },
    {
      title: "Responsive Web Applications",
      description:
        "Mobile-first interfaces designed to work professionally across smartphones, tablets, laptops, and large screens.",
      icon: <MobileIcon />,
      style: "border-orange-200 bg-orange-50 text-orange-700",
      glow: "bg-orange-300/30",
    },
    {
      title: "Secure Role-Based Systems",
      description:
        "Protect business information through secure authentication, user roles, permissions, and controlled portal access.",
      icon: <ShieldIcon />,
      style: "border-rose-200 bg-rose-50 text-rose-700",
      glow: "bg-rose-300/30",
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Business Discovery",
      description:
        "We understand your current process, problems, team structure, users, reports, and expected results.",
    },
    {
      number: "02",
      title: "System Planning",
      description:
        "We prepare the module structure, workflows, user roles, database plan, and development roadmap.",
    },
    {
      number: "03",
      title: "UI and Prototype",
      description:
        "We design a professional interface and validate how users will navigate and complete their work.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Frontend, backend, database, permissions, reports, APIs, and automation are developed in connected stages.",
    },
    {
      number: "05",
      title: "Testing and Deployment",
      description:
        "The software is tested across devices, deployed securely, and prepared for real business use.",
    },
    {
      number: "06",
      title: "Support and Growth",
      description:
        "We maintain, improve, and expand the system as your users, modules, and business requirements grow.",
    },
  ];

  const technologies = [
    "React",
    "Vite",
    "TypeScript",
    "FastAPI",
    "Python",
    "SQLAlchemy",
    "PostgreSQL",
    "REST APIs",
    "AWS Cloud",
    "Nginx",
    "Responsive UI",
    "Role-Based Access",
  ];

  const industries = [
    "Retail and Distribution",
    "Hospitality",
    "Manufacturing",
    "Healthcare",
    "Education",
    "Construction",
    "Professional Services",
    "Logistics",
    "Startups",
    "Growing SMEs",
    "Agencies",
    "Enterprise Teams",
  ];

  const outcomes = [
    "Reduce repeated manual work",
    "Create one source of business data",
    "Improve team accountability",
    "Track operations in real time",
    "Standardise company workflows",
    "Reduce spreadsheet dependency",
    "Improve management reporting",
    "Build software that can grow",
  ];

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      {/* Hero section */}
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-violet-50 via-white to-blue-50">
        <div
          className="pointer-events-none absolute inset-0 -z-20 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />

        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-violet-300/30 blur-[130px]" />
          <div className="absolute -bottom-48 right-[-120px] h-[560px] w-[560px] rounded-full bg-cyan-300/25 blur-[140px]" />
        </div>

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.98fr] lg:gap-16 lg:px-10 lg:py-24 xl:px-16">
          <div>
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-violet-200 bg-white/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-violet-700 shadow-sm backdrop-blur sm:text-xs">
              <span className="relative flex h-2 w-2 flex-none">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
              </span>

              Custom Cloud Software Development
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              Software Designed Around
              <span className="block">How Your Business</span>

              <span className="block bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Actually Works.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              AeroState Lab builds secure, scalable, and easy-to-use cloud
              software around your workflows, departments, customers,
              reporting requirements, and future growth plans.
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Custom ERP and CRM platforms",
                "Workflow and process automation",
                "Cloud dashboards and reports",
                "API and third-party integrations",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur"
                >
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-violet-100 text-violet-700">
                    <CheckIcon />
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Explore Development Services
                <ArrowIcon />
              </a>

              <Link
                to="/contact"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:text-violet-700 hover:shadow-md sm:w-auto sm:text-base"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>

          {/* Development dashboard */}
          <div className="relative mx-auto w-full max-w-[610px]">
            <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/25 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white/95 shadow-[0_30px_90px_rgba(15,23,42,0.18)] backdrop-blur sm:rounded-[28px]">
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-5">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-300" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
                    AeroState Development • Active
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 via-white to-violet-50/70 p-4 sm:p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-violet-600 sm:text-xs">
                      Custom Software Project
                    </p>

                    <h2 className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">
                      Business Automation Platform
                    </h2>
                  </div>

                  <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-2 text-[9px] font-bold text-emerald-700 sm:px-3 sm:text-xs">
                    In Development
                  </span>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 p-5 text-white shadow-lg shadow-violet-200">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-violet-100">
                        Overall Project Progress
                      </p>

                      <p className="mt-2 text-3xl font-bold">78%</p>

                      <p className="mt-1 text-xs text-violet-100">
                        Core workflows and dashboards completed
                      </p>
                    </div>

                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                      <CodeIcon />
                    </span>
                  </div>

                  <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-[78%] rounded-full bg-white" />
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
                  {[
                    ["01", "Discover", "Done", "bg-emerald-50 text-emerald-700"],
                    ["02", "Design", "Done", "bg-blue-50 text-blue-700"],
                    ["03", "Develop", "Active", "bg-violet-50 text-violet-700"],
                    ["04", "Deploy", "Next", "bg-slate-50 text-slate-500"],
                  ].map(([number, title, status, style]) => (
                    <div
                      key={number}
                      className={`rounded-xl border border-slate-200 p-2.5 text-center sm:p-3 ${style}`}
                    >
                      <p className="text-[8px] font-bold opacity-70">
                        {number}
                      </p>

                      <p className="mt-1 truncate text-[9px] font-bold sm:text-xs">
                        {title}
                      </p>

                      <p className="mt-1 text-[7px] font-bold uppercase tracking-wider">
                        {status}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
                  {[
                    {
                      title: "Cloud",
                      text: "Secure hosting",
                      icon: <CloudIcon />,
                      style: "bg-blue-100 text-blue-700",
                    },
                    {
                      title: "API",
                      text: "Integrations",
                      icon: <IntegrationIcon />,
                      style: "bg-violet-100 text-violet-700",
                    },
                    {
                      title: "Data",
                      text: "Live reporting",
                      icon: <DatabaseIcon />,
                      style: "bg-cyan-100 text-cyan-700",
                    },
                    {
                      title: "Automation",
                      text: "Smart workflow",
                      icon: <WorkflowIcon />,
                      style: "bg-emerald-100 text-emerald-700",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
                    >
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${item.style}`}
                      >
                        {item.icon}
                      </span>

                      <p className="mt-2 text-xs font-bold text-slate-800">
                        {item.title}
                      </p>

                      <p className="mt-0.5 text-[9px] text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        Current Sprint
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-800">
                        Reporting and Workflow Automation
                      </p>
                    </div>

                    <span className="rounded-lg bg-violet-50 px-2 py-1 text-[9px] font-bold text-violet-700">
                      8 / 10 tasks
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[
                      ["Dashboard", "Complete", "text-emerald-600"],
                      ["Reports", "Testing", "text-blue-600"],
                      ["Automation", "Building", "text-violet-600"],
                    ].map(([title, status, style]) => (
                      <div
                        key={title}
                        className="rounded-lg bg-slate-50 px-2 py-2.5 text-center"
                      >
                        <p className="truncate text-[9px] font-bold text-slate-700">
                          {title}
                        </p>

                        <p
                          className={`mt-1 text-[7px] font-bold uppercase tracking-wider ${style}`}
                        >
                          {status}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-2 hidden items-center gap-3 rounded-2xl border border-violet-100 bg-white px-4 py-3 shadow-xl sm:flex lg:-left-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <CodeIcon />
              </span>

              <div>
                <p className="text-xs font-bold text-slate-800">
                  Software built for your workflow
                </p>

                <p className="text-[10px] text-slate-500">
                  Scalable from startup to enterprise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business outcomes */}
      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10 lg:py-24 xl:px-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
              Built Around Real Business Problems
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Replace Disconnected Tools With One Purpose-Built System
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Generic software often forces a business to change the way it
              works. AeroState follows the opposite approach: we understand your
              process first, then build the software around it.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm"
              >
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckIcon />
                </span>

                <span className="text-sm font-bold text-slate-700">
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development services */}
      <section
        id="services"
        className="relative isolate overflow-hidden border-y border-slate-200 bg-slate-50"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0f172a 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
              Custom Development Services
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Complete Cloud Software Development for Modern Businesses
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              From internal business tools to complete enterprise platforms,
              every system is developed for security, scalability, usability,
              and long-term growth.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative h-full"
              >
                <div
                  className={`pointer-events-none absolute -inset-2 rounded-[28px] opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-45 ${service.glow}`}
                />

                <div className="relative flex h-full flex-col rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-violet-200 group-hover:shadow-[0_20px_50px_rgba(15,23,42,0.1)]">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${service.style}`}
                  >
                    {service.icon}
                  </span>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
              Our Development Process
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              From Business Requirement to Secure Deployment
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Development is divided into clear stages so you can review
              progress, validate workflows, and provide feedback throughout the
              project.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="relative overflow-hidden rounded-[22px] border border-slate-200 bg-gradient-to-br from-white to-violet-50/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
              >
                <span className="text-5xl font-extrabold text-violet-100">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div
          className="pointer-events-none absolute inset-0 -z-20 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />

        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 -top-40 h-[460px] w-[460px] rounded-full bg-violet-600/20 blur-[130px]" />
          <div className="absolute -bottom-40 right-[-100px] h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[130px]" />
        </div>

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10 lg:py-24 xl:px-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-300">
              Modern Technology Stack
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Secure, Scalable, and Ready for Future Growth
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              We use modern frontend, backend, database, API, and cloud
              technologies to build reliable systems that can expand as your
              business grows.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {technologies.map((technology) => (
              <div
                key={technology}
                className="flex min-h-[82px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-4 text-center text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-400/[0.08]"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10 lg:py-24 xl:px-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
              Software for Multiple Industries
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Custom Solutions for Different Business Models
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              The same development approach can be adapted for retailers,
              service companies, manufacturers, institutions, agencies,
              startups, and growing enterprise teams.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex min-h-[92px] items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:text-violet-700 hover:shadow-md"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="relative isolate overflow-hidden rounded-[28px] bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 px-6 py-12 text-center shadow-[0_30px_80px_rgba(124,58,237,0.25)] sm:px-10 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />

            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Let&apos;s Build Software Around Your Business
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-violet-50">
              Share your current workflow, problems, and goals. AeroState Lab
              will help you plan a secure and scalable software solution for
              your business.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-violet-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Book Free Consultation
                <ArrowIcon />
              </Link>

              <Link
                to="/contact"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto sm:text-base"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomSoftwareDevelopment;