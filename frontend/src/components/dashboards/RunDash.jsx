import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getRuns, reset } from "../../features/runs/runSlice";
import { showModal } from "../../features/ui/modalSlice";
import LineChart from "../LineChart";
import StatSection from "./StatSection";
import Spinner from "../Spinner";

function RunDash() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { runs, isLoading, isError, message } = useSelector(
		(state) => state.runs,
	);
	const [selections, setSelections] = useState({
		displayNum: `${Math.min(Math.max(2, runs.length), 10)}`,
		chartDisplay: "pn",
	});

	const { displayNum, chartDisplay } = selections;

	useEffect(() => {
		if (isError) {
			toast.error(message, {
				position: toast.POSITION.TOP_RIGHT,
				className: "alert alert-error",
			});
		}

		if (!user) {
			navigate("/login");
		} else {
			dispatch(getRuns());
		}

		return () => dispatch(reset());
	}, [user, isError]);

	function onChange(e) {
		setSelections({
			...selections,
			[e.target.name]: e.target.value,
		});
	}

	function onNumChange(e) {
		if (e.target.value > runs.length) {
			setSelections({
				...selections,
				[e.target.name]: runs.length,
			});
		} else {
			setSelections({
				...selections,
				[e.target.name]: e.target.value,
			});
		}
	}

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-2">
			{runs.length < 2 ? (
				<div className="flex h-48 flex-col items-center justify-center gap-4">
					<h3>Add more Runs to view a nice graph here!</h3>
					<button
						className="btn btn-accent btn-wide"
						type="button"
						onClick={() => dispatch(showModal({ type: "run" }))}
					>
						Add New Run
					</button>
				</div>
			) : (
				<div className="w-full">
					<LineChart
						rawData={runs}
						pod={chartDisplay[0]}
						nod={chartDisplay[1]}
						disNum={displayNum}
						workoutType="Run"
						trend
					/>
					<div className="flex h-48 flex-col items-center justify-between gap-2 text-center lg:h-20 lg:flex-row">
						<label htmlFor="chartDisplay" className="w-1/2">
							Data to be displayed on chart
							<select
								name="chartDisplay"
								id="chartDisplay"
								value={chartDisplay}
								onChange={onChange}
								className="select select-accent w-full max-w-xs"
							>
								<option name="chartDisplay" value="pn">
									Pace With Number
								</option>
								<option name="chartDisplay" value="dn">
									Distance With Number
								</option>
								<option name="chartDisplay" value="pd">
									Pace With Date
								</option>
								<option name="chartDisplay" value="dd">
									Distance With Date
								</option>
							</select>
						</label>
						<label htmlFor="display" className="w-1/2">
							<div className="flex justify-between align-middle">
								<span className="my-auto">Number of Runs to Display</span>
								<input
									name="displayNum"
									id="display"
									type="text"
									placeholder="Type here"
									value={displayNum}
									onChange={onNumChange}
									className="input input-bordered input-accent w-12"
								/>
							</div>
							<input
								name="displayNum"
								id="display"
								type="range"
								min="1"
								max={`${runs.length}`}
								value={displayNum}
								className="range range-accent"
								data-popup-enabled="true"
								onChange={onChange}
							/>
						</label>
					</div>
					{runs.length > 0 && (
						<StatSection data={runs} type="run" num={displayNum} title="Run" />
					)}
				</div>
			)}
		</div>
	);
}

export default RunDash;
