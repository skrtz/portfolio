import React from 'react';
import NavTabs from './Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer  from './Footer';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function PortfolioContainer() {
  return (
    <Router>
      <div className="main">
        <NavTabs />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}