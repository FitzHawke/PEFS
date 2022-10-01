import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import PrevDashboard from "./pages/PrevDashboard";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Settings from "./pages/Settings";
import { setChecked } from "./features/ui/sideBarSlice";

function App() {
  const dispatch = useDispatch();
  const { checked } = useSelector((state) => state.sideBar);

  function onChange() {
    dispatch(() => setChecked(checked));
  }

  return (
    <Router>
      <div className="flex flex-col justify-between max-h-screen">
        <Header />
        <div className="drawer drawer-mobile">
          <input
            type="checkbox"
            id="my-drawer-2"
            className="drawer-toggle"
            checked={checked}
            onChange={onChange}
          />

          <div className="drawer-content">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Landing />} />
              <Route path="/register" element={<Landing register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
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
