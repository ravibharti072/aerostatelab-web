import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  CircleDollarSign,
  Cloud,
  Database,
  FileBarChart,
  Filter,
  Gauge,
  GitBranch,
  LayoutDashboard,
  LineChart,
  LockKeyhole,
  MessageSquareText,
  MonitorSmartphone,
  PieChart,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
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

interface DataStep {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  style: string;
}

interface RoleViewItem {
  role: string;
  description: string;
  metrics: string[];
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

function Analytics() {
  useEffect(() => {
    document.title =
      "Business Intelligence and Reporting Software | AeroState Lab";

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const heroPoints = [
    "Live operational KPI dashboards",
    "Sales and payment visibility",
    "Task and project summaries",
    "Role-based reporting access",
  ];

  const coreFeatures: FeatureItem[] = [
    {
      title: "Operational Dashboards",
      description:
        "Bring the most important business information into one clear management view.",
      points: [
        "Custom KPI cards",
        "Current business summaries",
        "Module-specific dashboards",
        "Daily operational visibility",
      ],
      icon: <LayoutDashboard className="h-6 w-6" />,
      iconStyle:
        "border-blue-200 bg-blue-50 text-blue-700",
      accentStyle:
        "from-blue-500 via-cyan-500 to-sky-500",
      glowStyle: "bg-blue-300/30",
    },
    {
      title: "Sales Pipeline Reporting",
      description:
        "Understand how opportunities move from a new lead through conversion and delivery.",
      points: [
        "Lead-stage summaries",
        "Expected and final values",
        "Converted sales visibility",
        "Sales representative activity",
      ],
      icon: <GitBranch className="h-6 w-6" />,
      iconStyle:
        "border-violet-200 bg-violet-50 text-violet-700",
      accentStyle:
        "from-violet-500 via-purple-500 to-indigo-500",
      glowStyle: "bg-violet-300/30",
    },
    {
      title: "Payment and Revenue Views",
      description:
        "Connect recorded payments with customers, projects, sales, and outstanding business activity.",
      points: [
        "Received payment summaries",
        "Payment history visibility",
        "Sales and payment comparison",
        "Commission-linked reporting",
      ],
      icon: <CircleDollarSign className="h-6 w-6" />,
      iconStyle:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
      accentStyle:
        "from-emerald-500 via-teal-500 to-cyan-500",
      glowStyle: "bg-emerald-300/30",
    },
    {
      title: "Task and Team Visibility",
      description:
        "Review pending work, completed assignments, responsibility, priority, and progress.",
      points: [
        "Pending task summaries",
        "Assigned-user reporting",
        "Priority and deadline visibility",
        "Completion status tracking",
      ],
      icon: <Users className="h-6 w-6" />,
      iconStyle:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
      accentStyle:
        "from-cyan-500 via-sky-500 to-blue-500",
      glowStyle: "bg-cyan-300/30",
    },
    {
      title: "Project Performance",
      description:
        "Track internal and customer projects from creation through active work and completion.",
      points: [
        "Running project summaries",
        "Project-linked task visibility",
        "Delivery and status reporting",
        "Maintenance issue connection",
      ],
      icon: <Target className="h-6 w-6" />,
      iconStyle:
        "border-amber-200 bg-amber-50 text-amber-700",
      accentStyle:
        "from-amber-500 via-orange-500 to-yellow-500",
      glowStyle: "bg-amber-300/30",
    },
    {
      title: "Search and Report Filters",
      description:
        "Move from a high-level summary to the exact period, user, status, or record you need.",
      points: [
        "Date-range filtering",
        "Status-based reporting",
        "User and department filters",
        "Searchable operational records",
      ],
      icon: <Filter className="h-6 w-6" />,
      iconStyle:
        "border-rose-200 bg-rose-50 text-rose-700",
      accentStyle:
        "from-rose-500 via-pink-500 to-orange-500",
      glowStyle: "bg-rose-300/30",
    },
  ];

  const dataSteps: DataStep[] = [
    {
      number: "01",
      title: "Capture Operational Records",
      description:
        "Sales, payments, tasks, projects, attendance, customers, and transactions are recorded through their working modules.",
      icon: <Database className="h-5 w-5" />,
      style:
        "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      number: "02",
      title: "Connect Related Information",
      description:
        "Customer, employee, project, payment, and workflow records remain linked instead of being stored as unrelated entries.",
      icon: <Workflow className="h-5 w-5" />,
      style:
        "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      number: "03",
      title: "Calculate Business Summaries",
      description:
        "The platform converts connected records into totals, counts, statuses, and operational indicators.",
      icon: <Gauge className="h-5 w-5" />,
      style:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
    {
      number: "04",
      title: "Present Role-Based Views",
      description:
        "Owners, managers, sales users, and other authorised roles see dashboards relevant to their responsibilities.",
      icon: <ShieldCheck className="h-5 w-5" />,
      style:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      number: "05",
      title: "Review and Act",
      description:
        "Managers can identify pending work, payment gaps, sales movement, project delays, and operational priorities.",
      icon: <Target className="h-5 w-5" />,
      style:
        "border-amber-200 bg-amber-50 text-amber-700",
    },
  ];

  const roleViews: RoleViewItem[] = [
    {
      role: "Owner and Admin",
      description:
        "A broad view of company performance across connected business modules.",
      metrics: [
        "Final sales and payments",
        "Running projects",
        "Pending tasks",
        "Team activity",
      ],
      style:
        "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      role: "Sales Team",
      description:
        "A focused view of assigned opportunities, follow-ups, and conversion progress.",
      metrics: [
        "Assigned leads",
        "Pipeline stages",
        "Expected values",
        "Follow-up activity",
      ],
      style:
        "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      role: "Manager",
      description:
        "Operational visibility for permitted teams, projects, tasks, and deadlines.",
      metrics: [
        "Team task status",
        "Project progress",
        "Priority workload",
        "Overdue activity",
      ],
      style:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      role: "Finance and Accounts",
      description:
        "Payment and financial summaries based on authorised business records.",
      metrics: [
        "Received payments",
        "Payment history",
        "Sales values",
        "Commission status",
      ],
      style:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
  ];

  const advantages: AdvantageItem[] = [
    {
      title: "One Connected Data Source",
      description:
        "Reports are generated from the same records used by sales, projects, tasks, payments, and workforce modules.",
      icon: <Database className="h-5 w-5" />,
      style:
        "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      title: "Less Repeated Reporting",
      description:
        "Managers do not need to repeatedly collect the same updates from different spreadsheets and messages.",
      icon: <FileBarChart className="h-5 w-5" />,
      style:
        "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      title: "Controlled Visibility",
      description:
        "Sensitive company information remains available only to users with the required portal permissions.",
      icon: <LockKeyhole className="h-5 w-5" />,
      style:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      title: "Responsive Management View",
      description:
        "Review essential dashboard information from phones, tablets, laptops, and desktop screens.",
      icon: <MonitorSmartphone className="h-5 w-5" />,
      style:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
  ];

  const usefulFor = [
    "Company operations",
    "Sales and CRM",
    "Payment tracking",
    "Project management",
    "Workforce reporting",
    "Retail loyalty reporting",
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

                Business Intelligence and Reporting
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              Turn Daily Business Records

              <span className="block">
                Into Clear Operational
              </span>

              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Decisions and Priorities.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              Bring information from sales, payments, employees,
              tasks, projects, customers, and business operations into
              connected dashboards and reporting views.
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
                href="#analytics-features"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Explore Analytics Features

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

          {/* Analytics dashboard preview */}
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

                  Analytics Dashboard · Live
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                      Business Overview
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      Management Dashboard
                    </h2>
                  </div>

                  <span className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
                    This Month
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    {
                      label: "Sales",
                      value: "₹8.4L",
                      icon: <LineChart className="h-4 w-4" />,
                      style:
                        "border-blue-100 bg-blue-50 text-blue-700",
                    },
                    {
                      label: "Payments",
                      value: "₹6.2L",
                      icon: (
                        <CircleDollarSign className="h-4 w-4" />
                      ),
                      style:
                        "border-emerald-100 bg-emerald-50 text-emerald-700",
                    },
                    {
                      label: "Tasks",
                      value: "24",
                      icon: <CheckCircle2 className="h-4 w-4" />,
                      style:
                        "border-violet-100 bg-violet-50 text-violet-700",
                    },
                    {
                      label: "Projects",
                      value: "11",
                      icon: <Building2 className="h-4 w-4" />,
                      style:
                        "border-cyan-100 bg-cyan-50 text-cyan-700",
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
                        Revenue and Payment Activity
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-800">
                        Monthly operational movement
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-bold text-emerald-600">
                      Updated
                    </span>
                  </div>

                  <div className="mt-5 flex h-32 items-end gap-2">
                    {[
                      { first: 45, second: 31 },
                      { first: 58, second: 42 },
                      { first: 52, second: 38 },
                      { first: 69, second: 51 },
                      { first: 61, second: 47 },
                      { first: 77, second: 58 },
                      { first: 67, second: 52 },
                      { first: 83, second: 64 },
                      { first: 74, second: 59 },
                      { first: 88, second: 70 },
                      { first: 80, second: 65 },
                      { first: 91, second: 72 },
                    ].map((bar, index) => (
                      <div
                        key={index}
                        className="flex h-full min-w-0 flex-1 items-end justify-center gap-[2px]"
                      >
                        <span
                          className="w-1/2 rounded-t-sm bg-blue-500"
                          style={{
                            height: `${bar.first}%`,
                          }}
                        />

                        <span
                          className="w-1/2 rounded-t-sm bg-emerald-400"
                          style={{
                            height: `${bar.second}%`,
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[8px] font-bold uppercase tracking-[0.08em] text-slate-400">
                    <span>Week 1</span>
                    <span>Week 2</span>
                    <span>Week 3</span>
                    <span>Week 4</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                          Sales Pipeline
                        </p>

                        <p className="mt-1 text-sm font-bold text-slate-800">
                          38 active opportunities
                        </p>
                      </div>

                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                        <GitBranch className="h-4 w-4" />
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      {[
                        {
                          label: "New Leads",
                          value: "18",
                          width: "78%",
                          color: "bg-blue-500",
                        },
                        {
                          label: "Proposal Sent",
                          value: "11",
                          width: "53%",
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

                          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
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

                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      Team Activity
                    </p>

                    <div className="mt-4 flex items-center justify-center">
                      <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[conic-gradient(#2563eb_0deg_225deg,#22c55e_225deg_300deg,#f59e0b_300deg_360deg)]">
                        <div className="flex h-[70px] w-[70px] flex-col items-center justify-center rounded-full bg-white">
                          <span className="text-xl font-extrabold text-slate-900">
                            24
                          </span>

                          <span className="text-[8px] font-bold uppercase tracking-[0.08em] text-slate-400">
                            Team
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-center gap-3 text-[8px] font-bold uppercase tracking-[0.06em] text-slate-400">
                      <span className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-blue-500" />
                        Active
                      </span>

                      <span className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        Done
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <BarChart3 className="h-5 w-5" />
              </span>

              <div>
                <p className="text-xs font-bold text-slate-800">
                  Reports updated from live records
                </p>

                <p className="mt-0.5 text-[9px] text-slate-500">
                  One connected operational view
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
              title: "Visibility",
              value: "Dashboards",
              icon: <LayoutDashboard className="h-5 w-5" />,
            },
            {
              title: "Analysis",
              value: "Reports",
              icon: <BarChart3 className="h-5 w-5" />,
            },
            {
              title: "Control",
              value: "Filters",
              icon: <Filter className="h-5 w-5" />,
            },
            {
              title: "Security",
              value: "Permissions",
              icon: <ShieldCheck className="h-5 w-5" />,
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
        id="analytics-features"
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
              Core Analytics Modules
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Build Reports From the Work Your Team Already Records
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              The strongest business dashboard is created from
              connected operational records, not from repeated manual
              reporting and disconnected spreadsheets.
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

      {/* Data flow */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
                Connected Reporting Flow
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                From Operational Entry to Management Visibility
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Reports become more dependable when they are connected
                directly to the records used by employees, sales
                users, managers, and administrators during normal
                business activity.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-violet-100 bg-violet-50 px-6 py-3 text-sm font-bold text-violet-700 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-violet-600 hover:text-white"
              >
                Discuss Your Reporting Needs

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="space-y-3">
              {dataSteps.map((step, index) => (
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

                      {index < dataSteps.length - 1 && (
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

      {/* Role-based views */}
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
              Role-Based Business Visibility
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Show Each User the Information Relevant to Their Work
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Company owners may need a broad operational view, while
              managers, sales users, and accounts teams need focused
              reporting based on their responsibilities.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {roleViews.map((item) => (
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
                  {item.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="flex items-start gap-2.5 text-xs font-semibold leading-5 text-slate-600"
                    >
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>

                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-10 xl:px-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Reporting Platform Advantages
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Replace Fragmented Updates With One Reliable Operational View
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Connect reports directly with the records used during
              everyday business work instead of collecting numbers
              again from separate files, users, and messaging groups.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {usefulFor.map((item) => (
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

      {/* Cloud analytics */}
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

              Cloud Business Visibility
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Keep Important Business Information Available Beyond the Office
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Authorised users can review permitted dashboards and
              reports through a responsive cloud platform without
              depending on one office computer or one manually
              maintained spreadsheet.
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
                title: "Responsive Dashboards",
                description:
                  "Review important summaries through phone, tablet, laptop, and desktop layouts.",
                icon: <MonitorSmartphone className="h-6 w-6" />,
              },
              {
                title: "Secure Report Access",
                description:
                  "Restrict sensitive metrics and financial information through role-based permissions.",
                icon: <ShieldCheck className="h-6 w-6" />,
              },
              {
                title: "Searchable Records",
                description:
                  "Move from a dashboard summary to filtered records using dates, users, stages, and statuses.",
                icon: <Search className="h-6 w-6" />,
              },
              {
                title: "Expandable Reporting",
                description:
                  "Add new dashboard cards and reports as more modules and workflows are introduced.",
                icon: <PieChart className="h-6 w-6" />,
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

              Discuss Your Reporting Requirements
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Build Dashboards Around the Decisions Your Business Actually Makes
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
              Tell us which records your team currently maintains,
              which reports take the most time, and which business
              questions are difficult to answer. We will help
              structure those records into useful dashboards and
              reporting views.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Request Analytics Consultation

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

export default Analytics;