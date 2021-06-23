import React, { Component } from "react";
import StoryDisplay from "../../components/Story/StoryDisplay";
import "./SingleStoryPage.css";

export default class SingleStoryPage extends Component {
  render() {
      console.log(this.props.user)
      const { id } = this.props.match.params;
    return (
      <div>
        <StoryDisplay id={id}  {...this.props}/>
      </div>
    );
  }
}
