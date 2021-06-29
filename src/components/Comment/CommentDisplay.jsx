import React, { Component } from "react";
import ProfilePic from "../../images/profile-silhouette.png";
import ShowMoreText from "react-show-more-text";
import "./CommentDisplay.css";

export default class CommentDisplay extends Component {
  state = {};

  // componentDidMount() {
  //   this.setState(this.props);
  // }

  render() {
    console.log(this.props);
    return (
      <div className="comments">
        <div className="comment-info">
          <div className="user-info">
            <img src={ProfilePic} alt="Profile Pic" />
            <b>
              <p className="username">SomeUsername</p>
            </b>
          </div>
          <b>
            <p className="date">Date posted</p>
          </b>
        </div>
        <ShowMoreText className="text" lines={2}>
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium obcaecati voluptates, earum exercitationem delectus
            mollitia velit aperiam facilis est esse eligendi pariatur porro
            iusto nulla doloremque inventore temporibus reprehenderit quisquam
            rerum ea! Accusamus fugit error laborum dolores eum consectetur
            saepe, deserunt corrupti magnam alias consequatur quidem, numquam id
            ad laudantium quisquam excepturi non perspiciatis nobis iure rerum
            mollitia soluta reiciendis aliquam. Ducimus nemo assumenda
            laboriosam! Debitis vel voluptatum corporis, quo laudantium tenetur
            nobis nam ex fugit quae dolorum doloribus nihil fugiat, laborum,
            esse voluptates repellendus sed! Deleniti accusantium accusamus amet
            nemo eum. Libero veniam voluptatem, deserunt qui repellat animi
            architecto?
          </p>
        </ShowMoreText>
        <div className="comment-info">
          <p># of Likes</p>
          <div className="button-div">
            {this.props.user ? (
              <>
                <button type="button" className="btn like-btn">
                  Like
                </button>
              </>
            ) : (
              <div></div>
            )}
            <button type="button" className="btn edit-btn">
              Edit
            </button>
            <button type="button" className="btn edit-btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
