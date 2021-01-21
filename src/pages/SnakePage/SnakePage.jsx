import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SnakeGame from "../../components/Snake/Snake"

function SnakePage() {
    // Creating state for Snake
    const [Snakes] = useState([]);
    const history = useHistory();
    useEffect(() => {
      // This is listening for changes in Snakes state, then the function below will reroute
      history.push("/snakepage");
    }, [Snakes, history]);

    return (
      <>
        <div>
          <h1>Relaxing snake game</h1>
        </div>
        <div>
          <h1> Play to your heart's contempt</h1>
          <SnakeGame />

        </div>
      </>
    );
  }
  export default SnakePage;
