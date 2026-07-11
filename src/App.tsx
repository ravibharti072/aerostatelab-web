import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

// Main pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import OurApproach from "./pages/OurApproach";
import Solutions from "./pages/Solutions";
import WhyChooseUs from "./pages/WhyChooseUs";

// Product pages
import BusinessOperationsSystem from "./pages/products/BusinessOperationsSystem";
import LoyaltyRewardSystem from "./pages/products/LoyaltyRewardSystem";

// Custom software development page
import CustomSoftwareDevelopment from "./pages/services/CustomSoftwareDevelopment";

// Solution pages
import Analytics from "./pages/offerings/Analytics";
import CRM from "./pages/offerings/CRM";
import Finance from "./pages/offerings/Finance";
import HRMS from "./pages/offerings/HRMS";
import Inventory from "./pages/offerings/Inventory";
import Manufacturing from "./pages/offerings/Manufacturing";
import Payroll from "./pages/offerings/Payroll";
import Retail from "./pages/offerings/Retail";
import SupplyChain from "./pages/offerings/SupplyChain";

// Industry pages
import Construction from "./pages/offerings/Construction";
import Education from "./pages/offerings/Education";
import Healthcare from "./pages/offerings/Healthcare";
import Hospitality from "./pages/offerings/Hospitality";
import Logistics from "./pages/offerings/Logistics";
import ManufacturingIndustry from "./pages/offerings/ManufacturingIndustry";
import RetailIndustries from "./pages/offerings/RetailIndustries";
import Trading from "./pages/offerings/Trading";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-200 antialiased">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route
              path="/our-approach"
              element={<OurApproach />}
            />

            {/* Redirect old Services URL to Our Approach */}
            <Route
              path="/services"
              element={
                <Navigate
                  to="/our-approach"
                  replace
                />
              }
            />

            <Route
              path="/why-choose-us"
              element={<WhyChooseUs />}
            />

            {/* Custom software development */}
            <Route
              path="/services/custom-software-development"
              element={<CustomSoftwareDevelopment />}
            />

            {/* Product pages */}
            <Route
              path="/products/loyalty-reward-system"
              element={<LoyaltyRewardSystem />}
            />

            <Route
              path="/products/business-operations-management-system"
              element={<BusinessOperationsSystem />}
            />

            {/* Solutions overview */}
            <Route
              path="/solutions"
              element={<Solutions />}
            />

            {/* Individual solution pages */}
            <Route
              path="/solutions/hrms"
              element={<HRMS />}
            />

            <Route
              path="/solutions/inventory"
              element={<Inventory />}
            />

            <Route
              path="/solutions/crm"
              element={<CRM />}
            />

            <Route
              path="/solutions/finance"
              element={<Finance />}
            />

            <Route
              path="/solutions/manufacturing"
              element={<Manufacturing />}
            />

            <Route
              path="/solutions/pos"
              element={<Retail />}
            />

            <Route
              path="/solutions/procurement"
              element={<SupplyChain />}
            />

            <Route
              path="/solutions/payroll"
              element={<Payroll />}
            />

            <Route
              path="/solutions/analytics"
              element={<Analytics />}
            />

            {/* Industries overview */}
            <Route
              path="/industries"
              element={<Industries />}
            />

            {/* Individual industry pages */}
            <Route
              path="/industries/manufacturing"
              element={<ManufacturingIndustry />}
            />

            <Route
              path="/industries/healthcare"
              element={<Healthcare />}
            />

            <Route
              path="/industries/retail"
              element={<RetailIndustries />}
            />

            <Route
              path="/industries/logistics"
              element={<Logistics />}
            />

            <Route
              path="/industries/construction"
              element={<Construction />}
            />

            <Route
              path="/industries/education"
              element={<Education />}
            />

            <Route
              path="/industries/trading"
              element={<Trading />}
            />

            <Route
              path="/industries/hospitality"
              element={<Hospitality />}
            />

            {/* Page not found */}
            <Route
              path="*"
              element={
                <div className="flex min-h-[65vh] items-center justify-center bg-white px-6 text-center">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900">
                      Page not found
                    </h1>

                    <p className="mt-3 text-slate-600">
                      The requested website page is not available.
                    </p>

                    <Link
                      to="/"
                      className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
                    >
                      Return Home
                    </Link>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;