import React from "react";
import Block from "./Block";
import marvelpedia from "../marvelpedia";

function createBlock(merch) {
  return (
    <Block
      key={merch.id}
      site={merch.siteurl}
      img={merch.imgurl}
      name={merch.name}
      review={merch.review}
      rating={merch.rating}
      type="marvel"
    />
  );
}

function Appm(props) {
  return (
    <div>
      <h1>
        <span className="mHead">Marvel</span>
      </h1>
      <dl className="dictionary">{marvelpedia.map(createBlock)}</dl>
    </div>
  );
}

export default Appm;
