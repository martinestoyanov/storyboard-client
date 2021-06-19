import React, { Component } from "react";
import NoVideoInspiration from "../../components/Inspiration/NoVideoInspiration";
import MostVideoInspiration from "../../components/Inspiration/MostVideoInspiration";
import MostCommentInspiration from "../../components/Inspiration/MostCommentInspiration";
import "./InspirationPage.css";

export default class InspirationPage extends Component {
  render() {
    return (
      <div>
        <h2>Inspiration</h2>
        <NoVideoInspiration />
        <MostVideoInspiration />
        <MostCommentInspiration />
      </div>
    );
  }
}
