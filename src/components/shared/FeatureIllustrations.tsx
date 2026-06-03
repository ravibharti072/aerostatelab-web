// src/components/shared/FeatureIllustrations.tsx

export const HrIllustration = () => (
  <div className="w-3/4 bg-white rounded-lg shadow-sm border border-slate-200 p-3 flex flex-col gap-3 transform group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
    <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
    <div className="flex gap-3 items-center">
      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-blue-500"></div>
      </div>
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="h-2 w-2/3 bg-slate-700 rounded"></div>
        <div className="h-1.5 w-1/2 bg-slate-200 rounded"></div>
      </div>
    </div>
    <div className="h-1.5 w-full bg-slate-100 rounded mt-1"></div>
  </div>
);

export const InventoryIllustration = () => (
  <div className="flex items-end gap-2 h-20 w-3/4 transform group-hover:scale-105 transition-all duration-300">
    <div className="w-1/3 bg-blue-200 h-3/4 rounded-t-md border-b-4 border-blue-500"></div>
    <div className="w-1/3 bg-slate-200 h-1/2 rounded-t-md border-b-4 border-slate-400"></div>
    <div className="w-1/3 bg-blue-100 h-full rounded-t-md border-b-4 border-blue-400 relative">
      <div className="absolute top-2 left-2 right-2 h-1 bg-white/50 rounded"></div>
    </div>
  </div>
);

export const CrmIllustration = () => (
  <div className="w-3/4 flex flex-col gap-2 transform group-hover:scale-105 transition-all duration-300">
    <div className="bg-white p-2 rounded-lg rounded-bl-none shadow-sm border border-slate-100 self-start w-2/3">
      <div className="h-1.5 w-full bg-slate-200 rounded mb-1"></div>
      <div className="h-1.5 w-2/3 bg-slate-200 rounded"></div>
    </div>
    <div className="bg-blue-500 p-2 rounded-lg rounded-br-none shadow-sm self-end w-2/3">
      <div className="h-1.5 w-full bg-blue-200 rounded mb-1"></div>
      <div className="h-1.5 w-1/2 bg-blue-200 rounded"></div>
    </div>
  </div>
);

export const FinanceIllustration = () => (
  <div className="w-3/4 bg-white rounded-lg shadow-sm border border-slate-200 p-3 transform group-hover:-translate-y-1 transition-all duration-300">
    <div className="flex justify-between items-center mb-3">
      <div className="h-2 w-1/4 bg-slate-200 rounded"></div>
      <div className="h-2 w-1/4 bg-green-400 rounded"></div>
    </div>
    <div className="flex flex-col gap-2">
      <div className="w-full border-t border-dashed border-slate-200"></div>
      <div className="flex justify-between">
        <div className="h-1.5 w-1/3 bg-slate-100 rounded"></div>
        <div className="h-1.5 w-1/5 bg-slate-300 rounded"></div>
      </div>
      <div className="flex justify-between">
        <div className="h-1.5 w-1/2 bg-slate-100 rounded"></div>
        <div className="h-1.5 w-1/4 bg-slate-300 rounded"></div>
      </div>
    </div>
  </div>
);

export const ManufacturingIllustration = () => (
  <div className="flex gap-2 w-3/4 h-16 transform group-hover:scale-105 transition-all duration-300">
    <div className="flex-1 bg-white rounded shadow-sm border border-slate-200 p-2 flex flex-col justify-between">
      <div className="h-1.5 w-1/2 bg-blue-400 rounded"></div>
      <div className="h-1 w-full bg-slate-100 rounded"></div>
    </div>
    <div className="flex flex-col justify-center text-slate-300">→</div>
    <div className="flex-1 bg-white rounded shadow-sm border border-slate-200 p-2 flex flex-col justify-between opacity-75">
      <div className="h-1.5 w-2/3 bg-slate-300 rounded"></div>
      <div className="h-1 w-full bg-slate-100 rounded"></div>
    </div>
  </div>
);

export const RetailIllustration = () => (
  <div className="w-2/3 h-24 bg-slate-800 rounded-lg p-2 flex flex-col gap-2 transform group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
    <div className="h-2 w-1/3 bg-slate-600 rounded"></div>
    <div className="grid grid-cols-2 gap-2 mt-1">
      <div className="h-6 bg-slate-700 rounded border border-slate-600"></div>
      <div className="h-6 bg-slate-700 rounded border border-slate-600"></div>
      <div className="h-6 bg-slate-700 rounded border border-slate-600"></div>
      <div className="h-6 bg-blue-600 rounded border border-blue-500"></div>
    </div>
  </div>
);

export const ProcurementIllustration = () => (
  <div className="w-2/3 bg-white rounded shadow-sm border border-slate-200 p-3 transform group-hover:-translate-y-1 group-hover:-rotate-2 transition-all duration-300">
    <div className="flex gap-2 items-center mb-2">
      <div className="w-3 h-3 border-2 border-blue-500 rounded-sm"></div>
      <div className="h-1.5 w-1/2 bg-slate-300 rounded"></div>
    </div>
    <div className="flex gap-2 items-center mb-2">
      <div className="w-3 h-3 bg-blue-500 rounded-sm flex items-center justify-center text-white text-[8px]">✓</div>
      <div className="h-1.5 w-2/3 bg-slate-700 rounded"></div>
    </div>
    <div className="flex gap-2 items-center">
      <div className="w-3 h-3 border-2 border-slate-200 rounded-sm"></div>
      <div className="h-1.5 w-1/3 bg-slate-300 rounded"></div>
    </div>
  </div>
);

export const PayrollIllustration = () => (
  <div className="w-3/4 flex flex-col gap-2 transform group-hover:scale-105 transition-all duration-300">
    <div className="bg-white rounded-md shadow-sm border border-slate-200 p-2 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-slate-100"></div>
        <div className="h-1.5 w-16 bg-slate-700 rounded"></div>
      </div>
      <div className="h-2 w-8 bg-green-400 rounded"></div>
    </div>
    <div className="bg-white rounded-md shadow-sm border border-slate-200 p-2 flex justify-between items-center opacity-75">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-slate-100"></div>
        <div className="h-1.5 w-12 bg-slate-400 rounded"></div>
      </div>
      <div className="h-2 w-10 bg-slate-300 rounded"></div>
    </div>
  </div>
);

export const AnalyticsIllustration = () => (
  <div className="flex items-end justify-between gap-1.5 w-3/4 h-16 transform group-hover:scale-105 transition-all duration-300">
    <div className="w-full bg-blue-100 rounded-t h-1/4"></div>
    <div className="w-full bg-blue-200 rounded-t h-2/4"></div>
    <div className="w-full bg-blue-400 rounded-t h-1/3"></div>
    <div className="w-full bg-blue-500 rounded-t h-full relative">
       <div className="absolute -top-1 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2"></div>
    </div>
    <div className="w-full bg-blue-300 rounded-t h-3/4"></div>
  </div>
);