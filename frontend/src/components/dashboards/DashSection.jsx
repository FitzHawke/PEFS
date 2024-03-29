import React from "react";
import { useDispatch } from "react-redux";
import { showModal } from "../../features/ui/modalSlice";
import getStats from "../../utils/getStats";
import LineChart from "../LineChart";

function DashSection({ data, type, title }) {
	const dispatch = useDispatch();

	return (
		<div className="card bg-base-100 w-full shadow-xl lg:w-1/2">
			<h3 className="py-5 text-center text-3xl">{title}</h3>
			{data.length > 1 ? (
				<>
					<figure className="px-10 py-5">
						<LineChart
							rawData={data}
							pod="p"
							nod="n"
							disNum={Math.min(10, data.length)}
							workoutType={type}
						/>
					</figure>
					<div className="card-body items-center text-center">
						<div className="stats stats-vertical lg:stats-horizontal stats-horizontal w-full shadow">
							<div className="stat mx-auto place-items-center px-1">
								<div className="stat-title">Total {title}</div>
								<div className="stat-value">{data.length}</div>
								<div className="stat-desc">{data[data.length - 1].date}</div>
								<div className="stat-desc">{data[0].date}</div>
							</div>

							<div className="stat mx-auto place-items-center px-1">
								<div className="stat-title">Avg. Distance</div>
								<div className="stat-value">
									{getStats(data, "distance", Math.min(data.length, 10)).avg}
								</div>
								<div className="stat-desc">km</div>
								<div className="stat-desc">
									Last {Math.min(data.length, 10)} {title}
								</div>
							</div>

							<div className="stat mx-auto place-items-center px-1">
								<div className="stat-title">Avg. Pace</div>
								<div className="stat-value">
									{getStats(data, "pace", Math.min(data.length, 10)).avg}
								</div>
								<div className="stat-desc">km/h</div>
								<div className="stat-desc">
									Last {Math.min(data.length, 10)} {title}
								</div>
							</div>
						</div>
						<div className="card-actions">
							<button
								className="btn btn-accent btn-wide"
								type="button"
								onClick={() =>
									dispatch(showModal({ type: type.toLowerCase() }))
								}
							>
								Add New {type}
							</button>
						</div>
					</div>
				</>
			) : (
				<div className="flex flex-col items-center justify-center">
					<div>Add more {title} to display beautiful charts and stats!</div>
					<button
						className="btn btn-accent btn-wide my-10"
						type="button"
						onClick={() => dispatch(showModal({ type: type.toLowerCase() }))}
					>
						Add New {type}
					</button>
				</div>
			)}
		</div>
	);
}

export default DashSection;
