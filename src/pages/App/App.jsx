import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import HomePage from "../HomePage/HomePage";
import MantraPage from "../MantraPage/MantraPage";
import DealBreakerPage from "../DealBreakerPage/DealBreakerPage";
import MeTimePage from "../MeTimePage/MeTimePage";
import AffirmationsPage from "../AffirmationsPage/AffirmationsPage";
import SnakePage from "../SnakePage/SnakePage";
import "./App.css";

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
    const { user } = this.state;
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() =>
            user ? (
              <main>
                <HomePage user={this.state.user} />
              </main>
            ) : (
              <Redirect to="/Login" />
            )
          }
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
          path="/Login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
      
        <Route
          exact
          path="/mantra-page"
          render={() =>
            user ? (
              <MantraPage user={this.state.user} />
            ) : (
              <Redirect to="/Login" />
            )
          }
        />
        <Route
          exact
          path="/dealbreakerpage"
          render={() =>
            user ? (
              <DealBreakerPage user={this.state.user} />
            ) : (
              <Redirect to="/Login" />
            )
          }
        />
        <Route
          exact
          path="/metimepage"
          render={() =>
            user ? (
              <MeTimePage user={this.state.user} />
            ) : (
              <Redirect to="/Login" />
            )
          }
        />
        <Route
          exact
          path="/affirmationpage"
          render={() =>
            user ? (
              <AffirmationsPage user={this.state.user} />
            ) : (
              <Redirect to="/Login" />
            )
          }
        />
        <Route
          exact
          path="/snakepage"
          render={() =>
            user ? (
              <SnakePage user={this.state.user} />
            ) : (
              <Redirect to="/Login" />
            )
          }
        />
      </>
    );
  }
}

export default App;
