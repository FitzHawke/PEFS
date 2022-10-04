import React from "react";
import { useDispatch } from "react-redux";
import { resetModal } from "../features/ui/modalSlice";

function LiftForm() {
  const dispatch = useDispatch();

  return (
    <section className="flex flex-col align-middle justify-center">
      <h1 className="text-center">Feature not implemented yet 😞</h1>
      <button
        type="button"
        className="btn btn-accent btn-wide mx-auto my-4"
        onClick={() => dispatch(resetModal())}
      >
        Close
      </button>
    </section>
  );
}

export default LiftForm;
