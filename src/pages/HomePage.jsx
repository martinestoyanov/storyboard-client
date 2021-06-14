import "./HomePage.css";
import { CAPITALIZED_APP } from "../utils/consts.js";
import Storyboard from "../components/Storyboard/Storyboard";

function HomePage() {
  return (
    <div className="App">
      <h1>Welcome to {CAPITALIZED_APP}!</h1>
      <p>
        Here at {CAPITALIZED_APP}, we want to help develop a community for
        creatives, such as writers, artists, and directors, to come together and
        share ideas. We want this community to be used as a portfolio builder,
        for those looking to break into their respective industries, who need a
        platform to help give voice to their visions.
      </p>
      <p>
        Please feel free to explore the {CAPITALIZED_APP} playground! You can
        write your own short stories, or use the stories already created as
        inspiration for your next project! Let's work together to show the world
        exactly what you're capable of!
      </p>

      <div>
        <Storyboard />
      </div>
      {/* <div>
        <div>
          <h2>Top Content</h2>
          <img src="" alt="Top Content" />
        </div>
        <div>
          <h2>Write a Story</h2>
          <img
            src="https://t3.ftcdn.net/jpg/03/14/27/00/360_F_314270083_ClBUF6NKCgniaj8CLQ6vEnY8huXImgVp.jpg"
            alt="Write a Story"
          />
        </div>
        <div>
          <h2>Look for Inspiration</h2>
          <img
            src="https://lh3.googleusercontent.com/proxy/8LJV5pOU3wxADvTZB2LdPtazK0gkuGp_xMBMROD-_KeNnz58uv8rqASg1ME73iX1ZypXl8W_uBN3eaDYzQjte2PAQw"
            alt="Look for Inspiration"
          />
        </div>
        <div>
          <h2>Genres</h2>
          <p>Action/Adventure</p>
          <p>Comedy</p>
          <p>Drama</p>
          <p>Fantasy</p>
          <p>Horror</p>
          <p>Romance</p>
          <p>RomCom</p>
          <p>Sci-Fi</p>
          <p>Thriller/Mystery</p>
        </div>
        <div>
          <h2>Random</h2>
          <img src="" alt="Random" />
        </div>
        <div>
          <h2>Profile Page</h2>
          <img
            src="https://lh3.googleusercontent.com/proxy/v2TBQHnRpaJ3iyNTaYiTninbntQROsXhdfBLxGW2rLlVgl632a-fqKa6eCFWP3pRJk_U5sFU9RHLI3dhz3lp0NfZnM9WaVqwOia7eHyc9-RmO3rsv8zm5GvmflBbG2lhy-fggYHpnwXb"
            alt="Profile Page"
          />
        </div>
      </div> */}
    </div>
  );
}

export default HomePage;
