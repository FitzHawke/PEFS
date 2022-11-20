import React from "react";
import { useSelector } from "react-redux";
import RunForm from "./RunForm";
import RideForm from "./RideForm";
import WeightForm from "./WeightForm";

function Modal() {
  const { displayModal, modalContent } = useSelector((state) => state.modal);

  let extraClass = "";
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
    extraClass = "modal-open";
  } else {
    extraClass = "";
  }

  return (
    <div className={`modal modal-bottom sm:modal-middle ${extraClass}`}>
      <div className="modal-box">{modalType}</div>
    </div>
  );
}

export default Modal;
