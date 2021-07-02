import React from "react";
import { Switch } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import ProtectedPage from "./pages/ProtectedPage";
import Signup from "./pages/Signup.jsx";
import NormalRoute from "./routing-components/NormalRoute";
import ProtectedRoute from "./routing-components/ProtectedRoute";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import EditProfile from "./pages/ProfilePage/EditProfile.jsx";
import WriteStoryPage from "./pages/WriteStoryPage/WriteStoryPage.jsx";
import EditStoryPage from "./pages/WriteStoryPage/EditStoryPage.jsx";
import SingleStoryPage from "./pages/SingleStoryPage/SingleStoryPage";
import TopContentPage from "./pages/TopContentPage/TopContentPage.jsx";
import InspirationPage from "./pages/InspirationPage/InspirationPage.jsx";
import RandomPage from "./pages/RandomPage/RandomPage.jsx";
import GenrePage from "./pages/GenrePage/GenrePage";
import { getLoggedIn, logout } from "./services/auth";
import * as PATHS from "./utils/paths";
import * as CONSTS from "./utils/consts";

class App extends React.Component {
  state = {
    user: null,
    isLoading: true,
  };

  componentDidMount = () => {
    const accessToken = localStorage.getItem(CONSTS.ACCESS_TOKEN);
    if (!accessToken) {
      return this.setState({
        isLoading: false,
      });
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        console.log("RES IN CASE OF FAILURE", res);
        // deal with failed backend call
        return this.setState({
          isLoading: false,
        });
      }
      this.setState({
        user: res.data.user,
        isLoading: false,
      });
    });
  };

  handleLogout = () => {
    const accessToken = localStorage.getItem(CONSTS.ACCESS_TOKEN);
    if (!accessToken) {
      return this.setState({
        user: null,
        isLoading: false,
      });
    }
    this.setState(
      {
        isLoading: true,
      },
      () => {
        logout(accessToken).then((res) => {
          if (!res.status) {
            // deal with error here
            console.error("💡 SOMETHING HAPPENED THAT HAS TO DEALT WITH", res);
          }

          localStorage.removeItem(CONSTS.ACCESS_TOKEN);
          return this.setState({
            isLoading: false,
            user: null,
          });
        });
      }
    );
  };

  authenticate = (user) => {
    this.setState({
      user,
    });
  };

  render() {
    if (this.state.isLoading) {
      return <LoadingComponent />;
    }

    return (
      <div className="App">
        <Navbar handleLogout={this.handleLogout} user={this.state.user} />
        <Switch>
          <NormalRoute exact path={PATHS.HOMEPAGE} component={HomePage} />
          <NormalRoute
            exact
            path={PATHS.SIGNUPPAGE}
            authenticate={this.authenticate}
            component={Signup}
          />
          <NormalRoute
            exact
            path={PATHS.LOGINPAGE}
            authenticate={this.authenticate}
            component={LogIn}
          />
          <NormalRoute
            exact
            path={PATHS.TOPCONTENT}
            authenticate={this.authenticate}
            component={TopContentPage}
          />
          <NormalRoute
            exact
            path={PATHS.INSPIRATION}
            authenticate={this.authenticate}
            component={InspirationPage}
          />
          <NormalRoute
            exact
            path={PATHS.RANDOM}
            authenticate={this.authenticate}
            component={RandomPage}
            user={this.state.user}
          />
          <NormalRoute
            exact
            path={PATHS.SINGLESTORY}
            authenticate={this.authenticate}
            component={SingleStoryPage}
            user={this.state.user}
          />
          <NormalRoute
            exact
            path={PATHS.GENRE}
            authenticate={this.authenticate}
            component={GenrePage}
            user={this.state.user}
          />
          <ProtectedRoute
            exact
            path={PATHS.PROTECTEDPAGE}
            component={ProtectedPage}
            user={this.state.user}
          />
          <ProtectedRoute
            exact
            path={PATHS.PROFILEPAGE}
            component={ProfilePage}
            user={this.state.user}
          />
          <ProtectedRoute
            exact
            path={PATHS.EDITPROFILE}
            component={EditProfile}
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
          <ProtectedRoute
            exact
            path={PATHS.WRITESTORY}
            component={WriteStoryPage}
            user={this.state.user}
          />
          <ProtectedRoute
            exact
            path={PATHS.EDITSTORY}
            component={EditStoryPage}
            user={this.state.user}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
