import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RideDash from "../components/dashboards/RideDash";
import RunDash from "../components/dashboards/RunDash";
import WeightDash from "../components/dashboards/WeightDash";
import { reset } from "../features/auth/authSlice";

function Dashboard({ content }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}

		return () => dispatch(reset());
	}, [user]);

	if (content === "run") {
		return <RunDash />;
	}

	if (content === "ride") {
		return <RideDash />;
	}

	if (content === "weight") {
		return <WeightDash />;
	}

	return (
		<div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-2">
			<h2 className="max-w-3xl ">
				This dashboard doesn&apos;t have anything to display! Go add some data
				from the menu on the left to see this area populated with beautiful
				graphs and data aggregation!
			</h2>
		</div>
	);
}

export default Dashboard;
