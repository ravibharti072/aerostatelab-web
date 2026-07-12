import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";

import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  Code2,
  FileText,
  Layers3,
  Mail,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  whatsapp: string;
  interest: string;
  timeline: string;
  preferredContact: string;
  scope: string;
}

interface ContactMethod {
  title: string;
  value: string;
  description: string;
  href: string;
  icon: ReactNode;
  iconStyle: string;
  external?: boolean;
}

const initialFormData: ContactFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  whatsapp: "",
  interest: "Custom Software Development",
  timeline: "Still exploring",
  preferredContact: "WhatsApp",
  scope: "",
};

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

function Contact() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [preparedMessage, setPreparedMessage] = useState("");

  useEffect(() => {
    document.title =
      "Contact AeroState Lab | Discuss Your Software Requirements";

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const contactMethods: ContactMethod[] = [
    {
      title: "Email",
      value: "info@aerostatelab.com",
      description:
        "Send project details, documents, or general business enquiries.",
      href: "mailto:info@aerostatelab.com",
      icon: <Mail className="h-5 w-5" />,
      iconStyle: "border-blue-200 bg-blue-50 text-blue-700",
    },
    {
      title: "Phone",
      value: "+91 82733 29609",
      description:
        "Call to discuss your business process or software requirement.",
      href: "tel:+918273329609",
      icon: <Phone className="h-5 w-5" />,
      iconStyle: "border-violet-200 bg-violet-50 text-violet-700",
    },
    {
      title: "WhatsApp",
      value: "+91 82733 29609",
      description:
        "Start a direct conversation and share your initial requirements.",
      href: "https://wa.me/918273329609",
      icon: <MessageCircle className="h-5 w-5" />,
      iconStyle:
        "border-emerald-200 bg-emerald-50 text-emerald-700",
      external: true,
    },
  ];

  const benefits = [
    "Discuss your current business workflow",
    "Identify modules and user roles",
    "Plan a practical development scope",
    "Explore implementation and support options",
  ];

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const buildWhatsAppMessage = () => {
    return [
      "Hello AeroState Lab,",
      "",
      "I would like to discuss a software requirement.",
      "",
      `Name: ${formData.name}`,
      `Company: ${formData.company}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `WhatsApp: ${formData.whatsapp || "Not provided"}`,
      `System Interest: ${formData.interest}`,
      `Preferred Contact: ${formData.preferredContact}`,
      `Expected Timeline: ${formData.timeline}`,
      "",
      "Project Requirement:",
      formData.scope,
    ].join("\n");
  };

  const openWhatsApp = (message: string) => {
    const whatsappUrl = `https://wa.me/918273329609?text=${encodeURIComponent(
      message,
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const message = buildWhatsAppMessage();

    setPreparedMessage(message);
    setIsSubmitted(true);
    openWhatsApp(message);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setPreparedMessage("");
    setIsSubmitted(false);
  };

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      {/* Hero and contact form */}
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

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-16 lg:px-10 lg:py-24 xl:px-16">
          {/* Left content */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:sticky lg:top-28 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur sm:text-xs">
              <Sparkles
                className="h-4 w-4"
                strokeWidth={1.9}
              />

              Start a Conversation
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              Tell Us What Your

              <span className="block">
                Business Needs to Manage
              </span>

              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Better, Faster and Clearly.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              Share your current workflow, operational challenges,
              required modules, and expected outcome. We will use
              those details to understand whether a custom business
              system, ERP module, or existing AeroState product is the
              right starting point.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
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

            {/* Contact methods */}
            <div className="mt-10 space-y-3">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  target={
                    method.external
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    method.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-4 rounded-[18px] border border-slate-200 bg-white/90 p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <span
                    className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl border ${method.iconStyle}`}
                  >
                    {method.icon}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      {method.title}
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-900">
                      {method.value}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {method.description}
                    </p>
                  </div>

                  <ArrowRight className="h-5 w-5 flex-none text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600" />
                </a>
              ))}
            </div>
          </div>

          {/* Form card */}
          <div className="relative mx-auto w-full max-w-3xl">
            <div className="absolute left-1/2 top-1/2 -z-10 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/20 blur-[110px]" />

            <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white/95 shadow-[0_30px_90px_rgba(15,23,42,0.14)] backdrop-blur">
              <div className="border-b border-slate-200 bg-slate-50 px-5 py-5 sm:px-7">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600">
                      Project Enquiry
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-slate-950 sm:text-2xl">
                      Share Your Software Requirements
                    </h2>
                  </div>

                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.1em] text-emerald-700">
                    <MessageCircle className="h-3.5 w-3.5" />

                    WhatsApp Submission
                  </span>
                </div>
              </div>

              {isSubmitted ? (
                <div className="px-6 py-14 text-center sm:px-10 sm:py-16">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>

                  <h2 className="mt-6 text-2xl font-extrabold text-slate-950 sm:text-3xl">
                    Your Project Message Is Ready
                  </h2>

                  <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
                    WhatsApp was opened with your prepared project
                    details. Send that message to complete your
                    enquiry.
                  </p>

                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() =>
                        openWhatsApp(preparedMessage)
                      }
                      className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-200 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700"
                    >
                      Open WhatsApp Again

                      <MessageCircle className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setIsSubmitted(false)
                      }
                      className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700 hover:shadow-md"
                    >
                      Edit Project Details
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 text-sm font-bold text-slate-500 transition-colors hover:text-blue-600"
                  >
                    Start a New Enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 p-5 sm:p-7 lg:p-8"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-bold text-slate-700"
                      >
                        Your Name
                        <span className="ml-1 text-rose-500">
                          *
                        </span>
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="Enter your full name"
                        className="min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-bold text-slate-700"
                      >
                        Company Name
                        <span className="ml-1 text-rose-500">
                          *
                        </span>
                      </label>

                      <div className="relative">
                        <Building2 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          autoComplete="organization"
                          placeholder="Enter your company name"
                          className="min-h-[50px] w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-bold text-slate-700"
                      >
                        Email Address
                        <span className="ml-1 text-rose-500">
                          *
                        </span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="name@company.com"
                        className="min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-bold text-slate-700"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        placeholder="+91 98765 43210"
                        className="min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="whatsapp"
                        className="mb-2 block text-sm font-bold text-slate-700"
                      >
                        WhatsApp Number
                      </label>

                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="preferredContact"
                        className="mb-2 block text-sm font-bold text-slate-700"
                      >
                        Preferred Contact Method
                      </label>

                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={
                          formData.preferredContact
                        }
                        onChange={handleChange}
                        className="min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      >
                        <option value="WhatsApp">
                          WhatsApp
                        </option>

                        <option value="Phone Call">
                          Phone Call
                        </option>

                        <option value="Email">
                          Email
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="interest"
                        className="mb-2 block text-sm font-bold text-slate-700"
                      >
                        System Interest
                      </label>

                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      >
                        <option>
                          Custom Software Development
                        </option>

                        <option>
                          Business Operations Management System
                        </option>

                        <option>
                          Loyalty Reward System
                        </option>

                        <option>
                          HRMS and Payroll
                        </option>

                        <option>
                          CRM and Sales Management
                        </option>

                        <option>
                          Inventory and Procurement
                        </option>

                        <option>
                          Retail and POS System
                        </option>

                        <option>
                          Manufacturing Management
                        </option>

                        <option>
                          Analytics and Reporting
                        </option>

                        <option>
                          Other Business Requirement
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="mb-2 block text-sm font-bold text-slate-700"
                      >
                        Expected Timeline
                      </label>

                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      >
                        <option>
                          Still exploring
                        </option>

                        <option>
                          Within 1 month
                        </option>

                        <option>
                          Within 2–3 months
                        </option>

                        <option>
                          Within 3–6 months
                        </option>

                        <option>
                          Existing system improvement
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="scope"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Project Requirement
                      <span className="ml-1 text-rose-500">
                        *
                      </span>
                    </label>

                    <div className="relative">
                      <FileText className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-slate-400" />

                      <textarea
                        id="scope"
                        name="scope"
                        value={formData.scope}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Describe your current process, the problem you want to solve, required modules, expected users, and any existing software you currently use."
                        className="w-full resize-y rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm leading-7 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-blue-600" />

                      <p className="text-xs leading-6 text-blue-800">
                        This page does not store your form data.
                        Submitting opens WhatsApp with a prepared
                        message containing the information entered
                        above.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:text-base"
                  >
                    Continue on WhatsApp

                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
              What Happens Next
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              A Practical Starting Process for Your Software Project
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              The first discussion focuses on your existing business
              process, operational challenges, required users, and the
              outcome you want from the system.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Share Your Workflow",
                description:
                  "Explain how your business currently manages work, where information is recorded, and which problems create delays or confusion.",
                icon: <Workflow className="h-6 w-6" />,
                style:
                  "border-blue-200 bg-blue-50 text-blue-700",
              },
              {
                number: "02",
                title: "Define the Required System",
                description:
                  "Identify the practical modules, user roles, permissions, reports, integrations, and operational stages required.",
                icon: <Layers3 className="h-6 w-6" />,
                style:
                  "border-violet-200 bg-violet-50 text-violet-700",
              },
              {
                number: "03",
                title: "Plan the Development Scope",
                description:
                  "Create a clearer project scope covering the starting modules, future expansion options, implementation approach, and next steps.",
                icon: <Code2 className="h-6 w-6" />,
                style:
                  "border-emerald-200 bg-emerald-50 text-emerald-700",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="group rounded-[22px] border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${item.style}`}
                  >
                    {item.icon}
                  </span>

                  <span className="text-4xl font-extrabold text-slate-200 transition-colors group-hover:text-blue-100">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final contact strip */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 xl:px-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
              Prefer Direct Communication?
            </p>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Contact AeroState Lab Through Email, Phone, or WhatsApp
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Share a short summary of your business, the workflow you
              want to improve, and the type of software you are
              considering.
            </p>
          </div>

          <a
            href="https://wa.me/918273329609"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 sm:w-auto"
          >
            Start WhatsApp Conversation

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;