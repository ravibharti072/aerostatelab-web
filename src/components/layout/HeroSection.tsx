import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type TouchEvent,
} from "react";
import { Link } from "react-router-dom";

const SLIDE_DURATION = 7500;
const TOTAL_SLIDES = 3;

const loyaltyBenefits = [
  "Customer reward points",
  "Multi-product entries",
  "Cash redemption",
  "WhatsApp updates",
];

const loyaltyIndustries = [
  "Paint Dealers",
  "Hardware Stores",
  "Building Materials",
  "Auto Parts Shops",
];

const operationsBenefits = [
  "Sales and CRM",
  "Employee management",
  "Tasks and projects",
  "Payments and salary",
];

const operationsModules = [
  "Sales CRM",
  "Attendance",
  "Tasks",
  "Projects",
  "Payments",
  "Commission",
  "Maintenance",
  "Reports",
];

const customSoftwareBenefits = [
  "Custom ERP and CRM",
  "Workflow automation",
  "Cloud dashboards",
  "API integrations",
];

const customIndustries = [
  "Retail",
  "Hospitality",
  "Manufacturing",
  "Education",
  "Healthcare",
  "Professional Services",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        d="M4 10.4 8 14l8-8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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

function ChevronLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="m15 18-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="m9 18 6-6-6-6"
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
      className="h-5 w-5"
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
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="m12 3 2.15 4.36L19 8.06l-3.5 3.41.83 4.82L12 14l-4.33 2.29.83-4.82L5 8.06l4.85-.7L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RupeeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M7 4h10M7 8h10M8 4c3 0 5 1.6 5 4s-2 4-5 4H7l7 8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
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
      className="h-5 w-5"
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

function SalesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
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

function TeamIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M16 20v-1.5A3.5 3.5 0 0 0 12.5 15h-5A3.5 3.5 0 0 0 4 18.5V20M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7-6a3 3 0 0 1 0 6m3 9v-1.5a3.5 3.5 0 0 0-2.6-3.38"
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
      className="h-5 w-5"
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

function ProjectIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
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

function CloudIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
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

function CodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
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

function DatabaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
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

function AutomationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
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

function LoyaltySlide() {
  const chartValues = [34, 52, 43, 68, 57, 82, 64, 91, 74, 100, 85, 95];

  return (
    <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-10 lg:py-12 xl:gap-20 xl:px-16">
      <div className="relative z-10 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
        <div className="opacity-0 animate-slide-fade-up animate-delay-100">
          <span className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200/80 bg-white/85 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-700 shadow-sm backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.16em] lg:mb-6">
            <span className="relative flex h-2 w-2 flex-none">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>

            <span className="truncate">
              Loyalty & Customer Retention Software
            </span>
          </span>
        </div>

        <h1 className="mb-5 text-[2.5rem] font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 opacity-0 animate-slide-fade-up animate-delay-200 sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.35rem]">
          Turn Every Purchase
          <span className="block">Into a Reason to</span>

          <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent animate-gradient-text">
            Come Back Again.
          </span>
        </h1>

        <p className="mx-auto mb-7 max-w-xl text-[15px] leading-7 text-slate-600 opacity-0 animate-slide-fade-up animate-delay-300 sm:text-lg sm:leading-8 lg:mx-0">
          AeroState Loyalty Reward System helps retailers reward painters,
          contractors, mechanics, technicians, and regular customers with
          points on every eligible purchase.
        </p>

        <div className="mb-6 rounded-2xl border border-blue-100 bg-white/80 p-4 text-left shadow-sm backdrop-blur opacity-0 animate-slide-fade-up animate-delay-300 sm:hidden">
          <p className="text-sm font-semibold leading-6 text-slate-700">
            Replace ordinary discounts with structured rewards that encourage
            repeat purchases and long-term customer loyalty.
          </p>
        </div>

        <div className="mx-auto mb-8 grid max-w-xl grid-cols-2 gap-2.5 text-left opacity-0 animate-slide-fade-up animate-delay-400 sm:gap-3 lg:mx-0">
          {loyaltyBenefits.map((item) => (
            <div
              key={item}
              className="flex min-h-11 items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/75 px-3 py-2.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:text-sm"
            >
              <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <CheckIcon />
              </span>

              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 opacity-0 animate-slide-fade-up animate-delay-500 sm:flex-row sm:justify-center lg:justify-start">
          <Link
            to="/products/loyalty-reward-system"
            className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200/80 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 sm:w-auto sm:min-w-[230px] sm:text-base"
          >
            Explore Loyalty Software
            <ArrowIcon />
          </Link>

          <Link
            to="/contact"
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700 hover:shadow-md sm:w-auto sm:min-w-[230px] sm:text-base"
          >
            Request LRS Demo
          </Link>
        </div>

        <div className="mt-8 opacity-0 animate-slide-fade-up animate-delay-600 sm:mt-10">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
            Designed for modern retailers
          </p>

          <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {loyaltyIndustries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-slate-200 bg-white/75 px-3 py-1.5 text-[11px] font-semibold text-slate-600 shadow-sm backdrop-blur sm:text-xs"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[590px] justify-center opacity-0 animate-slide-fade-up animate-delay-600 lg:mx-0 lg:max-w-none lg:justify-end">
        <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/25 blur-3xl animate-pulse-soft" />

        <div className="relative w-full max-w-[570px] overflow-hidden rounded-[22px] border border-slate-200/80 bg-white/95 shadow-[0_25px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_85px_rgba(37,99,235,0.19)] sm:rounded-[26px]">
          <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50/95 px-3.5 py-3 sm:px-5 sm:py-3.5">
            <div className="flex gap-1.5 sm:gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-300 sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300 sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 sm:h-3 sm:w-3" />
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />

              <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] sm:tracking-[0.16em]">
                AeroState LRS • Live
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/70 p-3.5 sm:p-5 md:p-6">
            <div className="mb-3.5 flex items-center justify-between gap-3 sm:mb-5">
              <div className="min-w-0">
                <p className="truncate text-[9px] font-bold uppercase tracking-[0.14em] text-blue-600 sm:text-xs">
                  Loyalty Dashboard
                </p>

                <h2 className="mt-0.5 truncate text-base font-bold text-slate-900 sm:mt-1 sm:text-xl">
                  Business Overview
                </h2>
              </div>

              <div className="flex flex-none items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-[9px] font-semibold text-slate-500 shadow-sm sm:px-3 sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                This Month
              </div>
            </div>

            <div className="mb-3 grid grid-cols-2 gap-2.5 sm:mb-4 sm:gap-3">
              <div className="rounded-xl border border-blue-100 bg-white p-3 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:rounded-2xl sm:p-4">
                <div className="mb-2 flex items-center justify-between sm:mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-700 sm:h-9 sm:w-9 sm:rounded-xl">
                    <CustomerIcon />
                  </span>

                  <span className="rounded-full bg-emerald-50 px-1.5 py-1 text-[8px] font-bold text-emerald-600 sm:px-2 sm:text-[10px]">
                    +12.4%
                  </span>
                </div>

                <p className="text-[8px] font-bold uppercase tracking-[0.11em] text-slate-400 sm:text-[10px]">
                  Customers
                </p>

                <p className="mt-0.5 text-xl font-bold tracking-tight text-slate-900 sm:mt-1 sm:text-2xl">
                  1,284
                </p>
              </div>

              <div className="rounded-xl border border-cyan-100 bg-white p-3 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:rounded-2xl sm:p-4">
                <div className="mb-2 flex items-center justify-between sm:mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-100 text-cyan-700 sm:h-9 sm:w-9 sm:rounded-xl">
                    <RewardIcon />
                  </span>

                  <span className="text-[8px] font-semibold text-slate-400 sm:text-[10px]">
                    Available
                  </span>
                </div>

                <p className="text-[8px] font-bold uppercase tracking-[0.11em] text-slate-400 sm:text-[10px]">
                  Reward Points
                </p>

                <p className="mt-0.5 text-lg font-bold tracking-tight text-slate-900 sm:mt-1 sm:text-2xl">
                  2,48,750
                </p>
              </div>
            </div>

            <div className="mb-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:mb-4 sm:rounded-2xl sm:p-4">
              <div className="mb-3 flex items-start justify-between sm:mb-4">
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.11em] text-slate-400 sm:text-[10px]">
                    Reward Activity
                  </p>

                  <p className="mt-0.5 text-base font-bold text-slate-900 sm:mt-1 sm:text-lg">
                    486 entries
                  </p>
                </div>

                <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-1 text-[8px] font-bold text-emerald-700 sm:px-2.5 sm:text-[10px]">
                  +18.6%
                </span>
              </div>

              <div className="flex h-[68px] items-end gap-1.5 sm:h-24 sm:gap-2">
                {chartValues.map((height, index) => (
                  <div
                    key={`${height}-${index}`}
                    className="flex h-full flex-1 items-end overflow-hidden rounded-t-sm bg-slate-100"
                  >
                    <div
                      className={`w-full origin-bottom rounded-t-sm animate-grow-bar ${
                        index >= 9
                          ? "bg-gradient-to-t from-blue-600 to-cyan-400"
                          : "bg-gradient-to-t from-blue-400 to-blue-200"
                      }`}
                      style={{
                        height: `${height}%`,
                        animationDelay: `${index * 0.06}s`,
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-2 flex justify-between text-[7px] font-bold uppercase tracking-wider text-slate-400 sm:text-[9px]">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              <div className="rounded-xl border border-amber-100 bg-white p-3 shadow-sm sm:rounded-2xl sm:p-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate text-[8px] font-bold uppercase tracking-[0.1em] text-slate-400 sm:text-[10px]">
                      Payout Liability
                    </p>

                    <p className="mt-1 truncate text-base font-bold text-slate-900 sm:text-xl">
                      ₹1,26,450
                    </p>
                  </div>

                  <span className="hidden h-10 w-10 flex-none items-center justify-center rounded-xl bg-amber-100 text-amber-700 min-[390px]:flex">
                    <RupeeIcon />
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-emerald-100 bg-white p-3 shadow-sm sm:rounded-2xl sm:p-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate text-[8px] font-bold uppercase tracking-[0.1em] text-slate-400 sm:text-[10px]">
                      WhatsApp Updates
                    </p>

                    <p className="mt-1 truncate text-base font-bold text-slate-900 sm:text-xl">
                      324 sent
                    </p>
                  </div>

                  <span className="relative hidden h-10 w-10 flex-none items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 min-[390px]:flex">
                    <WhatsAppIcon />

                    <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 animate-pulse" />
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-2 rounded-xl border border-blue-100 bg-blue-50/80 p-2.5 sm:mt-4 sm:rounded-2xl sm:p-3.5">
              <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white shadow-md shadow-blue-200 sm:h-10 sm:w-10 sm:rounded-xl sm:text-sm">
                  RK
                </span>

                <div className="min-w-0">
                  <p className="truncate text-[11px] font-bold text-slate-800 sm:text-sm">
                    Rajesh Kumar earned 240 points
                  </p>

                  <p className="mt-0.5 truncate text-[9px] text-slate-500 sm:text-xs">
                    Asian Paints • 2 items • Just now
                  </p>
                </div>
              </div>

              <span className="flex-none rounded-lg bg-white px-2 py-1 text-[8px] font-bold text-emerald-600 shadow-sm sm:px-2.5 sm:text-[10px]">
                Credited
              </span>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-4 left-2 z-30 hidden items-center gap-3 rounded-2xl border border-emerald-100 bg-white px-4 py-3 shadow-xl animate-floating-card sm:flex lg:-left-5 xl:-left-8">
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
            <CheckIcon />
          </span>

          <div>
            <p className="text-xs font-bold text-slate-800">
              Reward entry saved
            </p>

            <p className="text-[10px] text-slate-500">
              Customer balance updated instantly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OperationsSlide() {
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
      icon: <RupeeIcon />,
      style: "bg-emerald-100 text-emerald-700",
    },
    {
      label: "Tasks",
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

  const pipeline = [
    {
      label: "New Leads",
      value: 78,
      count: 18,
      style: "bg-blue-500",
    },
    {
      label: "Proposal Sent",
      value: 56,
      count: 11,
      style: "bg-indigo-500",
    },
    {
      label: "Converted",
      value: 38,
      count: 9,
      style: "bg-emerald-500",
    },
  ];

  return (
    <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-10 lg:py-12 xl:gap-20 xl:px-16">
      <div className="relative z-10 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
        <div className="opacity-0 animate-slide-fade-up animate-delay-100">
          <span className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-indigo-200 bg-white/85 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-indigo-700 shadow-sm backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.16em] lg:mb-6">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_0_5px_rgba(99,102,241,0.12)]" />
            Business Operations Management System
          </span>
        </div>

        <h1 className="mb-5 text-[2.45rem] font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 opacity-0 animate-slide-fade-up animate-delay-200 sm:text-5xl md:text-6xl lg:text-[3.65rem] xl:text-[4.2rem]">
          Manage Every Business
          <span className="block">Operation From One</span>

          <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-text">
            Connected Platform.
          </span>
        </h1>

        <p className="mx-auto mb-7 max-w-xl text-[15px] leading-7 text-slate-600 opacity-0 animate-slide-fade-up animate-delay-300 sm:text-lg sm:leading-8 lg:mx-0">
          Manage sales, CRM, employee joining, attendance, tasks, projects,
          payments, commissions, salary, maintenance, and reporting through one
          secure cloud-based management system.
        </p>

        <div className="mb-6 rounded-2xl border border-indigo-100 bg-white/80 p-4 text-left shadow-sm backdrop-blur opacity-0 animate-slide-fade-up animate-delay-300 sm:hidden">
          <p className="text-sm font-semibold leading-6 text-slate-700">
            Connect every department and replace scattered spreadsheets,
            messages, and disconnected software with one central platform.
          </p>
        </div>

        <div className="mx-auto mb-8 grid max-w-xl grid-cols-2 gap-2.5 text-left opacity-0 animate-slide-fade-up animate-delay-400 sm:gap-3 lg:mx-0">
          {operationsBenefits.map((item) => (
            <div
              key={item}
              className="flex min-h-11 items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/75 px-3 py-2.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md sm:text-sm"
            >
              <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                <CheckIcon />
              </span>

              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 opacity-0 animate-slide-fade-up animate-delay-500 sm:flex-row sm:justify-center lg:justify-start">
          <Link
            to="/products/business-operations-management-system"
            className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-200/80 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 sm:w-auto sm:min-w-[230px] sm:text-base"
          >
            Explore Business System
            <ArrowIcon />
          </Link>

          <Link
            to="/contact"
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:text-indigo-700 hover:shadow-md sm:w-auto sm:min-w-[230px] sm:text-base"
          >
            Request a Demo
          </Link>
        </div>

        <div className="mt-8 opacity-0 animate-slide-fade-up animate-delay-600 sm:mt-10">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
            Complete operational coverage
          </p>

          <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {operationsModules.map((module) => (
              <span
                key={module}
                className="rounded-full border border-slate-200 bg-white/75 px-3 py-1.5 text-[11px] font-semibold text-slate-600 shadow-sm backdrop-blur sm:text-xs"
              >
                {module}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[590px] justify-center opacity-0 animate-slide-fade-up animate-delay-600 lg:mx-0 lg:max-w-none lg:justify-end">
        <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300/25 blur-3xl animate-pulse-soft" />

        <div className="relative w-full max-w-[580px] overflow-hidden rounded-[22px] border border-slate-200/80 bg-white/95 shadow-[0_25px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_85px_rgba(79,70,229,0.2)] sm:rounded-[26px]">
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/95 px-3.5 py-3 sm:px-5 sm:py-3.5">
            <div className="flex gap-1.5 sm:gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-300 sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300 sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 sm:h-3 sm:w-3" />
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />

              <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] sm:tracking-[0.16em]">
                AeroState Operations • Live
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 via-white to-indigo-50/70 p-3.5 sm:p-5 md:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-indigo-600 sm:text-xs">
                  Operations Dashboard
                </p>

                <h2 className="mt-1 truncate text-base font-bold text-slate-900 sm:text-xl">
                  Good morning, Admin
                </h2>
              </div>

              <span className="rounded-lg border border-indigo-100 bg-white px-2.5 py-2 text-[9px] font-semibold text-indigo-600 shadow-sm sm:px-3 sm:text-xs">
                Live Overview
              </span>
            </div>

            <div className="mb-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
              {summaryCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:rounded-2xl"
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

            <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm sm:rounded-2xl sm:p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      Sales Pipeline
                    </p>

                    <p className="mt-1 text-base font-bold text-slate-900">
                      38 active opportunities
                    </p>
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                    <SalesIcon />
                  </span>
                </div>

                <div className="space-y-3">
                  {pipeline.map((item) => (
                    <div key={item.label}>
                      <div className="mb-1.5 flex items-center justify-between text-[10px] font-semibold text-slate-600 sm:text-xs">
                        <span>{item.label}</span>
                        <span>{item.count}</span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full ${item.style} animate-width-grow`}
                          style={{ width: `${item.value}%` }}
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

                    <p className="mt-1 text-base font-bold text-slate-900">
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
                    ["Working remotely", "3", "text-blue-600"],
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

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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

                  <span className="text-xl font-bold text-indigo-700">72%</span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 animate-width-grow" />
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-emerald-100 bg-white p-3.5 shadow-sm sm:rounded-2xl">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <RupeeIcon />
                  </span>

                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold text-slate-800">
                      Payment received
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-500">
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

        <div className="absolute -bottom-4 right-2 z-30 hidden items-center gap-3 rounded-2xl border border-indigo-100 bg-white px-4 py-3 shadow-xl animate-floating-card sm:flex lg:-right-4 xl:-right-8">
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
  );
}

function CustomSoftwareSlide() {
  const projectSteps = [
    {
      number: "01",
      title: "Discover",
      status: "Done",
      style: "border-emerald-100 bg-emerald-50 text-emerald-700",
    },
    {
      number: "02",
      title: "Design",
      status: "Done",
      style: "border-blue-100 bg-blue-50 text-blue-700",
    },
    {
      number: "03",
      title: "Develop",
      status: "Active",
      style: "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      number: "04",
      title: "Deploy",
      status: "Next",
      style: "border-slate-200 bg-slate-50 text-slate-500",
    },
  ];

  const technologyModules = [
    {
      title: "Cloud",
      text: "Secure hosting",
      icon: <CloudIcon />,
      style: "bg-blue-100 text-blue-700",
    },
    {
      title: "API",
      text: "Integrations",
      icon: <CodeIcon />,
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
      icon: <AutomationIcon />,
      style: "bg-emerald-100 text-emerald-700",
    },
  ];

  return (
    <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-10 lg:py-12 xl:gap-20 xl:px-16">
      <div className="relative z-10 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
        <div className="opacity-0 animate-slide-fade-up animate-delay-100">
          <span className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-violet-200 bg-white/85 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-violet-700 shadow-sm backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.16em] lg:mb-6">
            <span className="flex h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_0_5px_rgba(139,92,246,0.12)]" />
            Custom Cloud Software Solutions
          </span>
        </div>

        <h1 className="mb-5 text-[2.45rem] font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 opacity-0 animate-slide-fade-up animate-delay-200 sm:text-5xl md:text-6xl lg:text-[3.65rem] xl:text-[4.2rem]">
          Software Designed Around
          <span className="block">How Your Business</span>

          <span className="block bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-text">
            Actually Works.
          </span>
        </h1>

        <p className="mx-auto mb-7 max-w-xl text-[15px] leading-7 text-slate-600 opacity-0 animate-slide-fade-up animate-delay-300 sm:text-lg sm:leading-8 lg:mx-0">
          AeroState Lab designs secure, scalable, and easy-to-use cloud software
          around your workflows, departments, customers, reporting needs, and
          future growth plans.
        </p>

        <div className="mb-6 rounded-2xl border border-violet-100 bg-white/80 p-4 text-left shadow-sm backdrop-blur opacity-0 animate-slide-fade-up animate-delay-300 sm:hidden">
          <p className="text-sm font-semibold leading-6 text-slate-700">
            From the first consultation to deployment and support, your software
            is planned around real business requirements instead of generic
            templates.
          </p>
        </div>

        <div className="mx-auto mb-8 grid max-w-xl grid-cols-2 gap-2.5 text-left opacity-0 animate-slide-fade-up animate-delay-400 sm:gap-3 lg:mx-0">
          {customSoftwareBenefits.map((item) => (
            <div
              key={item}
              className="flex min-h-11 items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/75 px-3 py-2.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md sm:text-sm"
            >
              <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-violet-100 text-violet-700">
                <CheckIcon />
              </span>

              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 opacity-0 animate-slide-fade-up animate-delay-500 sm:flex-row sm:justify-center lg:justify-start">
          <Link
            to="/services/custom-software-development"
            className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200/80 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-xl hover:shadow-violet-200 sm:w-auto sm:min-w-[230px] sm:text-base"
          >
            Explore Custom Development
            <ArrowIcon />
          </Link>

          <Link
            to="/contact"
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:text-violet-700 hover:shadow-md sm:w-auto sm:min-w-[230px] sm:text-base"
          >
            Book Free Consultation
          </Link>
        </div>

        <div className="mt-8 opacity-0 animate-slide-fade-up animate-delay-600 sm:mt-10">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
            Software for multiple industries
          </p>

          <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {customIndustries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-slate-200 bg-white/75 px-3 py-1.5 text-[11px] font-semibold text-slate-600 shadow-sm backdrop-blur sm:text-xs"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[590px] justify-center opacity-0 animate-slide-fade-up animate-delay-600 lg:mx-0 lg:max-w-none lg:justify-end">
        <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/25 blur-3xl animate-pulse-soft" />

        <div className="relative w-full max-w-[580px] overflow-hidden rounded-[22px] border border-slate-200/80 bg-white/95 shadow-[0_25px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_85px_rgba(124,58,237,0.2)] sm:rounded-[26px]">
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/95 px-3.5 py-3 sm:px-5 sm:py-3.5">
            <div className="flex gap-1.5 sm:gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-300 sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300 sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 sm:h-3 sm:w-3" />
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />

              <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] sm:tracking-[0.16em]">
                AeroState Development • Active
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 via-white to-violet-50/70 p-3.5 sm:p-5 md:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-violet-600 sm:text-xs">
                  Custom Software Project
                </p>

                <h2 className="mt-1 truncate text-base font-bold text-slate-900 sm:text-xl">
                  Business Automation Platform
                </h2>
              </div>

              <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-2 text-[9px] font-bold text-emerald-700 shadow-sm sm:px-3 sm:text-xs">
                In Development
              </span>
            </div>

            <div className="mb-3 rounded-xl border border-violet-100 bg-gradient-to-br from-violet-600 to-blue-600 p-4 text-white shadow-lg shadow-violet-200/50 sm:rounded-2xl sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-violet-100 sm:text-[10px]">
                    Overall Project Progress
                  </p>

                  <p className="mt-2 text-2xl font-bold sm:text-3xl">78%</p>

                  <p className="mt-1 text-[10px] text-violet-100 sm:text-xs">
                    Core workflows and dashboards completed
                  </p>
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                  <CodeIcon />
                </span>
              </div>

              <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-[78%] rounded-full bg-white animate-width-grow" />
              </div>
            </div>

            <div className="mb-3 grid grid-cols-4 gap-2 sm:gap-3">
              {projectSteps.map((step) => (
                <div
                  key={step.number}
                  className={`rounded-xl border p-2.5 text-center sm:rounded-2xl sm:p-3 ${step.style}`}
                >
                  <p className="text-[9px] font-bold opacity-70">
                    {step.number}
                  </p>

                  <p className="mt-1 truncate text-[9px] font-bold sm:text-xs">
                    {step.title}
                  </p>

                  <p className="mt-1 text-[7px] font-semibold uppercase tracking-wider sm:text-[8px]">
                    {step.status}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
              {technologyModules.map((module) => (
                <div
                  key={module.title}
                  className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:rounded-2xl"
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${module.style}`}
                  >
                    {module.icon}
                  </span>

                  <p className="mt-2 text-xs font-bold text-slate-800">
                    {module.title}
                  </p>

                  <p className="mt-0.5 text-[8px] text-slate-500 sm:text-[9px]">
                    {module.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm sm:rounded-2xl sm:p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
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

              <div className="grid grid-cols-3 gap-2">
                {[
                  ["Dashboard", "Complete", "text-emerald-600"],
                  ["Reports", "Testing", "text-blue-600"],
                  ["Automation", "Building", "text-violet-600"],
                ].map(([title, status, style]) => (
                  <div
                    key={title}
                    className="rounded-lg bg-slate-50 px-2 py-2.5 text-center"
                  >
                    <p className="truncate text-[9px] font-bold text-slate-700 sm:text-[10px]">
                      {title}
                    </p>

                    <p
                      className={`mt-1 truncate text-[7px] font-bold uppercase tracking-wider sm:text-[8px] ${style}`}
                    >
                      {status}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-4 left-2 z-30 hidden items-center gap-3 rounded-2xl border border-violet-100 bg-white px-4 py-3 shadow-xl animate-floating-card sm:flex lg:-left-5 xl:-left-8">
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
  );
}

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const slides = [
    <LoyaltySlide key="loyalty" />,
    <OperationsSlide key="operations" />,
    <CustomSoftwareSlide key="custom-software" />,
  ];

  const goToSlide = useCallback((index: number) => {
    const normalizedIndex =
      (index + TOTAL_SLIDES) % TOTAL_SLIDES;

    setActiveSlide(normalizedIndex);
  }, []);

  const goToNextSlide = useCallback(() => {
    setActiveSlide(
      (current) => (current + 1) % TOTAL_SLIDES
    );
  }, []);

  const goToPreviousSlide = useCallback(() => {
    setActiveSlide(
      (current) =>
        (current - 1 + TOTAL_SLIDES) % TOTAL_SLIDES
    );
  }, []);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      goToNextSlide();
    }, SLIDE_DURATION);

    return () => {
      window.clearInterval(timer);
    };
  }, [activeSlide, goToNextSlide, isPaused]);

  function handleTouchStart(
    event: TouchEvent<HTMLElement>
  ) {
    touchStartX.current =
      event.targetTouches[0].clientX;

    touchEndX.current = null;
    setIsPaused(true);
  }

  function handleTouchMove(
    event: TouchEvent<HTMLElement>
  ) {
    touchEndX.current =
      event.targetTouches[0].clientX;
  }

  function handleTouchEnd() {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      touchStartX.current = null;
      touchEndX.current = null;
      setIsPaused(false);
      return;
    }

    const swipeDistance =
      touchStartX.current - touchEndX.current;

    const minimumSwipeDistance = 55;

    if (swipeDistance > minimumSwipeDistance) {
      goToNextSlide();
    } else if (
      swipeDistance < -minimumSwipeDistance
    ) {
      goToPreviousSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;

    window.setTimeout(() => {
      setIsPaused(false);
    }, 1200);
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLElement>
  ) {
    if (event.key === "ArrowRight") {
      goToNextSlide();
    }

    if (event.key === "ArrowLeft") {
      goToPreviousSlide();
    }
  }

  const backgroundClass =
    activeSlide === 0
      ? "from-blue-50 via-white to-cyan-50"
      : activeSlide === 1
        ? "from-indigo-50 via-white to-cyan-50"
        : "from-violet-50 via-white to-blue-50";

  const leftGlowClass =
    activeSlide === 0
      ? "bg-blue-300/25"
      : activeSlide === 1
        ? "bg-indigo-300/25"
        : "bg-violet-300/25";

  const rightGlowClass =
    activeSlide === 0
      ? "bg-cyan-300/25"
      : activeSlide === 1
        ? "bg-blue-300/25"
        : "bg-cyan-300/25";

  const activeDotClass =
    activeSlide === 0
      ? "bg-blue-600"
      : activeSlide === 1
        ? "bg-indigo-600"
        : "bg-violet-600";

  return (
    <section
      className="relative isolate flex min-h-[calc(100svh-76px)] w-full flex-col overflow-hidden bg-white outline-none"
      aria-roledescription="carousel"
      aria-label="AeroState software solutions"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`absolute inset-0 -z-30 bg-gradient-to-br transition-colors duration-700 ${backgroundClass}`}
      />

      <div
        className="absolute inset-0 -z-20 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          backgroundPosition: "0 0",
        }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute -left-32 -top-40 h-[420px] w-[420px] rounded-full blur-[110px] animate-background-float transition-colors duration-700 sm:h-[560px] sm:w-[560px] ${leftGlowClass}`}
        />

        <div
          className={`absolute -bottom-44 right-[-160px] h-[480px] w-[480px] rounded-full blur-[120px] animate-background-float-reverse transition-colors duration-700 sm:h-[620px] sm:w-[620px] ${rightGlowClass}`}
        />
      </div>

      <div
        key={activeSlide}
        className="relative flex flex-1 items-center animate-slide-change"
        aria-live="polite"
      >
        {slides[activeSlide]}
      </div>

      <div className="relative z-40 mx-auto flex w-full max-w-[1440px] items-center justify-center gap-4 px-4 pb-6 sm:px-6 sm:pb-8 lg:justify-between lg:px-10 xl:px-16">
        <button
          type="button"
          onClick={goToPreviousSlide}
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-600 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 hover:shadow-lg lg:flex"
          aria-label="Previous hero slide"
        >
          <ChevronLeftIcon />
        </button>

        <div className="flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/85 px-4 py-2.5 shadow-lg shadow-slate-200/50 backdrop-blur">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`relative h-2.5 overflow-hidden rounded-full transition-all duration-500 ${
                activeSlide === index
                  ? `w-10 ${activeDotClass}`
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to hero slide ${index + 1}`}
              aria-current={
                activeSlide === index
                  ? "true"
                  : undefined
              }
            >
              {activeSlide === index && !isPaused && (
                <span
                  className="absolute inset-y-0 left-0 bg-white/35 animate-slide-progress"
                  style={{
                    animationDuration: `${SLIDE_DURATION}ms`,
                  }}
                />
              )}
            </button>
          ))}

          <span className="ml-1 text-[10px] font-bold tabular-nums text-slate-400">
            0{activeSlide + 1} / 03
          </span>
        </div>

        <button
          type="button"
          onClick={goToNextSlide}
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-600 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 hover:shadow-lg lg:flex"
          aria-label="Next hero slide"
        >
          <ChevronRightIcon />
        </button>
      </div>

      <div className="relative z-40 pb-4 text-center lg:hidden">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          Swipe to explore
        </p>
      </div>

      <style>{`
        @keyframes slide-fade-up {
          from {
            opacity: 0;
            transform: translateY(26px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-change {
          from {
            opacity: 0;
            transform: translateX(18px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient-text {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulse-soft {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(1);
          }

          50% {
            opacity: 0.8;
            transform: scale(1.04);
          }
        }

        @keyframes grow-bar {
          from {
            transform: scaleY(0);
          }

          to {
            transform: scaleY(1);
          }
        }

        @keyframes width-grow {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        @keyframes floating-card {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes background-float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(18px, -16px, 0);
          }
        }

        @keyframes background-float-reverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-18px, -14px, 0);
          }
        }

        @keyframes slide-progress {
          from {
            width: 0%;
          }

          to {
            width: 100%;
          }
        }

        .animate-slide-fade-up {
          animation: slide-fade-up 0.72s ease-out forwards;
        }

        .animate-slide-change {
          animation: slide-change 0.55s ease-out forwards;
        }

        .animate-delay-100 {
          animation-delay: 0.1s;
        }

        .animate-delay-200 {
          animation-delay: 0.2s;
        }

        .animate-delay-300 {
          animation-delay: 0.3s;
        }

        .animate-delay-400 {
          animation-delay: 0.4s;
        }

        .animate-delay-500 {
          animation-delay: 0.5s;
        }

        .animate-delay-600 {
          animation-delay: 0.6s;
        }

        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 4s ease infinite;
        }

        .animate-pulse-soft {
          animation: pulse-soft 5s ease-in-out infinite;
        }

        .animate-grow-bar {
          animation: grow-bar 0.65s ease-out forwards;
          transform-origin: bottom;
        }

        .animate-width-grow {
          animation: width-grow 0.9s ease-out forwards;
          transform-origin: left;
        }

        .animate-floating-card {
          animation: floating-card 4s ease-in-out infinite;
        }

        .animate-background-float {
          animation: background-float 10s ease-in-out infinite;
        }

        .animate-background-float-reverse {
          animation: background-float-reverse 13s ease-in-out infinite;
        }

        .animate-slide-progress {
          animation-name: slide-progress;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-slide-fade-up,
          .animate-slide-change,
          .animate-gradient-text,
          .animate-pulse-soft,
          .animate-grow-bar,
          .animate-width-grow,
          .animate-floating-card,
          .animate-background-float,
          .animate-background-float-reverse,
          .animate-slide-progress {
            animation: none !important;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;