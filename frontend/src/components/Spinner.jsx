import React from "react";

function Spinner() {
	return (
		<div className="flex h-screen animate-pulse items-center justify-center space-x-2 align-middle">
			<div className="bg-accent h-8 w-8 rounded-full" />
			<div className="bg-accent h-8 w-8 rounded-full" />
			<div className="bg-accent h-8 w-8 rounded-full" />
		</div>
	);
}

export default Spinner;
