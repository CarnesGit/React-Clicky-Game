import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className= {props.loseWrapper==="true" ? "wrapperLose" : "wrapper"}>{props.pictures}</div>;

export default Wrapper;
