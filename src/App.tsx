import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import Services from './pages/Services';   // ✅ fixed path

// Solution Pillar Pages
import HRMS from './pages/offerings/HRMS';
import Inventory from './pages/offerings/Inventory';
import CRM from './pages/offerings/CRM';
import Finance from './pages/offerings/Finance';
import Manufacturing from './pages/offerings/Manufacturing';
import Retail from './pages/offerings/Retail';
import SupplyChain from './pages/offerings/SupplyChain';
import Payroll from './pages/offerings/Payroll';
import Analytics from './pages/offerings/Analytics';

// Industry Pages
import ManufacturingIndustry from './pages/offerings/ManufacturingIndustry';
import Healthcare from './pages/offerings/Healthcare';
import RetailIndustries from './pages/offerings/RetailIndustries';
import Logistics from './pages/offerings/Logistics';
import Construction from './pages/offerings/Construction';
import Education from './pages/offerings/Education';
import Trading from './pages/offerings/Trading';
import Hospitality from './pages/offerings/Hospitality';

import WhyChooseUs from './pages/WhyChooseUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 font-sans antialiased text-slate-200 flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            
            {/* Solutions Catalog */}
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/hrms" element={<HRMS />} />
            <Route path="/solutions/inventory" element={<Inventory />} />
            <Route path="/solutions/crm" element={<CRM />} />
            <Route path="/solutions/finance" element={<Finance />} />
            <Route path="/solutions/manufacturing" element={<Manufacturing />} />
            <Route path="/solutions/pos" element={<Retail />} />
            <Route path="/solutions/procurement" element={<SupplyChain />} />
            <Route path="/solutions/payroll" element={<Payroll />} />
            <Route path="/solutions/analytics" element={<Analytics />} />
            
            {/* Industries Catalog */}
            <Route path="/industries/manufacturing" element={<ManufacturingIndustry />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/retail" element={<RetailIndustries />} />
            <Route path="/industries/logistics" element={<Logistics />} />
            <Route path="/industries/construction" element={<Construction />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/trading" element={<Trading />} />
            <Route path="/industries/hospitality" element={<Hospitality />} />

            <Route path="/why-choose-us" element={<WhyChooseUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;