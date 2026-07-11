import {
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

interface NavigationItem {
  name: string;
  path: string;
}

interface ProductItem {
  name: string;
  shortName: string;
  description: string;
  path: string;
  badge: string;
  icon: ReactNode;
  iconStyle: string;
  hoverStyle: string;
}

interface SolutionItem extends NavigationItem {
  description: string;
  iconText: string;
  iconStyle: string;
}

interface SolutionGroup {
  title: string;
  description: string;
  items: SolutionItem[];
}

interface IndustryItem extends NavigationItem {
  description: string;
  iconText: string;
  iconStyle: string;
}

interface IndustryGroup {
  title: string;
  description: string;
  items: IndustryItem[];
}

type MobileDropdown =
  | "products"
  | "solutions"
  | "industries"
  | null;

function ChevronDownIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`h-4 w-4 flex-none ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 flex-none ${className}`}
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

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
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

      <path
        d="M8 18h8M10 21h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function OperationsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="7"
        height="7"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <rect
        x="14"
        y="4"
        width="7"
        height="7"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <rect
        x="3"
        y="15"
        width="7"
        height="6"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <rect
        x="14"
        y="15"
        width="7"
        height="6"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
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

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 9h2a2 2 0 0 1 2 2v10M8 7h4M8 11h4M8 15h4M7 21h6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Logo() {
  return (
    <Link
      to="/"
      className="group flex min-w-0 items-center gap-3"
      aria-label="AeroState Lab home"
    >
      <div className="relative h-8 w-8 flex-none">
        <div className="absolute left-0 top-0 h-4 w-4 rounded-sm bg-blue-500 shadow-lg shadow-blue-500/50 transition-transform duration-300 group-hover:-translate-y-0.5" />

        <div className="absolute bottom-0 right-0 h-4 w-4 rounded-sm bg-teal-500 shadow-lg shadow-teal-500/50 transition-transform duration-300 group-hover:translate-x-0.5" />

        <div className="absolute bottom-0 left-0 z-10 h-4 w-4 rounded-sm bg-slate-200 shadow-lg shadow-slate-200/10 transition-transform duration-300 group-hover:translate-y-0.5" />
      </div>

      <span className="truncate text-lg font-bold tracking-wider text-white sm:text-xl">
        AEROSTATELAB
      </span>
    </Link>
  );
}

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [mobileDropdown, setMobileDropdown] =
    useState<MobileDropdown>(null);

  const solutionLinks: SolutionItem[] = [
    {
      name: "Human Resource Management",
      path: "/solutions/hrms",
      description: "Employees, attendance and workforce.",
      iconText: "HR",
      iconStyle:
        "border-violet-400/30 bg-violet-400/10 text-violet-300",
    },
    {
      name: "Inventory & Warehouse",
      path: "/solutions/inventory",
      description: "Stock, warehouses and item movement.",
      iconText: "IN",
      iconStyle:
        "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
    },
    {
      name: "Customer Relationship",
      path: "/solutions/crm",
      description: "Leads, customers and sales pipeline.",
      iconText: "CR",
      iconStyle:
        "border-blue-400/30 bg-blue-400/10 text-blue-300",
    },
    {
      name: "Finance & Accounting",
      path: "/solutions/finance",
      description: "Payments, ledgers and reporting.",
      iconText: "FN",
      iconStyle:
        "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    },
    {
      name: "Manufacturing Operations",
      path: "/solutions/manufacturing",
      description: "Production, materials and workflows.",
      iconText: "MF",
      iconStyle:
        "border-orange-400/30 bg-orange-400/10 text-orange-300",
    },
    {
      name: "Retail & POS Systems",
      path: "/solutions/pos",
      description: "Billing, stores and retail operations.",
      iconText: "RT",
      iconStyle:
        "border-rose-400/30 bg-rose-400/10 text-rose-300",
    },
    {
      name: "Supply Chain Operations",
      path: "/solutions/procurement",
      description: "Vendors, purchasing and procurement.",
      iconText: "SC",
      iconStyle:
        "border-teal-400/30 bg-teal-400/10 text-teal-300",
    },
    {
      name: "Payroll Management",
      path: "/solutions/payroll",
      description: "Salary, benefits and compensation.",
      iconText: "PY",
      iconStyle:
        "border-amber-400/30 bg-amber-400/10 text-amber-300",
    },
    {
      name: "Business Intelligence",
      path: "/solutions/analytics",
      description: "Dashboards, analytics and insights.",
      iconText: "BI",
      iconStyle:
        "border-indigo-400/30 bg-indigo-400/10 text-indigo-300",
    },
  ];

  const solutionGroups: SolutionGroup[] = [
    {
      title: "People & Finance",
      description: "Manage teams and financial operations.",
      items: [
        solutionLinks[0],
        solutionLinks[7],
        solutionLinks[3],
      ],
    },
    {
      title: "Sales & Insights",
      description: "Manage customers, retail and reporting.",
      items: [
        solutionLinks[2],
        solutionLinks[5],
        solutionLinks[8],
      ],
    },
    {
      title: "Operations & Supply",
      description: "Control inventory and production.",
      items: [
        solutionLinks[1],
        solutionLinks[4],
        solutionLinks[6],
      ],
    },
  ];

  const industryLinks: IndustryItem[] = [
    {
      name: "Manufacturing",
      path: "/industries/manufacturing",
      description:
        "Production, materials, quality, inventory and factory workflows.",
      iconText: "MF",
      iconStyle:
        "border-orange-400/30 bg-orange-400/10 text-orange-300",
    },
    {
      name: "Healthcare",
      path: "/industries/healthcare",
      description:
        "Patient records, appointments, billing and operations.",
      iconText: "HC",
      iconStyle:
        "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    },
    {
      name: "Retail & POS",
      path: "/industries/retail",
      description:
        "Billing, inventory, loyalty and store management.",
      iconText: "RT",
      iconStyle:
        "border-rose-400/30 bg-rose-400/10 text-rose-300",
    },
    {
      name: "Logistics",
      path: "/industries/logistics",
      description:
        "Shipments, fleet activity, delivery and routes.",
      iconText: "LG",
      iconStyle:
        "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
    },
    {
      name: "Construction",
      path: "/industries/construction",
      description:
        "Projects, contractors, materials and site progress.",
      iconText: "CN",
      iconStyle:
        "border-amber-400/30 bg-amber-400/10 text-amber-300",
    },
    {
      name: "Education",
      path: "/industries/education",
      description:
        "Students, attendance, fees and academic operations.",
      iconText: "ED",
      iconStyle:
        "border-blue-400/30 bg-blue-400/10 text-blue-300",
    },
    {
      name: "Trading",
      path: "/industries/trading",
      description:
        "Orders, clients, payments and business reporting.",
      iconText: "TR",
      iconStyle:
        "border-indigo-400/30 bg-indigo-400/10 text-indigo-300",
    },
    {
      name: "Hospitality",
      path: "/industries/hospitality",
      description:
        "Bookings, guests, rooms, billing and services.",
      iconText: "HS",
      iconStyle:
        "border-violet-400/30 bg-violet-400/10 text-violet-300",
    },
  ];

  const industryGroups: IndustryGroup[] = [
    {
      title: "Commerce & Operations",
      description:
        "For product, supply and project-based businesses.",
      items: [
        industryLinks[0],
        industryLinks[2],
        industryLinks[3],
        industryLinks[4],
      ],
    },
    {
      title: "Services & Institutions",
      description:
        "For service-focused organisations and institutions.",
      items: [
        industryLinks[1],
        industryLinks[5],
        industryLinks[6],
        industryLinks[7],
      ],
    },
  ];

  const productLinks: ProductItem[] = [
    {
      name: "AeroState Loyalty Reward System",
      shortName: "Loyalty Reward System",
      description:
        "Reward customers with points, manage cash redemption, send WhatsApp updates, and increase repeat purchases.",
      path: "/products/loyalty-reward-system",
      badge: "Retail Loyalty",
      icon: <RewardIcon />,
      iconStyle:
        "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
      hoverStyle:
        "hover:border-cyan-400/40 hover:bg-cyan-400/[0.08]",
    },
    {
      name: "AeroState Business Operations Management System",
      shortName: "Business Operations System",
      description:
        "Manage sales, CRM, employees, attendance, tasks, projects, payments, commissions, maintenance, and reports.",
      path:
        "/products/business-operations-management-system",
      badge: "Business Management",
      icon: <OperationsIcon />,
      iconStyle:
        "border-indigo-400/30 bg-indigo-400/10 text-indigo-300",
      hoverStyle:
        "hover:border-indigo-400/40 hover:bg-indigo-400/[0.08]",
    },
  ];

  const isProductsActive =
    location.pathname.startsWith("/products");

  const isSolutionsActive =
    location.pathname.startsWith("/solutions");

  const isIndustriesActive =
    location.pathname.startsWith("/industries");

  const isCustomDevelopmentActive =
    location.pathname ===
    "/services/custom-software-development";

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    function handleEscape(
      event: globalThis.KeyboardEvent
    ) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setMobileDropdown(null);
      }
    }

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  useEffect(() => {
    if (
      location.pathname !== "/solutions" ||
      location.hash !== "#solution-catalog"
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      document
        .getElementById("solution-catalog")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 180);

    return () => {
      window.clearTimeout(timer);
    };
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (
      location.pathname !== "/industries" ||
      location.hash !== "#industry-catalog"
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      document
        .getElementById("industry-catalog")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 180);

    return () => {
      window.clearTimeout(timer);
    };
  }, [location.pathname, location.hash]);

  function toggleMobileDropdown(
    dropdown: Exclude<MobileDropdown, null>
  ) {
    setMobileDropdown((current) =>
      current === dropdown ? null : dropdown
    );
  }

  function scrollToSection(sectionId: string) {
    window.setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 60);
  }

  function handleViewAllSolutions() {
    setIsMobileMenuOpen(false);
    setMobileDropdown(null);

    if (location.pathname === "/solutions") {
      scrollToSection("solution-catalog");
      return;
    }

    navigate("/solutions#solution-catalog");
  }

  function handleViewAllIndustries() {
    setIsMobileMenuOpen(false);
    setMobileDropdown(null);

    if (location.pathname === "/industries") {
      scrollToSection("industry-catalog");
      return;
    }

    navigate("/industries#industry-catalog");
  }

  const desktopLinkClass = ({
    isActive,
  }: {
    isActive: boolean;
  }) =>
    `relative inline-flex min-h-10 items-center whitespace-nowrap rounded-xl px-3 py-2 transition-all duration-300 ${
      isActive
        ? "bg-blue-500/10 text-blue-300 shadow-[inset_0_0_0_1px_rgba(96,165,250,0.18)]"
        : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
    }`;

  return (
    <nav className="relative sticky top-0 z-[100] border-b border-slate-800/90 bg-slate-950/95 shadow-[0_10px_35px_rgba(2,6,23,0.32)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />

      <div className="grid min-h-[72px] w-full grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-8 xl:grid-cols-[220px_minmax(0,1fr)_auto] 2xl:px-10">
        <div className="justify-self-start">
          <Logo />
        </div>

        {/* Desktop navigation */}
        <div className="hidden min-w-0 items-center justify-start gap-1.5 text-sm font-semibold xl:flex 2xl:gap-2">
          <NavLink
            to="/"
            className={desktopLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={desktopLinkClass}
          >
            About
          </NavLink>

          {/* Products dropdown */}
          <div className="group relative">
            <button
              type="button"
              className={`flex min-h-10 items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-2 transition-all duration-300 ${
                isProductsActive
                  ? "bg-blue-500/10 text-blue-300 shadow-[inset_0_0_0_1px_rgba(96,165,250,0.18)]"
                  : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
              }`}
              aria-haspopup="true"
            >
              Our Products

              <ChevronDownIcon className="opacity-70 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div className="pointer-events-none invisible absolute left-0 top-full z-[120] w-[560px] translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-slate-700 bg-[#07101f] shadow-[0_28px_80px_rgba(0,0,0,0.58)]">
                <div className="border-b border-slate-700 bg-[#0b1729] px-5 py-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-300">
                    AeroState Software Products
                  </p>

                  <p className="mt-1.5 text-xs leading-5 text-slate-400">
                    Ready-to-use cloud software designed for
                    retailers, companies, and growing businesses.
                  </p>
                </div>

                <div className="space-y-2 p-3">
                  {productLinks.map((product) => {
                    const isCurrent =
                      location.pathname === product.path;

                    return (
                      <Link
                        key={product.path}
                        to={product.path}
                        className={`group/product flex items-start gap-4 rounded-xl border p-4 transition-all duration-300 hover:-translate-y-0.5 ${
                          isCurrent
                            ? "border-blue-400/40 bg-blue-500/10"
                            : `border-slate-800 bg-[#0a1424] ${product.hoverStyle}`
                        }`}
                      >
                        <span
                          className={`flex h-12 w-12 flex-none items-center justify-center rounded-xl border ${product.iconStyle}`}
                        >
                          {product.icon}
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="flex items-start justify-between gap-3">
                            <span className="text-sm font-bold leading-5 text-white">
                              {product.name}
                            </span>

                            <span className="flex-none rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.1em] text-slate-400">
                              {product.badge}
                            </span>
                          </span>

                          <span className="mt-1.5 block text-xs leading-5 text-slate-400">
                            {product.description}
                          </span>
                        </span>

                        <ArrowIcon className="mt-1 text-slate-500 transition-transform duration-300 group-hover/product:translate-x-1 group-hover/product:text-white" />
                      </Link>
                    );
                  })}
                </div>

                <div className="border-t border-slate-700 bg-[#091426] p-3">
                  <Link
                    to="/services/custom-software-development"
                    className={`group/service flex min-h-[84px] items-center gap-4 rounded-xl border px-4 py-3 transition-all duration-300 ${
                      isCustomDevelopmentActive
                        ? "border-violet-400/50 bg-violet-400/[0.12]"
                        : "border-violet-400/20 bg-violet-400/[0.06] hover:border-violet-400/40 hover:bg-violet-400/[0.1]"
                    }`}
                  >
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-violet-400/30 bg-violet-400/10 text-violet-300">
                      <CodeIcon />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-white">
                        Need Custom Software?
                      </span>

                      <span className="mt-1 block text-xs leading-5 text-slate-400">
                        Explore cloud software designed around
                        your exact business workflow.
                      </span>
                    </span>

                    <ArrowIcon className="text-violet-300 transition-transform duration-300 group-hover/service:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions dropdown */}
          <div className="group relative">
            <Link
              to="/solutions"
              className={`flex min-h-10 items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-2 transition-all duration-300 ${
                isSolutionsActive
                  ? "bg-blue-500/10 text-blue-300 shadow-[inset_0_0_0_1px_rgba(96,165,250,0.18)]"
                  : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
              }`}
              aria-haspopup="true"
            >
              Solutions

              <ChevronDownIcon className="opacity-70 transition-transform duration-300 group-hover:rotate-180" />
            </Link>

            <div className="pointer-events-none invisible absolute left-1/2 top-full z-[120] w-[780px] -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-slate-700 bg-[#07101f] shadow-[0_28px_80px_rgba(0,0,0,0.58)]">
                <div className="flex items-center justify-between gap-6 border-b border-slate-700 bg-[#0b1729] px-5 py-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-300">
                      AeroState Business Solutions
                    </p>

                    <p className="mt-1.5 text-xs leading-5 text-slate-400">
                      Select individual modules or connect them
                      into one complete business platform.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleViewAllSolutions}
                    className={`group/all flex flex-none items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold transition-all duration-300 ${
                      location.pathname === "/solutions"
                        ? "border-blue-400/40 bg-blue-500/15 text-blue-300"
                        : "border-slate-700 bg-slate-900 text-blue-300 hover:border-blue-400/40 hover:bg-blue-500/10"
                    }`}
                  >
                    View All Solutions

                    <ArrowIcon className="transition-transform duration-300 group-hover/all:translate-x-1" />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 p-3">
                  {solutionGroups.map((group) => (
                    <section
                      key={group.title}
                      className="rounded-xl border border-slate-800 bg-[#0a1424] p-2"
                    >
                      <div className="border-b border-slate-800 px-2 pb-3 pt-2">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-300">
                          {group.title}
                        </p>

                        <p className="mt-1 text-[10px] leading-4 text-slate-500">
                          {group.description}
                        </p>
                      </div>

                      <div className="mt-2 space-y-1">
                        {group.items.map((item) => {
                          const isCurrent =
                            location.pathname === item.path;

                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`group/solution flex min-h-[70px] items-center gap-3 rounded-xl border px-2.5 py-2.5 transition-all duration-300 ${
                                isCurrent
                                  ? "border-blue-400/40 bg-blue-500/15"
                                  : "border-transparent hover:border-slate-700 hover:bg-slate-800/70"
                              }`}
                            >
                              <span
                                className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl border text-[10px] font-extrabold tracking-[0.08em] ${item.iconStyle}`}
                              >
                                {item.iconText}
                              </span>

                              <span className="min-w-0 flex-1">
                                <span
                                  className={`block text-xs font-bold leading-5 ${
                                    isCurrent
                                      ? "text-blue-300"
                                      : "text-slate-200 group-hover/solution:text-white"
                                  }`}
                                >
                                  {item.name}
                                </span>

                                <span className="mt-0.5 block truncate text-[10px] text-slate-500">
                                  {item.description}
                                </span>
                              </span>

                              <ArrowIcon className="h-3.5 w-3.5 text-slate-600 transition-transform duration-300 group-hover/solution:translate-x-0.5 group-hover/solution:text-blue-300" />
                            </Link>
                          );
                        })}
                      </div>
                    </section>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-6 border-t border-slate-700 bg-[#091426] px-5 py-3.5">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl border border-violet-400/30 bg-violet-400/10 text-violet-300">
                      <CodeIcon />
                    </span>

                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-200">
                        Need a solution designed specifically for
                        your company?
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-500">
                        Build a custom cloud system around your
                        exact workflow.
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/services/custom-software-development"
                    className="group/custom flex flex-none items-center gap-2 text-xs font-bold text-violet-300 hover:text-violet-200"
                  >
                    Custom Development

                    <ArrowIcon className="transition-transform duration-300 group-hover/custom:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Industries dropdown */}
          <div className="group relative">
            <Link
              to="/industries"
              className={`flex min-h-10 items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-2 transition-all duration-300 ${
                isIndustriesActive
                  ? "bg-teal-500/10 text-teal-300 shadow-[inset_0_0_0_1px_rgba(45,212,191,0.18)]"
                  : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
              }`}
              aria-haspopup="true"
            >
              Industries

              <ChevronDownIcon className="opacity-70 transition-transform duration-300 group-hover:rotate-180" />
            </Link>

            <div className="pointer-events-none invisible absolute left-1/2 top-full z-[120] w-[690px] -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-slate-700 bg-[#07101f] shadow-[0_28px_80px_rgba(0,0,0,0.58)]">
                <div className="flex items-center justify-between gap-6 border-b border-slate-700 bg-[#0b1729] px-5 py-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-teal-300">
                      Industries We Serve
                    </p>

                    <p className="mt-1.5 text-xs leading-5 text-slate-400">
                      Purpose-built cloud solutions for different
                      business models and operations.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleViewAllIndustries}
                    className={`group/all-industries flex flex-none items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold transition-all duration-300 ${
                      location.pathname === "/industries"
                        ? "border-teal-400/40 bg-teal-500/15 text-teal-300"
                        : "border-slate-700 bg-slate-900 text-teal-300 hover:border-teal-400/40 hover:bg-teal-500/10"
                    }`}
                  >
                    View All Industries

                    <ArrowIcon className="transition-transform duration-300 group-hover/all-industries:translate-x-1" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3">
                  {industryGroups.map((group) => (
                    <section
                      key={group.title}
                      className="rounded-xl border border-slate-800 bg-[#0a1424] p-2"
                    >
                      <div className="border-b border-slate-800 px-2 pb-3 pt-2">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-300">
                          {group.title}
                        </p>

                        <p className="mt-1 text-[10px] leading-4 text-slate-500">
                          {group.description}
                        </p>
                      </div>

                      <div className="mt-2 space-y-1">
                        {group.items.map((item) => {
                          const isCurrent =
                            location.pathname === item.path;

                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`group/industry flex min-h-[72px] items-center gap-3 rounded-xl border px-2.5 py-2.5 transition-all duration-300 ${
                                isCurrent
                                  ? "border-teal-400/40 bg-teal-500/15"
                                  : "border-transparent hover:border-slate-700 hover:bg-slate-800/70"
                              }`}
                            >
                              <span
                                className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl border text-[10px] font-extrabold tracking-[0.08em] ${item.iconStyle}`}
                              >
                                {item.iconText}
                              </span>

                              <span className="min-w-0 flex-1">
                                <span
                                  className={`block text-xs font-bold leading-5 ${
                                    isCurrent
                                      ? "text-teal-300"
                                      : "text-slate-200 group-hover/industry:text-white"
                                  }`}
                                >
                                  {item.name}
                                </span>

                                <span className="mt-0.5 block truncate text-[10px] text-slate-500">
                                  {item.description}
                                </span>
                              </span>

                              <ArrowIcon className="h-3.5 w-3.5 text-slate-600 transition-transform duration-300 group-hover/industry:translate-x-0.5 group-hover/industry:text-teal-300" />
                            </Link>
                          );
                        })}
                      </div>
                    </section>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-5 border-t border-slate-700 bg-[#091426] px-5 py-3.5">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl border border-teal-400/30 bg-teal-400/10 text-teal-300">
                      <BuildingIcon />
                    </span>

                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-200">
                        Need software for another industry?
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-500">
                        We can build around your operational
                        process.
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="group/discuss flex flex-none items-center gap-2 text-xs font-bold text-teal-300 hover:text-teal-200"
                  >
                    Discuss Requirements

                    <ArrowIcon className="transition-transform duration-300 group-hover/discuss:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <NavLink
            to="/our-approach"
            className={desktopLinkClass}
          >
            Our Approach
          </NavLink>

          <NavLink
            to="/why-choose-us"
            className={desktopLinkClass}
          >
            Why Choose Us
          </NavLink>

          <NavLink
            to="/case-studies"
            className={desktopLinkClass}
          >
            Case Studies
          </NavLink>
        </div>

        {/* Desktop actions */}
        <div className="hidden flex-none items-center justify-self-end gap-2 xl:flex">
          <Link
            to="/login"
            className="inline-flex min-h-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800 hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/contact"
            className="inline-flex min-h-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400 hover:shadow-blue-500/30"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() =>
            setIsMobileMenuOpen((current) => !current)
          }
          className="flex h-11 w-11 flex-none items-center justify-center justify-self-end rounded-xl border border-slate-700 bg-slate-900/90 text-slate-200 shadow-sm transition-all duration-300 hover:border-slate-500 hover:bg-slate-800 hover:text-white xl:hidden"
          aria-label={
            isMobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? (
            <CloseIcon />
          ) : (
            <MenuIcon />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-800/90 bg-slate-950/98 shadow-[0_20px_40px_rgba(2,6,23,0.35)] backdrop-blur-xl transition-all duration-300 xl:hidden ${
          isMobileMenuOpen
            ? "max-h-[calc(100svh-72px)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-h-[calc(100svh-72px)] overflow-y-auto px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className={`rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                location.pathname === "/"
                  ? "bg-blue-500/10 text-blue-300 shadow-[inset_0_0_0_1px_rgba(96,165,250,0.14)]"
                  : "text-slate-200 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                location.pathname === "/about"
                  ? "bg-blue-500/10 text-blue-300 shadow-[inset_0_0_0_1px_rgba(96,165,250,0.14)]"
                  : "text-slate-200 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              About
            </Link>

            {/* Mobile products */}
            <div className="rounded-xl border border-slate-800 bg-slate-900">
              <button
                type="button"
                onClick={() =>
                  toggleMobileDropdown("products")
                }
                className={`flex w-full items-center justify-between px-4 py-3.5 text-left text-sm font-bold ${
                  isProductsActive ||
                  isCustomDevelopmentActive
                    ? "text-blue-400"
                    : "text-slate-200"
                }`}
              >
                Our Products

                <ChevronDownIcon
                  className={`transition-transform duration-300 ${
                    mobileDropdown === "products"
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileDropdown === "products"
                    ? "max-h-[760px]"
                    : "max-h-0"
                }`}
              >
                <div className="space-y-2 border-t border-slate-800 bg-[#07101f] p-2">
                  {productLinks.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="flex items-start gap-3 rounded-xl border border-slate-800 bg-[#0a1424] p-3"
                    >
                      <span
                        className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl border ${product.iconStyle}`}
                      >
                        {product.icon}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold text-white">
                          {product.shortName}
                        </span>

                        <span className="mt-1 block text-xs leading-5 text-slate-400">
                          {product.description}
                        </span>
                      </span>

                      <ArrowIcon className="mt-1 text-slate-500" />
                    </Link>
                  ))}

                  <Link
                    to="/services/custom-software-development"
                    className="flex items-start gap-3 rounded-xl border border-violet-400/20 bg-violet-400/[0.06] p-3"
                  >
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-violet-400/30 bg-violet-400/10 text-violet-300">
                      <CodeIcon />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-white">
                        Custom Software Development
                      </span>

                      <span className="mt-1 block text-xs leading-5 text-slate-400">
                        Software designed around your exact
                        workflow.
                      </span>
                    </span>

                    <ArrowIcon className="mt-1 text-violet-300" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile solutions */}
            <div className="rounded-xl border border-slate-800 bg-slate-900">
              <div className="flex items-center">
                <Link
                  to="/solutions"
                  className={`flex flex-1 items-center px-4 py-3.5 text-sm font-bold ${
                    isSolutionsActive
                      ? "text-blue-400"
                      : "text-slate-200"
                  }`}
                >
                  Solutions
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    toggleMobileDropdown("solutions")
                  }
                  className="flex h-12 w-12 items-center justify-center text-slate-300"
                  aria-label="Toggle solutions menu"
                  aria-expanded={
                    mobileDropdown === "solutions"
                  }
                >
                  <ChevronDownIcon
                    className={`transition-transform duration-300 ${
                      mobileDropdown === "solutions"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileDropdown === "solutions"
                    ? "max-h-[920px]"
                    : "max-h-0"
                }`}
              >
                <div className="space-y-2 border-t border-slate-800 bg-[#07101f] p-2">
                  <button
                    type="button"
                    onClick={handleViewAllSolutions}
                    className="flex w-full items-center justify-between rounded-xl border border-blue-400/30 bg-blue-500/10 px-3 py-3 text-left text-sm font-bold text-blue-300"
                  >
                    View All Solutions
                    <ArrowIcon />
                  </button>

                  {solutionLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-3 rounded-xl border border-slate-800 bg-[#0a1424] p-3"
                    >
                      <span
                        className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl border text-[10px] font-extrabold ${item.iconStyle}`}
                      >
                        {item.iconText}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold text-white">
                          {item.name}
                        </span>

                        <span className="mt-1 block text-xs leading-5 text-slate-400">
                          {item.description}
                        </span>
                      </span>

                      <ArrowIcon className="text-slate-500" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile industries */}
            <div className="rounded-xl border border-slate-800 bg-slate-900">
              <div className="flex items-center">
                <Link
                  to="/industries"
                  className={`flex flex-1 items-center px-4 py-3.5 text-sm font-bold ${
                    isIndustriesActive
                      ? "text-teal-400"
                      : "text-slate-200"
                  }`}
                >
                  Industries
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    toggleMobileDropdown("industries")
                  }
                  className="flex h-12 w-12 items-center justify-center text-slate-300"
                  aria-label="Toggle industries menu"
                  aria-expanded={
                    mobileDropdown === "industries"
                  }
                >
                  <ChevronDownIcon
                    className={`transition-transform duration-300 ${
                      mobileDropdown === "industries"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileDropdown === "industries"
                    ? "max-h-[1000px]"
                    : "max-h-0"
                }`}
              >
                <div className="space-y-2 border-t border-slate-800 bg-[#07101f] p-2">
                  <button
                    type="button"
                    onClick={handleViewAllIndustries}
                    className="flex w-full items-center justify-between rounded-xl border border-teal-400/30 bg-teal-500/10 px-3 py-3 text-left text-sm font-bold text-teal-300"
                  >
                    View All Industries
                    <ArrowIcon />
                  </button>

                  {industryLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-3 rounded-xl border border-slate-800 bg-[#0a1424] p-3"
                    >
                      <span
                        className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl border text-[10px] font-extrabold ${item.iconStyle}`}
                      >
                        {item.iconText}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold text-white">
                          {item.name}
                        </span>

                        <span className="mt-1 block text-xs leading-5 text-slate-400">
                          {item.description}
                        </span>
                      </span>

                      <ArrowIcon className="text-slate-500" />
                    </Link>
                  ))}

                  <Link
                    to="/contact"
                    className="flex items-center justify-between rounded-xl border border-teal-400/20 bg-teal-400/[0.06] px-3 py-3 text-sm font-bold text-teal-300"
                  >
                    Discuss Industry Requirements
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/our-approach"
              className={`rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                location.pathname === "/our-approach"
                  ? "bg-blue-500/10 text-blue-300 shadow-[inset_0_0_0_1px_rgba(96,165,250,0.14)]"
                  : "text-slate-200 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              Our Approach
            </Link>

            <Link
              to="/why-choose-us"
              className={`rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                location.pathname === "/why-choose-us"
                  ? "bg-blue-500/10 text-blue-300 shadow-[inset_0_0_0_1px_rgba(96,165,250,0.14)]"
                  : "text-slate-200 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              Why Choose Us
            </Link>

            <Link
              to="/case-studies"
              className={`rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                location.pathname === "/case-studies"
                  ? "bg-blue-500/10 text-blue-300 shadow-[inset_0_0_0_1px_rgba(96,165,250,0.14)]"
                  : "text-slate-200 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              Case Studies
            </Link>

            <div className="mt-2 grid grid-cols-2 gap-3 border-t border-slate-800 pt-4 sm:hidden">
              <Link
                to="/login"
                className="flex min-h-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-sm font-bold text-slate-200"
              >
                Login
              </Link>

              <Link
                to="/contact"
                className="flex min-h-11 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;