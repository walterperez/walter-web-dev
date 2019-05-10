import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//CSS
import "./App.css";
//Components
import Header from "./components/HeaderMain";
//Routes
import Home from "./routes/HomePage";
import About from "./routes/AboutPage";
import Footer from "./components/FooterMain";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
