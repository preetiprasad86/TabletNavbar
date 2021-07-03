import React from "react";
import Group86 from "../Group86";
import Frame27 from "../Frame27";
import Carbonclose from "../Carbonclose";
import "./Group213.css";

function Group213(props) {
  const { group86Props, frame27Props, carboncloseProps } = props;

  return (
    <div className="group-213">
      <div className="flex-col">
        <Group86 group85={group86Props.group85} whiteProps={group86Props.whiteProps} />
        <Frame27 {...frame27Props} />
      </div>
      <Carbonclose src={carboncloseProps.src} />
    </div>
  );
}

export default Group213;
