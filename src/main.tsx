import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => (
  <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  </Router>
);

const container = document.getElementById('root');
if (!container) throw new Error("Root container not found");
ReactDOM.createRoot(container).render(<App />);

