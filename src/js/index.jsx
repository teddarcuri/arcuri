import React from 'react';
import Router from 'react-router';

class Index extends React.Component {
  render() {
    return <h1>Index</h1>
  }
}

React.render((
  <Index />
), document.getElementById('app'))
