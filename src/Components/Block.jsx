import React from "react";
import Span from "./Span";
import Info from "./Info";

function Block(props) {
  return (
    <>
      <div className="term" id={props.key}>
        <Span name={props.name} imgurl={props.img} siteurl={props.site} type={props.type}/>
        <Info rating={props.rating} review={props.review}/>
      </div>
    </>
  );
}

export default Block;

