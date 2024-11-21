import React from "react";
import brackets from "../assets/svg/Brackets";

const Tagline = ({ classname, children }) => {
  return (
    <div className={`flex items-center tagline ${classname || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default Tagline;
