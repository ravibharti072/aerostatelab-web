import {
  Cloud,
  Headphones,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

interface TrustItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

function TrustRow() {
  const trustItems: TrustItem[] = [
    {
      title: "Cloud Infrastructure",
      description: "Secure and scalable cloud hosting",
      icon: Cloud,
    },
    {
      title: "Enterprise Security",
      description: "Role-based access and data protection",
      icon: ShieldCheck,
    },
    {
      title: "Scalable Deployment",
      description: "Built to support future business growth",
      icon: TrendingUp,
    },
    {
      title: "Reliable Support",
      description: "Professional assistance when required",
      icon: Headphones,
    },
  ];

  function getDividerClasses(index: number) {
    if (index === 0) {
      return `
        border-b border-blue-200/80
        sm:border-r
        xl:border-b-0
      `;
    }

    if (index === 1) {
      return `
        border-b border-blue-200/80
        xl:border-b-0 xl:border-r
      `;
    }

    if (index === 2) {
      return `
        border-b border-blue-200/80
        sm:border-b-0 sm:border-r
      `;
    }

    return "";
  }

  return (
    <section className="bg-white px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
      <div className="mx-auto w-full max-w-[1440px] overflow-hidden rounded-[28px] border border-blue-200 bg-[#eaf3ff] shadow-[0_16px_45px_rgba(37,99,235,0.12)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`
                  group relative flex min-h-[138px] items-center gap-5
                  px-5 py-6 transition-all duration-300
                  hover:bg-white/65
                  sm:px-6
                  lg:px-7
                  ${getDividerClasses(index)}
                `}
              >
                {/* Highlight line */}
                <span className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-2/3" />

                {/* Icon */}
                <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl border border-blue-200 bg-white text-blue-600 shadow-[0_8px_22px_rgba(37,99,235,0.12)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_12px_28px_rgba(37,99,235,0.22)]">
                  <Icon
                    className="h-6 w-6"
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />
                </span>

                {/* Text */}
                <div className="min-w-0">
                  <h3 className="text-[15px] font-bold leading-6 text-slate-900 sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-[13px] leading-5 text-slate-600 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustRow;