import React from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';

import CSSTransitionGroup from 'react-addons-css-transition-group';

class Experience extends React.Component {

  constructor(props) {
  	super(props);
  }

  render() {
    let styles = {
      page: {
        paddingTop: 120,
        maxWidth: 768
      },
      column: {
        width: "33%"
      }
    }
    return (
    <CSSTransitionGroup transitionAppear={true}
              transitionAppearTimeout={2000}
              transitionName="fadeIn"
              style={styles.page}
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={2000}>

      <section>
        <h1>Experience</h1>
        <hr />
        <div>
          <h3>Colorado Interactive</h3>
          <span>August 2014 - present</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum, sint magni corrupti minus iste quas sit. Iusto ipsam recusandae, sed mollitia ducimus deleniti nam esse. Necessitatibus, laudantium ratione ullam.</p>
        </div>

        <div>
          <h3>Rootspring Studios</h3>
          <span>April 2013 - November 2014</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum, sint magni corrupti minus iste quas sit. Iusto ipsam recusandae, sed mollitia ducimus deleniti nam esse. Necessitatibus, laudantium ratione ullam.</p>
        </div>

        <div>
          <h3>Helium</h3>
          <span>June 2012 - April 2013</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum, sint magni corrupti minus iste quas sit. Iusto ipsam recusandae, sed mollitia ducimus deleniti nam esse. Necessitatibus, laudantium ratione ullam.</p>
        </div>
      </section>
      
      <section>
        <h1>Knowledge</h1>
        <hr />

        <div style={styles.column}>
          <h3>Languages</h3>
          <ul>
            <li>Javascript</li>
            <li>PHP</li>
            <li>Ruby</li>
            <li>HTML</li>
            <li>Sass + LESS + Stylus</li>
            <li>CSS</li>
          </ul>
        </div>
        
        <div style={styles.column}>
          <h3>Frameworks/Libraries/Tools</h3>
          <ul>
            <li>React.js</li>
            <li>Ember.js</li>
            <li>jQuery</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Drupal</li>
            <li>Wordpress</li>
            <li>Ruby on Rails</li>
            <li>Gulp</li>
            <li>Grunt</li>
            <li>Webpack</li>
            <li>Firebase</li>
          </ul>
        </div>

        <div style={styles.column}>
           <h3>UI + Creative tools</h3>
            <ul>
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>Sketch</li>
              <li>Balsalmiq</li>
              <li>InDesign</li>
            </ul>        
        </div>

      </section>

    </CSSTransitionGroup>
    );
  }
}

export default Experience;