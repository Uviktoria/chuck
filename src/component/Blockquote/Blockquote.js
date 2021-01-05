import React from "react";
import "./Blockquote.css";

const Blockquote = props => {
  const { children } = props;
  return (
    <div className="mainQuoteBox">
      <blockquote>
        <p>{children}</p>
      </blockquote>
    </div>
  );
};

export default Blockquote;
