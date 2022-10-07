import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getRides, reset } from "../features/rides/rideSlice";
import { showModal } from "../features/ui/modalSlice";
import LineChart from "./LineChart";
import Spinner from "./Spinner";

function RideDash() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { rides, isLoading, isError, message } = useSelector(
    (state) => state.rides
  );
  const [selections, setSelections] = useState({
    displayNum: `${Math.min(Math.max(2, rides.length), 10)}`,
    chartDisplay: "pn",
  });

  const { displayNum, chartDisplay } = selections;

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

  function onChange(e) {
    setSelections({
      ...selections,
      [e.target.name]: e.target.value,
    });
  }

  function onNumChange(e) {
    if (e.target.value > rides.length) {
      setSelections({
        ...selections,
        [e.target.name]: rides.length,
      });
    } else {
      setSelections({
        ...selections,
        [e.target.name]: e.target.value,
      });
    }
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mx-auto px-2 max-w-5xl flex flex-col justify-center gap-4 items-center h-full">
      {rides.length < 2 ? (
        <div className="flex flex-col h-48 gap-4 justify-center items-center">
          <h3>Add more Bike Rides to view a nice graph here!</h3>
          <button
            className="btn btn-accent btn-wide"
            type="button"
            onClick={() => dispatch(showModal({ type: "ride" }))}
          >
            Add New Bike Ride
          </button>
        </div>
      ) : (
        <>
          <LineChart
            rawData={rides}
            pod={chartDisplay[0]}
            nod={chartDisplay[1]}
            disNum={displayNum}
            workoutType="Ride"
          />
          <div className="flex justify-between items-end h-20">
            <label htmlFor="chartDisplay" className="w-1/2">
              Data to be displayed on chart
              <select
                name="chartDisplay"
                id="chartDisplay"
                value={chartDisplay}
                onChange={onChange}
                className="select select-accent w-full max-w-xs"
              >
                <option name="chartDisplay" value="pn">
                  Pace With Number
                </option>
                <option name="chartDisplay" value="dn">
                  Distance With Number
                </option>
                <option name="chartDisplay" value="pd">
                  Pace With Date
                </option>
                <option name="chartDisplay" value="dd">
                  Distance With Date
                </option>
              </select>
            </label>
            <label htmlFor="display" className="w-1/2">
              <div className="flex justify-between align-middle">
                <span className="my-auto">Number of Rides to Display</span>
                <input
                  name="displayNum"
                  id="display"
                  type="text"
                  placeholder="Type here"
                  value={displayNum}
                  onChange={onNumChange}
                  className="input input-bordered input-accent w-12"
                />
              </div>
              <input
                name="displayNum"
                id="display"
                type="range"
                min="1"
                max={`${rides.length}`}
                value={displayNum}
                className="range range-accent"
                data-popup-enabled="true"
                onChange={onChange}
              />
            </label>
          </div>
        </>
      )}
    </div>
  );
}

export default RideDash;
