import React, { Component } from "react";
import EditStory from "../../components/Forms/Story/EditStory";
import "./WriteStoryPage.css";

export default class EditStoryPage extends Component {
  id = () => {
    
  }

  render() {
    console.log(this.props.match.params.id);
    // let id = 
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
