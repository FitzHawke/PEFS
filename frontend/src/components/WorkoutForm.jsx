import React from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '../features/ui/modalSlice';

function WorkoutForm() {
  const dispatch = useDispatch();

  return (
    <section className="flex flex-row flex-wrap justify-center gap-2">
      <button className='btn btn-primary btn-wide' onClick={() => dispatch(showModal('run'))}>
        Add New Run
      </button>
      <button className='btn btn-primary btn-wide tooltip' data-tip="Coming Soon!" onClick={() => dispatch(showModal('ride'))}>
        Add New Bike Ride
      </button>
      <button className='btn btn-primary btn-wide tooltip' data-tip="Coming Soon!" onClick={() => dispatch(showModal('weight'))}>
        Add New Weightlifting Session
      </button>
    </section>
  );
}

export default WorkoutForm;
