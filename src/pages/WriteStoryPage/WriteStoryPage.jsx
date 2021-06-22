import React, { Component } from "react";
import StoryForm from "../../components/Forms/Story/Story";
import "./WriteStoryPage.css";

export default class WriteStoryPage extends Component {
  render() {
    return (
      <div>
      <h2>Write a Story</h2>
        <div className="write-story">
          <div className="story-directions">
            <p>
              Feel free to create a title for your short story, select a genre,
              and let the magic happen!
            </p>
          </div>
          <div className="story-form">
            <StoryForm />
          </div>
        </div>
      </div>
    );
  }
}
