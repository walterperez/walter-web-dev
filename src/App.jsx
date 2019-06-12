import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
// CSS
import './App.css';
// Components
import Header from './components/HeaderMain';
import Footer from './components/FooterMain';
// Routes
import Home from './routes/HomePage';
import About from './routes/AboutPage';
import Designs from './routes/Designs';
import Books from './routes/Books';

class App extends Component {
  componentDidMount() {
    const { history } = this.props;
    ReactGA.initialize('UA-140140831-1');
    ReactGA.pageview(window.location.pathname);
    history.listen((location, action) => {
      window.scrollTo(0, 0); // In every route change scroll to top
      ReactGA.pageview(window.location.pathname);
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/designs" component={Designs} />
          <Route exact path="/books" component={Books} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
