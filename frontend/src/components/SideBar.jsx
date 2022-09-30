import React from "react";

function SideBar() {
  return (
    <div className="drawer drawer-mobile">
      {
        // <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      }
      <div className="drawer-content flex flex-col items-center justify-center">
        {
          // Page content here
          // <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>}
        }
      </div>
      <div className="drawer-side">
        {
          // <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        }
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {
            // Sidebar content here
          }
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/">Runs</a>
          </li>
          <li>
            <a href="/">Bike Rides</a>
          </li>
          <li>
            <a href="/">Workouts</a>
          </li>
          <li>
            <a href="/">Settings</a>
          </li>
          <li>
            <a href="/">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
