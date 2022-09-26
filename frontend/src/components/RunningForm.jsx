import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRun } from '../features/runs/runSlice';
import { resetModal } from '../features/ui/modalSlice';

function RunningForm() {
  const [formData, setFormData] = useState({
    distance: 0,
    timeStart: 0,
    timeEnd: 0,
  });

  const dispatch = useDispatch();
  const { distance, timeStart, timeEnd } = formData;

  const onSubmit = (e) => {
    e.preventDefault();

    const runData = {
      distance,
      timeStart,
      timeEnd,
    };

    //dispatch(createRun(runData));
    dispatch(resetModal());
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="flex justify-center">
      <form className="form-control form-control-lg" onSubmit={onSubmit}>
        <div className="form-control my-2">
          <label className="label">
            <span className="label-text">Distance of your run</span>
          </label>
          <input
            type="number"
            className="input input-bordered justify-center"
            id="distance"
            name="distance"
            value={distance}
            placeholder="Enter the distance you ran"
            onChange={onChange}
          />
        </div>
        <div className="form-control my-2">
          <label className="label">
            <span className="label-text">Time you started your run</span>
          </label>
          <input
            type="time"
            className="input input-bordered justify-center"
            id="timeStart"
            name="timeStart"
            value={timeStart}
            placeholder="00:00"
            onChange={onChange}
          />
        </div>
        <div className="form-control my-2">
          <label className="label">
            <span className="label-text">Time you Ended your run</span>
          </label>
          <input
            type="time"
            className="input input-bordered justify-center"
            id="timeEnd"
            name="timeEnd"
            value={timeEnd}
            placeholder="00:00"
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <button
            type="submit"
            className="btn btn-primary btn-wide mx-auto my-4"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default RunningForm;
