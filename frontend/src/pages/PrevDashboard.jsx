import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import WorkoutForm from "../components/WorkoutForm";
import Spinner from "../components/Spinner";
import RunItem from "../components/RunItem";
import { getRuns, reset } from "../features/runs/runSlice";

function PrevDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { runs, isLoading, isError, message } = useSelector(
    (state) => state.run
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
    <>
      <div className="hero h-1/2 bg-base-200">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">Welcome {user && user.name}</h1>
            <p className="py-6">Workouts Dashboard</p>
            <WorkoutForm />
          </div>
        </div>
      </div>
      <section className="bg-base-200 p-2">
        {runs.length > 0 ? (
          <div className="flex flex-row flex-wrap gap-2 justify-center">
            {runs.map((run) => (
              // eslint-disable-next-line no-underscore-dangle
              <RunItem key={run._id} run={run} />
            ))}
          </div>
        ) : (
          <h3>You have not set any workouts</h3>
        )}
      </section>
    </>
  );
}

export default PrevDashboard;
