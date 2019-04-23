import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
//CSS
import './App.css';
//Components
import Header from "./components/Header";
//Routes
import Home from "./routes/HomePage"
import About from "./routes/About"
import MyProjecs from "./routes/MyProjects"
import Tools from "./routes/Tools"
import Services from "./routes/Services"
import Contact from "./routes/Contact"
import Legal from "./routes/Legal"
import BrandDesigns from "./routes/BrandDesigns"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/myprojecs" component={MyProjecs} />
            <Route exact path="/brandDesigns" component={BrandDesigns} />
            <Route exact path="/tools" component={Tools} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/legal" component={Legal} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
