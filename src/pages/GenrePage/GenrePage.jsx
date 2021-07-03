import React, { Component } from "react";
import "./GenrePage.css";
import { getStories } from "../../services/Story";
import { QUERY, STORY, GENRE } from "../../utils/queryConsts";
import dateFormat from "dateformat";
import ShowMoreText from "react-show-more-text";
import { Link } from "react-router-dom";
// Temporary profile pic
import ProfilePic from "../../images/profile-silhouette.png";

export default class GenrePage extends Component {
  state = {};

  componentDidMount = () => {
    const { genrename } = this.props.match.params;
    // console.log("genrename", genrename);
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
      // console.log(result.data)
      this.setState({
        stories: result.data,
        genre,
      });
    });
  };

  render() {
    // console.log(this.state)
    if (!this.state.stories || this.state.stories.total === 0) {
      return (
        <div>
          <h1>{this.state.genre}</h1>
          <h2>No stories in this Genre!</h2>
        </div>
      );
    } else {
      // console.log(this.state.stories.stories);
      return (
        <div>
          <h1>{this.state.genre}</h1>
          {this.state.stories.stories.map((eachStory, index) => (
            <div className="story-preview">
              <Link to={`/story/${eachStory._id}`}>
                <div>
                  <h3 className="preview-title">{eachStory.title}</h3>
                  <div className="preview-details">
                    <div className="preview-user-details">
                      <img src={eachStory.author.pictureURL || ProfilePic} alt="Profile pic." />
                      <b>
                        <p className="preview-user">
                          {eachStory.author.username}
                        </p>
                      </b>
                    </div>
                    <b>
                      <p className="preview-date">
                        {dateFormat(eachStory.createdAt, "mmmm dS, yyyy")}
                      </p>
                    </b>
                  </div>
                  <ShowMoreText className="preview-text" more="" lines={5}>
                    <p>{eachStory.text}</p>
                  </ShowMoreText>
                  <div className="preview-info">
                    <p className="preview-likes"># of Likes</p>
                    <p className="preview-videos">{eachStory.video_contributions.length} Movies</p>
                    <p className="preview-comments">{eachStory.comments.length} Comments</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      );
    }
  }
}
