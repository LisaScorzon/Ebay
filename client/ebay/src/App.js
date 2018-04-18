import React, { Component } from 'react';
import './App.css';
import ProductDetails from './components/ProductDetails'
import Products from './components/Products'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/" render={ () => <Redirect to="/products" /> } />
        </div>
      </Router>
    )
  }
}

export default App;
