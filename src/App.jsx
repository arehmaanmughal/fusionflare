import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";
import Layout from "./components/Layout";
import WorkPage from "./pages/work";
import BlogsPage from "./pages/Blogs";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
