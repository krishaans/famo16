import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import EconomicCenter from './pages/EconomicCenter';
import TodayPrices from './pages/TodayPrices';
import HowToFarm from './pages/HowToFarm';
import WaterReminder from './pages/WaterReminder';
import AnimalAlarm from './pages/AnimalAlarm';
import WorkerMarker from './pages/WorkerMarker';
import Weather from './pages/Weather';
import Sell from './pages/Sell';
import Buy from './pages/Buy';
import FuturePredictions from './pages/FuturePredictions';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Shop from './pages/Shop';
import Doctor from './pages/Doctor';
import Footer from './components/footer/Footer';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/center/:id" element={<EconomicCenter />} />
              <Route path="/today-prices" element={<TodayPrices />} />
              <Route path="/how-to-farm/*" element={<HowToFarm />} />
              <Route path="/water-reminder" element={<WaterReminder />} />
              <Route path="/animal-alarm" element={<AnimalAlarm />} />
              <Route path="/worker-marker" element={<WorkerMarker />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/future-predictions" element={<FuturePredictions />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/doctor" element={<Doctor />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;