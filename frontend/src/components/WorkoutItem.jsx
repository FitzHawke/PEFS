import React from "react";
import { useDispatch } from "react-redux";
import { deleteWorkout } from "../features/workouts/workoutSlice";

function WorkoutItem({ workout }) {
  const dispatch = useDispatch();

  return (
    <div className="workout">
      <div>{new Date(workout.createdAt).toLocaleString("en-US")}</div>
      <h2>{workout.text}</h2>
      <button
        // eslint-disable-next-line no-underscore-dangle
        onClick={() => dispatch(deleteWorkout(workout._id))}
        className="close"
        type="button"
      >
        X
      </button>
    </div>
  );
}

export default WorkoutItem;
