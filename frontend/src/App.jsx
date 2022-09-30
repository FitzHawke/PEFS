import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import PrevDashboard from "./pages/PrevDashboard";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Landing />} />
          <Route path="/register" element={<Landing register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/oldDash" element={<PrevDashboard />} />
        </Routes>
        <Footer />
        <Modal />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
