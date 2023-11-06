import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Modal from "./components/modal/Modal";
import Overview from "./pages/Overview";
import MainDash from "./pages/MainDash";
import PageLayout from "./components/layout/PageLayout";

function App() {
	return (
		<Router>
			<PageLayout>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/login" element={<Landing />} />
					<Route path="/register" element={<Landing register />} />
					<Route path="/dashboard" element={<MainDash />} />
					<Route path="/runs" element={<Overview content="run" />} />
					<Route path="/run-dash" element={<Dashboard content="run" />} />
					<Route path="/rides" element={<Overview content="ride" />} />
					<Route path="/ride-dash" element={<Dashboard content="ride" />} />
					{/* <Route path="/weight" element={<Overview content="weight" />} />
              <Route
                path="/weight-dash"
                element={<Dashboard content="weight" />}
              /> */}
				</Routes>
			</PageLayout>
			<Modal />
			<ToastContainer />
		</Router>
	);
}

export default App;
