import React from "react";
import "./style.css";

export default function Cards(props) {
  return (
    <div className="complete">
      <div className="image">
        <img
          src={props.image}
          alt=""
        />
      </div>
      <div className="white">
        <p>{props.name}</p>
      </div>
    </div>
  );
}
