import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";

import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BedDouble,
  BellRing,
  Building2,
  CalendarClock,
  CalendarDays,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  FileCheck2,
  Hotel,
  IndianRupee,
  Layers3,
  LockKeyhole,
  MessageSquareText,
  MonitorSmartphone,
  PackageCheck,
  Receipt,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  UtensilsCrossed,
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

function Hospitality() {
  useEffect(() => {
    document.title =
      "Hospitality and Hotel Management Software | AeroState Lab";

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const heroPoints = [
    "Reservations and room availability",
    "Guest check-in and check-out",
    "Housekeeping and room status",
    "Billing, payments and reporting",
  ];

  const challenges: ChallengeItem[] = [
    {
      title: "Disconnected Booking Records",
      description:
        "Guest enquiries, reservations, room assignments, payments, and stay information remain spread across registers and spreadsheets.",
      icon: <Workflow className="h-5 w-5" />,
      style: "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      title: "Unclear Room Availability",
      description:
        "Front-office teams cannot quickly understand which rooms are available, occupied, reserved, dirty, or under maintenance.",
      icon: <BedDouble className="h-5 w-5" />,
      style: "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
    {
      title: "Slow Check-In Coordination",
      description:
        "Guest details, identification, room assignment, advance payments, and booking confirmation are handled separately.",
      icon: <CalendarClock className="h-5 w-5" />,
      style: "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      title: "Housekeeping Status Gaps",
      description:
        "Cleaning tasks, room readiness, inspections, and maintenance issues are difficult to coordinate between teams.",
      icon: <ClipboardCheck className="h-5 w-5" />,
      style: "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      title: "Billing and Payment Confusion",
      description:
        "Room charges, restaurant orders, additional services, received payments, and pending balances are maintained separately.",
      icon: <IndianRupee className="h-5 w-5" />,
      style: "border-amber-200 bg-amber-50 text-amber-700",
    },
    {
      title: "Limited Operational Reporting",
      description:
        "Management waits for manually prepared reports before understanding occupancy, collections, housekeeping, and service activity.",
      icon: <BarChart3 className="h-5 w-5" />,
      style: "border-rose-200 bg-rose-50 text-rose-700",
    },
  ];

  const coreFeatures: FeatureItem[] = [
    {
      title: "Reservations and Bookings",
      description:
        "Create and manage guest reservations with room type, stay dates, guest count, booking status, and payment information.",
      points: [
        "Online and offline booking records",
        "Arrival and departure dates",
        "Booking status management",
        "Advance payment information",
      ],
      icon: <CalendarDays className="h-6 w-6" />,
      iconStyle: "border-blue-200 bg-blue-50 text-blue-700",
      accentStyle: "from-blue-500 via-cyan-500 to-sky-500",
      glowStyle: "bg-blue-300/30",
    },
    {
      title: "Rooms and Property Management",
      description:
        "Maintain room categories, room numbers, rates, availability, occupancy, housekeeping status, and maintenance conditions.",
      points: [
        "Room and category records",
        "Availability and occupancy",
        "Room status visibility",
        "Property-wise organisation",
      ],
      icon: <Hotel className="h-6 w-6" />,
      iconStyle: "border-violet-200 bg-violet-50 text-violet-700",
      accentStyle: "from-violet-500 via-purple-500 to-indigo-500",
      glowStyle: "bg-violet-300/30",
    },
    {
      title: "Guest and Front-Office Operations",
      description:
        "Keep guest information, booking history, identification details, room assignments, check-in, and check-out connected.",
      points: [
        "Guest profile records",
        "Room assignment",
        "Check-in and check-out",
        "Stay and booking history",
      ],
      icon: <Users className="h-6 w-6" />,
      iconStyle: "border-emerald-200 bg-emerald-50 text-emerald-700",
      accentStyle: "from-emerald-500 via-teal-500 to-cyan-500",
      glowStyle: "bg-emerald-300/30",
    },
    {
      title: "Housekeeping and Maintenance",
      description:
        "Assign room-cleaning work, update room readiness, review inspections, and connect maintenance issues with rooms.",
      points: [
        "Room cleaning assignments",
        "Housekeeping task status",
        "Room inspection records",
        "Maintenance issue linkage",
      ],
      icon: <ClipboardCheck className="h-6 w-6" />,
      iconStyle: "border-cyan-200 bg-cyan-50 text-cyan-700",
      accentStyle: "from-cyan-500 via-sky-500 to-blue-500",
      glowStyle: "bg-cyan-300/30",
    },
    {
      title: "Restaurant and Service Orders",
      description:
        "Manage restaurant, room-service, and guest orders with item details, quantities, preparation status, and room linkage.",
      points: [
        "Restaurant order records",
        "Room-service orders",
        "Preparation status tracking",
        "Guest and room billing linkage",
      ],
      icon: <UtensilsCrossed className="h-6 w-6" />,
      iconStyle: "border-amber-200 bg-amber-50 text-amber-700",
      accentStyle: "from-amber-500 via-orange-500 to-yellow-500",
      glowStyle: "bg-amber-300/30",
    },
    {
      title: "Invoices, Payments and Reports",
      description:
        "Connect room charges, food orders, additional services, received payments, invoices, and hotel operational reports.",
      points: [
        "Guest invoice records",
        "Received payment tracking",
        "Pending balance visibility",
        "Occupancy and revenue reports",
      ],
      icon: <Receipt className="h-6 w-6" />,
      iconStyle: "border-rose-200 bg-rose-50 text-rose-700",
      accentStyle: "from-rose-500 via-pink-500 to-orange-500",
      glowStyle: "bg-rose-300/30",
    },
  ];

  const workflowSteps: WorkflowStep[] = [
    {
      number: "01",
      stage: "Reserve",
      title: "Create the Guest Reservation",
      description:
        "Record the guest, room type, stay dates, number of guests, booking source, notes, status, and advance amount.",
      icon: <CalendarDays className="h-5 w-5" />,
      style: "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      number: "02",
      stage: "Assign",
      title: "Allocate the Room",
      description:
        "Review availability and assign a suitable room according to room category, booking requirements, and current room condition.",
      icon: <BedDouble className="h-5 w-5" />,
      style: "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      number: "03",
      stage: "Check In",
      title: "Complete Guest Arrival",
      description:
        "Confirm guest details, maintain permitted identification information, record payments, and update the room to occupied.",
      icon: <Users className="h-5 w-5" />,
      style: "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
    {
      number: "04",
      stage: "Serve",
      title: "Manage Stay and Guest Services",
      description:
        "Record restaurant orders, room-service requests, additional services, guest notes, and permitted operational updates.",
      icon: <UtensilsCrossed className="h-5 w-5" />,
      style: "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      number: "05",
      stage: "Maintain",
      title: "Coordinate Housekeeping and Rooms",
      description:
        "Assign cleaning tasks, update room readiness, complete inspections, and raise maintenance issues when necessary.",
      icon: <ClipboardCheck className="h-5 w-5" />,
      style: "border-amber-200 bg-amber-50 text-amber-700",
    },
    {
      number: "06",
      stage: "Settle",
      title: "Prepare the Final Invoice",
      description:
        "Combine room charges, restaurant orders, services, applicable taxes, received payments, and remaining balance.",
      icon: <Receipt className="h-5 w-5" />,
      style: "border-indigo-200 bg-indigo-50 text-indigo-700",
    },
    {
      number: "07",
      stage: "Check Out",
      title: "Complete Departure and Reset the Room",
      description:
        "Record the final payment, complete check-out, preserve the stay history, and move the room into housekeeping status.",
      icon: <PackageCheck className="h-5 w-5" />,
      style: "border-rose-200 bg-rose-50 text-rose-700",
    },
  ];

  const roleViews: RoleViewItem[] = [
    {
      role: "Owner and Hotel Admin",
      description:
        "Complete authorised visibility across reservations, rooms, guests, payments, restaurant activity, and hotel operations.",
      permissions: [
        "Manage hotel records",
        "View all departments",
        "Review revenue and payments",
        "Manage users and permissions",
      ],
      style: "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      role: "Front Office",
      description:
        "Manage permitted reservations, guest profiles, room assignments, check-in, check-out, invoices, and payments.",
      permissions: [
        "Create and update bookings",
        "Assign available rooms",
        "Manage guest arrival",
        "Record permitted payments",
      ],
      style: "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      role: "Housekeeping and Maintenance",
      description:
        "Access assigned room-cleaning tasks, inspections, room status, and maintenance-related information.",
      permissions: [
        "View assigned rooms",
        "Update cleaning status",
        "Complete inspections",
        "Raise maintenance issues",
      ],
      style: "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      role: "Restaurant and Accounts",
      description:
        "Access authorised orders, invoices, payments, expenses, stock, and operational financial information.",
      permissions: [
        "Manage permitted orders",
        "Review guest charges",
        "Record authorised payments",
        "View assigned reports",
      ],
      style: "border-amber-200 bg-amber-50 text-amber-700",
    },
  ];

  const advantages: AdvantageItem[] = [
    {
      title: "Connected Guest Journey",
      description:
        "Keep reservations, guest profiles, room assignments, orders, invoices, payments, and stay history connected.",
      icon: <Layers3 className="h-5 w-5" />,
      style: "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      title: "Multi-Property Visibility",
      description:
        "Review permitted room, booking, payment, housekeeping, and restaurant information across multiple properties.",
      icon: <Building2 className="h-5 w-5" />,
      style: "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      title: "Real Room Status",
      description:
        "Maintain clearer operational records for available, reserved, occupied, dirty, ready, and maintenance-stage rooms.",
      icon: <BedDouble className="h-5 w-5" />,
      style: "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      title: "Role-Based Control",
      description:
        "Limit guest, payment, room, restaurant, housekeeping, and management information according to user responsibility.",
      icon: <LockKeyhole className="h-5 w-5" />,
      style: "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
    {
      title: "Searchable Records",
      description:
        "Locate guests, bookings, rooms, invoices, orders, payments, and tasks without searching separate registers.",
      icon: <Search className="h-5 w-5" />,
      style: "border-rose-200 bg-rose-50 text-rose-700",
    },
    {
      title: "Operational Reporting",
      description:
        "Use connected records to review occupancy, arrivals, departures, collections, housekeeping, and restaurant activity.",
      icon: <BarChart3 className="h-5 w-5" />,
      style: "border-amber-200 bg-amber-50 text-amber-700",
    },
  ];

  const suitableFor = [
    "Hotels",
    "Resorts",
    "Guest houses",
    "Service apartments",
    "Boutique properties",
    "Multi-property hotel groups",
  ];

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-blue-50 via-white to-violet-50">
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

          <div className="absolute -bottom-52 right-[-130px] h-[570px] w-[570px] rounded-full bg-violet-300/25 blur-[145px]" />
        </div>

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.06fr_0.94fr] lg:gap-20 lg:px-10 lg:py-24 xl:px-16">
          {/* Hero content */}
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

                Hospitality Operations Software
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              Connect Every Booking,

              <span className="block">
                Guest, Room and Service
              </span>

              <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
                From Reservation to Checkout.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              Manage reservations, rooms, guest stays, check-in,
              housekeeping, restaurant orders, invoices, payments,
              inventory, and reporting through one connected
              cloud-based hospitality platform.
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
                href="#hospitality-features"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Explore Hospitality Features

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                to="/contact"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700 hover:shadow-md sm:w-auto sm:text-base"
              >
                Discuss Your Requirements
              </Link>
            </div>
          </div>

          {/* Hospitality dashboard preview */}
          <div className="relative mx-auto w-full max-w-[610px]">
            <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/25 blur-[100px]" />

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

                  Hotel Dashboard · Example
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                      Property Operations
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      Hospitality Overview
                    </h2>
                  </div>

                  <span className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
                    Today
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    {
                      label: "Occupied",
                      value: "42",
                      icon: <BedDouble className="h-4 w-4" />,
                      style:
                        "border-blue-100 bg-blue-50 text-blue-700",
                    },
                    {
                      label: "Arrivals",
                      value: "14",
                      icon: <CalendarDays className="h-4 w-4" />,
                      style:
                        "border-emerald-100 bg-emerald-50 text-emerald-700",
                    },
                    {
                      label: "Departures",
                      value: "9",
                      icon: <PackageCheck className="h-4 w-4" />,
                      style:
                        "border-violet-100 bg-violet-50 text-violet-700",
                    },
                    {
                      label: "Pending Rooms",
                      value: "6",
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
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        Current Booking
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-800">
                        Rahul Verma
                      </p>

                      <p className="mt-1 text-[10px] font-semibold text-slate-500">
                        Deluxe Room · 2 Guests · 3 Nights
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[9px] font-bold uppercase text-emerald-700">
                      Checked In
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      {
                        label: "Room",
                        value: "204",
                        color: "bg-blue-50 text-blue-700",
                      },
                      {
                        label: "Departure",
                        value: "14 Jul",
                        color: "bg-violet-50 text-violet-700",
                      },
                      {
                        label: "Payment",
                        value: "Partial",
                        color: "bg-amber-50 text-amber-700",
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
                          Room Status
                        </p>

                        <p className="mt-1 text-sm font-bold text-slate-800">
                          Property availability
                        </p>
                      </div>

                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Hotel className="h-4 w-4" />
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      {[
                        {
                          label: "Occupied",
                          value: "42",
                          width: "76%",
                          color: "bg-blue-500",
                        },
                        {
                          label: "Available",
                          value: "18",
                          width: "46%",
                          color: "bg-emerald-500",
                        },
                        {
                          label: "Housekeeping",
                          value: "6",
                          width: "24%",
                          color: "bg-amber-500",
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
                      Service Status
                    </p>

                    <div className="mt-4 space-y-3">
                      {[
                        {
                          label: "Room service",
                          status: "Preparing",
                          style:
                            "bg-blue-50 text-blue-700",
                        },
                        {
                          label: "Cleaning",
                          status: "Assigned",
                          style:
                            "bg-amber-50 text-amber-700",
                        },
                        {
                          label: "Maintenance",
                          status: "Review",
                          style:
                            "bg-rose-50 text-rose-700",
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
                      Guest checked in successfully
                    </p>

                    <p className="mt-1 truncate text-[10px] text-slate-500">
                      Booking, room, guest, and payment records updated
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
                <BellRing className="h-5 w-5" />
              </span>

              <div>
                <p className="text-xs font-bold text-slate-800">
                  Room 108 is ready
                </p>

                <p className="mt-0.5 text-[9px] text-slate-500">
                  Front office can assign the room to a guest
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
              title: "Manage",
              value: "Bookings",
              icon: <CalendarDays className="h-5 w-5" />,
            },
            {
              title: "Control",
              value: "Rooms",
              icon: <BedDouble className="h-5 w-5" />,
            },
            {
              title: "Coordinate",
              value: "Services",
              icon: <UtensilsCrossed className="h-5 w-5" />,
            },
            {
              title: "Review",
              value: "Revenue",
              icon: <IndianRupee className="h-5 w-5" />,
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
              Hospitality Workflow Challenges
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Replace Disconnected Hotel Registers With One System
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Hospitality operations become difficult to coordinate
              when bookings, guests, rooms, housekeeping, restaurant
              orders, invoices, and payments remain separated across
              registers, spreadsheets, and messages.
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

      {/* Core features */}
      <section
        id="hospitality-features"
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
              Core Hospitality Modules
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Manage Every Operational Layer of the Guest Stay
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Connect reservations, rooms, guests, housekeeping,
              restaurant services, invoices, payments, and reporting
              through one structured hotel management system.
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
                Connected Guest Lifecycle
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                From Reservation to Checkout and Room Readiness
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Every hospitality stage should preserve the
                information created before it. This creates one
                continuous guest and room record instead of separate
                booking, housekeeping, restaurant, billing, and
                payment registers.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-violet-100 bg-violet-50 px-6 py-3 text-sm font-bold text-violet-700 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-violet-600 hover:text-white"
              >
                Discuss Your Hospitality Workflow

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
              Permission-Based Hospitality Access
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Give Every Hotel Role the Right Operational View
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Hotel management, front office, housekeeping,
              maintenance, restaurant, and accounts teams require
              different information and different levels of control.
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
              Hospitality Platform Advantages
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              One Operational Record for Every Guest Stay
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Replace separate booking registers, guest files, room
              lists, housekeeping sheets, restaurant records, and
              payment registers with one connected cloud platform.
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

        <div className="pointer-events-none absolute -bottom-52 right-[-100px] -z-10 h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-[135px]" />

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-10 lg:py-24 xl:px-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-300">
              <Cloud className="h-4 w-4" />

              Cloud Hospitality Management
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Keep Front Office, Housekeeping, Restaurant and Management Connected
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Authorised users can access permitted booking, room,
              guest, housekeeping, restaurant, invoice, payment, and
              reporting tools through responsive interfaces across
              different locations.
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
                title: "Responsive Hotel Access",
                description:
                  "Access permitted booking, room, housekeeping, restaurant, invoice, and payment records through phone, tablet, laptop, or desktop.",
                icon: <MonitorSmartphone className="h-6 w-6" />,
              },
              {
                title: "Secure Role Controls",
                description:
                  "Protect guest, payment, room, restaurant, staff, and management information through role-based permissions.",
                icon: <ShieldCheck className="h-6 w-6" />,
              },
              {
                title: "Centralised Documentation",
                description:
                  "Keep guest details, booking history, room assignments, invoices, payments, orders, and notes within structured records.",
                icon: <FileCheck2 className="h-6 w-6" />,
              },
              {
                title: "Expandable Hotel Modules",
                description:
                  "Inventory, banquet booking, guest feedback, channel-manager connections, or specialised reports can be developed when required.",
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
          <div className="relative isolate overflow-hidden rounded-[28px] bg-gradient-to-r from-blue-700 via-violet-600 to-cyan-600 px-6 py-12 text-center shadow-[0_30px_80px_rgba(37,99,235,0.25)] sm:px-10 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />

            <div className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[360px] w-[360px] rounded-full bg-cyan-300/30 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-48 right-[-100px] -z-10 h-[420px] w-[420px] rounded-full bg-violet-300/30 blur-[110px]" />

            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-50 backdrop-blur sm:text-xs">
              <MessageSquareText className="h-4 w-4" />

              Discuss Your Hospitality Workflow
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Build Hospitality Software Around How Your Property Actually Operates
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
              Tell us how reservations are handled, how rooms are
              assigned, how housekeeping works, how restaurant orders
              are managed, how guests are billed, and where service
              delays occur. We will help convert those workflows into
              one connected cloud platform.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Request Hospitality Consultation

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

export default Hospitality;