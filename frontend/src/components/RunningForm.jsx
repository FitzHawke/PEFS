import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createRun, editRun } from "../features/runs/runSlice";
import { resetModal } from "../features/ui/modalSlice";
import timeDifference from "../modules/timeDifference";
import getNow from "../modules/getNow";

function RunningForm({ content }) {
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
      distance: content.distance,
      timeStart: content.startTime,
      timeEnd: content.endTime,
    }));
  }

  const { date, distance, timeStart, timeEnd } = formData;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!distance || !timeStart || !timeEnd) {
      toast.error("Please fill out all available fields", {
        position: toast.POSITION.TOP_RIGHT,
        className: "alert alert-error",
      });
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
      dispatch(resetModal());
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="flex justify-center flex-col">
      <form className="form-control form-control-lg" onSubmit={onSubmit}>
        <div className="form-control my-2">
          <label className="label flex-col items-start px-0" htmlFor="distance">
            <p className="label-text px-4">Distance of your run</p>
            <input
              type="date"
              className="input input-bordered justify-center w-full"
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
              className="input input-bordered justify-center w-full"
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
              className="input input-bordered justify-center w-full"
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
              className="input input-bordered justify-center w-full"
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
      </form>
      <button
        className="btn btn-error btn-wide mx-auto my-4"
        type="button"
        onClick={() => dispatch(resetModal())}
      >
        Cancel
      </button>
    </section>
  );
}

export default RunningForm;
