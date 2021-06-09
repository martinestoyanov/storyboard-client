import React, { Component } from "react";
import "./Video.css";

export default class Video extends Component {
  state = {
    url: "",
    genre: "",
  };

  changeHandler = (event) => {
    const input = event.target.name;
    const value = event.target.value;
    this.setState({
      [input]: value,
    });
  };

  selectionHandler = (event) => {};

  submitHandler = (event) => {
    event.preventDefault();
    // "service" is not correct/"createVideo" has not be created yet
    service.createVideo(this.state).then((responseFromDB) => {
      console.log(responseFromDB);
      //   "/storytellers" has not been created yet
      this.props.push("/storytellers");
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <select
            name="genre"
            value={this.state.value}
            onChange={this.selectionHandler}
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
          <input
            type="text"
            name="url"
            placeholder="Paste url here."
            value={this.state.url}
            onChange={this.changeHandler}
          />
          <button type="submit">Post Your Movie!</button>
        </form>
      </div>
    );
  }
}
