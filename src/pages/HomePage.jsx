import "../App.css";
import { CAPITALIZED_APP } from "../utils/consts.js";

function HomePage() {
  return (
    <div className="App">
      <h1>Welcome to {CAPITALIZED_APP}</h1>
    </div>
  );
}

export default HomePage;
