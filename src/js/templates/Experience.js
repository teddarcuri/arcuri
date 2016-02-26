import React from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import colors from "../utilities/colors"

class Experience extends React.Component {

  constructor(props) {
  	super(props);
  }

  render() {
    let styles = {
      page: {
        padding: "120px 0px",
        maxWidth: 768
      },
      section: {
        marginBottom: 66
      },
      h3: {
        color: colors.highlightBlue,
        lineHeight: "1.5em"
      },
      column: {
        //width: "33%"
      },
      pillList: {
        padding: "20px 0px",
        width: "100%",
        display: "flex",
        flexFlow: "row wrap"
      },
      pill: {
        color: "#000",
        fontSize: "0.9em",
        padding: "7px 15px",
        background: "rgba(0,0,0,0.05)",
        listStyle: "none",
        margin: "10px",
        borderRadius: "5px"
      },
      jobBlock: {
        borderBottom: "solid 1px #ddd",
        padding: "20px 0px"
      },
      jobTitle: {
        fontSize: "1.1em",
        lineHeight: "2em",
        color: "#000"
      },
      jobLength: {
        fontSize: "0.9em",
        fontStyle: "italic",
        letterSpacing: 1,
        lineHeight: "2em",
        color: "#000"
      }
    }
    return (
    <CSSTransitionGroup transitionAppear={true}
              transitionAppearTimeout={2000}
              transitionName="fadeIn"
              style={styles.page}
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={2000}>

      <section style={styles.section}>
        <h1>Experience</h1>
        <div style={styles.jobBlock}>
          <h3 style={styles.h3}>Colorado.gov</h3>
          <span style={styles.jobTitle}>Web Designer - Developer</span><br />
          <span style={styles.jobLength}>August 2014 to present</span>
          <p>Led front end implementation of our Drupal websites and web applications. Helped design and architect the Colorado Governor's website.</p>
        </div>

        <div style={styles.jobBlock}>
          <h3 style={styles.h3}>Rootspring Studios</h3>
          <span style={styles.jobTitle}>Art Director - CO Owner</span><br />
          <span style={styles.jobLength}>April 2013 to November 2014</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum, sint magni corrupti minus iste quas sit. Iusto ipsam recusandae, sed mollitia ducimus deleniti nam esse. Necessitatibus, laudantium ratione ullam.</p>
        </div>

        <div style={styles.jobBlock}>
          <h3 style={styles.h3}>Helium</h3>
          <span style={styles.jobTitle}>Creative</span><br />
          <span>June 2012 to April 2013</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laborum, sint magni corrupti minus iste quas sit. Iusto ipsam recusandae, sed mollitia ducimus deleniti nam esse. Necessitatibus, laudantium ratione ullam.</p>
        </div>
      </section>
      

      <section style={styles.section}>
        <h1>Knowledge</h1>
        <div style={styles.column}>
          <h3 style={styles.h3}>Languages</h3>
          <ul style={styles.pillList}>
            <li style={styles.pill}>Javascript</li>
            <li style={styles.pill}>CSS</li>
            <li style={styles.pill}>HTML</li>
            <li style={styles.pill}>PHP</li>
            <li style={styles.pill}>Ruby</li>
          </ul>
        </div>
        
        <div style={styles.column}>
          <h3 style={styles.h3}>Frameworks + Libraries + Tooling</h3>
          <ul style={styles.pillList}>
            <li style={styles.pill}>React</li>
            <li style={styles.pill}>Ember</li>
            <li style={styles.pill}>jQuery</li>
            <li style={styles.pill}>Node</li>
            <li style={styles.pill}>Express</li>
            <li style={styles.pill}>Drupal</li>
            <li style={styles.pill}>WordPress</li>
            <li style={styles.pill}>Ruby on Rails</li>
            <li style={styles.pill}>Sass</li>
            <li style={styles.pill}>LESS</li>
            <li style={styles.pill}>Gulp</li>
            <li style={styles.pill}>Grunt</li>
            <li style={styles.pill}>Webpack</li>
            <li style={styles.pill}>Firebase</li>
            <li style={styles.pill}>Heroku</li>

          </ul>
        </div>

        <div style={styles.column}>
           <h3 style={styles.h3}>Production tools + methodologies</h3>
            <ul style={styles.pillList}>
              <li style={styles.pill}>Illustrator</li>
              <li style={styles.pill}>Photoshop</li>
              <li style={styles.pill}>Sketch</li>
              <li style={styles.pill}>Balsalmiq</li>
              <li style={styles.pill}>InDesign</li>
              <li style={styles.pill}>Agile</li>
            </ul>        
        </div>

      </section>

      <section style={styles.section}>
        <h1>Status</h1>
         <p>Currently looking for a position in UX/UI design and/or front end engineering. I am a highly passionate person that has a burning desire to work on products I believe make a difference in people's lives. I desire to work in an environement that is highly collaborative where I can learn, grow and help others along the way.</p>
      </section>

    </CSSTransitionGroup>
    );
  }
}

export default Experience;