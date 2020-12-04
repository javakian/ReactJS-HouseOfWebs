import React from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import TopBar from "./Pages/Components/Topbar";
import BottomBar from "./Pages/Components/Bottombar";
/* import icon from "../images/1Auto.jpeg";
 */
function App() {
  return (
    <div className="App">
      <TopBar />
      <Route exact path="/" component={Home} />
      <Route path="/details/:itemId" component={Details} />
      <BottomBar />
    </div>
  );
}

export default App;
