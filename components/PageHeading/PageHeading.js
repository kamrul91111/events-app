import React from "react";
import classes from "./pageheading.module.css";

const PageHeading = ({text, color}) => {
  return (
    <div className={classes.headingContainer} style={{backgroundColor: color}}>
      <h2>{text}</h2>
    </div>
  );
};

export default PageHeading;
