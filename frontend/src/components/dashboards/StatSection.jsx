import React from "react";
import getStats from "../../utils/getStats";

function StatSection({ data, type, num, title }) {
	const timeStat = getStats(data, type === "run" ? "runTime" : "rideTime", num);
	const distStat = getStats(data, "distance", num);
	const paceStat = getStats(data, "pace", num);

	return (
		<>
			<h4 className="mt-4 text-center text-2xl font-bold">
				{title} Time Stats
			</h4>
			<div className="stats stats-vertical lg:stats-horizontal stats-horizontal w-full shadow">
				<div className="stat mx-auto place-items-center px-1">
					<div className="stat-title">Longest {title}</div>
					<div className="stat-value">{timeStat.max}</div>
					<div className="stat-desc">minutes</div>
				</div>

				<div className="stat mx-auto place-items-center px-1">
					<div className="stat-title">Avg. {title} Time</div>
					<div className="stat-value">{timeStat.avg}</div>
					<div className="stat-desc">minutes</div>
				</div>

				<div className="stat mx-auto place-items-center px-1">
					<div className="stat-title">Shortest {title}</div>
					<div className="stat-value">{timeStat.min}</div>
					<div className="stat-desc">minutes</div>
				</div>
			</div>

			<h4 className="mt-4 text-center text-2xl font-bold">
				{title} Pace Stats
			</h4>
			<div className="stats stats-vertical lg:stats-horizontal stats-horizontal w-full shadow">
				<div className="stat mx-auto place-items-center px-1">
					<div className="stat-title">Fastest {title}</div>
					<div className="stat-value">{paceStat.max}</div>
					<div className="stat-desc">km/h</div>
				</div>

				<div className="stat mx-auto place-items-center px-1">
					<div className="stat-title">Avg. {title} Pace</div>
					<div className="stat-value">{paceStat.avg}</div>
					<div className="stat-desc">km/h</div>
				</div>

				<div className="stat mx-auto place-items-center px-1">
					<div className="stat-title">Slowest {title}</div>
					<div className="stat-value">{paceStat.min}</div>
					<div className="stat-desc">km/h</div>
				</div>
			</div>

			<h4 className="mt-4 text-center text-2xl font-bold">
				{title} Distance Stats
			</h4>
			<div className="stats stats-vertical lg:stats-horizontal stats-horizontal w-full shadow">
				<div className="stat mx-auto place-items-center px-1">
					<div className="stat-title">Longest {title}</div>
					<div className="stat-value">{distStat.max}</div>
					<div className="stat-desc">km</div>
				</div>

				<div className="stat mx-auto place-items-center px-1">
					<div className="stat-title">Avg. {title} Distance</div>
					<div className="stat-value">{distStat.avg}</div>
					<div className="stat-desc">km</div>
				</div>

				<div className="stat mx-auto place-items-center px-1">
					<div className="stat-title">Shortest {title}</div>
					<div className="stat-value">{distStat.min}</div>
					<div className="stat-desc">km</div>
				</div>
			</div>
		</>
	);
}

export default StatSection;
