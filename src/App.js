import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Navigation from "./Components/static/Navigation";
import Article from "./Pages/Article";
import Notfound from "./Pages/Notfound";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/register" render={() => <Login />} />
        <Route exact path="/article/:slug" render={() => <Article />} />
        <Route exact path="" render={() => <Notfound />} />
      </Switch>
    </div>
  );
}

export default App;
