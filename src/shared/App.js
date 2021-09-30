import { BrowserRouter, Route } from "react-router-dom";
import { Grid } from "../elements";
import Login from "../pages/Login";
import PostList from "../pages/PostList";
import Signup from "../pages/Signup";

import "./App.css";
import Header from "./Header";

function App() {
  return (
    <>
      <Grid>
        <BrowserRouter>
          <Header></Header>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </BrowserRouter>
      </Grid>
    </>
  );
}

export default App;
