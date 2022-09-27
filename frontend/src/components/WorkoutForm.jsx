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
    <section className="flex flex-row flex-wrap justify-center gap-2">
      <button className='btn btn-primary btn-wide' onClick={() => dispatch(showModal('run'))}>
        Add New Run
      </button>
      <button className='btn btn-primary btn-wide' onClick={() => dispatch(showModal('ride'))}>
        Add New Bike Ride
      </button>
      <button className='btn btn-primary btn-wide' onClick={() => dispatch(showModal('weight'))}>
        Add New Weightlifting Session
      </button>
    </section>
  );
}

export default WorkoutForm;
