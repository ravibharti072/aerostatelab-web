import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  BadgeIndianRupee,
  BarChart3,
  BriefcaseBusiness,
  CalendarClock,
  Check,
  CheckCircle2,
  CircleDollarSign,
  Cloud,
  FileCheck2,
  FileText,
  Filter,
  GitBranch,
  Handshake,
  Layers3,
  MessageSquareText,
  MonitorSmartphone,
  Package,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
  UserRoundSearch,
  Workflow,
} from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  points: string[];
  icon: ReactNode;
  iconStyle: string;
  accentStyle: string;
  glowStyle: string;
}

interface PipelineStep {
  number: string;
  stage: string;
  title: string;
  description: string;
  icon: ReactNode;
  style: string;
}

interface RoleItem {
  role: string;
  description: string;
  permissions: string[];
  style: string;
}

interface AdvantageItem {
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

function CRM() {
  useEffect(() => {
    document.title =
      "Sales CRM and Lead Management Software | AeroState Lab";

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const heroPoints = [
    "Lead creation and assignment",
    "Stage-based sales pipeline",
    "Follow-up and proposal tracking",
    "Conversion, delivery and payment connection",
  ];

  const coreFeatures: FeatureItem[] = [
    {
      title: "Lead Capture",
      description:
        "Create structured sales records with the information required for future follow-up and conversion.",
      points: [
        "Customer and company details",
        "Phone and email records",
        "Software product selection",
        "Lead source and priority",
      ],
      icon: <UserRoundSearch className="h-6 w-6" />,
      iconStyle:
        "border-blue-200 bg-blue-50 text-blue-700",
      accentStyle:
        "from-blue-500 via-cyan-500 to-sky-500",
      glowStyle: "bg-blue-300/30",
    },
    {
      title: "Sales Pipeline",
      description:
        "Move every opportunity through a clearly defined sales journey instead of relying on memory.",
      points: [
        "New and contacted stages",
        "Interested and proposal stages",
        "Converted and delivered stages",
        "Completed, lost and not-interested outcomes",
      ],
      icon: <GitBranch className="h-6 w-6" />,
      iconStyle:
        "border-violet-200 bg-violet-50 text-violet-700",
      accentStyle:
        "from-violet-500 via-purple-500 to-indigo-500",
      glowStyle: "bg-violet-300/30",
    },
    {
      title: "Sales Representative Assignment",
      description:
        "Connect each lead with the responsible sales user and maintain clear ownership.",
      points: [
        "Assign sales representatives",
        "Sales users view their own leads",
        "Admin visibility across all leads",
        "Created-by user tracking",
      ],
      icon: <UserCheck className="h-6 w-6" />,
      iconStyle:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
      accentStyle:
        "from-cyan-500 via-sky-500 to-blue-500",
      glowStyle: "bg-cyan-300/30",
    },
    {
      title: "Follow-Up Management",
      description:
        "Record the next required action so opportunities do not disappear after the first conversation.",
      points: [
        "Follow-up date selection",
        "Contact status tracking",
        "Proposal-sent tracking",
        "Lead notes and updates",
      ],
      icon: <CalendarClock className="h-6 w-6" />,
      iconStyle:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
      accentStyle:
        "from-emerald-500 via-teal-500 to-cyan-500",
      glowStyle: "bg-emerald-300/30",
    },
    {
      title: "Sales Value Tracking",
      description:
        "Record expected opportunity value early and confirm the final amount when the sale converts.",
      points: [
        "Optional expected amount",
        "Proposal amount support",
        "Final sale amount",
        "Converted sales reporting",
      ],
      icon: <BadgeIndianRupee className="h-6 w-6" />,
      iconStyle:
        "border-amber-200 bg-amber-50 text-amber-700",
      accentStyle:
        "from-amber-500 via-orange-500 to-yellow-500",
      glowStyle: "bg-amber-300/30",
    },
    {
      title: "Search and Filters",
      description:
        "Quickly locate opportunities using customer details, stages, assignment, and workflow status.",
      points: [
        "Customer and company search",
        "Pipeline-stage filtering",
        "Sales representative filters",
        "Contacted and proposal filters",
      ],
      icon: <Filter className="h-6 w-6" />,
      iconStyle:
        "border-rose-200 bg-rose-50 text-rose-700",
      accentStyle:
        "from-rose-500 via-pink-500 to-orange-500",
      glowStyle: "bg-rose-300/30",
    },
  ];

  const pipelineSteps: PipelineStep[] = [
    {
      number: "01",
      stage: "New",
      title: "Create the Opportunity",
      description:
        "Record the customer, company, software requirement, source, expected value, and responsible sales user.",
      icon: <UserRoundSearch className="h-5 w-5" />,
      style:
        "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      number: "02",
      stage: "Contacted",
      title: "Begin the Conversation",
      description:
        "Confirm that the customer has been contacted and record the next follow-up action.",
      icon: <Phone className="h-5 w-5" />,
      style:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
    {
      number: "03",
      stage: "Interested",
      title: "Confirm Customer Interest",
      description:
        "Move the lead forward when the customer shows a genuine interest in the proposed solution.",
      icon: <Target className="h-5 w-5" />,
      style:
        "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      number: "04",
      stage: "Proposal Sent",
      title: "Share the Commercial Proposal",
      description:
        "Record that pricing and project information have been presented to the customer.",
      icon: <FileCheck2 className="h-5 w-5" />,
      style:
        "border-amber-200 bg-amber-50 text-amber-700",
    },
    {
      number: "05",
      stage: "Converted",
      title: "Confirm the Sale",
      description:
        "Enter the final sale amount and convert the opportunity into an active business project.",
      icon: <Handshake className="h-5 w-5" />,
      style:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      number: "06",
      stage: "Delivered",
      title: "Complete the Handover",
      description:
        "Mark the sale as delivered after the software or service has been handed over to the customer.",
      icon: <Package className="h-5 w-5" />,
      style:
        "border-indigo-200 bg-indigo-50 text-indigo-700",
    },
    {
      number: "07",
      stage: "Completed",
      title: "Close the Operational Journey",
      description:
        "Complete the sales journey after delivery, final checks, required support, and remaining actions are finished.",
      icon: <CheckCircle2 className="h-5 w-5" />,
      style:
        "border-teal-200 bg-teal-50 text-teal-700",
    },
  ];

  const roleItems: RoleItem[] = [
    {
      role: "Owner and Admin",
      description:
        "Complete visibility across the company sales pipeline and connected operations.",
      permissions: [
        "Create and assign leads",
        "View every sales record",
        "Update pipeline stages",
        "Review sales reports",
      ],
      style:
        "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      role: "Sales Representative",
      description:
        "A focused workspace for managing assigned opportunities and follow-ups.",
      permissions: [
        "View assigned leads",
        "Create personal leads",
        "Update permitted stages",
        "Record follow-ups and notes",
      ],
      style:
        "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      role: "Manager",
      description:
        "Review permitted sales activity and coordinate the responsible team.",
      permissions: [
        "Review team opportunities",
        "Monitor pipeline progress",
        "Assign permitted work",
        "View authorised reports",
      ],
      style:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      role: "Permitted User",
      description:
        "Access only the sales tools and actions approved through portal permissions.",
      permissions: [
        "Permission-based visibility",
        "Protected record access",
        "Role-limited actions",
        "Secure authenticated portal",
      ],
      style:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
  ];

  const advantages: AdvantageItem[] = [
    {
      title: "Software Product Connection",
      description:
        "Use a shared software catalog so leads consistently reference the correct ERP, loyalty system, or custom solution.",
      icon: <Layers3 className="h-5 w-5" />,
      style:
        "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      title: "Payment Connection",
      description:
        "Record received payments separately and connect them with delivered projects or business sales.",
      icon: <CircleDollarSign className="h-5 w-5" />,
      style:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      title: "Project Creation",
      description:
        "Converted sales opportunities can become active projects with status, team assignment, and task tracking.",
      icon: <BriefcaseBusiness className="h-5 w-5" />,
      style:
        "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      title: "Commission Tracking",
      description:
        "Connect eligible sales and received amounts with commission calculations and payment history.",
      icon: <BadgeIndianRupee className="h-5 w-5" />,
      style:
        "border-amber-200 bg-amber-50 text-amber-700",
    },
    {
      title: "Maintenance Linkage",
      description:
        "Raise and manage project issues after delivery without losing the original sales and project connection.",
      icon: <Workflow className="h-5 w-5" />,
      style:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
    {
      title: "Sales Reporting",
      description:
        "Use connected CRM records to review pipeline movement, final sales, users, products, and outcomes.",
      icon: <BarChart3 className="h-5 w-5" />,
      style:
        "border-rose-200 bg-rose-50 text-rose-700",
    },
  ];

  const idealFor = [
    "Software companies",
    "Service businesses",
    "Sales agencies",
    "B2B companies",
    "Startup sales teams",
    "Growing SMEs",
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

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.06fr_0.94fr] lg:gap-20 lg:px-10 lg:py-24 xl:px-16">
          {/* Hero content */}
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <Link
              to="/solutions"
              className="group inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />

              Back to Solutions
            </Link>

            <div className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur sm:text-xs">
                <Sparkles
                  className="h-4 w-4"
                  strokeWidth={1.9}
                />

                Sales and Customer Management
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              Follow Every Opportunity

              <span className="block">
                From the First Conversation
              </span>

              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                To Sale and Delivery.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              Manage leads, customer information, sales ownership,
              follow-ups, proposals, values, conversion, delivery, and
              connected projects through one structured CRM workflow.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {heroPoints.map((item) => (
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
                href="#crm-features"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Explore CRM Features

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                to="/contact"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700 hover:shadow-md sm:w-auto sm:text-base"
              >
                Request a Consultation
              </Link>
            </div>
          </div>

          {/* CRM dashboard preview */}
          <div className="relative mx-auto w-full max-w-[610px]">
            <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/25 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white/95 shadow-[0_30px_90px_rgba(15,23,42,0.16)] backdrop-blur">
              {/* Browser bar */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-300" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300" />
                </div>

                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />

                  Sales CRM · Live
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                      Sales Overview
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      Opportunity Pipeline
                    </h2>
                  </div>

                  <span className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
                    This Month
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    {
                      label: "New Leads",
                      value: "18",
                      icon: <UserRoundSearch className="h-4 w-4" />,
                      style:
                        "border-blue-100 bg-blue-50 text-blue-700",
                    },
                    {
                      label: "Proposals",
                      value: "11",
                      icon: <FileCheck2 className="h-4 w-4" />,
                      style:
                        "border-violet-100 bg-violet-50 text-violet-700",
                    },
                    {
                      label: "Converted",
                      value: "9",
                      icon: <Handshake className="h-4 w-4" />,
                      style:
                        "border-emerald-100 bg-emerald-50 text-emerald-700",
                    },
                    {
                      label: "Final Sales",
                      value: "₹8.4L",
                      icon: <BadgeIndianRupee className="h-4 w-4" />,
                      style:
                        "border-amber-100 bg-amber-50 text-amber-700",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`rounded-2xl border p-3 ${item.style}`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-current/10 bg-white/80">
                          {item.icon}
                        </span>

                        <span className="text-lg font-extrabold sm:text-xl">
                          {item.value}
                        </span>
                      </div>

                      <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.1em] opacity-70">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        Pipeline Movement
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-800">
                        38 active opportunities
                      </p>
                    </div>

                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                      <GitBranch className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    {[
                      {
                        label: "New Leads",
                        value: "18",
                        width: "78%",
                        color: "bg-blue-500",
                      },
                      {
                        label: "Contacted",
                        value: "15",
                        width: "66%",
                        color: "bg-cyan-500",
                      },
                      {
                        label: "Proposal Sent",
                        value: "11",
                        width: "52%",
                        color: "bg-violet-500",
                      },
                      {
                        label: "Converted",
                        value: "9",
                        width: "39%",
                        color: "bg-emerald-500",
                      },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between text-[10px] font-semibold text-slate-500">
                          <span>{item.label}</span>
                          <span>{item.value}</span>
                        </div>

                        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className={`h-full rounded-full ${item.color}`}
                            style={{
                              width: item.width,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[1.12fr_0.88fr]">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-blue-600">
                          Priority Opportunity
                        </p>

                        <p className="mt-1 text-sm font-bold text-slate-900">
                          Retail Management Platform
                        </p>
                      </div>

                      <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[8px] font-bold uppercase text-amber-600">
                        High
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-slate-400">
                          Company
                        </p>

                        <p className="mt-1 text-xs font-bold text-slate-700">
                          Sharma Retail
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-slate-400">
                          Expected
                        </p>

                        <p className="mt-1 text-xs font-bold text-slate-700">
                          ₹1,20,000
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-3 py-2.5">
                      <CalendarClock className="h-4 w-4 text-blue-600" />

                      <span className="text-[10px] font-semibold text-slate-600">
                        Follow-up scheduled for tomorrow
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      Lead Sources
                    </p>

                    <div className="mt-4 flex items-center justify-center">
                      <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[conic-gradient(#2563eb_0deg_150deg,#8b5cf6_150deg_245deg,#14b8a6_245deg_310deg,#f59e0b_310deg_360deg)]">
                        <div className="flex h-[70px] w-[70px] flex-col items-center justify-center rounded-full bg-white">
                          <span className="text-xl font-extrabold text-slate-900">
                            38
                          </span>

                          <span className="text-[8px] font-bold uppercase tracking-[0.08em] text-slate-400">
                            Leads
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2 text-[8px] font-bold text-slate-400">
                      <span className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-blue-500" />
                        Referral
                      </span>

                      <span className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-violet-500" />
                        Website
                      </span>

                      <span className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-teal-500" />
                        Calling
                      </span>

                      <span className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-amber-500" />
                        Other
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-emerald-200 bg-white text-emerald-700">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-800">
                      Lead converted successfully
                    </p>

                    <p className="mt-1 truncate text-[10px] text-slate-500">
                      Project and final sale details are now available
                    </p>
                  </div>

                  <span className="ml-auto flex-none rounded-full bg-white px-2 py-1 text-[8px] font-bold uppercase text-emerald-600">
                    Converted
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <CalendarClock className="h-5 w-5" />
              </span>

              <div>
                <p className="text-xs font-bold text-slate-800">
                  Follow-up reminder updated
                </p>

                <p className="mt-0.5 text-[9px] text-slate-500">
                  Sales user notified inside the portal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary strip */}
      <section className="border-y border-slate-300 bg-slate-100">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-px bg-slate-300 px-px sm:grid-cols-4">
          {[
            {
              title: "Capture",
              value: "Leads",
              icon: <UserRoundSearch className="h-5 w-5" />,
            },
            {
              title: "Track",
              value: "Pipeline",
              icon: <GitBranch className="h-5 w-5" />,
            },
            {
              title: "Convert",
              value: "Sales",
              icon: <Handshake className="h-5 w-5" />,
            },
            {
              title: "Connect",
              value: "Projects",
              icon: <BriefcaseBusiness className="h-5 w-5" />,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex min-h-[116px] items-center gap-4 bg-slate-100 px-5 py-5 sm:px-6"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-blue-200 bg-white text-blue-600 shadow-sm">
                {item.icon}
              </span>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                  {item.title}
                </p>

                <p className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core features */}
      <section
        id="crm-features"
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
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Core CRM Modules
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Keep Every Customer Opportunity Structured and Visible
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Replace scattered notes, spreadsheets, and memory-based
              follow-ups with one connected sales process that your
              team can update and management can review.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {coreFeatures.map((feature) => (
              <article
                key={feature.title}
                className="group relative h-full"
              >
                <div
                  className={`pointer-events-none absolute -inset-2 rounded-[30px] opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-40 ${feature.glowStyle}`}
                />

                <div className="relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.055)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-slate-300 group-hover:shadow-[0_22px_55px_rgba(15,23,42,0.11)]">
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${feature.accentStyle}`}
                  />

                  <div className="flex flex-1 flex-col p-6">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${feature.iconStyle}`}
                    >
                      {feature.icon}
                    </span>

                    <h3 className="mt-5 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {feature.description}
                    </p>

                    <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                      {feature.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                        >
                          <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                            <CheckIcon className="h-3.5 w-3.5" />
                          </span>

                          <span>{point}</span>
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

      {/* Pipeline */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
                Connected Sales Journey
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Move Every Opportunity Through a Clear Pipeline
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Each stage should explain what has happened, what
                information is required, and what becomes available
                next. This keeps the sales team and management aligned.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-violet-100 bg-violet-50 px-6 py-3 text-sm font-bold text-violet-700 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-violet-600 hover:text-white"
              >
                Discuss Your Sales Process

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="space-y-3">
              {pipelineSteps.map((step, index) => (
                <article
                  key={step.number}
                  className="group flex items-center gap-4 rounded-[20px] border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-lg sm:p-5"
                >
                  <span
                    className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl border ${step.style}`}
                  >
                    {step.icon}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-blue-600">
                        Step {step.number}
                      </span>

                      <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.1em] text-slate-500">
                        {step.stage}
                      </span>

                      {index < pipelineSteps.length - 1 && (
                        <span className="h-px flex-1 bg-slate-200" />
                      )}
                    </div>

                    <h3 className="mt-2 text-base font-bold text-slate-900 sm:text-lg">
                      {step.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>

                  <ArrowRight className="h-5 w-5 flex-none text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-500" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Role access */}
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
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
              Permission-Based Sales Access
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Give Every Sales Role the Right Level of Visibility
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Owners need a complete pipeline view, while sales users
              should primarily manage their assigned opportunities.
              Portal permissions keep that access controlled.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {roleItems.map((item) => (
              <article
                key={item.role}
                className="group rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
              >
                <span
                  className={`inline-flex rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] ${item.style}`}
                >
                  {item.role}
                </span>

                <p className="mt-5 min-h-[90px] text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                  {item.permissions.map((permission) => (
                    <div
                      key={permission}
                      className="flex items-start gap-2.5 text-xs font-semibold leading-5 text-slate-600"
                    >
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>

                      <span>{permission}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Connected modules */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-10 xl:px-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              CRM Connected With Operations
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              The Sales Record Should Continue After Conversion
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              A converted opportunity should not become an isolated
              completed entry. It can connect with projects, payments,
              commissions, delivery, maintenance, and reports.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {idealFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {advantages.map((item) => (
              <article
                key={item.title}
                className="group flex items-start gap-4 rounded-[20px] border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
              >
                <span
                  className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl border ${item.style}`}
                >
                  {item.icon}
                </span>

                <div>
                  <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud CRM */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />

        <div className="pointer-events-none absolute -left-44 top-0 -z-10 h-[480px] w-[480px] rounded-full bg-blue-500/20 blur-[130px]" />

        <div className="pointer-events-none absolute -bottom-52 right-[-100px] -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[135px]" />

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-10 lg:py-24 xl:px-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-300">
              <Cloud className="h-4 w-4" />

              Cloud Sales Management
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Keep the Sales Pipeline Available to the Team Wherever Work Happens
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Authorised sales users and managers can review permitted
              opportunities, follow-ups, notes, and pipeline movement
              through a responsive cloud platform.
            </p>

            <Link
              to="/why-choose-us"
              className="group mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              Why Choose AeroState

              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "Responsive CRM",
                description:
                  "Create, review, and update permitted opportunities from phones, tablets, laptops, and desktops.",
                icon: <MonitorSmartphone className="h-6 w-6" />,
              },
              {
                title: "Secure Role Access",
                description:
                  "Restrict customer, value, and pipeline information through portal permissions.",
                icon: <ShieldCheck className="h-6 w-6" />,
              },
              {
                title: "Centralised Customer Records",
                description:
                  "Keep customer details, notes, stages, values, and follow-ups together.",
                icon: <FileText className="h-6 w-6" />,
              },
              {
                title: "Searchable Opportunities",
                description:
                  "Use customer, company, status, user, and pipeline filters to locate records quickly.",
                icon: <Search className="h-6 w-6" />,
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[20px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.09]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
                  {item.icon}
                </span>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
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

            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-50 backdrop-blur sm:text-xs">
              <MessageSquareText className="h-4 w-4" />

              Discuss Your Sales Workflow
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Build a CRM Around How Your Team Actually Finds and Converts Customers
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
              Tell us how leads currently arrive, who manages them,
              how follow-ups are recorded, when values are confirmed,
              and what should happen after conversion. We will help
              structure that process into one connected sales platform.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Request CRM Consultation

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/products/business-operations-management-system"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto sm:text-base"
              >
                Explore Business System
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CRM;