import React, { Component } from "react";
import StoryDisplay from "../../components/Story/StoryDisplay";
import "./RandomPage.css";
import { getStories } from "../../services/Story";
import { QUERY, STORY } from "../../utils/queryConsts";

export default class RandomPage extends Component {
  state = {};

  //  This version renders StoryDisplay component but bypasses story page
  //  Must uncomment render function to work
  
  componentDidMount() {
    // console.log("Running random getStories")
    getStories({
      [QUERY.RANDOM]: true,
      [QUERY.POPULATE]: [STORY.AUTHOR],
    }).then((result) => {
      this.setState({
        result,
      });
    });
  }

  // This version reroutes to the story route with the id but requires two back button presses to return from.

  // componentDidMount() {
  //   getStories({
  //     [QUERY.RANDOM]: true,
  //     [QUERY.POPULATE]: [STORY.AUTHOR],
  //   }).then((result) => {
  //     console.log("result",result.data.randomStory._id);
  //     this.props.history.push(`/story/${result.data.randomStory._id}`);
  //   });
  // }

  render() {
    // console.log(this.state.result);
    return (
      <div>
        {this.state.result ? (
          <>
            <StoryDisplay queried fromRandom {...this.state.result} user={this.props}
            // eachComment={this.state.result.data.randomStory.comments}
             />
          </>
        ) : (
          <h1>Loading a random story. Hang tight...</h1>
        )}
      </div>
    );
  }
}
