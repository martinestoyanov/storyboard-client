import React, { Component } from "react";
import "./GenrePage.css";
import { getStories } from "../../services/Story";
import { QUERY, STORY, GENRE } from "../../utils/queryConsts";
import { Link } from "react-router-dom";

export default class GenrePage extends Component {
  state = {};

  componentDidMount = () => {
    const { genrename } = this.props.match.params;
    console.log("genrename", genrename);
    let genre;
    switch (genrename) {
      case "action-adventure":
        genre = GENRE.ACTION_ADVENTURE;
        break;
      case "comedy":
        genre = GENRE.COMEDY;
        break;
      case "drama":
        genre = GENRE.DRAMA;
        break;
      case "fantasy":
        genre = GENRE.FANTASY;
        break;
      case "horror":
        genre = GENRE.HORROR;
        break;
      case "romance":
        genre = GENRE.ROMANCE;
        break;
      case "romcom":
        genre = GENRE.ROMCOM;
        break;
      case "scifi":
        genre = GENRE.SCIFI;
        break;
      case "thriller-mystery":
        genre = GENRE.THRILLER_MYSTERY;
        break;
      default:
    }

    // console.log("checking", this.state);
    // this.setState({ genre });
    getStories({
      [QUERY.GENRE]: genre,
      [QUERY.POPULATE]: [STORY.AUTHOR],
    }).then((result) => {
      this.setState({
        stories: result.data,
        genre,
      });
    });
  };

  render() {
    
    if (!this.state.stories || this.state.stories.total === 0) {
      return (
        <div>
          <h1>{this.state.genre}</h1>
          <h2>No stories in this Genre!</h2>
        </div>
      );
    } else {
      return (
        <div>
          <h1>{this.state.genre}</h1>
          {this.state.stories.stories.map((eachStory, index) => (
            <div>
              <Link to={`/story/${eachStory._id}`}>
                <div>
                  <h1>{eachStory.title}</h1>
                  <h3>{eachStory.user.username}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      );
    }
  }
}
