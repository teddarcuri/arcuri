import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';

class App extends React.Component {
  render() {
    return <h1>App</h1>
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.getElementById('app'))
