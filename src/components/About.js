import React from "react";
import Rainbow from "../hoc/rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora minima
        laudantium praesentium quidem quibusdam perferendis optio totam, atque,
        obcaecati ut cum veritatis quas! Esse hic rem, recusandae nisi facere
        dignissimos.
      </p>
    </div>
  );
};

export default Rainbow(About);
