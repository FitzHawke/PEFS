import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import PrevDashboard from "./pages/PrevDashboard";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between max-h-screen">
        <Header />
        <div className="drawer drawer-mobile">
          <input type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center overflow-auto h-full">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Landing />} />
              <Route path="/register" element={<Landing register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/oldDash" element={<PrevDashboard />} />
            </Routes>
          </div>
          <SideBar />
        </div>
        <Footer />
      </div>
      <Modal />
      <ToastContainer />
    </Router>
  );
}

export default App;
