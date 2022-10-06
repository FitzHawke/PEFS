import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getRuns, reset } from "../features/runs/runSlice";
import LineChart from "./LineChart";

function RunDash() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { runs, isError, message } = useSelector((state) => state.runs);
  const [selections, setSelections] = useState({
    paceOrDistance: "distance",
    numsOrDate: "numbers",
    displayNum: "10",
  });

  const { displayNum } = selections;

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

  function onChange(e) {
    setSelections({
      ...selections,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="mx-auto px-2 max-w-5xl flex flex-col justify-center items-center h-full">
      <LineChart
        rawData={runs}
        pod={selections.paceOrDistance}
        nod={selections.numsOrDate}
        disNum={displayNum}
      />
      <div>
        <div>
          <input
            type="radio"
            name="paceOrDistance"
            className="radio radio-accent"
            checked={selections.paceOrDistance === "distance"}
            value="distance"
            onChange={onChange}
          />
          <input
            type="radio"
            name="paceOrDistance"
            className="radio radio-accent"
            checked={selections.paceOrDistance === "pace"}
            value="pace"
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="radio"
            name="numsOrDate"
            className="radio radio-accent"
            checked={selections.numsOrDate === "numbers"}
            value="numbers"
            onChange={onChange}
          />
          <input
            type="radio"
            name="numsOrDate"
            className="radio radio-accent"
            checked={selections.numsOrDate === "date"}
            value="date"
            onChange={onChange}
          />
        </div>
        {runs && (
          <input
            name="displayNum"
            type="range"
            min="1"
            max={`${runs.length}`}
            value={displayNum}
            className="range range-accent"
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
}

export default RunDash;
