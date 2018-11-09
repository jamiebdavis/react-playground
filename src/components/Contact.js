import React from "react";

const Contact = props => {
  console.log(props);

  /*   setTimeout(() => {
    props.history.push("/about");
  }, 2000); */

  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora minima
        laudantium praesentium quidem quibusdam perferendis optio totam, atque,
        obcaecati ut cum veritatis quas! Esse hic rem, recusandae nisi facere
        dignissimos.
      </p>
    </div>
  );
};

export default Contact;
