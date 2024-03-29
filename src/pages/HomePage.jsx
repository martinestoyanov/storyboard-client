import "./HomePage.css";
import { CAPITALIZED_APP } from "../utils/consts.js";
import Storyboard from "../components/Storyboard/Storyboard";

function HomePage() {
  return (
    <div className="App">
      <div className="intro">
        <h1>Welcome to {CAPITALIZED_APP}!</h1>
        <p>
          Here at {CAPITALIZED_APP}, we want to help develop a community for
          creatives, such as writers, artists, and directors, to come together
          and share ideas. We want this community to be used as a portfolio
          builder, for those looking to break into their respective industries,
          who need a platform to help give voice to their visions.
        </p>
        <p>
          Please feel free to explore the {CAPITALIZED_APP} playground! You can
          write your own short stories, or use the stories already created as
          inspiration for your next project! Let's work together to show the
          world exactly what you're capable of!
        </p>
      </div>

      <div>
        <Storyboard />
      </div>
    </div>
  );
}

export default HomePage;
