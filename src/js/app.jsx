import React from 'react';

class App extends React.Component {
  render() {
    return <h1>App</h1>
  }
}

React.render((
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.getElementById('app'))
