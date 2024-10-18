import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderTop from './components/Header/headerTop';
import Footer from './components/Footer/footer';
import Loader from './components/Loader/loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./components/ScrollToTop/scrollToTop";

const HomePage = lazy(() => import("./pages/Home/homePage"));
const ContactPage = lazy(() => import("./pages/Contact/contactPage"));
const BlogPage = lazy(() => import("./pages/Blog/blog"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudy/caseStudy"));
const EventPage = lazy(() => import("./pages/Event/eventPage"));
const ServicePage = lazy(() => import("./pages/Service/servicePage"));
const SolutionPage = lazy(() => import("./pages/Solutions/solutionPage"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <>
        <HeaderTop />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/service" element={<HomePage />} /> */}
            <Route path="/service/:serviceId" element={<ServicePage />} />
            <Route path="/case-study" element={<CaseStudyPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/events" element={<EventPage />} />
            {/* <Route path="/solution" element={<SolutionPage />} /> */}
            <Route path="/solution/:solutionId" element = {<SolutionPage />} />
          </Routes>
        </Suspense>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> 
      </>
    </Router>
  );
}

export default App;
