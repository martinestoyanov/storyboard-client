import React, { Component } from "react";
import "./Storyboard.css";
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";

export default class Storyboard extends Component {
  render() {
    return (
      <div className="storyboard">
        <div className="panel">
          <Link to={PATHS.TOPCONTENT} className="panel-link">
            <h2>Top Content</h2>
            <img
              src="https://cdn5.vectorstock.com/i/1000x1000/39/99/business-growth-bar-graph-finance-increase-vector-17313999.jpg"
              alt="Top Content"
            />
          </Link>
        </div>
        <div className="panel">
          <Link to={PATHS.WRITESTORY} className="panel-link">
            <h2>Write a Story</h2>
            <img
              src="https://t3.ftcdn.net/jpg/03/14/27/00/360_F_314270083_ClBUF6NKCgniaj8CLQ6vEnY8huXImgVp.jpg"
              alt="Write a Story"
            />
          </Link>
        </div>
        <div className="panel">
          <Link to={PATHS.INSPIRATION} className="panel-link">
            <h2>Look for Inspiration</h2>
            <img
              src="https://lh3.googleusercontent.com/proxy/8LJV5pOU3wxADvTZB2LdPtazK0gkuGp_xMBMROD-_KeNnz58uv8rqASg1ME73iX1ZypXl8W_uBN3eaDYzQjte2PAQw"
              alt="Look for Inspiration"
            />
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
            <img
              src="https://www.pngrepo.com/png/323837/180/card-random.png"
              alt="Random"
            />
          </Link>
        </div>
        <div className="panel">
          <Link to={PATHS.PROFILEPAGE} className="panel-link">
            <h2>Profile Page</h2>
            <img
              src="https://lh3.googleusercontent.com/proxy/v2TBQHnRpaJ3iyNTaYiTninbntQROsXhdfBLxGW2rLlVgl632a-fqKa6eCFWP3pRJk_U5sFU9RHLI3dhz3lp0NfZnM9WaVqwOia7eHyc9-RmO3rsv8zm5GvmflBbG2lhy-fggYHpnwXb"
              alt="Profile Page"
            />
          </Link>
        </div>
      </div>
    );
  }
}
