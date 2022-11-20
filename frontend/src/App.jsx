import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/layout/Footer";
import Modal from "./components/modal/Modal";
import Header from "./components/layout/Header";
import SideBar from "./components/layout/SideBar";
import { setChecked } from "./features/ui/sideBarSlice";
import Overview from "./pages/Overview";
import MainDash from "./pages/MainDash";

function App() {
  const dispatch = useDispatch();
  const { checked } = useSelector((state) => state.sideBar);

  function onChange() {
    dispatch(() => setChecked(checked));
  }

  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <div className="drawer drawer-mobile h-full">
          <input
            type="checkbox"
            id="my-drawer-2"
            className="drawer-toggle"
            checked={checked}
            onChange={onChange}
          />

          <div className="drawer-content h-full">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Landing />} />
              <Route path="/register" element={<Landing register />} />
              <Route path="/dashboard" element={<MainDash />} />
              <Route path="/runs" element={<Overview content="run" />} />
              <Route path="/run-dash" element={<Dashboard content="run" />} />
              <Route path="/rides" element={<Overview content="ride" />} />
              <Route path="/ride-dash" element={<Dashboard content="ride" />} />
              <Route path="/weight" element={<Overview content="weight" />} />
              <Route
                path="/ride-weights"
                element={<Dashboard content="weights" />}
              />
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
