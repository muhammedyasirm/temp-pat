import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderTop from './components/Header/headerTop';
import Footer from './components/Footer/footer';
import HomePage from "./pages/Home/homePage";
import ContactPage from "./pages/Contact/contactPage";
import BlogPage from "./pages/Blog/blog";
import CaseStudyPage from "./pages/CaseStudy/caseStudy";
import EventPage from "./pages/Event/eventPage";

function App() {
  return (
    <Router>
      <>
        <HeaderTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/service" element={<ServicePage />} /> */}
          <Route path="/case-study" element={<CaseStudyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/events" element={<EventPage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
