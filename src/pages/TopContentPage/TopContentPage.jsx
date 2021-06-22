import React, { Component } from "react";
import "./TopContentPage.css";
// import StoryDisplay from "../../components/Story/StoryDisplay";
import VideoDisplay from "../../components/Video/VideoDisplay";

export default class TopContentPage extends Component {
  render() {
    return (
      <div>
        <h2>This is the Top Content Page</h2>
        {/* Line below is for testing individual components */}
        {/* <StoryDisplay id="60ca3b88b9b97df2497d244d" /> */}
        <VideoDisplay />
        <div className="top-content-carousel">
          <h4>Top Content Carousel</h4>
          <p>Carousel of the most liked story from each genre.</p>
        </div>
        <div className="newest-content">
          <h3>Newest Content</h3>
          <p>List of 10 newest stories.</p>
        </div>
      </div>
    );
  }
}
