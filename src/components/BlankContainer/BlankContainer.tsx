import React, { ReactNode } from "react";
import "./BlankContainer.css";

type BlankContainerProps = {
  children: ReactNode;
};

const BlankContainer: React.FC<BlankContainerProps> = (props) => {
  return <main className="blank-container">{props.children}</main>;
};

export default BlankContainer;
