import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getWeights, reset } from "../../features/weight/weightSlice";
import WeightRow from "./WeightRow";
import Spinner from "../Spinner";

function WeightTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { weights, isLoading, isError, message } = useSelector(
    (state) => state.weights
  );

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
        className: "alert alert-error",
      });
    }

    if (!user) {
      navigate("/login");
    } else {
      dispatch(getWeights());
    }

    return () => dispatch(reset());
  }, [user, isError]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Weight Time</th>
          <th>Weight Length</th>
          <th>Distance</th>
          <th>Pace</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {weights.length > 0 ? (
          weights.map((weight, i) => (
            // eslint-disable-next-line no-underscore-dangle
            <WeightRow
              key={weight._id}
              index={weights.length - 1 - i}
              weight={weight}
            />
          ))
        ) : (
          <tr>
            <td>You have no bike weights stored yet!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default WeightTable;
