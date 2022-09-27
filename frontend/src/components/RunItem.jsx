import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteRun } from '../features/runs/runSlice';

function RunItem({ run }) {
    const dispatch = useDispatch();
    console.log(run)
    
    return (
        <div className='workout'>
            <div>Date {new Date(run.createdAt).toLocaleString('en-US')}</div>
            <h2>Run Started: {run.startTime}</h2>
            <h2>Run Ended:{run.endTime}</h2>
            <h2>Run Length (min):{run.runTime}</h2>
            <h2>Run Distance:{run.distance}</h2>
            <h2>Run Pace (Kmh):{run.pace}</h2>
            <button
                onClick={() => dispatch(deleteRun(run._id))}
                className='close'
            >
                X
            </button>
        </div>
    );
}

export default RunItem;
