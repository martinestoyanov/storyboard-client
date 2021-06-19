import React, { Component } from "react";
import { getStory } from "../../services/Story";

export default class StoryDisplay extends Component {
  state = {};

  componentDidMount = () => {
    // const storyQuery = axios.create({
    //   baseURL: `${process.env.REACT_APP_SERVER_URL}/story`,
    // });
    // storyQuery.get(`/${this.props.id}`).then((story) => {
    //   this.setState(story).catch((err) => {
    //     console.log(err);
    //   });
    // });

    getStory(this.props.id).then((story) => {
      this.setState(story);
    });
  };

  render() {
    console.log(this.state.data);

    if (this.state.status) {
      return <div>{this.state.data.text}</div>;
    } else return <div></div>;
    // return <div></div>;
  }
}
