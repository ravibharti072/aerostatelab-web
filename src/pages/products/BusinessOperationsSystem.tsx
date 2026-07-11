import {
  useEffect,
  type ReactNode,
} from "react";
import { Link } from "react-router-dom";

interface ModuleItem {
  title: string;
  description: string;
  icon: ReactNode;
  style: string;
  glow: string;
}

interface BenefitItem {
  title: string;
  description: string;
  icon: ReactNode;
  style: string;
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

function OnboardingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M15 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 3 18.5V20M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8-1v6m3-3h-6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AttendanceIcon() {
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
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M7 3v4m10-4v4M3 10h18m-12 5 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TaskIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SalesIcon() {
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
    </svg>
  );
}

function ProductIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="m12 3 8 4-8 4-8-4 8-4Zm-8 4v9l8 5 8-5V7M12 11v10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PaymentIcon() {
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

function CommissionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <circle
        cx="7"
        cy="7"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="17"
        cy="17"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m6 18 12-12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProjectIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M4 7.5h6l2 2h8v9.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7.5Zm0 0v-1A2.5 2.5 0 0 1 6.5 4H10l2 2h5.5A2.5 2.5 0 0 1 20 8.5v1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MaintenanceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M14.5 6.5a4 4 0 0 0-5.7 4.8L3 17.1 6.9 21l5.8-5.8a4 4 0 0 0 4.8-5.7l-2.7 2.7-3-3 2.7-2.7Z"
        stroke="currentColor"
        strokeWidth="1.7"
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

function SettingsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.1A1.7 1.7 0 0 0 8 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 3.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H2v-4h.1A1.7 1.7 0 0 0 3.6 8a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 8 3.6a1.7 1.7 0 0 0 1-.6A1.7 1.7 0 0 0 9.4 1.9V2h4v.1A1.7 1.7 0 0 0 15 3.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 8c.35.25.61.6.75 1 .14.35.2.72.15 1.1h.1v4h-.1a1.7 1.7 0 0 0-.9.9Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PermissionIcon() {
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

function TeamIcon() {
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

function AutomationIcon() {
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

function BusinessOperationsSystem() {
  useEffect(() => {
    document.title =
      "Business Operations Management System | AeroState Lab";

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const modules: ModuleItem[] = [
    {
      title: "Management Dashboard",
      description:
        "View sales, received payments, pending tasks, running projects, and team activity from one dashboard.",
      icon: <DashboardIcon />,
      style: "border-indigo-200 bg-indigo-50 text-indigo-700",
      glow: "bg-indigo-300/30",
    },
    {
      title: "People Onboarding",
      description:
        "Onboard employees, interns, freelancers, sales representatives, and software users before creating login access.",
      icon: <OnboardingIcon />,
      style: "border-violet-200 bg-violet-50 text-violet-700",
      glow: "bg-violet-300/30",
    },
    {
      title: "Attendance Management",
      description:
        "Track check-in, check-out, working hours, and employee attendance history through one connected system.",
      icon: <AttendanceIcon />,
      style: "border-cyan-200 bg-cyan-50 text-cyan-700",
      glow: "bg-cyan-300/30",
    },
    {
      title: "Task Management",
      description:
        "Create project-based tasks with priorities, due dates, submission notes, status tracking, and role protection.",
      icon: <TaskIcon />,
      style: "border-amber-200 bg-amber-50 text-amber-700",
      glow: "bg-amber-300/30",
    },
    {
      title: "Sales CRM",
      description:
        "Manage leads from first contact through proposal, conversion, delivery, completion, or loss.",
      icon: <SalesIcon />,
      style: "border-blue-200 bg-blue-50 text-blue-700",
      glow: "bg-blue-300/30",
    },
    {
      title: "Software Products",
      description:
        "Maintain your software and service catalog so products can be used consistently throughout the sales pipeline.",
      icon: <ProductIcon />,
      style: "border-sky-200 bg-sky-50 text-sky-700",
      glow: "bg-sky-300/30",
    },
    {
      title: "Receive Payments",
      description:
        "Record payments, connect them with delivered projects, and maintain a clear history of every received amount.",
      icon: <PaymentIcon />,
      style: "border-emerald-200 bg-emerald-50 text-emerald-700",
      glow: "bg-emerald-300/30",
    },
    {
      title: "Sales Commission",
      description:
        "Generate commissions automatically, record partial payments, and track paid, partial, and pending amounts.",
      icon: <CommissionIcon />,
      style: "border-orange-200 bg-orange-50 text-orange-700",
      glow: "bg-orange-300/30",
    },
    {
      title: "Project Management",
      description:
        "Manage converted sales projects and internal projects with team assignment, progress, status, and remarks.",
      icon: <ProjectIcon />,
      style: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700",
      glow: "bg-fuchsia-300/30",
    },
    {
      title: "Maintenance and Issues",
      description:
        "Raise, assign, track, and resolve support or maintenance issues after a project has been delivered.",
      icon: <MaintenanceIcon />,
      style: "border-rose-200 bg-rose-50 text-rose-700",
      glow: "bg-rose-300/30",
    },
    {
      title: "Business Reports",
      description:
        "Review sales, payments, tasks, projects, team performance, and operational activity through structured reports.",
      icon: <ReportIcon />,
      style: "border-teal-200 bg-teal-50 text-teal-700",
      glow: "bg-teal-300/30",
    },
    {
      title: "Company Settings",
      description:
        "Manage profile information, passwords, company details, users, permissions, departments, and portal access.",
      icon: <SettingsIcon />,
      style: "border-slate-200 bg-slate-50 text-slate-700",
      glow: "bg-slate-300/30",
    },
  ];

  const benefits: BenefitItem[] = [
    {
      title: "One Connected Platform",
      description:
        "Replace disconnected spreadsheets, messages, and separate tools with one central operations system.",
      icon: <DashboardIcon />,
      style: "border-indigo-200 bg-indigo-50 text-indigo-700",
    },
    {
      title: "Role-Based Access",
      description:
        "Every user sees only the modules and information permitted for their role and responsibility.",
      icon: <PermissionIcon />,
      style: "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      title: "Clear Team Accountability",
      description:
        "Assign responsibilities, monitor activity, and maintain a transparent record of completed work.",
      icon: <TeamIcon />,
      style: "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
    {
      title: "Automated Workflows",
      description:
        "Connect sales, projects, tasks, payments, commission, and maintenance without repeating data entry.",
      icon: <AutomationIcon />,
      style: "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      title: "Real-Time Visibility",
      description:
        "Management can immediately review important operations, progress, payments, and pending work.",
      icon: <ReportIcon />,
      style: "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      title: "Cloud-Based Access",
      description:
        "Use the system securely across desktop, tablet, and mobile devices from any authorised location.",
      icon: <CloudIcon />,
      style: "border-sky-200 bg-sky-50 text-sky-700",
    },
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "Onboard Your Team",
      description:
        "Create employee, intern, sales representative, freelancer, and management profiles.",
    },
    {
      number: "02",
      title: "Assign Permissions",
      description:
        "Select which portals, actions, and business records each user can access.",
    },
    {
      number: "03",
      title: "Manage Daily Operations",
      description:
        "Track attendance, tasks, leads, projects, payments, and internal activities.",
    },
    {
      number: "04",
      title: "Connect Departments",
      description:
        "Move converted leads into projects, payments, commission, and maintenance workflows.",
    },
    {
      number: "05",
      title: "Review Performance",
      description:
        "Use dashboards and reports to understand progress, revenue, workload, and team activity.",
    },
  ];

  const idealBusinesses = [
    "Software Companies",
    "Digital Agencies",
    "Consulting Firms",
    "Startups",
    "Service Businesses",
    "Growing SMEs",
    "Project-Based Companies",
    "Remote Teams",
  ];

  const permissionRules = [
    "Admins and managers can assign tasks and manage operational records.",
    "Interns can create tasks only for themselves.",
    "Lower roles cannot modify tasks created by higher roles.",
    "Employees can update progress and submission notes where permitted.",
    "Sidebar modules automatically follow assigned portal permissions.",
    "Sensitive actions use professional confirmation popups instead of browser alerts.",
  ];

  const summaryCards = [
    {
      label: "Final Sales",
      value: "₹8.4L",
      icon: <SalesIcon />,
      style: "bg-indigo-100 text-indigo-700",
    },
    {
      label: "Payments",
      value: "₹6.2L",
      icon: <PaymentIcon />,
      style: "bg-emerald-100 text-emerald-700",
    },
    {
      label: "Pending Tasks",
      value: "24",
      icon: <TaskIcon />,
      style: "bg-amber-100 text-amber-700",
    },
    {
      label: "Projects",
      value: "11",
      icon: <ProjectIcon />,
      style: "bg-cyan-100 text-cyan-700",
    },
  ];

  const pipelineItems = [
    {
      label: "New Leads",
      count: 18,
      width: "78%",
      style: "bg-blue-500",
    },
    {
      label: "Proposal Sent",
      count: 11,
      width: "56%",
      style: "bg-indigo-500",
    },
    {
      label: "Converted",
      count: 9,
      width: "38%",
      style: "bg-emerald-500",
    },
  ];

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div
          className="pointer-events-none absolute inset-0 -z-20 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
            backgroundSize: "38px 38px",
            backgroundPosition: "0 0",
          }}
        />

        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-indigo-300/30 blur-[130px]" />
          <div className="absolute -bottom-48 right-[-120px] h-[560px] w-[560px] rounded-full bg-cyan-300/25 blur-[140px]" />
        </div>

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.98fr] lg:gap-16 lg:px-10 lg:py-24 xl:px-16">
          {/* Hero content */}
          <div>
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-indigo-200 bg-white/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-700 shadow-sm backdrop-blur sm:text-xs">
              <span className="relative flex h-2 w-2 flex-none">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
              </span>

              <span className="truncate">
                AeroState Business Operations Management System
              </span>
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              Manage Every Business
              <span className="block">Operation Through One</span>

              <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Connected Platform.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              A complete cloud-based system for managing sales, CRM, people,
              attendance, tasks, projects, payments, commission, maintenance,
              reporting, and company operations.
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Sales and customer pipeline",
                "Employee and attendance management",
                "Tasks and project tracking",
                "Payments and commission records",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur"
                >
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                    <CheckIcon />
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#modules"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Explore System Modules
                <ArrowIcon />
              </a>

              <Link
                to="/contact"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:text-indigo-700 hover:shadow-md sm:w-auto sm:text-base"
              >
                Request a Demo
              </Link>
            </div>
          </div>

          {/* Dashboard visual */}
          <div className="relative mx-auto w-full max-w-[610px]">
            <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300/25 blur-[100px]" />

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
                    AeroState Operations • Live
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 via-white to-indigo-50/70 p-3.5 sm:p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-indigo-600 sm:text-xs">
                      Operations Dashboard
                    </p>

                    <h2 className="mt-1 text-base font-bold text-slate-900 sm:text-xl">
                      Good morning, Admin
                    </h2>
                  </div>

                  <span className="rounded-lg border border-indigo-100 bg-white px-2.5 py-2 text-[9px] font-semibold text-indigo-600 shadow-sm sm:px-3 sm:text-xs">
                    Live Overview
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
                  {summaryCards.map((card) => (
                    <div
                      key={card.label}
                      className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:rounded-2xl"
                    >
                      <span
                        className={`mb-2 flex h-8 w-8 items-center justify-center rounded-lg ${card.style}`}
                      >
                        {card.icon}
                      </span>

                      <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-slate-400 sm:text-[9px]">
                        {card.label}
                      </p>

                      <p className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">
                        {card.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm sm:rounded-2xl sm:p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                          Sales Pipeline
                        </p>

                        <p className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
                          38 active opportunities
                        </p>
                      </div>

                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                        <SalesIcon />
                      </span>
                    </div>

                    <div className="space-y-3">
                      {pipelineItems.map((item) => (
                        <div key={item.label}>
                          <div className="mb-1.5 flex items-center justify-between text-[10px] font-semibold text-slate-600 sm:text-xs">
                            <span>{item.label}</span>
                            <span>{item.count}</span>
                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                            <div
                              className={`h-full rounded-full ${item.style}`}
                              style={{
                                width: item.width,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm sm:rounded-2xl sm:p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                          Team Today
                        </p>

                        <p className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
                          21 active
                        </p>
                      </div>

                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                        <TeamIcon />
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {[
                        ["Present", "18", "text-emerald-600"],
                        ["Remote", "3", "text-blue-600"],
                        ["On leave", "2", "text-amber-600"],
                      ].map(([label, value, style]) => (
                        <div
                          key={label}
                          className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5"
                        >
                          <span className="text-[10px] font-semibold text-slate-600 sm:text-xs">
                            {label}
                          </span>

                          <span className={`text-sm font-bold ${style}`}>
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-3.5 sm:rounded-2xl">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-indigo-500">
                          Project Progress
                        </p>

                        <p className="mt-1 text-sm font-bold text-slate-800">
                          Retail Management Platform
                        </p>
                      </div>

                      <span className="text-xl font-bold text-indigo-700">
                        72%
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                      <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-emerald-100 bg-white p-3.5 shadow-sm sm:rounded-2xl">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                        <PaymentIcon />
                      </span>

                      <div className="min-w-0">
                        <p className="truncate text-xs font-bold text-slate-800">
                          Payment received
                        </p>

                        <p className="mt-0.5 truncate text-[10px] text-slate-500">
                          ₹75,000 • Website project
                        </p>
                      </div>
                    </div>

                    <span className="rounded-lg bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-700">
                      Updated
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 right-2 hidden items-center gap-3 rounded-2xl border border-indigo-100 bg-white px-4 py-3 shadow-xl sm:flex lg:-right-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                <TaskIcon />
              </span>

              <div>
                <p className="text-xs font-bold text-slate-800">
                  Task assigned successfully
                </p>

                <p className="text-[10px] text-slate-500">
                  Team member notified instantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              Complete Operational Control
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Replace Disconnected Work With One Unified Business System
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              AeroState connects your people, sales, tasks, projects, payments,
              and reporting so every department works with the same live
              business information.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="group rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.1)] sm:p-6"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${benefit.style}`}
                >
                  {benefit.icon}
                </span>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section
        id="modules"
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
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              Complete Software Modules
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Everything Required to Manage Daily Business Operations
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              Each module is connected, permission-controlled, mobile
              responsive, and designed to follow real business workflows.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {modules.map((module) => (
              <article
                key={module.title}
                className="group relative h-full"
              >
                <div
                  className={`pointer-events-none absolute -inset-2 rounded-[28px] opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-45 ${module.glow}`}
                />

                <div className="relative flex h-full flex-col rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-indigo-200 group-hover:shadow-[0_20px_50px_rgba(15,23,42,0.1)]">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${module.style}`}
                  >
                    {module.icon}
                  </span>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {module.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {module.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Permissions */}
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
          <div className="absolute -left-32 -top-40 h-[460px] w-[460px] rounded-full bg-indigo-600/20 blur-[130px]" />
          <div className="absolute -bottom-40 right-[-100px] h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[130px]" />
        </div>

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-10 lg:py-24 xl:px-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-300 sm:text-xs">
              <PermissionIcon />
              Secure Permission System
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Give Every Team Member the Right Level of Access
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              Administrators control which modules appear in each user&apos;s
              sidebar and which records they can create, view, update, or
              manage.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                ["Admin", "Complete control"],
                ["Manager", "Team operations"],
                ["Employee", "Assigned work"],
                ["Intern", "Limited access"],
              ].map(([role, access]) => (
                <div
                  key={role}
                  className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur"
                >
                  <p className="text-sm font-bold text-white">
                    {role}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {access}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-white/[0.055] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.3)] backdrop-blur sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
              Example Access Rules
            </p>

            <div className="mt-5 space-y-3">
              {permissionRules.map((rule) => (
                <div
                  key={rule}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3.5"
                >
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                    <CheckIcon />
                  </span>

                  <span className="text-sm leading-6 text-slate-300">
                    {rule}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              How the System Works
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              From Team Onboarding to Business Reporting
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
            {workflowSteps.map((step) => (
              <article
                key={step.number}
                className="relative overflow-hidden rounded-[22px] border border-slate-200 bg-gradient-to-br from-white to-indigo-50/60 p-6 shadow-sm"
              >
                <span className="text-5xl font-extrabold text-indigo-100">
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

      {/* Businesses */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-10 lg:py-24 xl:px-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              Designed for Growing Teams
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Suitable for Businesses Managing People, Sales, and Projects
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              The platform is especially useful for organisations that need
              better control over team activity, client work, sales follow-ups,
              payments, and project delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {idealBusinesses.map((business) => (
              <div
                key={business}
                className="flex min-h-[92px] items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:text-indigo-700 hover:shadow-md"
              >
                {business}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="relative isolate overflow-hidden rounded-[28px] bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 px-6 py-12 text-center shadow-[0_30px_80px_rgba(79,70,229,0.25)] sm:px-10 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />

            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Bring Your Complete Business Operations Into One System
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-indigo-50">
              Request a demonstration and see how AeroState can connect your
              sales, team, projects, payments, and daily management workflows.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-indigo-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Request a Demo
                <ArrowIcon />
              </Link>

              <Link
                to="/contact"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto sm:text-base"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BusinessOperationsSystem;