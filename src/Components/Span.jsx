import React from "react";

function Span(props) {
  return (
    <>
      <dt>
        <span className="emoji">
          <a href={props.siteurl} target="blank">
            <img src={props.imgurl} alt={props.type}></img>
          </a>
        </span>
        <br/>
        <span>{props.name}</span>
      </dt>
    </>
  );
}

export default Span;
