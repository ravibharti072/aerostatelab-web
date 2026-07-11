import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface FeatureCardProps {
  badge: string;
  title: string;
  description: string;
  link: string;
  illustration: ReactNode;
}

interface CardTheme {
  accent: string;
  badge: string;
  illustrationBackground: string;
  illustrationGlow: string;
  cardGlow: string;
  hoverBorder: string;
  hoverTitle: string;
  button: string;
  buttonHover: string;
}

function getCardTheme(badge: string): CardTheme {
  const normalizedBadge = badge.toLowerCase();

  if (
    normalizedBadge.includes("hr") ||
    normalizedBadge.includes("payroll") ||
    normalizedBadge.includes("compensation")
  ) {
    return {
      accent: "from-violet-500 via-purple-500 to-fuchsia-500",
      badge: "border-violet-200 bg-violet-50 text-violet-700",
      illustrationBackground:
        "from-violet-50/95 via-white to-purple-50/90",
      illustrationGlow: "bg-violet-300/35",
      cardGlow: "bg-violet-300/30",
      hoverBorder: "hover:border-violet-300",
      hoverTitle: "group-hover:text-violet-700",
      button: "border-violet-200 bg-violet-50 text-violet-700",
      buttonHover:
        "hover:border-violet-500 hover:bg-violet-600 hover:text-white",
    };
  }

  if (
    normalizedBadge.includes("supply") ||
    normalizedBadge.includes("inventory") ||
    normalizedBadge.includes("procurement") ||
    normalizedBadge.includes("logistics")
  ) {
    return {
      accent: "from-cyan-500 via-sky-500 to-blue-500",
      badge: "border-cyan-200 bg-cyan-50 text-cyan-700",
      illustrationBackground: "from-cyan-50/95 via-white to-sky-50/90",
      illustrationGlow: "bg-cyan-300/35",
      cardGlow: "bg-cyan-300/30",
      hoverBorder: "hover:border-cyan-300",
      hoverTitle: "group-hover:text-cyan-700",
      button: "border-cyan-200 bg-cyan-50 text-cyan-700",
      buttonHover: "hover:border-cyan-500 hover:bg-cyan-600 hover:text-white",
    };
  }

  if (
    normalizedBadge.includes("sales") ||
    normalizedBadge.includes("client") ||
    normalizedBadge.includes("crm") ||
    normalizedBadge.includes("retail")
  ) {
    return {
      accent: "from-blue-600 via-indigo-500 to-cyan-500",
      badge: "border-blue-200 bg-blue-50 text-blue-700",
      illustrationBackground: "from-blue-50/95 via-white to-indigo-50/90",
      illustrationGlow: "bg-blue-300/35",
      cardGlow: "bg-blue-300/30",
      hoverBorder: "hover:border-blue-300",
      hoverTitle: "group-hover:text-blue-700",
      button: "border-blue-200 bg-blue-50 text-blue-700",
      buttonHover: "hover:border-blue-500 hover:bg-blue-600 hover:text-white",
    };
  }

  if (
    normalizedBadge.includes("ledger") ||
    normalizedBadge.includes("finance") ||
    normalizedBadge.includes("tax")
  ) {
    return {
      accent: "from-emerald-500 via-green-500 to-teal-500",
      badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
      illustrationBackground:
        "from-emerald-50/95 via-white to-teal-50/90",
      illustrationGlow: "bg-emerald-300/35",
      cardGlow: "bg-emerald-300/30",
      hoverBorder: "hover:border-emerald-300",
      hoverTitle: "group-hover:text-emerald-700",
      button: "border-emerald-200 bg-emerald-50 text-emerald-700",
      buttonHover:
        "hover:border-emerald-500 hover:bg-emerald-600 hover:text-white",
    };
  }

  if (
    normalizedBadge.includes("factory") ||
    normalizedBadge.includes("manufacturing") ||
    normalizedBadge.includes("workflow")
  ) {
    return {
      accent: "from-orange-500 via-amber-500 to-yellow-500",
      badge: "border-orange-200 bg-orange-50 text-orange-700",
      illustrationBackground:
        "from-orange-50/95 via-white to-amber-50/90",
      illustrationGlow: "bg-orange-300/35",
      cardGlow: "bg-orange-300/30",
      hoverBorder: "hover:border-orange-300",
      hoverTitle: "group-hover:text-orange-700",
      button: "border-orange-200 bg-orange-50 text-orange-700",
      buttonHover:
        "hover:border-orange-500 hover:bg-orange-600 hover:text-white",
    };
  }

  return {
    accent: "from-indigo-500 via-blue-500 to-cyan-500",
    badge: "border-indigo-200 bg-indigo-50 text-indigo-700",
    illustrationBackground:
      "from-indigo-50/95 via-white to-blue-50/90",
    illustrationGlow: "bg-indigo-300/35",
    cardGlow: "bg-indigo-300/30",
    hoverBorder: "hover:border-indigo-300",
    hoverTitle: "group-hover:text-indigo-700",
    button: "border-indigo-200 bg-indigo-50 text-indigo-700",
    buttonHover:
      "hover:border-indigo-500 hover:bg-indigo-600 hover:text-white",
  };
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

function FeatureCard({
  badge,
  title,
  description,
  link,
  illustration,
}: FeatureCardProps) {
  const theme = getCardTheme(badge);

  return (
    <article className="group relative h-full">
      {/* Coloured glow behind the complete card */}
      <div
        className={`pointer-events-none absolute -inset-x-3 -inset-y-2 rounded-[28px] opacity-35 blur-[28px] transition-all duration-500 group-hover:opacity-60 group-hover:blur-[34px] ${theme.cardGlow}`}
      />

      {/* Secondary glow underneath */}
      <div
        className={`pointer-events-none absolute bottom-[-18px] left-[12%] right-[12%] h-20 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40 ${theme.cardGlow}`}
      />

      {/* Main card */}
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-[20px] border border-slate-200/90 bg-white/95 shadow-[0_8px_28px_rgba(15,23,42,0.07)] backdrop-blur transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_48px_rgba(15,23,42,0.13)] ${theme.hoverBorder}`}
      >
        {/* Top colour line */}
        <div
          className={`absolute inset-x-0 top-0 z-30 h-[3px] bg-gradient-to-r ${theme.accent}`}
        />

        {/* Compact illustration area */}
        <div
          className={`relative flex h-[140px] w-full items-center justify-center overflow-hidden border-b border-slate-100 bg-gradient-to-br px-4 sm:h-[150px] ${theme.illustrationBackground}`}
        >
          {/* Dot pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #0f172a 1px, transparent 1px)",
              backgroundSize: "13px 13px",
            }}
          />

          {/* Inner illustration glow */}
          <div
            className={`pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[48px] transition-all duration-500 group-hover:h-40 group-hover:w-40 ${theme.illustrationGlow}`}
          />

          {/* Small module indicator */}
          <div className="absolute left-3 top-3 z-20 flex items-center gap-2 rounded-full border border-white/90 bg-white/90 px-2.5 py-1 shadow-sm backdrop-blur">
            <span
              className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${theme.accent}`}
            />

            <span className="text-[8px] font-bold uppercase tracking-[0.13em] text-slate-500">
              AeroState Module
            </span>
          </div>

          {/* Illustration */}
          <div className="relative z-10 flex w-full scale-[0.88] items-center justify-center transition-all duration-500 group-hover:scale-[0.93]">
            {illustration}
          </div>
        </div>

        {/* Compact card content */}
        <div className="flex flex-1 flex-col p-4 sm:p-[18px]">
          <div className="mb-3">
            <span
              className={`inline-flex max-w-full rounded-full border px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.13em] sm:text-[9px] ${theme.badge}`}
            >
              <span className="truncate">{badge}</span>
            </span>
          </div>

          <h3
            className={`text-[17px] font-bold leading-snug tracking-tight text-slate-900 transition-colors duration-300 ${theme.hoverTitle}`}
          >
            {title}
          </h3>

          <p
            className="mt-2 flex-grow overflow-hidden text-[13px] leading-[1.55] text-slate-600"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </p>

          {/* Compact footer */}
          <div className="mt-4 border-t border-slate-100 pt-3.5">
            <Link
              to={link}
              aria-label={`Explore ${title}`}
              className={`group inline-flex min-h-[40px] items-center justify-between gap-4 rounded-xl border px-3.5 py-2 text-[13px] font-bold transition-all duration-300 ${theme.button} ${theme.buttonHover}`}
            >
              <span>Explore Module</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default FeatureCard;