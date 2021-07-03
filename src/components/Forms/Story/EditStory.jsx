import React, { Component } from "react";
import * as storyService from "../../../services/Story.js";
import { QUERY, STORY } from "../../../utils/queryConsts.js";
import "./Story.css";

export default class EditStory extends Component {
  state = {
    // title: this.props.location.story.title,
    // genre: this.props.location.story.genre,
    // text: this.props.location.story.text,
  };

  componentDidMount() {
    storyService.getStory(this.props.match.params.id, {
      [QUERY.POPULATE]: [STORY.AUTHOR, STORY.VIDEOS],
    }).then((story) => {
      console.log("Story: ", story)
      this.setState({
        title: story.data.title,
        genre: story.data.genre,
        text: story.data.text,
      })
    })
  }

  changeHandler = (event) => {
    const input = event.target.name;
    const value = event.target.value;
    this.setState({
      [input]: value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();

    storyService
      .updateStory(this.props.match.params.id, this.state)
      .then((responseFromDB) => {
        console.log("DB Response: ", responseFromDB);
        this.props.history.push(`/story/${responseFromDB.data._id}`);
      });
  };

  render() {
    // console.log(this.props);
    const { title, text, genre } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler} className="story-form">
          <input
            type="text"
            name="title"
            // placeholder={title}
            value={title}
            onChange={this.changeHandler}
            className="story-form-title"
          />
          <select
            name="genre"
            // placeholder={genre}
            value={genre}
            onChange={this.changeHandler}
          >
            <option value="Action/Adventure">Action/Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Romantic Comedy">Romantic Comedy</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller/Mystery">Thriller/Mystery</option>
          </select>
          <textarea
            name="text"
            id="text"
            // placeholder={text}
            value={text}
            onChange={this.changeHandler}
            // rows="26"
          ></textarea>
          <div>
            <button type="submit">Post Story</button>
          </div>
        </form>
      </div>
    );
  }
}
