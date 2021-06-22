import React, { Component } from "react";
import { getStory } from "../../services/Story";
import ShowMoreText from "react-show-more-text";
import dateFormat from "dateformat";
import VideoDisplay from "../Video/VideoDisplay";
import CommentDisplay from "../Comment/CommentDisplay";
import "./StoryDisplay.css";

export default class StoryDisplay extends Component {
  state = {};

  componentDidMount = () => {
    getStory(this.props.id).then((story) => {
      this.setState(story);
    });
  };

  render() {
    // console.log(this.state.data);

    if (this.state.status) {
      console.log(this.state);
      const { text, title, user, genre, createdAt } = this.state.data;
      const created = dateFormat(createdAt, "mmmm dS, yyyy");
      return (
        <div className="display-div">
          <div className="story-display">
            <h3 className="story-title">{title}</h3>
            <div className="story-details">
              <b>
                <p className="story-user">{user}</p>
              </b>
              <b>
                <p className="story-genre">{genre}</p>
              </b>
              <b>
                <p className="story-date">{created}</p>
              </b>
            </div>
            <ShowMoreText lines={5} className="story-text">
              <p className="story-text">{text}</p>
            </ShowMoreText>
            <div className="button-div">
              <button type="button" className="btn comment-btn">
                Comment
              </button>
              <button type="button" className="btn movie-btn">
                Add Movie
              </button>
            </div>
          </div>
          <div className="comment-display">
            <CommentDisplay />
          </div>
          <div className="video-display">
            <VideoDisplay className="video" />
          </div>
        </div>
      );
    } else return <div></div>;
  }
}
