import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createWeight, editWeight } from "../../features/weight/weightSlice";
import { resetModal } from "../../features/ui/modalSlice";
import getNow from "../../utils/getNow";

function WeightForm({ content }) {
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    date: "",
    weight: 0,
  });

  const dispatch = useDispatch();

  if (content.type === "weight" && formData.timeStart === "") {
    const currentDate = getNow.currDate();

    setFormData((prevState) => ({
      ...prevState,
      date: currentDate,
    }));
  } else if (content.type === "editWeight" && formData.timeStart === "") {
    setFormData((prevState) => ({
      ...prevState,
      date: content.date,
      weight: content.weight,
    }));
  }

  const { date, weight } = formData;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!date || !weight) {
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
        }
      );
    } else {
      const weightData = {
        date,
        weight,
      };

      if (content.type === "editWeight") {
        weightData.id = content.id;
        dispatch(editWeight(weightData));
      } else {
        dispatch(createWeight(weightData));
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
          <label className="label flex-col items-start px-0" htmlFor="date">
            <p className="label-text px-4">Date of your weight in</p>
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
            <p className="label-text px-4">Measured weight in lbs</p>
            <input
              type="number"
              className="input input-bordered justify-center w-full"
              id="weight"
              name="weight"
              value={weight}
              placeholder="Enter the distance you ran"
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

export default WeightForm;
