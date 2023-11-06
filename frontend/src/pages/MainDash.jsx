import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DashSection from "../components/dashboards/DashSection";
import Spinner from "../components/Spinner";
import { reset } from "../features/auth/authSlice";
import { getRides, reset as resetRide } from "../features/rides/rideSlice";
import { getRuns, reset as resetRun } from "../features/runs/runSlice";
import {
  getWeights,
  reset as resetWeights,
} from "../features/weight/weightSlice";

function MainDash() {
  const featWeight = false;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const {
    runs,
    isLoading: runLoading,
    isError: runError,
    message: runMessage,
  } = useSelector((state) => state.runs);
  const {
    rides,
    isLoading: rideLoading,
    isError: rideError,
    message: rideMessage,
  } = useSelector((state) => state.rides);
  const {
    weights,
    isLoading: weightLoading,
    isError: weightError,
    message: weightMessage,
  } = useSelector((state) => state.weights);

  useEffect(() => {
    if (runError) {
      toast.error(runMessage, {
        position: toast.POSITION.TOP_RIGHT,
        className: "alert alert-error",
      });
    } else if (rideError) {
      toast.error(rideMessage, {
        position: toast.POSITION.TOP_RIGHT,
        className: "alert alert-error",
      });
    } else if (weightError) {
      toast.error(weightMessage, {
        position: toast.POSITION.TOP_RIGHT,
        className: "alert alert-error",
      });
    }

    if (!user) {
      navigate("/login");
    } else {
      dispatch(getRuns());
      dispatch(getRides());
      dispatch(getWeights());
    }

    return () => {
      dispatch(reset());
      dispatch(resetRun());
      dispatch(resetRide());
      dispatch(resetWeights());
    };
  }, [user, runError, rideError, weightError]);

  if (runLoading || rideLoading || weightLoading) {
    return <Spinner />;
  }

  return (
    <div className="mx-auto px-2 flex flex-col justify-around items-center text-center">
      <h2 className="text-5xl lg:text-8xl pb-8">
        Welcome {user ? user.name : ""}!
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 justify-around w-full h-full">
        <DashSection data={runs} type="Run" title="Runs" />
        <DashSection data={rides} type="Ride" title="Bike Rides" />
        {featWeight && <DashSection data={weights} type="Weight" title="Weights" />}
      </div>
    </div>
  );
}

export default MainDash;
