import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface FeatureItem {
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

function CustomerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M16 20v-1.5A3.5 3.5 0 0 0 12.5 15h-5A3.5 3.5 0 0 0 4 18.5V20M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7-1v6m3-3h-6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RewardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="m12 3 2.15 4.36L19 8.06l-3.5 3.41.83 4.82L12 14l-4.33 2.29.83-4.82L5 8.06l4.85-.7L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TransactionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M7 7h11m0 0-3-3m3 3-3 3M17 17H6m0 0 3 3m-3-3 3-3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PayoutIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M7 4h10M7 8h10M8 4c3 0 5 1.6 5 4s-2 4-5 4H7l7 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeaderboardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M8 21v-7H4v7h4Zm6 0V3h-4v18h4Zm6 0V9h-4v12h4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M20 11.5a8 8 0 0 1-11.75 7.06L4 20l1.44-4.25A8 8 0 1 1 20 11.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8.5 9.5c.5 2 2 3.5 4 4l1-1 2 1V15c0 .55-.45 1-1 1C10.9 16 8 13.1 8 9.5c0-.55.45-1 1-1h.5l1 2-1 1"
        stroke="currentColor"
        strokeWidth="1.4"
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

function LoyaltyRewardSystem() {
  const features: FeatureItem[] = [
    {
      title: "Customer Directory",
      description:
        "Register customers, manage contact information, and view complete reward balances and activity.",
      icon: <CustomerIcon />,
      style: "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      title: "Reward Entry",
      description:
        "Add multiple purchased products in one entry and calculate loyalty points automatically.",
      icon: <RewardIcon />,
      style: "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
    {
      title: "Transaction History",
      description:
        "Maintain a complete record of earned points, redeemed points, adjustments, and customer activity.",
      icon: <TransactionIcon />,
      style: "border-indigo-200 bg-indigo-50 text-indigo-700",
    },
    {
      title: "Redemption and Payout",
      description:
        "Redeem customer points as cash and maintain accurate payout records with secure controls.",
      icon: <PayoutIcon />,
      style: "border-amber-200 bg-amber-50 text-amber-700",
    },
    {
      title: "Customer Leaderboard",
      description:
        "Identify your most active and valuable customers through an easy-to-understand leaderboard.",
      icon: <LeaderboardIcon />,
      style: "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      title: "WhatsApp Updates",
      description:
        "Send reward and point balance updates to customers directly through WhatsApp messaging.",
      icon: <WhatsAppIcon />,
      style: "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      title: "Business Reports",
      description:
        "Track available points, redeemed points, payout liability, customer activity, and business performance.",
      icon: <ReportIcon />,
      style: "border-sky-200 bg-sky-50 text-sky-700",
    },
    {
      title: "Secure Role Access",
      description:
        "Control access for admins and staff through secure, role-based login permissions.",
      icon: <ShieldIcon />,
      style: "border-slate-200 bg-slate-50 text-slate-700",
    },
  ];

  const industries = [
    "Paint Dealers",
    "Hardware Stores",
    "Building Material Suppliers",
    "Electrical Shops",
    "Plumbing Stores",
    "Sanitary Dealers",
    "Automobile Parts Shops",
    "Distributors",
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "Register Customer",
      description:
        "Create a customer profile with their name, phone number, and business details.",
    },
    {
      number: "02",
      title: "Record Purchase",
      description:
        "Select purchased products and enter quantities through the reward entry screen.",
    },
    {
      number: "03",
      title: "Credit Reward Points",
      description:
        "The system calculates and adds the correct reward points to the customer balance.",
    },
    {
      number: "04",
      title: "Redeem as Cash",
      description:
        "Customers redeem accumulated points according to your configured points-to-rupees value.",
    },
  ];

  const businessBenefits = [
    "Encourage repeat purchases",
    "Improve customer retention",
    "Reduce dependence on direct discounts",
    "Track loyalty liability accurately",
    "Create stronger retailer-customer relationships",
    "Maintain transparent redemption records",
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
          <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-300/30 blur-[130px]" />
          <div className="absolute -bottom-48 right-[-120px] h-[560px] w-[560px] rounded-full bg-cyan-300/25 blur-[140px]" />
        </div>

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-10 lg:py-24 xl:px-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              AeroState Loyalty Reward System
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Build Customer Loyalty
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Without Giving Ordinary Discounts.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              A cloud-based loyalty management system for retailers and
              distributors that rewards painters, contractors, mechanics,
              technicians, and regular customers with points on every eligible
              purchase.
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Reward points on purchases",
                "Cash redemption management",
                "Multi-product reward entries",
                "WhatsApp customer updates",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur"
                >
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckIcon />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#features"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Explore LRS Features
                <ArrowIcon />
              </a>

              <Link
                to="/contact"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700 hover:shadow-md sm:w-auto sm:text-base"
              >
                Request LRS Demo
              </Link>
            </div>
          </div>

          {/* Product dashboard display */}
          <div className="relative mx-auto w-full max-w-[590px]">
            <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/25 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white/95 shadow-[0_30px_90px_rgba(15,23,42,0.18)] backdrop-blur">
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-300" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    AeroState LRS • Live
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                      Loyalty Dashboard
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      Business Overview
                    </h2>
                  </div>

                  <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-500 shadow-sm">
                    This Month
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      Customers
                    </p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">
                      1,284
                    </p>
                    <p className="mt-1 text-xs font-semibold text-emerald-600">
                      +12.4% this month
                    </p>
                  </div>

                  <div className="rounded-2xl border border-cyan-100 bg-white p-4 shadow-sm">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      Reward Points
                    </p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">
                      2,48,750
                    </p>
                    <p className="mt-1 text-xs font-semibold text-cyan-600">
                      Available balance
                    </p>
                  </div>
                </div>

                <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        Reward Activity
                      </p>
                      <p className="mt-1 text-lg font-bold text-slate-900">
                        486 entries
                      </p>
                    </div>

                    <span className="rounded-lg bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700">
                      +18.6%
                    </span>
                  </div>

                  <div className="mt-5 flex h-24 items-end gap-2">
                    {[35, 48, 42, 63, 54, 76, 61, 85, 68, 96, 80, 91].map(
                      (height, index) => (
                        <div
                          key={`${height}-${index}`}
                          className="flex h-full flex-1 items-end overflow-hidden rounded-t-sm bg-slate-100"
                        >
                          <div
                            className={`w-full rounded-t-sm ${
                              index >= 9
                                ? "bg-gradient-to-t from-blue-600 to-cyan-400"
                                : "bg-gradient-to-t from-blue-400 to-blue-200"
                            }`}
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      Payout Liability
                    </p>
                    <p className="mt-2 text-xl font-bold text-slate-900">
                      ₹1,26,450
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      WhatsApp Updates
                    </p>
                    <p className="mt-2 text-xl font-bold text-slate-900">
                      324 sent
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10 lg:py-24 xl:px-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Customer Retention Platform
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Give Customers a Strong Reason to Return
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Instead of reducing product value through repeated discounts,
              retailers can reward customers with points that accumulate across
              purchases and can later be redeemed as cash.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              This creates a transparent loyalty program for painters,
              contractors, technicians, mechanics, and other repeat buyers while
              helping the retailer strengthen long-term customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {businessBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm"
              >
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckIcon />
                </span>

                <span className="text-sm font-bold text-slate-700">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
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
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Complete LRS Modules
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Everything Required to Manage a Modern Loyalty Program
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Manage customers, reward entries, points, redemption, messaging,
              and reports through one secure and connected system.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.1)]"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${feature.style}`}
                >
                  {feature.icon}
                </span>

                <h3 className="mt-5 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              How It Works
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              A Simple Reward Process for Retailers and Customers
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((step) => (
              <article
                key={step.number}
                className="relative overflow-hidden rounded-[22px] border border-slate-200 bg-gradient-to-br from-white to-blue-50/60 p-6 shadow-sm"
              >
                <span className="text-5xl font-extrabold text-blue-100">
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

      {/* Industries */}
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
          <div className="absolute -left-32 -top-40 h-[460px] w-[460px] rounded-full bg-blue-600/20 blur-[130px]" />
          <div className="absolute -bottom-40 right-[-100px] h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[130px]" />
        </div>

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20 lg:px-10 lg:py-24 xl:px-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
              Industries We Support
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Built for Businesses With Repeat Buyers
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              AeroState LRS is especially suitable for businesses where
              contractors, technicians, mechanics, painters, and other
              professional buyers purchase repeatedly.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex min-h-[88px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-4 text-center text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08]"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="relative isolate overflow-hidden rounded-[28px] bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 px-6 py-12 text-center shadow-[0_30px_80px_rgba(37,99,235,0.25)] sm:px-10 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />

            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Start Building Stronger Customer Loyalty
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
              Request a product demonstration and see how AeroState Loyalty
              Reward System can work for your shop, distribution business, or
              retail network.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Request LRS Demo
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

export default LoyaltyRewardSystem;