import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Cloud,
  FileText,
  Fingerprint,
  KeyRound,
  Layers3,
  LockKeyhole,
  MessageSquareText,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  UserCheck,
  UserCog,
  UserPlus,
  Users,
  WalletCards,
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

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  style: string;
}

interface PermissionItem {
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

function HRMS() {
  useEffect(() => {
    document.title =
      "HR and Workforce Management Software | AeroState Lab";

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const heroPoints = [
    "Employee and intern onboarding",
    "Attendance and working-hour records",
    "Role-based portal permissions",
    "Task and workforce coordination",
  ];

  const coreFeatures: FeatureItem[] = [
    {
      title: "People Onboarding",
      description:
        "Create a structured record for every person before providing system access.",
      points: [
        "Employee and intern onboarding",
        "Sales representative records",
        "Department and role assignment",
        "Joining date and contact details",
      ],
      icon: <UserPlus className="h-6 w-6" />,
      iconStyle:
        "border-violet-200 bg-violet-50 text-violet-700",
      accentStyle:
        "from-violet-500 via-purple-500 to-indigo-500",
      glowStyle: "bg-violet-300/30",
    },
    {
      title: "User and Login Management",
      description:
        "Convert approved people into active software users with controlled access.",
      points: [
        "Secure login creation",
        "User activation and deactivation",
        "Password management",
        "Role and department controls",
      ],
      icon: <UserCog className="h-6 w-6" />,
      iconStyle:
        "border-blue-200 bg-blue-50 text-blue-700",
      accentStyle:
        "from-blue-500 via-indigo-500 to-violet-500",
      glowStyle: "bg-blue-300/30",
    },
    {
      title: "Attendance Management",
      description:
        "Maintain reliable daily attendance and working-hour records for the team.",
      points: [
        "Employee check-in and check-out",
        "Automatic working-hour calculation",
        "Daily attendance history",
        "Admin attendance visibility",
      ],
      icon: <CalendarCheck className="h-6 w-6" />,
      iconStyle:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
      accentStyle:
        "from-cyan-500 via-sky-500 to-blue-500",
      glowStyle: "bg-cyan-300/30",
    },
    {
      title: "Task and Work Assignment",
      description:
        "Connect employees with projects, responsibilities, priorities, and deadlines.",
      points: [
        "Project-based task assignment",
        "Priority and due-date controls",
        "Progress and status tracking",
        "Submission notes and updates",
      ],
      icon: <ClipboardCheck className="h-6 w-6" />,
      iconStyle:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
      accentStyle:
        "from-emerald-500 via-teal-500 to-cyan-500",
      glowStyle: "bg-emerald-300/30",
    },
    {
      title: "Salary Information",
      description:
        "Keep basic compensation information connected to each authorised team profile.",
      points: [
        "Salary type selection",
        "Salary amount records",
        "Unpaid and paid role support",
        "Department-linked employee details",
      ],
      icon: <WalletCards className="h-6 w-6" />,
      iconStyle:
        "border-amber-200 bg-amber-50 text-amber-700",
      accentStyle:
        "from-amber-500 via-orange-500 to-yellow-500",
      glowStyle: "bg-amber-300/30",
    },
    {
      title: "Role-Based Permissions",
      description:
        "Control which modules, records, and actions are available to every user.",
      points: [
        "Permission-based sidebar visibility",
        "Module-level portal access",
        "Higher-role task protection",
        "Admin and manager controls",
      ],
      icon: <ShieldCheck className="h-6 w-6" />,
      iconStyle:
        "border-rose-200 bg-rose-50 text-rose-700",
      accentStyle:
        "from-rose-500 via-pink-500 to-orange-500",
      glowStyle: "bg-rose-300/30",
    },
  ];

  const workflowSteps: WorkflowStep[] = [
    {
      number: "01",
      title: "Onboard the Person",
      description:
        "Create the initial employee, intern, sales representative, or software-user record.",
      icon: <UserPlus className="h-5 w-5" />,
      style:
        "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      number: "02",
      title: "Assign Their Position",
      description:
        "Set the department, organisational role, salary information, and joining date.",
      icon: <BriefcaseBusiness className="h-5 w-5" />,
      style:
        "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      number: "03",
      title: "Create Portal Access",
      description:
        "Provide secure login access and choose which business modules they can use.",
      icon: <KeyRound className="h-5 w-5" />,
      style:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
    {
      number: "04",
      title: "Track Daily Work",
      description:
        "Monitor attendance, assigned tasks, status changes, deadlines, and submissions.",
      icon: <Clock3 className="h-5 w-5" />,
      style:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      number: "05",
      title: "Review Team Activity",
      description:
        "Use connected records and reports to understand workforce activity and pending work.",
      icon: <BarChart3 className="h-5 w-5" />,
      style:
        "border-amber-200 bg-amber-50 text-amber-700",
    },
  ];

  const permissionItems: PermissionItem[] = [
    {
      role: "Owner and Admin",
      description:
        "Complete visibility and control across workforce operations.",
      permissions: [
        "Create and manage users",
        "Assign portal permissions",
        "View company attendance",
        "Assign and review tasks",
      ],
      style:
        "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      role: "Manager",
      description:
        "Coordinate teams and manage permitted operational work.",
      permissions: [
        "Assign permitted tasks",
        "Review team progress",
        "Access assigned modules",
        "Update operational records",
      ],
      style:
        "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      role: "Employee",
      description:
        "Access only the tools and information required for daily responsibilities.",
      permissions: [
        "Record attendance",
        "View assigned tasks",
        "Update task progress",
        "Add submission notes",
      ],
      style:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      role: "Intern",
      description:
        "Use a protected workspace suitable for supervised work.",
      permissions: [
        "Create tasks for themselves",
        "Access allowed modules",
        "Update task progress",
        "Cannot override higher roles",
      ],
      style:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
  ];

  const advantages: AdvantageItem[] = [
    {
      title: "One Connected Team Record",
      description:
        "Keep onboarding, login access, department, role, attendance, tasks, and compensation information connected.",
      icon: <Layers3 className="h-5 w-5" />,
      style:
        "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      title: "Clear Responsibility",
      description:
        "Every task can show who owns it, which project it belongs to, its priority, deadline, and current progress.",
      icon: <Workflow className="h-5 w-5" />,
      style:
        "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      title: "Protected Access",
      description:
        "Users see only approved modules, while sensitive administrative actions remain restricted.",
      icon: <LockKeyhole className="h-5 w-5" />,
      style:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      title: "Available Across Devices",
      description:
        "Use workforce tools through responsive interfaces on phones, tablets, laptops, and desktops.",
      icon: <MonitorSmartphone className="h-5 w-5" />,
      style:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
  ];

  const idealFor = [
    "Startups",
    "Software agencies",
    "Service companies",
    "Sales teams",
    "Small and medium businesses",
    "Growing distributed teams",
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
                <Sparkles className="h-4 w-4" strokeWidth={1.9} />
                HR and Workforce Operations
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              Manage Your Team From

              <span className="block">
                Joining and Access
              </span>

              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                To Attendance and Work.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              Connect employee onboarding, user accounts,
              departments, portal permissions, attendance, tasks,
              salary information, and workforce reporting through one
              cloud-based management system.
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
                href="#hr-features"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Explore HR Features

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

          {/* HR dashboard preview */}
          <div className="relative mx-auto w-full max-w-[600px]">
            <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/25 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white/95 shadow-[0_30px_90px_rgba(15,23,42,0.16)] backdrop-blur">
              {/* Window bar */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-300" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300" />
                </div>

                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Workforce Dashboard · Live
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                      Team Overview
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      Good morning, Admin
                    </h2>
                  </div>

                  <span className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
                    Today
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    {
                      label: "Team",
                      value: "24",
                      icon: <Users className="h-4 w-4" />,
                      style:
                        "border-blue-100 bg-blue-50 text-blue-700",
                    },
                    {
                      label: "Present",
                      value: "18",
                      icon: <UserCheck className="h-4 w-4" />,
                      style:
                        "border-emerald-100 bg-emerald-50 text-emerald-700",
                    },
                    {
                      label: "Tasks",
                      value: "31",
                      icon: <ClipboardCheck className="h-4 w-4" />,
                      style:
                        "border-violet-100 bg-violet-50 text-violet-700",
                    },
                    {
                      label: "Interns",
                      value: "4",
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

                        <span className="text-xl font-extrabold">
                          {item.value}
                        </span>
                      </div>

                      <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.1em] opacity-70">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                          Attendance Today
                        </p>

                        <p className="mt-1 text-sm font-bold text-slate-800">
                          Team availability
                        </p>
                      </div>

                      <span className="text-lg font-extrabold text-blue-600">
                        75%
                      </span>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500" />
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {[
                        {
                          label: "Present",
                          value: "18",
                          color: "text-emerald-600",
                        },
                        {
                          label: "Remote",
                          value: "3",
                          color: "text-blue-600",
                        },
                        {
                          label: "Leave",
                          value: "3",
                          color: "text-amber-600",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-xl bg-slate-50 px-2 py-3 text-center"
                        >
                          <p
                            className={`text-base font-extrabold ${item.color}`}
                          >
                            {item.value}
                          </p>

                          <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.08em] text-slate-400">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      Role Distribution
                    </p>

                    <div className="mt-4 space-y-3">
                      {[
                        {
                          label: "Management",
                          value: 4,
                          width: "w-[30%]",
                          color: "bg-violet-500",
                        },
                        {
                          label: "Employees",
                          value: 13,
                          width: "w-[78%]",
                          color: "bg-blue-500",
                        },
                        {
                          label: "Sales",
                          value: 3,
                          width: "w-[24%]",
                          color: "bg-cyan-500",
                        },
                        {
                          label: "Interns",
                          value: 4,
                          width: "w-[30%]",
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
                              className={`h-full rounded-full ${item.width} ${item.color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-emerald-200 bg-white text-emerald-700">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-800">
                      Attendance recorded successfully
                    </p>

                    <p className="mt-1 truncate text-[10px] text-slate-500">
                      Working-hour record updated for the employee
                    </p>
                  </div>

                  <span className="ml-auto flex-none rounded-full bg-white px-2 py-1 text-[8px] font-bold uppercase text-emerald-600">
                    Updated
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Fingerprint className="h-5 w-5" />
              </span>

              <div>
                <p className="text-xs font-bold text-slate-800">
                  Permission-based access
                </p>

                <p className="mt-0.5 text-[9px] text-slate-500">
                  Each user sees permitted modules
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution strip */}
      <section className="border-y border-slate-200 bg-slate-100">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-px bg-slate-300 px-px sm:grid-cols-4">
          {[
            {
              title: "People",
              value: "Onboarding",
              icon: <UserPlus className="h-5 w-5" />,
            },
            {
              title: "Access",
              value: "Permissions",
              icon: <ShieldCheck className="h-5 w-5" />,
            },
            {
              title: "Time",
              value: "Attendance",
              icon: <Clock3 className="h-5 w-5" />,
            },
            {
              title: "Work",
              value: "Tasks",
              icon: <ClipboardCheck className="h-5 w-5" />,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex min-h-[110px] items-center gap-4 bg-slate-100 px-5 py-5 sm:px-6"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-blue-200 bg-white text-blue-600 shadow-sm">
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
        id="hr-features"
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
              Core Workforce Modules
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Manage the Employee Journey From One System
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Build a connected workforce record instead of keeping
              onboarding, login access, attendance, tasks, roles, and
              salary information in separate files.
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

      {/* Workforce workflow */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
                Connected Employee Lifecycle
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                From First Onboarding Record to Daily Work Visibility
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The employee record becomes more useful when joining
                information, system access, attendance, responsibilities,
                and work progress remain connected throughout the
                employee lifecycle.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-violet-100 bg-violet-50 px-6 py-3 text-sm font-bold text-violet-700 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-violet-600 hover:text-white"
              >
                Discuss Your HR Workflow

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="space-y-3">
              {workflowSteps.map((step, index) => (
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

                      {index < workflowSteps.length - 1 && (
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

                  <ChevronRight className="h-5 w-5 flex-none text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-500" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Permission system */}
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
              Permission-Based Workforce Access
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Give Every Role the Right Level of Control
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Owners and administrators need complete visibility,
              while managers, employees, interns, and sales users
              should access only the tools required for their work.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {permissionItems.map((item) => (
              <article
                key={item.role}
                className="group rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
              >
                <span
                  className={`inline-flex rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] ${item.style}`}
                >
                  {item.role}
                </span>

                <p className="mt-5 min-h-[72px] text-sm leading-7 text-slate-600">
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

      {/* Platform advantages */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-10 xl:px-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Workforce Platform Advantages
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Replace Disconnected Employee Records With One Operational View
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Instead of maintaining employee details, attendance,
              permissions, assignments, and updates in unrelated
              documents, connect them through one reliable system.
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

      {/* Cloud and responsive */}
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
              Cloud Workforce Access
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Keep Team Operations Available Beyond the Office
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Authorised users can access their permitted workforce
              tools through a secure responsive platform without
              depending on one office computer or one local record.
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
                title: "Responsive Interface",
                description:
                  "Use attendance, tasks, and workforce tools from mobile, tablet, laptop, or desktop.",
                icon: <MonitorSmartphone className="h-6 w-6" />,
              },
              {
                title: "Secure Authentication",
                description:
                  "Protect employee and business records through controlled user login access.",
                icon: <Fingerprint className="h-6 w-6" />,
              },
              {
                title: "Centralised Information",
                description:
                  "Keep team details, roles, tasks, and attendance connected in one location.",
                icon: <FileText className="h-6 w-6" />,
              },
              {
                title: "Expandable Modules",
                description:
                  "Connect workforce management with projects, sales, payments, maintenance, and reports.",
                icon: <Layers3 className="h-6 w-6" />,
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
              Discuss Your Workforce Process
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Build a Workforce System Around How Your Company Actually Operates
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
              Tell us how you currently onboard people, provide
              access, record attendance, assign responsibilities, and
              review team performance. We will help structure those
              processes into one connected cloud platform.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Request HR Consultation

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

export default HRMS;