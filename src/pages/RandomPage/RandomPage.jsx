import React, { Component } from "react";
import StoryDisplay from "../../components/Story/StoryDisplay";
import "./RandomPage.css";

export default class RandomPage extends Component {
  render() {
    return (
      <div>
        <h1>This is a Random Story page.</h1>
        <StoryDisplay />
      </div>
    );
  }
}
