import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Check,
  ClipboardList,
  CloudCog,
  Code2,
  Compass,
  Database,
  GitBranch,
  Layers3,
  MessageSquareText,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TestTube2,
  Users,
  Workflow,
} from "lucide-react";

interface ProcessStep {
  step: string;
  stage: string;
  title: string;
  description: string;
  highlights: string[];
  output: string;
  icon: ReactNode;
  iconStyle: string;
  accentStyle: string;
}

interface PrincipleItem {
  title: string;
  description: string;
  icon: ReactNode;
  iconStyle: string;
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

function OurApproach() {
  useEffect(() => {
    document.title =
      "Our Approach | AeroState Lab Software Development Process";

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const heroPoints = [
    "Workflow before features",
    "Modules built in usable stages",
    "Testing with real business cases",
    "Improvement after practical usage",
  ];

  const processSteps: ProcessStep[] = [
    {
      step: "01",
      stage: "Understand",
      title: "Map How the Work Actually Moves",
      description:
        "We do not begin with a generic feature list. We first understand where work starts, who handles it, what information is required, where approvals happen, and what final outcome the business expects.",
      highlights: [
        "Business discussions",
        "Role identification",
        "Workflow mapping",
        "Problem discovery",
      ],
      output:
        "A clear picture of the current process, bottlenecks, users, responsibilities, and expected business result.",
      icon: <Compass className="h-6 w-6" />,
      iconStyle:
        "border-blue-200 bg-blue-50 text-blue-700",
      accentStyle:
        "from-blue-500 via-cyan-500 to-sky-500",
    },
    {
      step: "02",
      stage: "Structure",
      title: "Convert Operations Into a System Blueprint",
      description:
        "Once the workflow is understood, we define the modules, pages, permissions, statuses, calculations, reports, and connections required to represent that process inside the software.",
      highlights: [
        "Module planning",
        "Permission structure",
        "Data relationships",
        "Status flow",
      ],
      output:
        "A structured software plan showing how users, records, departments, and actions will connect.",
      icon: <Layers3 className="h-6 w-6" />,
      iconStyle:
        "border-violet-200 bg-violet-50 text-violet-700",
      accentStyle:
        "from-violet-500 via-purple-500 to-indigo-500",
    },
    {
      step: "03",
      stage: "Design",
      title: "Design Screens Around Daily Usage",
      description:
        "We design interfaces for the people who will use the system every day. Owners need visibility, managers need control, employees need clarity, and mobile users need fast and simple actions.",
      highlights: [
        "Responsive layouts",
        "Mobile-first forms",
        "Dashboard planning",
        "Clear user actions",
      ],
      output:
        "A practical interface structure that works across phones, tablets, laptops, and desktop screens.",
      icon: <Smartphone className="h-6 w-6" />,
      iconStyle:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
      accentStyle:
        "from-cyan-500 via-teal-500 to-emerald-500",
    },
    {
      step: "04",
      stage: "Build",
      title: "Develop the Software in Working Modules",
      description:
        "The platform is developed in connected stages instead of being built as one large hidden project. Important workflows are completed, reviewed, and refined before the next layer is added.",
      highlights: [
        "Modular development",
        "Frontend and backend",
        "API connections",
        "Regular reviews",
      ],
      output:
        "Usable software modules that can be reviewed against real requirements throughout development.",
      icon: <Code2 className="h-6 w-6" />,
      iconStyle:
        "border-indigo-200 bg-indigo-50 text-indigo-700",
      accentStyle:
        "from-indigo-500 via-blue-500 to-cyan-500",
    },
    {
      step: "05",
      stage: "Validate",
      title: "Test the Cases That Usually Create Problems",
      description:
        "We test more than the successful path. We check incorrect entries, missing information, permission conflicts, deletion rules, status changes, repeated actions, calculations, and reporting behaviour.",
      highlights: [
        "Role-based testing",
        "Calculation checks",
        "Error scenarios",
        "Data consistency",
      ],
      output:
        "A more reliable system that behaves correctly when users make mistakes or follow different operational paths.",
      icon: <TestTube2 className="h-6 w-6" />,
      iconStyle:
        "border-rose-200 bg-rose-50 text-rose-700",
      accentStyle:
        "from-rose-500 via-pink-500 to-orange-500",
    },
    {
      step: "06",
      stage: "Deploy",
      title: "Launch the Platform Securely",
      description:
        "After testing, the application is deployed to its cloud environment with domain configuration, HTTPS security, production settings, database preparation, and access control.",
      highlights: [
        "Cloud deployment",
        "Domain and SSL",
        "Production database",
        "Access configuration",
      ],
      output:
        "A secure live application that authorised users can access from different devices and locations.",
      icon: <CloudCog className="h-6 w-6" />,
      iconStyle:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
      accentStyle:
        "from-emerald-500 via-teal-500 to-cyan-500",
    },
    {
      step: "07",
      stage: "Adopt",
      title: "Help the Team Use the System Correctly",
      description:
        "Good software still needs a clear operational handover. We help define how different users should use their modules, what each status means, and how information should move through the platform.",
      highlights: [
        "User guidance",
        "Role explanation",
        "Workflow handover",
        "Operational adoption",
      ],
      output:
        "A team that understands not only where to click, but how the complete software process should be followed.",
      icon: <Users className="h-6 w-6" />,
      iconStyle:
        "border-amber-200 bg-amber-50 text-amber-700",
      accentStyle:
        "from-amber-500 via-orange-500 to-yellow-500",
    },
    {
      step: "08",
      stage: "Improve",
      title: "Refine the Product After Real Usage",
      description:
        "Some improvements only become visible when real users begin working with the system. We use that feedback to remove friction, improve screens, strengthen rules, and add valuable features.",
      highlights: [
        "Usage feedback",
        "Workflow refinement",
        "New features",
        "Long-term scaling",
      ],
      output:
        "Software that continues evolving with the company instead of becoming outdated after delivery.",
      icon: <Rocket className="h-6 w-6" />,
      iconStyle:
        "border-teal-200 bg-teal-50 text-teal-700",
      accentStyle:
        "from-teal-500 via-cyan-500 to-blue-500",
    },
  ];

  const principles: PrincipleItem[] = [
    {
      title: "The Workflow Comes First",
      description:
        "We choose pages, modules, and technology after understanding the process—not before.",
      icon: <Workflow className="h-5 w-5" />,
      iconStyle:
        "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      title: "Every Record Should Lead Somewhere",
      description:
        "A lead should connect to a sale, payment, project, delivery, and future service instead of becoming an isolated entry.",
      icon: <GitBranch className="h-5 w-5" />,
      iconStyle:
        "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      title: "Permissions Are Part of the Workflow",
      description:
        "We define who can view, create, edit, approve, delete, and move information to the next stage.",
      icon: <ShieldCheck className="h-5 w-5" />,
      iconStyle:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
      title: "Reports Come From Connected Data",
      description:
        "Dashboards become useful when sales, payments, users, tasks, projects, and customers share one reliable data structure.",
      icon: <Database className="h-5 w-5" />,
      iconStyle:
        "border-cyan-200 bg-cyan-50 text-cyan-700",
    },
  ];

  return (
    <div className="overflow-hidden bg-white text-slate-900 selection:bg-blue-200 selection:text-blue-950">
      {/* Hero Section */}
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

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur sm:text-xs">
              <Sparkles
                className="h-4 w-4"
                strokeWidth={1.9}
              />

              The AeroState Development Approach
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              We Do Not Start With Features.

              <span className="block">
                We Start With How
              </span>

              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                The Work Moves.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              AeroState Lab turns real operational journeys into
              connected software. We study what happens before,
              during, and after every important business action so
              the final system supports the complete workflow.
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
                href="#development-process"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Explore Our Process

                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                to="/contact"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700 hover:shadow-md sm:w-auto sm:text-base"
              >
                Discuss Your Workflow
              </Link>
            </div>
          </div>

          {/* Hero Process Panel */}
          <div className="relative mx-auto w-full max-w-[590px]">
            <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/25 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white/95 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.16)] backdrop-blur sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                    Development Journey
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    From Workflow to Working Software
                  </h2>
                </div>

                <span className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
                  8 Stages
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  {
                    step: "01",
                    title: "Discover",
                    description: "Understand the work",
                    style:
                      "border-blue-100 bg-blue-50 text-blue-700",
                  },
                  {
                    step: "02",
                    title: "Structure",
                    description: "Plan the system",
                    style:
                      "border-violet-100 bg-violet-50 text-violet-700",
                  },
                  {
                    step: "03",
                    title: "Build",
                    description: "Develop modules",
                    style:
                      "border-cyan-100 bg-cyan-50 text-cyan-700",
                  },
                  {
                    step: "04",
                    title: "Improve",
                    description: "Refine after usage",
                    style:
                      "border-emerald-100 bg-emerald-50 text-emerald-700",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className={`rounded-2xl border p-4 ${item.style}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.12em] opacity-70">
                        Stage {item.step}
                      </span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-current/15 bg-white/70 text-[10px] font-bold">
                        {item.step}
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-bold sm:text-base">
                      {item.title}
                    </p>

                    <p className="mt-1 text-[10px] font-semibold opacity-70">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      Our Priority
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                      A complete workflow, not isolated screens
                    </p>
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-600">
                    <Workflow className="h-5 w-5" />
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  {[
                    "Understand",
                    "Connect",
                    "Validate",
                    "Improve",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="flex min-w-0 flex-1 items-center gap-2"
                    >
                      <div className="flex-1 rounded-lg border border-slate-200 bg-white px-1.5 py-2 text-center text-[8px] font-bold uppercase tracking-[0.06em] text-slate-500 sm:text-[9px]"
                      >
                        {step}
                      </div>

                      {index < 3 && (
                        <ArrowRight className="h-3 w-3 flex-none text-blue-400" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  "Practical",
                  "Modular",
                  "Secure",
                  "Expandable",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white px-2 py-3 text-center text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Principles */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 xl:px-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {principles.map((item) => (
              <article
                key={item.title}
                className="group flex items-start gap-4 rounded-[20px] border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
              >
                <span
                  className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl border ${item.iconStyle}`}
                >
                  {item.icon}
                </span>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        id="development-process"
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

        <div className="mx-auto w-full max-w-[1180px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm sm:text-xs">
              <ClipboardList className="h-4 w-4" />

              Our Development Process
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Eight Stages From Business Process to Live Platform
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Each stage produces something useful and measurable.
              The project moves forward only when the workflow,
              system behaviour, and user experience are becoming
              clearer.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Desktop timeline line */}
            <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-blue-300 via-cyan-200 to-transparent md:block" />

            {/* Mobile timeline line */}
            <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-blue-300 via-cyan-200 to-transparent md:hidden" />

            <div className="space-y-10 md:space-y-16">
              {processSteps.map((item, index) => {
                const placeOnRight = index % 2 === 0;

                return (
                  <div
                    key={item.step}
                    className={`group relative grid grid-cols-1 md:grid-cols-2 md:gap-20 ${
                      placeOnRight ? "" : ""
                    }`}
                  >
                    {/* Timeline node */}
                    <div className="absolute left-5 top-0 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-white shadow-[0_0_0_2px_rgba(59,130,246,0.28)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] md:left-1/2"
                    >
                      <div className="h-3 w-3 rounded-full bg-blue-500 transition-colors duration-300 group-hover:bg-cyan-500" />
                    </div>

                    {/* Card */}
                    <div
                      className={`ml-12 md:ml-0 ${
                        placeOnRight
                          ? "md:col-start-2"
                          : "md:col-start-1 md:row-start-1"
                      }`}
                    >
                      <article className="relative overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_12px_38px_rgba(15,23,42,0.06)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-[0_22px_55px_rgba(15,23,42,0.1)]">
                        <div
                          className={`h-1 w-full bg-gradient-to-r ${item.accentStyle}`}
                        />

                        <div className="relative p-5 sm:p-7">
                          <span className="pointer-events-none absolute -right-2 -top-5 select-none text-7xl font-black text-slate-100 sm:text-8xl">
                            {item.step}
                          </span>

                          <div className="relative z-10">
                            <div className="flex items-start justify-between gap-4">
                              <span
                                className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl border ${item.iconStyle}`}
                              >
                                {item.icon}
                              </span>

                              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                                {item.stage}
                              </span>
                            </div>

                            <span className="mt-5 block text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                              Stage {item.step}
                            </span>

                            <h3 className="mt-2 max-w-[90%] text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
                              {item.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-600">
                              {item.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                              {item.highlights.map((highlight) => (
                                <span
                                  key={highlight}
                                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-semibold text-slate-600"
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>

                            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                              <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-blue-600">
                                Output of this stage
                              </p>

                              <p className="mt-2 text-xs font-semibold leading-6 text-slate-700">
                                {item.output}
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>

                    {/* Empty desktop side */}
                    <div
                      className={`hidden md:block ${
                        placeOnRight
                          ? "md:col-start-1 md:row-start-1"
                          : "md:col-start-2"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What We Validate */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20 lg:px-10 xl:px-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Beyond Page Design
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              A Page Looking Correct Does Not Mean the Workflow Is Complete
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              AeroState Lab checks how information behaves throughout
              the system. That includes who can change it, what should
              happen next, how calculations update, and what reports
              should show after every action.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-6 py-3 text-sm font-bold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-600 hover:text-white"
            >
              Discuss Your Process

              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "Role and Permission Rules",
                description:
                  "Can a lower role edit, delete, or approve records created by a higher role?",
                icon: <ShieldCheck className="h-5 w-5" />,
                style:
                  "border-emerald-200 bg-emerald-50 text-emerald-700",
              },
              {
                title: "Status and Stage Movement",
                description:
                  "What becomes available when a lead converts, a project completes, or an issue is resolved?",
                icon: <GitBranch className="h-5 w-5" />,
                style:
                  "border-violet-200 bg-violet-50 text-violet-700",
              },
              {
                title: "Calculation and Reporting",
                description:
                  "Do totals, balances, commissions, payouts, and dashboard values change correctly?",
                icon: <Database className="h-5 w-5" />,
                style:
                  "border-blue-200 bg-blue-50 text-blue-700",
              },
              {
                title: "Incorrect and Deleted Records",
                description:
                  "What happens to connected records when an entry is corrected, removed, or recreated?",
                icon: <TestTube2 className="h-5 w-5" />,
                style:
                  "border-rose-200 bg-rose-50 text-rose-700",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="group rounded-[20px] border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border ${item.style}`}
                >
                  {item.icon}
                </span>

                <h3 className="mt-4 text-base font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
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

              Start With Your Actual Workflow
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Show Us Where the Work Begins and Where It Currently Breaks
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
              Tell us who handles each step, where information gets
              delayed, which records remain disconnected, and what
              result you need. We will help turn that process into a
              secure cloud platform.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:text-base"
              >
                Book a Workflow Discussion

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

export default OurApproach;