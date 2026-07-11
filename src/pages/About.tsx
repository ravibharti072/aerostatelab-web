import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  BarChart3,
  Boxes,
  Check,
  Cloud,
  Code2,
  Database,
  Headphones,
  Layers3,
  LockKeyhole,
  Map,
  MessageSquareMore,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

interface PrincipleItem {
  title: string;
  description: string;
  icon: ReactNode;
  iconStyle: string;
}

interface TechnologyItem {
  category: string;
  summary: string;
  technologies: string;
  details: string[];
  icon: ReactNode;
  iconStyle: string;
  glowStyle: string;
  accentStyle: string;
}

interface ProcessItem {
  number: string;
  title: string;
  description: string;
}

interface FocusItem {
  label: string;
  value: string;
  style: string;
}

function ArrowIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <ArrowRight
      className={`h-4 w-4 flex-none ${className}`}
      strokeWidth={1.9}
      aria-hidden="true"
    />
  );
}

function CheckIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Check
      className={`h-4 w-4 ${className}`}
      strokeWidth={2.3}
      aria-hidden="true"
    />
  );
}

function About() {
  useEffect(() => {
    document.title =
      "About AeroState Lab | Software Built Around Real Business Workflows";

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const overviewPoints = [
    "Lead creation to payment collection",
    "Employee joining to attendance and salary",
    "Customer purchase to reward and cash payout",
    "Project delivery to maintenance resolution",
  ];

  const focusItems: FocusItem[] = [
    {
      label: "Sales Flow",
      value: "Lead to Payment",
      style:
        "border-blue-100 bg-blue-50 text-blue-700",
    },
    {
      label: "Team Flow",
      value: "Joining to Salary",
      style:
        "border-violet-100 bg-violet-50 text-violet-700",
    },
    {
      label: "Customer Flow",
      value: "Purchase to Reward",
      style:
        "border-cyan-100 bg-cyan-50 text-cyan-700",
    },
    {
      label: "Service Flow",
      value: "Issue to Resolution",
      style:
        "border-emerald-100 bg-emerald-50 text-emerald-700",
    },
  ];

  const principles: PrincipleItem[] = [
    {
      title: "We Study the Work Before Writing the Code",
      description:
        "A feature list rarely explains how a business actually operates. We first map who creates a record, who approves it, what happens next, and where information usually gets lost.",
      icon: <Map className="h-6 w-6" />,
      iconStyle:
        "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      title: "We Connect the Steps That Businesses Usually Keep Separate",
      description:
        "Sales, payments, employees, projects, customers, rewards, maintenance, and reports should not live in unrelated spreadsheets and disconnected tools.",
      icon: <Layers3 className="h-6 w-6" />,
      iconStyle:
        "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      title: "We Build for Daily Use, Not Only for Presentation",
      description:
        "A business system is useful only when owners, managers, employees, interns, and field staff can use it comfortably every day without constant technical help.",
      icon: <Users className="h-6 w-6" />,
      iconStyle:
        "border-teal-200 bg-teal-50 text-teal-700",
    },
  ];

  const technologyStack: TechnologyItem[] = [
    {
      category: "Frontend Experience",
      summary: "Interfaces people can understand quickly",
      technologies:
        "React, TypeScript, Vite and Tailwind CSS",
      details: [
        "Responsive layouts for mobile and desktop",
        "Reusable interface components",
        "Clear forms, dashboards and workflows",
        "Consistent experience across every module",
      ],
      icon: <Code2 className="h-6 w-6" />,
      iconStyle:
        "border-blue-200 bg-blue-50 text-blue-700",
      glowStyle: "bg-blue-300/30",
      accentStyle:
        "from-blue-500 via-cyan-500 to-sky-500",
    },
    {
      category: "Backend Logic",
      summary: "Business rules that reflect real operations",
      technologies:
        "Python, FastAPI, SQLAlchemy and REST APIs",
      details: [
        "Secure authentication and permissions",
        "Stage-based business workflows",
        "Data validation and access control",
        "Integration-ready API architecture",
      ],
      icon: <Server className="h-6 w-6" />,
      iconStyle:
        "border-violet-200 bg-violet-50 text-violet-700",
      glowStyle: "bg-violet-300/30",
      accentStyle:
        "from-violet-500 via-purple-500 to-indigo-500",
    },
    {
      category: "Business Data",
      summary: "One connected record instead of repeated entry",
      technologies:
        "PostgreSQL, SQLite and relational data models",
      details: [
        "Connected customers, users and transactions",
        "Structured operational history",
        "Reporting-ready records",
        "Expandable database design",
      ],
      icon: <Database className="h-6 w-6" />,
      iconStyle:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
      glowStyle: "bg-emerald-300/30",
      accentStyle:
        "from-emerald-500 via-teal-500 to-cyan-500",
    },
    {
      category: "Cloud Deployment",
      summary: "Your system available beyond one office computer",
      technologies:
        "AWS, Linux servers, Nginx and secure HTTPS",
      details: [
        "Cloud-hosted business applications",
        "Secure production deployment",
        "Domain and SSL configuration",
        "Infrastructure that can grow later",
      ],
      icon: <Cloud className="h-6 w-6" />,
      iconStyle:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
      glowStyle: "bg-cyan-300/30",
      accentStyle:
        "from-cyan-500 via-sky-500 to-blue-500",
    },
    {
      category: "Access and Security",
      summary: "The right person sees the right information",
      technologies:
        "JWT authentication, role permissions and protected APIs",
      details: [
        "Permission-based sidebar access",
        "Protected application routes",
        "Role-aware editing rules",
        "Controlled administrative actions",
      ],
      icon: <ShieldCheck className="h-6 w-6" />,
      iconStyle:
        "border-rose-200 bg-rose-50 text-rose-700",
      glowStyle: "bg-rose-300/30",
      accentStyle:
        "from-rose-500 via-pink-500 to-orange-500",
    },
    {
      category: "Business Visibility",
      summary: "Reports based on live operational records",
      technologies:
        "KPI dashboards, filtered reports and summaries",
      details: [
        "Sales and payment visibility",
        "Task and project summaries",
        "Customer and reward reporting",
        "Role-specific business dashboards",
      ],
      icon: <BarChart3 className="h-6 w-6" />,
      iconStyle:
        "border-amber-200 bg-amber-50 text-amber-700",
      glowStyle: "bg-amber-300/30",
      accentStyle:
        "from-amber-500 via-orange-500 to-yellow-500",
    },
  ];

  const processSteps: ProcessItem[] = [
    {
      number: "01",
      title: "Map the Real Workflow",
      description:
        "We understand what happens from the first action to the final outcome, including approvals, exceptions, follow-ups, and responsibilities.",
    },
    {
      number: "02",
      title: "Turn the Workflow Into a Usable Interface",
      description:
        "We convert business steps into clear pages, forms, permissions, statuses, dashboards, and reports that users can understand.",
    },
    {
      number: "03",
      title: "Test With Real Scenarios",
      description:
        "We test what happens when information is missing, entered incorrectly, updated by another role, deleted, or moved to the next stage.",
    },
    {
      number: "04",
      title: "Improve After Real Usage",
      description:
        "Once people start using the system, we refine the parts that create friction and add features based on actual operational needs.",
    },
  ];

  const capabilities = [
    {
      title: "Business Operations Systems",
      description:
        "Connect sales, employees, attendance, tasks, projects, payments, commissions, maintenance, and reporting.",
      icon: <Workflow className="h-5 w-5" />,
      style:
        "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      title: "Retail Loyalty Platforms",
      description:
        "Help retailers reward painters, contractors, mechanics, technicians, and regular customers for repeat purchases.",
      icon: <Users className="h-5 w-5" />,
      style:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
    {
      title: "Role-Based Company Portals",
      description:
        "Give each user access only to the modules, records, and actions required for their work.",
      icon: <LockKeyhole className="h-5 w-5" />,
      style:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      title: "Mobile-Friendly Software",
      description:
        "Design interfaces that remain practical for shop owners, field teams, interns, managers, and customers using phones.",
      icon: <Smartphone className="h-5 w-5" />,
      style:
        "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      title: "Expandable Business Modules",
      description:
        "Begin with essential workflows and add new departments, reports, integrations, and locations as the business grows.",
      icon: <Boxes className="h-5 w-5" />,
      style:
        "border-amber-200 bg-amber-50 text-amber-700",
    },
    {
      title: "Continuous Product Improvement",
      description:
        "Refine workflows, resolve issues, and add features based on how the system performs in actual daily use.",
      icon: <Headphones className="h-5 w-5" />,
      style:
        "border-rose-200 bg-rose-50 text-rose-700",
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
          <div className="absolute -left-44 -top-52 h-[540px] w-[540px] rounded-full bg-blue-300/25 blur-[140px]" />
          <div className="absolute -bottom-52 right-[-130px] h-[570px] w-[570px] rounded-full bg-cyan-300/25 blur-[145px]" />
        </div>

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur sm:text-xs">
              <Sparkles
                className="h-4 w-4"
                strokeWidth={1.9}
              />

              Software Built From Real Workflows
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              We Turn the Way Your Business Works

              <span className="block">
                Into Software Your Team
              </span>

              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Can Actually Use.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              AeroState Lab builds cloud software for businesses
              that have outgrown spreadsheets, scattered WhatsApp
              updates, repeated data entry, and disconnected tools.
              We convert everyday operations into one clear,
              connected system.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {overviewPoints.map((item) => (
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
                to="/products/business-operations-management-system"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Explore Business System

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700 hover:shadow-md sm:w-auto sm:text-base"
              >
                Discuss Your Workflow
              </Link>
            </div>
          </div>

          {/* Workflow Panel */}
          <div className="relative mx-auto w-full max-w-[590px]">
            <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/25 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white/95 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.16)] backdrop-blur sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                    What AeroState Connects
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    One Business, One Connected Flow
                  </h2>
                </div>

                <span className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
                  Live Operations
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {focusItems.map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-2xl border p-4 ${item.style}`}
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
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      AeroState Method
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                      Follow the complete journey, not only one task
                    </p>
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-600">
                    <Workflow className="h-5 w-5" />
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  {[
                    "Create",
                    "Assign",
                    "Track",
                    "Complete",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="flex min-w-0 flex-1 items-center gap-2"
                    >
                      <div className="flex-1 rounded-lg border border-slate-200 bg-white px-2 py-2 text-center text-[9px] font-bold uppercase tracking-[0.08em] text-slate-500">
                        {step}
                      </div>

                      {index < 3 && (
                        <ArrowRight className="h-3 w-3 flex-none text-blue-400" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  "Practical",
                  "Connected",
                  "Secure",
                  "Expandable",
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

      {/* Our View */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              How We Think About Software
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              A Good System Should Follow the Work From Beginning to End
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Creating a lead is not enough if its payment is tracked
              somewhere else. Recording attendance is not enough if
              tasks, performance, and salary remain disconnected.
              AeroState Lab builds around the complete operational
              journey.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="group rounded-[22px] border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${principle.iconStyle}`}
                >
                  {principle.icon}
                </span>

                <h3 className="mt-5 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  {principle.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
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
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                What We Build
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Software for the Work That Usually Falls Between Different Tools
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Many businesses already have billing software,
                spreadsheets, WhatsApp groups, and separate records.
                The real problem is that none of them show the full
                operational picture. We build the layer that connects
                those activities.
              </p>

              <Link
                to="/services/custom-software-development"
                className="group mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-teal-100 bg-teal-50 px-6 py-3 text-sm font-bold text-teal-700 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-teal-600 hover:text-white"
              >
                Explore Custom Development

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <article
                  key={item.title}
                  className="group flex items-start gap-4 rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
                >
                  <span
                    className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl border ${item.style}`}
                  >
                    {item.icon}
                  </span>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-teal-600">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              How We Build It
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              A Practical Technology Stack Behind Practical Business Software
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We use modern tools, but technology is not the final
              product. The final product is a system that saves time,
              prevents mistakes, keeps records connected, and gives
              the business a clearer view of what is happening.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technologyStack.map((item) => (
              <article
                key={item.category}
                className="group relative h-full"
              >
                <div
                  className={`pointer-events-none absolute -inset-2 rounded-[30px] opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-40 ${item.glowStyle}`}
                />

                <div className="relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.055)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-slate-300 group-hover:shadow-[0_22px_55px_rgba(15,23,42,0.11)]">
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${item.accentStyle}`}
                  />

                  <div className="flex flex-1 flex-col p-6">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${item.iconStyle}`}
                    >
                      {item.icon}
                    </span>

                    <span className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                      {item.category}
                    </span>

                    <h3 className="mt-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                      {item.summary}
                    </h3>

                    <p className="mt-3 text-sm font-semibold leading-6 text-slate-500">
                      {item.technologies}
                    </p>

                    <div className="mt-5 space-y-3">
                      {item.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                        >
                          <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                            <CheckIcon className="h-3.5 w-3.5" />
                          </span>

                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Our Working Method
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                We Refine the Workflow, Not Only the Screen Design
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Building software is not finished when a page looks
                good. We also test permissions, status changes,
                incorrect entries, deletion rules, calculations,
                reports, and what happens when different users perform
                the same process.
              </p>

              <Link
                to="/services"
                className="group mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-6 py-3 text-sm font-bold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-600 hover:text-white"
              >
                View Our Development Approach

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="group rounded-[22px] border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
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

      {/* Products */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
              Products Shaped by Real Use Cases
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Two Different Products, Built Around Two Different Operational Problems
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              One helps a company control its internal operations.
              The other helps retailers create repeat customers
              without relying only on ordinary discounts.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
            <Link
              to="/products/business-operations-management-system"
              className="group rounded-[24px] border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-200 bg-white text-indigo-700">
                <Boxes className="h-6 w-6" />
              </span>

              <span className="mt-5 block text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-600">
                Internal Business Control
              </span>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                AeroState Business Operations Management System
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Follow work from a new sales lead through conversion,
                payment, project execution, team assignment,
                delivery, maintenance, and reporting.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-700">
                Explore Product

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              to="/products/loyalty-reward-system"
              className="group rounded-[24px] border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-emerald-50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200 bg-white text-cyan-700">
                <Users className="h-6 w-6" />
              </span>

              <span className="mt-5 block text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-600">
                Repeat Customer Growth
              </span>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                AeroState Loyalty Reward System
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Help hardware shops, paint dealers, distributors, and
                retailers reward painters, contractors, mechanics,
                technicians, and customers with points that can be
                redeemed as cash.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-700">
                Explore Product

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
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

            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-50 backdrop-blur sm:text-xs">
              <MessageSquareMore className="h-4 w-4" />

              Tell Us How Your Business Currently Works
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              The Best Starting Point Is Not a Feature List. It Is Your Actual Workflow.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
              Show us where work begins, who handles it, where
              information gets delayed, and what outcome you need.
              We will help turn that process into a connected cloud
              system.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Discuss Your Workflow

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/products/loyalty-reward-system"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto sm:text-base"
              >
                View Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;