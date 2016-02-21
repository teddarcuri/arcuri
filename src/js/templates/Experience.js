import React from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';

import CSSTransitionGroup from 'react-addons-css-transition-group';

class Experience extends React.Component {

  constructor(props) {
  	super(props);
  }

  render() {
    return (
    <CSSTransitionGroup transitionAppear={true}
              transitionAppearTimeout={2000}
              transitionName="fadeIn"
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={2000}>
      <h1>Experience</h1>
      <hr />

      <section>
        <h3>Colorado Interactive</h3>
        <span>August 2014 - present</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum, sint magni corrupti minus iste quas sit. Iusto ipsam recusandae, sed mollitia ducimus deleniti nam esse. Necessitatibus, laudantium ratione ullam.</p>
      </section>

      <section>
        <h3>Rootspring Studios</h3>
        <span>April 2013 - November 2014</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum, sint magni corrupti minus iste quas sit. Iusto ipsam recusandae, sed mollitia ducimus deleniti nam esse. Necessitatibus, laudantium ratione ullam.</p>
      </section>

      <section>
        <h3>Helium</h3>
        <span>June 2012 - April 2013</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum, sint magni corrupti minus iste quas sit. Iusto ipsam recusandae, sed mollitia ducimus deleniti nam esse. Necessitatibus, laudantium ratione ullam.</p>
      </section>

      <h1>Knowledge</h1>
      <hr />
    </CSSTransitionGroup>
    );
  }
}

export default Experience;