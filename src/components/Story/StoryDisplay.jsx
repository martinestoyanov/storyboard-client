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
    // console.log(this.state.data);
    
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
    // return <div></div>;
  }
}
