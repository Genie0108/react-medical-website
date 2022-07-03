import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FindDoctor from "./pages/FindDoctor";
import OurDoctor from "./pages/OurDoctor";
import Prescribtion from "./pages/Prescribtion";
import Services from "./pages/Services";
import UrgentCare from "./pages/UrgentCare";
import NoPage from "./pages/NoPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/aboutus" exact element={<About />} />
          <Route path="/ourservices" element={<Services />} />
          <Route path="/findadoctor" element={<FindDoctor />} />
          <Route path="/ourdoctors" element={<OurDoctor />} />
          <Route path="/onlineprescribtions" element={<Prescribtion />} />
          <Route path="/urgentcare" element={<UrgentCare />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
