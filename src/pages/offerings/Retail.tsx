import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";

import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  CheckCircle2,
  Cloud,
  FileCheck2,
  Gift,
  IndianRupee,
  Layers3,
  LockKeyhole,
  MessageSquareText,
  MonitorSmartphone,
  Package,
  PackageCheck,
  PackagePlus,
  Receipt,
  RotateCcw,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Tags,
  Truck,
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

function Retail() {
  useEffect(() => {
    document.title =
      "Retail and POS Management Software | AeroState Lab";

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const heroPoints = [
    "Product, pricing and stock management",
    "Checkout, billing and payment records",
    "Customer profiles and loyalty rewards",
    "Purchasing, returns and store reports",
  ];

  const challenges: ChallengeItem[] = [
    {
      title: "Disconnected Sales Records",
      description:
        "Bills, payment details, customer information, product quantities, and daily sales remain spread across multiple systems.",
      icon: <Workflow className="h-5 w-5" />,
      style: "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      title: "Unclear Store Inventory",
      description:
        "Staff cannot quickly confirm available, reserved, sold, returned, damaged, transferred, or low-stock quantities.",
      icon: <Package className="h-5 w-5" />,
      style: "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
    {
      title: "Slow Checkout Operations",
      description:
        "Product selection, quantity entry, discounts, customer lookup, payments, and receipt creation involve repeated manual work.",
      icon: <ShoppingCart className="h-5 w-5" />,
      style: "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      title: "Untracked Returns and Exchanges",
      description:
        "Returned products, exchange values, replacement items, stock adjustments, and refund information are not connected.",
      icon: <RotateCcw className="h-5 w-5" />,
      style: "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      title: "Limited Customer Retention",
      description:
        "Customer purchase history, loyalty points, reward activity, communication, and payout records remain disconnected.",
      icon: <Gift className="h-5 w-5" />,
      style: "border-amber-200 bg-amber-50 text-amber-700",
    },
    {
      title: "Delayed Store Reporting",
      description:
        "Owners wait for manually prepared summaries before understanding sales, payments, stock, returns, and store performance.",
      icon: <BarChart3 className="h-5 w-5" />,
      style: "border-rose-200 bg-rose-50 text-rose-700",
    },
  ];

  const coreFeatures: FeatureItem[] = [
    {
      title: "Product and Price Management",
      description:
        "Create structured product records with names, SKUs, categories, units, prices, stock information, and availability status.",
      points: [
        "Product and SKU records",
        "Category and unit management",
        "Selling-price information",
        "Active and inactive products",
      ],
      icon: <Tags className="h-6 w-6" />,
      iconStyle: "border-blue-200 bg-blue-50 text-blue-700",
      accentStyle: "from-blue-500 via-cyan-500 to-sky-500",
      glowStyle: "bg-blue-300/30",
    },
    {
      title: "Checkout and Sales Billing",
      description:
        "Create retail sales records with products, quantities, prices, discounts, customer details, payment methods, and receipts.",
      points: [
        "Product and quantity selection",
        "Discount and charge entries",
        "Payment method records",
        "Receipt and sale history",
      ],
      icon: <ShoppingCart className="h-6 w-6" />,
      iconStyle: "border-violet-200 bg-violet-50 text-violet-700",
      accentStyle: "from-violet-500 via-purple-500 to-indigo-500",
      glowStyle: "bg-violet-300/30",
    },
    {
      title: "Retail Inventory Control",
      description:
        "Connect product sales, purchases, returns, transfers, damage records, and stock adjustments with store quantities.",
      points: [
        "Available stock visibility",
        "Sale-linked quantity reduction",
        "Return and damage records",
        "Store and location transfers",
      ],
      icon: <Package className="h-6 w-6" />,
      iconStyle: "border-emerald-200 bg-emerald-50 text-emerald-700",
      accentStyle: "from-emerald-500 via-teal-500 to-cyan-500",
      glowStyle: "bg-emerald-300/30",
    },
    {
      title: "Customer and Loyalty Records",
      description:
        "Maintain customer profiles, purchase history, reward points, redemption activity, payouts, and permitted communication records.",
      points: [
        "Customer directory",
        "Purchase and reward history",
        "Points and redemption records",
        "Manual message activity",
      ],
      icon: <Gift className="h-6 w-6" />,
      iconStyle: "border-cyan-200 bg-cyan-50 text-cyan-700",
      accentStyle: "from-cyan-500 via-sky-500 to-blue-500",
      glowStyle: "bg-cyan-300/30",
    },
    {
      title: "Purchasing and Suppliers",
      description:
        "Connect stock requirements with suppliers, purchase orders, goods receipts, quantities, prices, and pending deliveries.",
      points: [
        "Supplier information",
        "Purchase requirement records",
        "Goods receipt entries",
        "Pending quantity visibility",
      ],
      icon: <Truck className="h-6 w-6" />,
      iconStyle: "border-amber-200 bg-amber-50 text-amber-700",
      accentStyle: "from-amber-500 via-orange-500 to-yellow-500",
      glowStyle: "bg-amber-300/30",
    },
    {
      title: "Returns, Payments and Reports",
      description:
        "Maintain sale returns, exchanges, payment records, daily sales summaries, product activity, stock movement, and store reports.",
      points: [
        "Sale return and exchange records",
        "Cash and digital payment entries",
        "Daily and period sales reports",
        "Product and store summaries",
      ],
      icon: <BarChart3 className="h-6 w-6" />,
      iconStyle: "border-rose-200 bg-rose-50 text-rose-700",
      accentStyle: "from-rose-500 via-pink-500 to-orange-500",
      glowStyle: "bg-rose-300/30",
    },
  ];

  const workflowSteps: WorkflowStep[] = [
    {
      number: "01",
      stage: "Create",
      title: "Create the Product Record",
      description:
        "Record the product name, SKU, category, unit, price, opening stock, availability, and permitted product information.",
      icon: <Tags className="h-5 w-5" />,
      style: "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      number: "02",
      stage: "Stock",
      title: "Receive Products Into the Store",
      description:
        "Record the supplier, purchased items, received quantities, prices, store location, receipt date, and supporting reference.",
      icon: <PackagePlus className="h-5 w-5" />,
      style: "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      number: "03",
      stage: "Select",
      title: "Add Products to the Sale",
      description:
        "Select products, enter quantities, apply permitted discounts or charges, and connect the sale with a customer when required.",
      icon: <ShoppingCart className="h-5 w-5" />,
      style: "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
    {
      number: "04",
      stage: "Bill",
      title: "Complete Billing and Payment",
      description:
        "Confirm the sale amount, payment method, received amount, pending balance when permitted, and generate the sales receipt.",
      icon: <Receipt className="h-5 w-5" />,
      style: "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      number: "05",
      stage: "Reward",
      title: "Update Customer Loyalty",
      description:
        "Record applicable reward points, customer transaction history, redemption activity, and permitted communication status.",
      icon: <Gift className="h-5 w-5" />,
      style: "border-amber-200 bg-amber-50 text-amber-700",
    },
    {
      number: "06",
      stage: "Return",
      title: "Manage Returns or Exchanges",
      description:
        "Connect the original sale with returned quantities, replacement items, adjustment values, reason, and updated stock.",
      icon: <RotateCcw className="h-5 w-5" />,
      style: "border-indigo-200 bg-indigo-50 text-indigo-700",
    },
    {
      number: "07",
      stage: "Review",
      title: "Monitor Retail Operations",
      description:
        "Review sales, payment methods, product movement, stock levels, customer rewards, purchases, returns, and store performance.",
      icon: <BarChart3 className="h-5 w-5" />,
      style: "border-rose-200 bg-rose-50 text-rose-700",
    },
  ];

  const roleViews: RoleViewItem[] = [
    {
      role: "Owner and Admin",
      description:
        "Complete authorised visibility across products, stores, sales, customers, stock, purchases, payments, and reports.",
      permissions: [
        "Manage retail settings",
        "Review every store",
        "View sales and stock reports",
        "Manage users and permissions",
      ],
      style: "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      role: "Cashier and Sales Staff",
      description:
        "Manage permitted product selection, customer lookup, billing, payments, receipts, returns, and loyalty activity.",
      permissions: [
        "Create retail sales",
        "Record payment methods",
        "Generate permitted receipts",
        "Manage authorised returns",
      ],
      style: "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      role: "Store and Inventory Team",
      description:
        "Access authorised product, stock, receipt, transfer, damage, adjustment, and purchasing information.",
      permissions: [
        "Receive authorised stock",
        "Update store quantities",
        "Manage permitted transfers",
        "Review low-stock products",
      ],
      style: "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      role: "Accounts and Management",
      description:
        "Access authorised sales values, payments, returns, purchases, expenses, and retail performance information.",
      permissions: [
        "Review sales totals",
        "View payment records",
        "Review returns and purchases",
        "Access permitted reports",
      ],
      style: "border-amber-200 bg-amber-50 text-amber-700",
    },
  ];

  const advantages: AdvantageItem[] = [
    {
      title: "Connected Retail Records",
      description:
        "Keep products, sales, customers, payments, stock, purchases, returns, rewards, and stores connected.",
      icon: <Layers3 className="h-5 w-5" />,
      style: "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      title: "Multi-Store Visibility",
      description:
        "Review permitted sales, inventory, transfers, customer, and payment information across multiple retail locations.",
      icon: <Building2 className="h-5 w-5" />,
      style: "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      title: "Stock Accountability",
      description:
        "Maintain clearer records of what was received, sold, returned, damaged, transferred, adjusted, or still available.",
      icon: <PackageCheck className="h-5 w-5" />,
      style: "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      title: "Role-Based Control",
      description:
        "Limit product, pricing, discount, sales, return, customer, payment, and reporting information by responsibility.",
      icon: <LockKeyhole className="h-5 w-5" />,
      style: "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
    {
      title: "Searchable Transaction History",
      description:
        "Locate products, sales, customers, receipts, payments, purchases, returns, and reward records without searching separate files.",
      icon: <Search className="h-5 w-5" />,
      style: "border-rose-200 bg-rose-50 text-rose-700",
    },
    {
      title: "Operational Reporting",
      description:
        "Use connected records to review sales, payment types, product movement, stock, purchases, returns, and customer activity.",
      icon: <BarChart3 className="h-5 w-5" />,
      style: "border-amber-200 bg-amber-50 text-amber-700",
    },
  ];

  const suitableFor = [
    "Hardware and paint stores",
    "Grocery and general stores",
    "Fashion and apparel outlets",
    "Electronics retailers",
    "Furniture and home stores",
    "Multi-store retail businesses",
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

                Retail and POS Operations Software
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              Connect Every Product,

              <span className="block">
                Sale, Customer and Store
              </span>

              <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
                From Checkout to Loyalty.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              Manage products, prices, retail sales, billing, payment
              records, inventory, customers, loyalty rewards,
              purchasing, returns, transfers, and reporting through one
              connected cloud-based retail platform.
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
                href="#retail-features"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Explore Retail Features

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

          {/* Retail dashboard preview */}
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

                  Retail Dashboard · Example
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                      Store Operations
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      Retail Overview
                    </h2>
                  </div>

                  <span className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
                    Today
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    {
                      label: "Sales",
                      value: "84",
                      icon: <ShoppingCart className="h-4 w-4" />,
                      style:
                        "border-blue-100 bg-blue-50 text-blue-700",
                    },
                    {
                      label: "Revenue",
                      value: "₹68K",
                      icon: <IndianRupee className="h-4 w-4" />,
                      style:
                        "border-violet-100 bg-violet-50 text-violet-700",
                    },
                    {
                      label: "Customers",
                      value: "57",
                      icon: <Users className="h-4 w-4" />,
                      style:
                        "border-emerald-100 bg-emerald-50 text-emerald-700",
                    },
                    {
                      label: "Low Stock",
                      value: "12",
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

                        <span className="text-base font-extrabold sm:text-lg">
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
                        Current Sale
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-800">
                        Customer: Rajesh Kumar
                      </p>

                      <p className="mt-1 text-[10px] font-semibold text-slate-500">
                        4 Products · Bill RS-2048
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[9px] font-bold uppercase text-emerald-700">
                      Paid
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      {
                        label: "Subtotal",
                        value: "₹4,850",
                        color: "bg-blue-50 text-blue-700",
                      },
                      {
                        label: "Discount",
                        value: "₹250",
                        color: "bg-violet-50 text-violet-700",
                      },
                      {
                        label: "Final",
                        value: "₹4,600",
                        color: "bg-emerald-50 text-emerald-700",
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
                          Payment Summary
                        </p>

                        <p className="mt-1 text-sm font-bold text-slate-800">
                          Today&apos;s collections
                        </p>
                      </div>

                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                        <WalletCards className="h-4 w-4" />
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      {[
                        {
                          label: "Cash",
                          value: "₹28K",
                          width: "68%",
                          color: "bg-emerald-500",
                        },
                        {
                          label: "Digital",
                          value: "₹34K",
                          width: "82%",
                          color: "bg-blue-500",
                        },
                        {
                          label: "Pending",
                          value: "₹6K",
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
                      Recent Activity
                    </p>

                    <div className="mt-4 space-y-3">
                      {[
                        {
                          label: "Sale completed",
                          status: "Paid",
                          style:
                            "bg-emerald-50 text-emerald-700",
                        },
                        {
                          label: "Stock received",
                          status: "Updated",
                          style:
                            "bg-blue-50 text-blue-700",
                        },
                        {
                          label: "Return request",
                          status: "Review",
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
                      Sale completed successfully
                    </p>

                    <p className="mt-1 truncate text-[10px] text-slate-500">
                      Stock, customer, payment, and reward records updated
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
                <Gift className="h-5 w-5" />
              </span>

              <div>
                <p className="text-xs font-bold text-slate-800">
                  Reward points added
                </p>

                <p className="mt-0.5 text-[9px] text-slate-500">
                  Customer loyalty balance was updated
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
              value: "Products",
              icon: <Tags className="h-5 w-5" />,
            },
            {
              title: "Process",
              value: "Sales",
              icon: <ShoppingCart className="h-5 w-5" />,
            },
            {
              title: "Control",
              value: "Stock",
              icon: <Package className="h-5 w-5" />,
            },
            {
              title: "Reward",
              value: "Customers",
              icon: <Gift className="h-5 w-5" />,
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
              Retail Workflow Challenges
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Replace Disconnected Store Records With One Retail System
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Retail operations become difficult to control when
              products, sales, stock, payments, customers, loyalty,
              purchasing, and returns remain separated across billing
              tools, registers, and spreadsheets.
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
        id="retail-features"
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
              Core Retail Modules
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Manage Every Operational Layer of the Retail Sale
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Connect products, billing, payments, inventory,
              customers, loyalty rewards, purchasing, returns,
              transfers, and reporting through one structured retail
              operations system.
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
                Connected Retail Lifecycle
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                From Product Setup to Sale, Reward and Return
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Every retail stage should preserve the information
                created before it. This creates one continuous
                transaction record instead of separate product, stock,
                billing, customer, reward, payment, and return files.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-violet-100 bg-violet-50 px-6 py-3 text-sm font-bold text-violet-700 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-violet-600 hover:text-white"
              >
                Discuss Your Retail Workflow

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
              Permission-Based Retail Access
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Give Every Store Role the Right Operational View
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Owners, cashiers, sales staff, store teams, inventory
              users, and accounts staff require different retail
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
              Retail Platform Advantages
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              One Operational Record for Every Store Transaction
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Replace separate product lists, billing tools, stock
              registers, customer records, loyalty sheets, purchase
              files, and return books with one connected cloud-based
              retail platform.
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

              Cloud Retail Management
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Keep Stores, Sales, Inventory and Management Connected
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Authorised users can access permitted product, sales,
              payment, customer, loyalty, inventory, purchase, return,
              and reporting tools through responsive interfaces across
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
                title: "Responsive Retail Access",
                description:
                  "Access permitted product, sale, stock, customer, purchase, and return records through phone, tablet, laptop, or desktop.",
                icon: <MonitorSmartphone className="h-6 w-6" />,
              },
              {
                title: "Secure Role Controls",
                description:
                  "Protect pricing, discounts, payments, customers, stock, returns, and management information through role-based permissions.",
                icon: <ShieldCheck className="h-6 w-6" />,
              },
              {
                title: "Centralised Documentation",
                description:
                  "Keep products, sales, receipts, payments, purchases, returns, reward activity, and notes within structured records.",
                icon: <FileCheck2 className="h-6 w-6" />,
              },
              {
                title: "Expandable Retail Modules",
                description:
                  "Barcode scanning, GST invoice formats, payment-gateway links, e-commerce connections, or advanced loyalty workflows can be developed when required.",
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

              Discuss Your Retail Workflow
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Build Retail Software Around How Your Store Actually Sells and Serves Customers
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
              Tell us how products are created, how sales are billed,
              how payments are recorded, how stock is managed, how
              customers earn rewards, and how returns or purchases are
              handled. We will help convert those workflows into one
              connected cloud platform.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Request Retail Consultation

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/products/loyalty-reward-system"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto sm:text-base"
              >
                Explore Loyalty Reward System
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Retail;