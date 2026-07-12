import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";

import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  Check,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Cloud,
  Cog,
  Factory,
  FileCheck2,
  Gauge,
  Layers3,
  LockKeyhole,
  MessageSquareText,
  MonitorSmartphone,
  PackageCheck,
  PackageMinus,
  PackagePlus,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  Workflow,
  Wrench,
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
  stage: string;
  title: string;
  description: string;
  icon: ReactNode;
  style: string;
}

interface RoleViewItem {
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

interface ChallengeItem {
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

function Manufacturing() {
  useEffect(() => {
    document.title =
      "Manufacturing Industry Management Software | AeroState Lab";

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const heroPoints = [
    "Production order and stage tracking",
    "Raw material and warehouse visibility",
    "Quality checks and defect records",
    "Finished goods, costs and reporting",
  ];

  const challenges: ChallengeItem[] = [
    {
      title: "Disconnected Factory Records",
      description:
        "Production orders, material issues, stage progress, quality checks, and finished quantities remain spread across registers and spreadsheets.",
      icon: <Workflow className="h-5 w-5" />,
      style: "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      title: "Material Availability Gaps",
      description:
        "Production teams cannot quickly confirm what material is required, available, issued, consumed, returned, or still pending.",
      icon: <Boxes className="h-5 w-5" />,
      style: "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
    {
      title: "Limited Production Visibility",
      description:
        "Management cannot easily understand which production orders are planned, active, delayed, paused, inspected, or completed.",
      icon: <Factory className="h-5 w-5" />,
      style: "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      title: "Unclear Work Responsibility",
      description:
        "Operators, supervisors, deadlines, production quantities, priorities, and pending work are not documented consistently.",
      icon: <Users className="h-5 w-5" />,
      style: "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      title: "Quality and Rework Gaps",
      description:
        "Inspection results, rejected quantities, defects, rework, and quality decisions are difficult to connect with production.",
      icon: <ClipboardCheck className="h-5 w-5" />,
      style: "border-amber-200 bg-amber-50 text-amber-700",
    },
    {
      title: "Maintenance and Cost Confusion",
      description:
        "Equipment issues, production delays, material usage, wastage, labour activity, and manufacturing costs remain disconnected.",
      icon: <Wrench className="h-5 w-5" />,
      style: "border-rose-200 bg-rose-50 text-rose-700",
    },
  ];

  const coreFeatures: FeatureItem[] = [
    {
      title: "Products and Bill of Materials",
      description:
        "Maintain structured product records with components, required quantities, units, versions, and production instructions.",
      points: [
        "Finished product records",
        "Component and quantity lists",
        "Units and material notes",
        "BOM version information",
      ],
      icon: <ClipboardList className="h-6 w-6" />,
      iconStyle: "border-blue-200 bg-blue-50 text-blue-700",
      accentStyle: "from-blue-500 via-cyan-500 to-sky-500",
      glowStyle: "bg-blue-300/30",
    },
    {
      title: "Production Orders",
      description:
        "Create production orders with product, planned quantity, priority, dates, responsibility, warehouse, and operational status.",
      points: [
        "Production order creation",
        "Planned and target quantities",
        "Priority and due dates",
        "Order status management",
      ],
      icon: <Factory className="h-6 w-6" />,
      iconStyle: "border-violet-200 bg-violet-50 text-violet-700",
      accentStyle: "from-violet-500 via-purple-500 to-indigo-500",
      glowStyle: "bg-violet-300/30",
    },
    {
      title: "Raw Material Management",
      description:
        "Connect production requirements with available stock, warehouse locations, material issues, returns, and consumption.",
      points: [
        "Material requirement records",
        "Available stock visibility",
        "Material issue entries",
        "Consumption and return records",
      ],
      icon: <PackageMinus className="h-6 w-6" />,
      iconStyle: "border-emerald-200 bg-emerald-50 text-emerald-700",
      accentStyle: "from-emerald-500 via-teal-500 to-cyan-500",
      glowStyle: "bg-emerald-300/30",
    },
    {
      title: "Shop-Floor Stage Tracking",
      description:
        "Break production into practical work stages and record assignment, quantity, timing, progress, delays, and current status.",
      points: [
        "Production stage structure",
        "Operator and supervisor assignment",
        "Completed quantity updates",
        "Delay and issue recording",
      ],
      icon: <Cog className="h-6 w-6" />,
      iconStyle: "border-cyan-200 bg-cyan-50 text-cyan-700",
      accentStyle: "from-cyan-500 via-sky-500 to-blue-500",
      glowStyle: "bg-cyan-300/30",
    },
    {
      title: "Quality and Rework Management",
      description:
        "Maintain inspection information and connect accepted, rejected, defective, and rework quantities with production orders.",
      points: [
        "Quality inspection records",
        "Accepted and rejected quantities",
        "Defect and reason tracking",
        "Rework status management",
      ],
      icon: <ClipboardCheck className="h-6 w-6" />,
      iconStyle: "border-amber-200 bg-amber-50 text-amber-700",
      accentStyle: "from-amber-500 via-orange-500 to-yellow-500",
      glowStyle: "bg-amber-300/30",
    },
    {
      title: "Finished Goods and Reports",
      description:
        "Record completed production, finished-goods receipts, wastage, production costs, completion dates, and dispatch readiness.",
      points: [
        "Finished quantity records",
        "Warehouse receipt linkage",
        "Wastage and cost entries",
        "Production status reports",
      ],
      icon: <PackageCheck className="h-6 w-6" />,
      iconStyle: "border-rose-200 bg-rose-50 text-rose-700",
      accentStyle: "from-rose-500 via-pink-500 to-orange-500",
      glowStyle: "bg-rose-300/30",
    },
  ];

  const workflowSteps: WorkflowStep[] = [
    {
      number: "01",
      stage: "Define",
      title: "Create the Product and BOM",
      description:
        "Record the finished product, required components, quantities, units, version, production notes, and applicable instructions.",
      icon: <ClipboardList className="h-5 w-5" />,
      style: "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      number: "02",
      stage: "Plan",
      title: "Create the Production Order",
      description:
        "Select the product, target quantity, priority, responsible manager, expected dates, warehouse, and initial production status.",
      icon: <Factory className="h-5 w-5" />,
      style: "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      number: "03",
      stage: "Prepare",
      title: "Review Material Requirements",
      description:
        "Compare required component quantities with current warehouse stock and identify shortages or purchase requirements.",
      icon: <Boxes className="h-5 w-5" />,
      style: "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
    {
      number: "04",
      stage: "Issue",
      title: "Issue Materials to Production",
      description:
        "Record the items, quantities, warehouse source, production order, issue date, responsible user, and material returns.",
      icon: <PackageMinus className="h-5 w-5" />,
      style: "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      number: "05",
      stage: "Produce",
      title: "Track Production Stages",
      description:
        "Update stage assignments, completed quantities, pending work, delays, machine-related issues, and operational remarks.",
      icon: <Cog className="h-5 w-5" />,
      style: "border-amber-200 bg-amber-50 text-amber-700",
    },
    {
      number: "06",
      stage: "Inspect",
      title: "Complete Quality Inspection",
      description:
        "Record inspected, accepted, rejected, defective, and rework quantities with reasons and authorised quality decisions.",
      icon: <ClipboardCheck className="h-5 w-5" />,
      style: "border-indigo-200 bg-indigo-50 text-indigo-700",
    },
    {
      number: "07",
      stage: "Complete",
      title: "Receive Finished Goods",
      description:
        "Record finished quantities, wastage, warehouse receipt, production costs, completion date, and the final production status.",
      icon: <PackageCheck className="h-5 w-5" />,
      style: "border-rose-200 bg-rose-50 text-rose-700",
    },
  ];

  const roleViews: RoleViewItem[] = [
    {
      role: "Owner and Factory Admin",
      description:
        "Complete authorised visibility across production, materials, quality, maintenance, finished goods, costs, and reports.",
      permissions: [
        "Manage factory records",
        "Review all production orders",
        "View materials and costs",
        "Manage users and permissions",
      ],
      style: "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      role: "Production Manager",
      description:
        "Coordinate permitted products, production orders, work stages, priorities, teams, schedules, and completion status.",
      permissions: [
        "Create production orders",
        "Assign stages and teams",
        "Update production status",
        "Review delays and output",
      ],
      style: "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      role: "Stores and Procurement",
      description:
        "Access authorised raw-material, warehouse, purchase requirement, material issue, return, and finished-goods information.",
      permissions: [
        "Review material requirements",
        "Issue authorised stock",
        "Record material returns",
        "Receive finished goods",
      ],
      style: "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      role: "Supervisor and Quality Team",
      description:
        "Access assigned production stages, completed quantities, inspection records, defects, rework, and production issues.",
      permissions: [
        "Update stage progress",
        "Record produced quantities",
        "Complete quality checks",
        "Raise defects and issues",
      ],
      style: "border-amber-200 bg-amber-50 text-amber-700",
    },
  ];

  const advantages: AdvantageItem[] = [
    {
      title: "Connected Production Records",
      description:
        "Keep products, BOMs, orders, materials, stages, inspections, finished goods, maintenance, and costs connected.",
      icon: <Layers3 className="h-5 w-5" />,
      style: "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      title: "Multi-Unit Visibility",
      description:
        "Review permitted production, warehouse, team, quality, and finished-goods activity across factories or branches.",
      icon: <Building2 className="h-5 w-5" />,
      style: "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      title: "Material Accountability",
      description:
        "Maintain clearer records of what was required, available, issued, consumed, returned, wasted, or still pending.",
      icon: <Boxes className="h-5 w-5" />,
      style: "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      title: "Role-Based Control",
      description:
        "Limit product, material, production, quality, cost, maintenance, and reporting information according to responsibility.",
      icon: <LockKeyhole className="h-5 w-5" />,
      style: "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
    {
      title: "Searchable Production History",
      description:
        "Locate products, orders, materials, stages, inspections, defects, and finished-goods records without searching separate files.",
      icon: <Search className="h-5 w-5" />,
      style: "border-rose-200 bg-rose-50 text-rose-700",
    },
    {
      title: "Factory Reporting",
      description:
        "Use connected records to review production progress, material usage, output, rejection, wastage, delays, and costs.",
      icon: <BarChart3 className="h-5 w-5" />,
      style: "border-amber-200 bg-amber-50 text-amber-700",
    },
  ];

  const suitableFor = [
    "Industrial manufacturers",
    "Engineering workshops",
    "Furniture manufacturers",
    "Food production units",
    "Packaging manufacturers",
    "Multi-unit factories",
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
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <Link
              to="/industries"
              className="group inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />

              Back to Industries
            </Link>

            <div className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur sm:text-xs">
                <Sparkles
                  className="h-4 w-4"
                  strokeWidth={1.9}
                />

                Manufacturing Industry Software
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              Connect Every Product,

              <span className="block">
                Material, Process and Team
              </span>

              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Across Your Factory Operations.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              Manage product structures, production orders, material
              requirements, shop-floor stages, quality checks,
              finished goods, maintenance, costs, and reporting
              through one connected cloud-based factory platform.
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
                href="#manufacturing-industry-features"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Explore Factory Features

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                to="/contact"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700 hover:shadow-md sm:w-auto sm:text-base"
              >
                Discuss Your Factory Workflow
              </Link>
            </div>
          </div>

          {/* Manufacturing dashboard preview */}
          <div className="relative mx-auto w-full max-w-[610px]">
            <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/25 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white/95 shadow-[0_30px_90px_rgba(15,23,42,0.16)] backdrop-blur">
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-300" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300" />
                </div>

                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />

                  Factory Dashboard · Example
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                      Manufacturing Operations
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      Factory Overview
                    </h2>
                  </div>

                  <span className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
                    Today
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    {
                      label: "Active Orders",
                      value: "14",
                      icon: <Factory className="h-4 w-4" />,
                      style:
                        "border-blue-100 bg-blue-50 text-blue-700",
                    },
                    {
                      label: "Work Stages",
                      value: "38",
                      icon: <Cog className="h-4 w-4" />,
                      style:
                        "border-cyan-100 bg-cyan-50 text-cyan-700",
                    },
                    {
                      label: "Completed",
                      value: "9",
                      icon: <PackageCheck className="h-4 w-4" />,
                      style:
                        "border-emerald-100 bg-emerald-50 text-emerald-700",
                    },
                    {
                      label: "Issues",
                      value: "4",
                      icon: <AlertTriangle className="h-4 w-4" />,
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

                      <p className="mt-3 text-[8px] font-bold uppercase tracking-[0.08em] opacity-70">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        Current Production Order
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-800">
                        Modular Storage Cabinet
                      </p>

                      <p className="mt-1 text-[10px] font-semibold text-slate-500">
                        Order MO-1028 · Target 120 Units
                      </p>
                    </div>

                    <span className="text-lg font-extrabold text-blue-600">
                      72%
                    </span>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500" />
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      {
                        label: "Cutting",
                        value: "Done",
                        color: "bg-emerald-50 text-emerald-700",
                      },
                      {
                        label: "Assembly",
                        value: "Active",
                        color: "bg-blue-50 text-blue-700",
                      },
                      {
                        label: "Finishing",
                        value: "Next",
                        color: "bg-violet-50 text-violet-700",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`rounded-xl px-2 py-3 text-center ${item.color}`}
                      >
                        <p className="text-[8px] font-bold uppercase tracking-[0.08em] opacity-70">
                          {item.label}
                        </p>

                        <p className="mt-1 text-[9px] font-bold uppercase">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                          Production Output
                        </p>

                        <p className="mt-1 text-sm font-bold text-slate-800">
                          Current order
                        </p>
                      </div>

                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Gauge className="h-4 w-4" />
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      {[
                        {
                          label: "Completed",
                          value: "86",
                          width: "72%",
                          color: "bg-emerald-500",
                        },
                        {
                          label: "In Progress",
                          value: "24",
                          width: "44%",
                          color: "bg-blue-500",
                        },
                        {
                          label: "Rejected",
                          value: "3",
                          width: "16%",
                          color: "bg-rose-500",
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
                      Material Status
                    </p>

                    <div className="mt-4 space-y-3">
                      {[
                        {
                          label: "Steel sheet",
                          status: "Available",
                          style:
                            "bg-emerald-50 text-emerald-700",
                        },
                        {
                          label: "Fasteners",
                          status: "Issued",
                          style:
                            "bg-blue-50 text-blue-700",
                        },
                        {
                          label: "Paint",
                          status: "Required",
                          style:
                            "bg-amber-50 text-amber-700",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between gap-2 rounded-xl bg-slate-50 px-3 py-2.5"
                        >
                          <span className="text-[10px] font-semibold text-slate-600">
                            {item.label}
                          </span>

                          <span
                            className={`rounded-full px-2 py-1 text-[8px] font-bold uppercase ${item.style}`}
                          >
                            {item.status}
                          </span>
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
                      Production stage updated
                    </p>

                    <p className="mt-1 truncate text-[10px] text-slate-500">
                      Order progress and material records were refreshed
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
                <PackagePlus className="h-5 w-5" />
              </span>

              <div>
                <p className="text-xs font-bold text-slate-800">
                  Finished goods recorded
                </p>

                <p className="mt-0.5 text-[9px] text-slate-500">
                  Warehouse can review the completed quantity
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
              title: "Plan",
              value: "Production",
              icon: <ClipboardList className="h-5 w-5" />,
            },
            {
              title: "Control",
              value: "Materials",
              icon: <Boxes className="h-5 w-5" />,
            },
            {
              title: "Track",
              value: "Work Stages",
              icon: <Factory className="h-5 w-5" />,
            },
            {
              title: "Review",
              value: "Quality",
              icon: <ClipboardCheck className="h-5 w-5" />,
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

      {/* Challenges */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-rose-600">
              Manufacturing Industry Challenges
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Replace Fragmented Factory Records With Connected Operations
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Factory operations become difficult to control when
              products, production orders, materials, shop-floor
              updates, quality checks, finished goods, and costs remain
              separated across registers and spreadsheets.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {challenges.map((item) => (
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

      {/* Features */}
      <section
        id="manufacturing-industry-features"
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
              Core Factory Modules
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Manage Every Operational Layer of Manufacturing
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Connect products, BOMs, production orders, materials,
              shop-floor stages, quality checks, finished goods,
              maintenance, costs, and reporting through one structured
              factory management system.
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

      {/* Workflow */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
                Connected Factory Lifecycle
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                From Product Definition to Finished-Goods Receipt
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Every manufacturing stage should preserve the
                information created before it. This creates one
                continuous production record instead of separate BOM,
                material, shop-floor, quality, warehouse, and cost
                files.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-violet-100 bg-violet-50 px-6 py-3 text-sm font-bold text-violet-700 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-violet-600 hover:text-white"
              >
                Discuss Your Factory Workflow

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

                      <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.1em] text-slate-500">
                        {step.stage}
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
              Permission-Based Factory Access
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Give Every Factory Role the Right Operational View
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Owners, production managers, stores, procurement,
              supervisors, and quality teams require different factory
              information and different levels of control.
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

      {/* Advantages */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-10 xl:px-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Manufacturing Industry Advantages
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              One Operational Record for Every Production Order
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Replace separate BOM sheets, material registers,
              production books, quality files, warehouse entries,
              maintenance notes, and cost reports with one connected
              cloud-based factory platform.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {suitableFor.map((item) => (
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

      {/* Cloud section */}
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

              Cloud Factory Management
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Keep Management, Production, Stores and Quality Connected
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Authorised users can access permitted products, BOMs,
              production orders, materials, work stages, quality
              records, finished goods, maintenance, costs, and reports
              through responsive interfaces across different
              locations.
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
                title: "Responsive Factory Access",
                description:
                  "Access permitted production, material, quality, warehouse, maintenance, and reporting records through phone, tablet, laptop, or desktop.",
                icon: <MonitorSmartphone className="h-6 w-6" />,
              },
              {
                title: "Secure Role Controls",
                description:
                  "Protect product, material, production, quality, cost, supplier, and management information through role-based permissions.",
                icon: <ShieldCheck className="h-6 w-6" />,
              },
              {
                title: "Centralised Documentation",
                description:
                  "Keep BOMs, orders, material issues, production updates, inspections, defects, output, and notes within structured records.",
                icon: <FileCheck2 className="h-6 w-6" />,
              },
              {
                title: "Expandable Factory Modules",
                description:
                  "Machine integrations, preventive maintenance, barcode scanning, detailed costing, or specialised quality workflows can be developed when required.",
                icon: <Store className="h-6 w-6" />,
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

              Discuss Your Factory Workflow
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Build Manufacturing Software Around How Your Factory Actually Operates
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
              Tell us how products are defined, how materials are
              issued, how production stages are managed, how quality
              is checked, how finished goods are received, and where
              delays or cost problems occur. We will help convert those
              workflows into one connected cloud platform.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Request Factory Consultation

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/solutions/manufacturing"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto sm:text-base"
              >
                Explore Manufacturing Solution
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Manufacturing;