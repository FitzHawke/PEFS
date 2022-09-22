import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createWorkout } from '../features/workouts/workoutSlice';

function WorkoutForm() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createWorkout({ text }));
    setText('');
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1">
              Add Workout
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">Bike Ride</a>
              </li>
              <li>
                <a href="/">Run</a>
              </li>
              <li>
                <a href="/">Weights</a>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </section>
  );
}

export default WorkoutForm;
