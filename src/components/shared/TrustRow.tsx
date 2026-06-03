function TrustRow() {
  const trustFeatures = [
    "Cloud Infrastructure",
    "Enterprise Security",
    "Multi-Region Deployment",
    "24/7 Support"
  ];

  return (
    <div className="border-y border-gray-200 bg-gray-50/80 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 text-center">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 group">
              {/* Indicator Node */}
              <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.4)] group-hover:bg-blue-600 transition-colors"></div>
              {/* Trust Text */}
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest group-hover:text-gray-800 transition-colors">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustRow;