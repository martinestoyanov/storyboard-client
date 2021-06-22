import React, { Component } from "react";
import StoryDisplay from "../../components/Story/StoryDisplay";
import "./SingleStoryPage.css";

export default class SingleStoryPage extends Component {
  render() {
    //   console.log(this.props)
      const { id } = this.props.match.params;
    return (
      <div>
        <h2>This page displays a single story.</h2>
        <StoryDisplay id={id} />
      </div>
    );
  }
}
