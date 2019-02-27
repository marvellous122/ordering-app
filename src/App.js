import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/index';
import ListItems from './pages/listItems';
import ListDetail from './pages/listDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/lists" component={ListItems} />
            <Route path="/list/:id" component={ListDetail} />
            <Route path="/checkout" component={Home} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
