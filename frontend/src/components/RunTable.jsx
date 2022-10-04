import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getRuns, reset } from "../features/runs/runSlice";
import RunRow from "./RunRow";
import Spinner from "./Spinner";

function RunTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { runs, isLoading, isError, message } = useSelector(
    (state) => state.runs
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getRuns());
    }

    return () => dispatch(reset());
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Run Time</th>
          <th>Run Length</th>
          <th>Distance</th>
          <th>Pace</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {runs.length > 0 ? (
          runs.map((run, i) => (
            // eslint-disable-next-line no-underscore-dangle
            <RunRow key={run._id} index={i} run={run} />
          ))
        ) : (
          <tr>
            <td>You have not set any workouts</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default RunTable;
