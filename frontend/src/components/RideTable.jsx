import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getRides, reset } from "../features/rides/rideSlice";
import RideRow from "./RideRow";
import Spinner from "./Spinner";

function RideTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { rides, isLoading, isError, message } = useSelector(
    (state) => state.rides
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getRides());
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
          <th>Ride Time</th>
          <th>Ride Length</th>
          <th>Distance</th>
          <th>Pace</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {rides.length > 0 ? (
          rides.map((ride, i) => (
            // eslint-disable-next-line no-underscore-dangle
            <RideRow key={ride._id} index={i} ride={ride} />
          ))
        ) : (
          <tr>
            <td>You have no bike rides stored yet!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default RideTable;
