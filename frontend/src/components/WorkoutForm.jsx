import React from "react";
import { useDispatch } from "react-redux";
import { showModal } from "../features/ui/modalSlice";

function WorkoutForm() {
  const dispatch = useDispatch();

  return (
    <section className="flex flex-row flex-wrap justify-center gap-2">
      <button
        type="button"
        className="btn btn-accent btn-wide"
        onClick={() => dispatch(showModal({ type: "run" }))}
      >
        Add New Run
      </button>
      <button
        type="button"
        className="btn btn-accent btn-wide tooltip"
        data-tip="Coming Soon!"
        onClick={() => dispatch(showModal({ type: "ride" }))}
      >
        Add New Bike Ride
      </button>
      <button
        type="button"
        className="btn btn-accent btn-wide tooltip"
        data-tip="Coming Soon!"
        onClick={() => dispatch(showModal({ type: "lift" }))}
      >
        Add New Weightlifting Session
      </button>
    </section>
  );
}

export default WorkoutForm;
