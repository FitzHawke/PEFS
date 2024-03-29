import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setChecked } from "../../features/ui/sideBarSlice";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

function PageLayout({ children }) {
	const dispatch = useDispatch();
	const { checked } = useSelector((state) => state.sideBar);

	function onChange() {
		dispatch(() => setChecked(checked));
	}

	return (
		<div className="drawer lg:drawer-open">
			<input
				type="checkbox"
				id="my-drawer-2"
				className="drawer-toggle"
				checked={checked}
				onChange={onChange}
			/>

			<div className="drawer-content flex h-screen flex-col items-center justify-between">
				<Header />
				<div className="w-full overflow-y-scroll">{children}</div>
				<Footer />
			</div>
			<SideBar />
		</div>
	);
}

export default PageLayout;
