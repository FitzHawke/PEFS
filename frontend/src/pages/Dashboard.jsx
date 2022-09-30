import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import NewWorkout from "./NewWorkout";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

function Dashboard() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow container mx-auto">
          <Routes>
            <Route path="/newWorkout" element={<NewWorkout />} />
          </Routes>
        </div>
        <Footer />
        <Modal />
      </div>

      <ToastContainer />
    </>
  );
}

export default Dashboard;
