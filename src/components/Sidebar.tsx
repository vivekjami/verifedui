import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed right-3 top-1 h-screen flex flex-col justify-center items-center ">
      <div className="h-4/5 flex flex-col justify-evenly">
        <div className="border border-gray-400 rounded-full p-1">
          <div className="h-2 w-2 rounded-full bg-secondary"></div>
        </div>
        <div className="border border-gray-400 rounded-full p-1">
          <div className="h-2 w-2 rounded-full bg-secondary"></div>
        </div>
        <div className="border border-gray-400 rounded-full p-1">
          <div className="h-2 w-2 rounded-full bg-secondary"></div>
        </div>
        <div className="border border-gray-400 rounded-full p-1">
          <div className="h-2 w-2 rounded-full bg-secondary"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
