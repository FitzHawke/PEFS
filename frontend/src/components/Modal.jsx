import React from "react";
import { useSelector } from "react-redux";
import RunningForm from "./RunningForm";
import BikingForm from "./BikingForm";
import LiftsForm from "./LiftsForm";

function Modal() {
  const { displayModal, modalContent } = useSelector((state) => state.modal);

  let extraClass = "";
  let modalType = null;

  switch (modalContent.type) {
    case "run":
      modalType = <RunningForm content={modalContent} />;
      break;
    case "editRun":
      modalType = <RunningForm content={modalContent} />;
      break;
    case "ride":
      modalType = <BikingForm />;
      break;
    case "editRide":
      modalType = <BikingForm />;
      break;
    case "lift":
      modalType = <LiftsForm />;
      break;
    case "editlift":
      modalType = <LiftsForm />;
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
