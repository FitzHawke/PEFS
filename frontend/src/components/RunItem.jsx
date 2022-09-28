import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteRun } from '../features/runs/runSlice';

function RunItem({ run }) {
  const dispatch = useDispatch();
  console.log(run);

  return (
    <div className="card w-96 bg-base-100 shadow-xl btn-active">
      <div className="card-body">
        <div className="card-actions justify-end">
          <button
            className="btn btn-square btn-sm"
            onClick={() => dispatch(deleteRun(run._id))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>Date: {new Date(run.createdAt).toLocaleString('en-US')}</div>
        <h2>Run Time: {run.startTime} - {run.endTime}</h2>
        <h2>Run Length (min):{run.runTime}</h2>
        <h2>Run Distance:{run.distance}</h2>
        <h2>Run Pace (Kmh):{run.pace}</h2>
      </div>
    </div>
  );
}

export default RunItem;
