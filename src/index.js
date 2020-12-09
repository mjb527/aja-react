import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

// pages
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Error from './pages/Error';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// common stylesheet
import './style/common.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery/" exact >
            <Redirect to="/gallery/stone-elevations" />
          </Route>
          <Route path="/gallery/:name" exact component={Gallery} />
          <Route path="/services" exact component={Services} />
          <Route path="/contact" exact component={Contact} />
          <Route component={Error} />
        </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
