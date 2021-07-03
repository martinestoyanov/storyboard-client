import React, { Component } from "react";
import "./TopContentPage.css";
// import StoryDisplay from "../../components/Story/StoryDisplay";
import VideoDisplay from "../../components/Video/VideoDisplay";
import { topContent } from "../../services/Story";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import ShowMoreText from "react-show-more-text";
import ProfilePic from "../../images/profile-silhouette.png";

export default class TopContentPage extends Component {
  state = {};

  componentDidMount() {
    topContent().then((res) => {
      this.setState(res);
    });
  }

  render() {
    if (this.state.status) {
      return (
        <div>
          <h2>Top 10 Stories by upvotes</h2>
          {this.state.data.map((eachStory, index) => (
            <div className="story-preview">
              <Link to={`/story/${eachStory._id}`}>
                <div>
                  <h3 className="preview-title">{eachStory.title}</h3>
                  <div className="preview-details">
                    <div className="preview-user-details">
                      <img
                        src={eachStory.author[0].pictureURL || ProfilePic}
                        alt="Profile pic."
                      />
                      <b>
                        <p className="preview-user">
                          {eachStory.author[0].username}
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
                    <p className="preview-likes">{eachStory.total_upvotes} Likes</p>
                    <p className="preview-videos">
                      {eachStory.video_contributions.length} Movies
                    </p>
                    <p className="preview-comments">
                      {eachStory.comments.length} Comments
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      );
    } else return <h1>Hang tight...</h1>;
  }
}
