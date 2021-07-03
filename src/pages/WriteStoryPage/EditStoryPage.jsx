import React, { Component } from "react";
import EditStory from "../../components/Forms/Story/EditStory";
import "./WriteStoryPage.css";

export default class EditStoryPage extends Component {

  render() {
    // console.log(this.props.location.story._id);
    return (
      <div>
        <h2>Edit Your Story</h2>
        <div className="write-story">
          <div className="story-directions">
            <p>
              Let's make some edits!
            </p>
          </div>
          <div className="story-form">
            <EditStory {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}
