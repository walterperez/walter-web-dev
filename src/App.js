import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//CSS
import "./App.css";
//Components
import Header from "./components/HeaderMain";
//Routes
import Home from "./routes/HomePage";
import About from "./routes/AboutPage";
import MyProjecs from "./routes/MyProjectsPage";
import Tools from "./routes/ToolsPage";
import Services from "./routes/ServicesPage";
import Contact from "./routes/ContactPage";
import Legal from "./routes/LegalPage";
import BrandDesigns from "./routes/BrandDesignsPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
      </div>
    );
  }
}

export default App;
