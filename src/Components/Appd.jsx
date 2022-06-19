import React from "react";
import Block from "./Block";
import dcpedia from "../dcpedia";

function createBlock(merch) {
  return (
    <Block
      key={merch.id}
      site={merch.siteurl}
      img={merch.imgurl}
      name={merch.name}
      review={merch.review}
      rating={merch.rating}
      type="dc"
    />
  );
}


function Appd(props) {
  return (
    <div>
      <h1>
        <span className="dHead">DC</span>
      </h1>
      <dl className="dictionary">{dcpedia.map(createBlock)}</dl>
    </div>
  );
}

export default Appd;
