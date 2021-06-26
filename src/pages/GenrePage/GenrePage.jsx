import React, { Component } from "react";
import "./GenrePage.css";
import { getStories } from "../../services/Story";
import { QUERY, STORY, GENRE } from "../../utils/queryConsts";

export default class GenrePage extends Component {
  state = {};

  componentDidMount = () => {
    const { genrename } = this.props.match.params;
    console.log(this.state);
    if (this.props.match.params === "action-adventure")
      this.setState({ genre: [GENRE.ACTIONADVENTURE] });
    if (this.props.match.params === "comedy")
      this.setState({ genre: [GENRE.COMEDY] });
    if (this.props.match.params === "drama")
      this.setState({ genre: [GENRE.DRAMA] });
    if (this.props.match.params === "fantasy")
      this.setState({ genre: [GENRE.FANTASY] });
    if (this.props.match.params === "horror")
      this.setState({ genre: [GENRE.HORROR] });
    if (this.props.match.params === "romance")
      this.setState({ genre: [GENRE.ROMANCE] });
    if (this.props.match.params === "romcom")
      this.setState({ genre: [GENRE.ROMCOM] });
    if (this.props.match.params === "scifi")
      this.setState({ genre: [GENRE.SCIFI] });

    getStories({
      [QUERY.GENRE]: this.state.genre,
      [QUERY.POPULATE]: [STORY.AUTHOR],
    }).then((result) => {
      this.setState({ stories: result.data, genre: genrename });
    });
  };

  render() {
    if (!this.state.stories || this.state.stories.total === 0) {
      return <div>No stories in this Genre!</div>;
    } else {
      return (
        <div>
          {this.state.stories.stories.map((eachStory, index) => (
            <>
              <h1>{eachStory.title}</h1>
              <h3>{eachStory.user.username}</h3>
            </>
          ))}
        </div>
      );
    }
  }
}
