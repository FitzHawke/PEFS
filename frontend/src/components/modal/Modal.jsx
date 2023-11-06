import React from "react";
import { useSelector } from "react-redux";
import RunForm from "./RunForm";
import RideForm from "./RideForm";
import WeightForm from "./WeightForm";

function Modal() {
	const { displayModal, modalContent } = useSelector((state) => state.modal);

	let modalType = null;

	switch (modalContent.type) {
		case "run":
			modalType = <RunForm content={modalContent} />;
			break;
		case "editRun":
			modalType = <RunForm content={modalContent} />;
			break;
		case "ride":
			modalType = <RideForm content={modalContent} />;
			break;
		case "editRide":
			modalType = <RideForm content={modalContent} />;
			break;
		case "weight":
			modalType = <WeightForm content={modalContent} />;
			break;
		case "editWeight":
			modalType = <WeightForm content={modalContent} />;
			break;
		default:
			modalType = null;
	}

	if (displayModal) {
		document.getElementById("modal_1").showModal();
	}

	return (
		<dialog id="modal_1" className="modal modal-bottom sm:modal-middle">
			<div className="modal-box">{modalType}</div>
		</dialog>
	);
}

export default Modal;
