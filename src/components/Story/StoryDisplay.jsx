import React, { Component } from "react";
import { getStory } from "../../services/Story";

export default class StoryDisplay extends Component {
  state = {};

  componentDidMount = () => {
    getStory(this.props.id).then((story) => {
      this.setState(story);
    });
  };

  render() {
    console.log(this.state.data);
    
    if (this.state.status) {
      const { text, title, user, genre, createdAt } = this.state.data;
      return (
        <div>
          <h3>{title}</h3>
          <p>{user}</p>
          <p>{genre}</p>
          <p>{text}</p>
          <p>{createdAt}</p>
        </div>
      );
    } else return <div></div>;

  }
}
