import React, { Component } from "react";
import "./Storyboard.css";
import { Link } from "react-router-dom";
import BarGraph from "../../images/bar-graph.png";
import Book from "../../images/open-book.png";
import Thinking from "../../images/thinking-silhouette.png";
import RandomCard from "../../images/random-card.png";
import ProfilePic from "../../images/profile-silhouette.png";
import * as PATHS from "../../utils/paths";

export default class Storyboard extends Component {
  render() {
    return (
      <div className="storyboard">
        <div className="panel">
          <Link to={PATHS.TOPCONTENT} className="panel-link">
            <h2>Top Content</h2>
            <img src={BarGraph} alt="Top Content" />
          </Link>
        </div>
        <div className="panel">
          <Link to={PATHS.WRITESTORY} className="panel-link">
            <h2>Write a Story</h2>
            <img src={Book} alt="Write a Story" className="book-img" />
          </Link>
        </div>
        <div className="panel">
          <Link to={PATHS.INSPIRATION} className="panel-link">
            <h2>Look for Inspiration</h2>
            <img src={Thinking} alt="Look for Inspiration" />
          </Link>
        </div>
        <div className="panel">
          <h2>Genres</h2>
          <div className="genre-panel">
            <div>
              <Link
                to={PATHS.ACTIONADVENTURE}
                className="panel-link genre-link"
              >
                <p>
                  <b>Action/Adventure</b>
                </p>
              </Link>
              <Link to={PATHS.COMEDY} className="panel-link genre-link">
                <p>
                  <b>Comedy</b>
                </p>
              </Link>
              <Link to={PATHS.DRAMA} className="panel-link genre-link">
                <p>
                  <b>Drama</b>
                </p>
              </Link>
              <Link to={PATHS.FANTASY} className="panel-link genre-link">
                <p>
                  <b>Fantasy</b>
                </p>
              </Link>
              <Link to={PATHS.HORROR} className="panel-link genre-link">
                <p>
                  <b>Horror</b>
                </p>
              </Link>
            </div>
            <div>
              <Link to={PATHS.ROMANCE} className="panel-link genre-link">
                <p>
                  <b>Romance</b>
                </p>
              </Link>
              <Link to={PATHS.ROMCOM} className="panel-link genre-link">
                <p>
                  <b>RomCom</b>
                </p>
              </Link>
              <Link to={PATHS.SCIFI} className="panel-link genre-link">
                <p>
                  <b>Sci-Fi</b>
                </p>
              </Link>
              <Link
                to={PATHS.THRILLERMYSTERY}
                className="panel-link genre-link"
              >
                <p>
                  <b>Thriller/Mystery</b>
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="panel">
          <Link to={PATHS.RANDOM} className="panel-link">
            <h2>Random</h2>
            <img src={RandomCard} alt="Random" />
          </Link>
        </div>
        <div className="panel">
          <Link to={PATHS.PROFILEPAGE} className="panel-link">
            <h2>Profile Page</h2>
            <img src={ProfilePic} alt="Profile Page" />
          </Link>
        </div>
      </div>
    );
  }
}
