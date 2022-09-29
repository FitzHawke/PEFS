import React from "react";

function Spinner() {
  return (
    <div className="flex items-center justify-center space-x-2 animate-pulse align-middle h-screen">
      <div className="w-8 h-8 bg-primary rounded-full" />
      <div className="w-8 h-8 bg-primary rounded-full" />
      <div className="w-8 h-8 bg-primary rounded-full" />
    </div>
  );
}

export default Spinner;
