import React from "react";

import "./App.css";
import Home from "./pages/home/Home";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddNewJob from "./pages/addNewJob/AddNewJob";
import Navbar from "./components/navbar/Navbar";
import SideNavabr from "./components/sideNavbar/SideNavabr";
import EditJob from "./pages/editJob/EditJob";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
					<SideNavabr />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/add-new-job" element={<AddNewJob />}></Route>
						<Route path="/edit-job/:jobId" element={<EditJob />}></Route>
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
