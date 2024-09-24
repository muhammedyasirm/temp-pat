import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-transparent">
      <div className="animate-spin  rounded-full w-10 h-10 border-t-2 border-b-2 border-primary-orange" />
      <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-primary-green ml-3" />
      <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-primary-blue ml-3" />
    </div>
  );
};

export default Loader;
