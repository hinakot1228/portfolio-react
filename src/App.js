import React from 'react'
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Works from './components/pages/Works';
import Contact from './components/pages/Contact';
import Product from './components/pages/Product';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router>
      <ScrollToTop>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/works' exact component={Works} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/product' exact component={Product} />
        </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
