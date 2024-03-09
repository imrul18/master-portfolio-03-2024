import React from "react";
import "./LoaderLogo.css";
import image from "./logo.gif";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={image} alt="Loading..." style={{ height: "60%" }} />
    );
  }
}

export default LogoLoader;
