import React from "react";

const Rainbow = WrappedComponent => {
  const rainbow = ["red", "green", "blue", "pink", "yellow"];
  const randomColour = rainbow[Math.floor(Math.random() * 5)];
  const className = randomColour + "-text";
  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
