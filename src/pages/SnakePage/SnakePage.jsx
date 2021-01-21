import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SnakeGame from "../../components/Snake/Snake"
import './SnakePage.css'

function SnakePage() {
    // Creating state for Snake
    const [Snakes] = useState([]);
    const history = useHistory();
    useEffect(() => {
      // This is listening for changes in Snakes state, then the function below will reroute
      history.push("/snakepage");
    }, [Snakes, history]);

    return (
      <div className="snake-page-container">
        <div>
          <h1 className="snake-heading">Game Time</h1>
        </div>
        <div className="sub-heading-container">
          <h1 className="snake-sub-heading"> Play to your heart's content</h1>
          <SnakeGame />

        </div>
      </div>
    );
  }
  export default SnakePage;
