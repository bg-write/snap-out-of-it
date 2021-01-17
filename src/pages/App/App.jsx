import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from '../Users/Users'
import "./App.css";
import HomePage from "../HomePage/HomePage"
import MantraPage from "../MantraPage/MantraPage"
import DealBreakerPage from "../DealBreakerPage/DealBreakerPage"
import MeTimePage from "../MeTimePage/MeTimePage"
import AffirmationsPage from "../AffirmationsPage/AffirmationsPage"
import PlaylistPage from "../PlaylistPage/PlaylistPage"


// This App page is rendering all the components that were imported above into the page.
class App extends Component {
  state = {
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <HomePage />
              <h1>Home Page(App.js).</h1>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() =>
            user ? <Users /> : <Redirect to="/login" />
          }
        />
          <Route exact path="/mantrapage" render={() =>
                    <MantraPage/>
                }/>
          <Route exact path="/dealbreakerpage" render={() =>
                    <DealBreakerPage/>
                }/>
          <Route exact path="/metimepage" render={() =>
                    <MeTimePage/>
                }/>
          <Route exact path="/affirmationpage" render={() =>
                    <AffirmationsPage/>
                }/>
          <Route exact path="/playlistpage" render={() =>
                    <PlaylistPage />
                } />
      </>
    );
  }
}

export default App;
