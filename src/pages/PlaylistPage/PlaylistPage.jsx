import React from "react";
import "./PlaylistPage.css";
import { Route} from "react-router-dom";

import SnakeGame from "../../components/Snake/Snake"

// This is our playlist list page! All our functions will live here, and we'll pass from props to components. Here we import all the things we are exporting from all our pages
function PlaylistPage() {


    return (
      <>
        <div>
          <h1>Relaxing snake game</h1>
        </div>
        <div>
          <h1> Play to your heart's contempt</h1>
          <SnakeGame />
          <>
          
          </>
          <>
         
          </>
        </div>
      </>
    );
  }
  export default PlaylistPage;
