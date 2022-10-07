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
    displayNum: "1",
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

  function onNumChange(e) {
    if (e.target.value > runs.length) {
      setSelections({
        ...selections,
        [e.target.name]: runs.length,
      });
    } else {
      setSelections({
        ...selections,
        [e.target.name]: e.target.value,
      });
    }
  }

  return (
    <div className="mx-auto px-2 max-w-5xl flex flex-col justify-center items-center h-full">
      {runs.length > 0 && (
        <LineChart
          rawData={runs}
          pod={chartDisplay[0]}
          nod={chartDisplay[1]}
          disNum={displayNum}
        />
      )}
      <div>
        <label htmlFor="chartDisplay">
          Data to be displayed on chart
          <select
            name="chartDisplay"
            id="chartDisplay"
            onChange={onChange}
            className="select select-accent w-full max-w-xs"
          >
            <option
              name="chartDisplay"
              selected={chartDisplay === "pn"}
              value="pn"
            >
              Pace With Number
            </option>
            <option
              name="chartDisplay"
              selected={chartDisplay === "dn"}
              value="dn"
            >
              Distance With Number
            </option>
            <option
              name="chartDisplay"
              selected={chartDisplay === "pd"}
              value="pd"
            >
              Pace With Date
            </option>
            <option
              name="chartDisplay"
              selected={chartDisplay === "dd"}
              value="dd"
            >
              Distance With Date
            </option>
          </select>
        </label>
        {runs && (
          <label htmlFor="display">
            <input
              name="displayNum"
              id="display"
              type="range"
              min="1"
              max={`${runs.length}`}
              value={displayNum}
              className="range range-accent"
              data-popup-enabled="true"
              onChange={onChange}
            />
            <input
              name="displayNum"
              id="display"
              type="text"
              placeholder="Type here"
              value={displayNum}
              onChange={onNumChange}
              className="input input-bordered input-accent w-12"
            />
            Display
          </label>
        )}
      </div>
    </div>
  );
}

export default RunDash;
