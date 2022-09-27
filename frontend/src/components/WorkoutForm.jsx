import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '../features/ui/modalSlice';
import { createWorkout } from '../features/workouts/workoutSlice';

function WorkoutForm() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    //dispatch(createWorkout({ text }));
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
              className="dropdown-content translate-x-[-50%] left-[50%] menu p-2 shadow bg-base-100 rounded-box w-68"
            >
              <li>
                <a className='text-center w-60' onClick={() => dispatch(showModal('run'))}>New Run</a>
              </li>
              <li>
                <a className='text-center w-60' onClick={() => dispatch(showModal('ride'))}>
                  New Bike Ride
                </a>
              </li>
              <li>
                <a className='text-center w-60' onClick={() => dispatch(showModal('weight'))}>
                  New Weightlifting Session
                </a>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </section>
  );
}

export default WorkoutForm;
