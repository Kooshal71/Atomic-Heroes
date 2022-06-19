import React from "react";

function Info(props) {
  return (
    <>
      <dd>{props.review}</dd>
      <dd>{props.rating}</dd>
    </>
  );
}

export default Info;
