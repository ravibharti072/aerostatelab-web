import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";

interface FooterLink {
  label: string;
  to: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
  hoverStyle: string;
}

function LinkedInIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 9.61H5.67V18h2.67V9.61ZM7 5.43a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1Zm10.99 7.76c0-2.53-1.35-3.71-3.15-3.71a2.71 2.71 0 0 0-2.46 1.35V9.61H9.71V18h2.67v-4.15c0-1.09.21-2.14 1.55-2.14 1.32 0 1.34 1.24 1.34 2.21V18h2.67l.05-4.81Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.2c-3.21.7-3.89-1.36-3.89-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.3-5.26-1.29-5.26-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.28 5.7.42.36.79 1.06.79 2.14v3.16c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2a9.82 9.82 0 0 0-8.45 14.82L2.2 22l5.3-1.39A9.8 9.8 0 1 0 12.04 2Zm0 17.93a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.15.83.84-3.07-.2-.31A8.1 8.1 0 1 1 12.04 19.93Zm4.44-6.08c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.35-1.68-.14-.25-.02-.38.11-.5.11-.11.24-.28.36-.42.12-.14.16-.24.24-.41.08-.16.04-.3-.02-.42-.06-.13-.55-1.32-.75-1.81-.2-.47-.4-.41-.55-.41h-.46c-.16 0-.43.06-.65.31-.22.24-.85.83-.85 2.03 0 1.2.87 2.36.99 2.52.12.16 1.72 2.62 4.16 3.68.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  const solutionLinks: FooterLink[] = [
    {
      label: "HRMS",
      to: "/solutions/hrms",
    },
    {
      label: "CRM and Sales",
      to: "/solutions/crm",
    },
    {
      label: "Inventory",
      to: "/solutions/inventory",
    },
    {
      label: "Finance",
      to: "/solutions/finance",
    },
    {
      label: "Manufacturing",
      to: "/solutions/manufacturing",
    },
    {
      label: "Retail and POS",
      to: "/solutions/pos",
    },
    {
      label: "Supply Chain",
      to: "/solutions/procurement",
    },
    {
      label: "Payroll",
      to: "/solutions/payroll",
    },
    {
      label: "Analytics",
      to: "/solutions/analytics",
    },
  ];

  const industryLinks: FooterLink[] = [
    {
      label: "Manufacturing",
      to: "/industries/manufacturing",
    },
    {
      label: "Retail",
      to: "/industries/retail",
    },
    {
      label: "Trading",
      to: "/industries/trading",
    },
    {
      label: "Construction",
      to: "/industries/construction",
    },
    {
      label: "Logistics",
      to: "/industries/logistics",
    },
    {
      label: "Healthcare",
      to: "/industries/healthcare",
    },
    {
      label: "Education",
      to: "/industries/education",
    },
    {
      label: "Hospitality",
      to: "/industries/hospitality",
    },
  ];

  const companyLinks: FooterLink[] = [
    {
      label: "About AeroState",
      to: "/about",
    },
    {
      label: "Our Approach",
      to: "/our-approach",
    },
    {
      label: "Why Choose Us",
      to: "/why-choose-us",
    },
    {
      label: "Contact",
      to: "/contact",
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/aerostatelab",
      icon: <LinkedInIcon />,
      hoverStyle:
        "hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-blue-300",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/aerostatelab",
      icon: <InstagramIcon />,
      hoverStyle:
        "hover:border-pink-400/40 hover:bg-pink-400/10 hover:text-pink-300",
    },
    {
      label: "X",
      href: "https://x.com/aerostatelab",
      icon: <XIcon />,
      hoverStyle:
        "hover:border-white/30 hover:bg-white/10 hover:text-white",
    },
    {
      label: "GitHub",
      href: "https://github.com/ravibharti072",
      icon: <GitHubIcon />,
      hoverStyle:
        "hover:border-white/30 hover:bg-white/10 hover:text-white",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/918273329609",
      icon: <WhatsAppIcon />,
      hoverStyle:
        "hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-300",
    },
  ];

  const linkStyle =
    "inline-flex text-sm leading-6 text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-blue-300";

  return (
    <footer className="relative isolate mt-auto overflow-hidden border-t border-slate-800 bg-slate-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      <div className="pointer-events-none absolute -left-40 -top-52 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-64 right-[-130px] -z-10 h-[560px] w-[560px] rounded-full bg-cyan-500/10 blur-[150px]" />

      {/* Footer CTA */}
      <div className="border-b border-slate-800">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 lg:px-10 xl:px-16">
          <div className="relative isolate overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.06] px-6 py-8 backdrop-blur sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="pointer-events-none absolute -right-20 -top-28 -z-10 h-64 w-64 rounded-full bg-blue-500/20 blur-[90px]" />

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-blue-300 sm:text-[10px]">
                <Sparkles className="h-3.5 w-3.5" />

                Custom Business Software
              </span>

              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Ready to Replace Disconnected Business Workflows?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                Discuss your current process, required modules, user
                roles, reports, and operational challenges with
                AeroState Lab.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-none">
              <Link
                to="/contact"
                className="group inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 sm:w-auto"
              >
                Start a Conversation

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services/custom-software-development"
                className="inline-flex min-h-[50px] w-full items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 sm:w-auto"
              >
                Explore Development
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-8 pt-14 sm:px-6 lg:px-10 lg:pt-16 xl:px-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.8fr_1fr_0.8fr] lg:gap-10 xl:grid-cols-[1.55fr_0.85fr_1fr_0.8fr]">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
              aria-label="AeroState Lab home"
            >
              <span className="relative h-10 w-10 flex-none">
                <span className="absolute left-0 top-0 h-5 w-5 rounded-md bg-blue-500 shadow-lg shadow-blue-500/25 transition-colors group-hover:bg-blue-400" />

                <span className="absolute bottom-0 right-0 h-5 w-5 rounded-md bg-cyan-500 shadow-lg shadow-cyan-500/25 transition-colors group-hover:bg-cyan-400" />

                <span className="absolute bottom-0 left-0 z-10 h-5 w-5 rounded-md bg-white shadow-lg shadow-white/10" />
              </span>

              <span>
                <span className="block text-lg font-extrabold tracking-[0.08em] text-white transition-colors group-hover:text-blue-300 sm:text-xl">
                  AEROSTATE
                </span>

                <span className="block text-[9px] font-bold uppercase tracking-[0.28em] text-slate-500">
                  Lab
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              AeroState Lab builds scalable, cloud-based custom
              business software for Indian businesses and SMEs. Our
              systems connect daily operations, teams, customers,
              inventory, projects, sales, and reporting.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="mailto:info@aerostatelab.com"
                className="group flex w-fit items-center gap-3 text-sm text-slate-400 transition-colors hover:text-blue-300"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-blue-300 transition-colors group-hover:border-blue-400/30 group-hover:bg-blue-400/10">
                  <Mail className="h-4 w-4" />
                </span>

                info@aerostatelab.com
              </a>

              <a
                href="tel:+918273329609"
                className="group flex w-fit items-center gap-3 text-sm text-slate-400 transition-colors hover:text-blue-300"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-blue-300 transition-colors group-hover:border-blue-400/30 group-hover:bg-blue-400/10">
                  <Phone className="h-4 w-4" />
                </span>

                +91 82733 29609
              </a>
            </div>

            <div className="mt-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                Follow AeroState Lab
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-1 ${item.hoverStyle}`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              Solutions
            </h3>

            <ul className="mt-6 grid grid-cols-1 gap-3">
              {solutionLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={linkStyle}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              Industries
            </h3>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {industryLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={linkStyle}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company and products */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={linkStyle}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-9 text-xs font-bold uppercase tracking-[0.16em] text-white">
              Products
            </h3>

            <ul className="mt-6 space-y-3">
              <li>
                <Link
                  to="/products/business-operations-management-system"
                  className={linkStyle}
                >
                  Company Operations System
                </Link>
              </li>

              <li>
                <Link
                  to="/products/loyalty-reward-system"
                  className={linkStyle}
                >
                  Loyalty Reward System
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 flex flex-col gap-6 border-t border-slate-800 pt-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-slate-500">
              © {currentYear} AeroState Lab. All rights reserved.
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-600">
              Custom cloud-based software for connected business
              operations.
            </p>
          </div>

          <a
            href="https://wa.me/918273329609"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-2.5 text-sm font-bold text-emerald-300 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400/15 sm:w-auto"
          >
            <WhatsAppIcon />

            WhatsApp AeroState Lab

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;