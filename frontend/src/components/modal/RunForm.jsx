import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createRun, editRun } from "../../features/runs/runSlice";
import { resetModal } from "../../features/ui/modalSlice";
import timeDifference from "../../utils/timeDifference";
import getNow from "../../utils/getNow";

function RunningForm({ content }) {
	const { user } = useSelector((state) => state.auth);
	const [formData, setFormData] = useState({
		date: "",
		distance: 0,
		timeStart: "",
		timeEnd: "",
	});

	const dispatch = useDispatch();

	if (content.type === "run" && formData.timeStart === "") {
		const currentTime = getNow.currTime();
		const offSetTime = getNow.offSet();
		const currentDate = getNow.currDate();

		setFormData((prevState) => ({
			...prevState,
			date: currentDate,
			timeStart: offSetTime,
			timeEnd: currentTime,
		}));
	} else if (content.type === "editRun" && formData.timeStart === "") {
		setFormData((prevState) => ({
			...prevState,
			date: content.date,
			distance: content.distance,
			timeStart: content.startTime,
			timeEnd: content.endTime,
		}));
	}

	const { date, distance, timeStart, timeEnd } = formData;

	const reset = () => {
		dispatch(resetModal());
		document.getElementById("modal_1").close();
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (!date || !distance || !timeStart || !timeEnd) {
			toast.error("Please fill out all available fields", {
				position: toast.POSITION.TOP_RIGHT,
				className: "alert alert-error",
			});
		} else if (user.email === "demo@demo.com") {
			toast.error(
				"Please logout and set up a new user to add/modify exercises",
				{
					position: toast.POSITION.TOP_RIGHT,
					className: "alert alert-error",
				},
			);
		} else {
			const runTime = timeDifference(timeStart, timeEnd);
			const pace = +(distance / (runTime / 60)).toFixed(2);

			const runData = {
				date,
				distance: +distance,
				timeStart,
				timeEnd,
				runTime,
				pace,
			};

			if (content.type === "editRun") {
				runData.id = content.id;
				dispatch(editRun(runData));
			} else {
				dispatch(createRun(runData));
			}
		}
		reset();
	};

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<section className="flex flex-col justify-center">
			<form
				method="dialog"
				className="form-control form-control-lg"
				onSubmit={onSubmit}
			>
				<div className="form-control my-2">
					<label className="label flex-col items-start px-0" htmlFor="date">
						<p className="label-text px-4">Date of your run</p>
						<input
							type="date"
							className="input input-bordered w-full justify-center"
							id="date"
							name="date"
							value={date}
							placeholder="Enter the date you ran"
							onChange={onChange}
						/>
					</label>
					<label className="label flex-col items-start px-0" htmlFor="distance">
						<p className="label-text px-4">Distance of your run</p>
						<input
							type="number"
							className="input input-bordered w-full justify-center"
							id="distance"
							name="distance"
							value={distance}
							placeholder="Enter the distance you ran"
							onChange={onChange}
						/>
					</label>
					<label
						className="label flex-col items-start px-0"
						htmlFor="timeStart"
					>
						<p className="label-text px-4">Time you started your run</p>
						<input
							type="time"
							className="input input-bordered w-full justify-center"
							id="timeStart"
							name="timeStart"
							value={timeStart}
							placeholder="00:00"
							onChange={onChange}
						/>
					</label>
					<label className="label flex-col items-start px-0" htmlFor="timeEnd">
						<p className="label-text px-4">Time you ended your run</p>
						<input
							type="time"
							className="input input-bordered w-full justify-center"
							id="timeEnd"
							name="timeEnd"
							value={timeEnd}
							placeholder="00:00"
							onChange={onChange}
						/>
					</label>
					<button
						type="submit"
						className="btn btn-accent btn-wide mx-auto my-4"
					>
						Submit
					</button>
				</div>
				<button
					className="btn btn-error btn-wide mx-auto my-4"
					type="button"
					onClick={() => reset()}
				>
					Cancel
				</button>
			</form>
		</section>
	);
}

export default RunningForm;
