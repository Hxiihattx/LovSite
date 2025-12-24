
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WebDesign from './pages/WebDesign';
import SocialMedia from './pages/SocialMedia';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import Booking from './pages/Booking';
import FAQ from './pages/FAQ';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/impressum" element={<Legal type="impressum" />} />
          <Route path="/datenschutz" element={<Legal type="datenschutz" />} />
          <Route path="/agb" element={<Legal type="agb" />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
