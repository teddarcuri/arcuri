import React from 'react';
import Radium from 'radium';
import SocialIcons from './SocialIcons';
import {Router, Route, IndexRoute, Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import colors from "../utilities/colors"

class Experience extends React.Component {

  constructor(props) {
  	super(props);
  }

  componentDidMount() {
     // Set scroll position to top of page
    window.scrollTo(0, 0);
  }

  render() {
    let styles = {
      page: {
        padding: "90px 20px",
        maxWidth: 768
      },
      section: {
        marginBottom: 0,
      },
      sectionHeader: {
        background: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "12px 20px",
        fontSize: "1em",
        fontWeight: 300,
        letterSpacing: "5px",
        margin: 0
      },
      h3: {
        color: "#333",
        lineHeight: "1.25em"
      },
      pillList: {
        width: "100%",
        display: "flex",
        flexFlow: "row wrap"
      },
      pill: {
        color: "#333",
        fontSize: "0.8em",
        padding: "7px 15px",
        background: "rgba(0,0,0,0.07)",
        listStyle: "none",
        margin: "7px",
        textAlign: "center",
        textTransform: "uppercase",
        borderRadius: "5px",
        flex: "1 0 auto"
      },
      jobBlock: {
        padding: "20px 0px",
        borderBottom: "solid 1px #eee"
      },
      jobTitle: {
        fontSize: "1.1em",
        lineHeight: "2em",
        color: colors.highlightBlue,
        fontWeight: 700
      },
      jobLength: {
        fontSize: "0.9em",
        fontStyle: "italic",
        lineHeight: "2em",
      },
      icon: {
          textAlign: "center",
          margin: "0px 20px",
          fontSize: "1.5em",
          lineHeight: "1.5em",
          color: "#aaa",
          ":hover" : {
            color: "#111"
          }
        }
    }

    var small = window.innerWidth < 700;
    return (
    <CSSTransitionGroup transitionAppear={true}
              transitionAppearTimeout={2000}
              transitionName="menuFade"
              style={styles.page}
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={2000}>

      <h1 style={{letterSpacing: "10px", textAlign: "center", fontSize: "1.3em", textTransform: "uppercase"}}>
        Tedd Arcuri
      </h1>
      <h3 style={{textAlign: "center", fontSize: "0.9em", color: "#666", margin: "20px 0px 20px 0px", fontWeight: 300}}>
        UI/UX Designer • Front End Engineer • Product Architect
      </h3>

     <SocialIcons></SocialIcons>

      <section style={styles.section}>
        <h1 style={styles.sectionHeader}>Knowledge/Toolbox</h1>
        <div style={styles.jobBlock}>
          <ul style={styles.pillList}>
            <li style={styles.pill}>Javascript</li>
            <li style={styles.pill}>React</li>
            <li style={styles.pill}>Redux</li>
            <li style={styles.pill}>CSS</li>
            <li style={styles.pill}>HTML</li>
            <li style={styles.pill}>PHP</li>
            <li style={styles.pill}>Elm</li>
            <li style={styles.pill}>Ruby</li>
            <li style={styles.pill}>React</li>
            <li style={styles.pill}>Ember</li>
            <li style={styles.pill}>jQuery</li>
            <li style={styles.pill}>Node</li>
            <li style={styles.pill}>NPM</li>
            <li style={styles.pill}>Bower</li>
            <li style={styles.pill}>Express</li>
            <li style={styles.pill}>Drupal</li>
            <li style={styles.pill}>WordPress</li>
            <li style={styles.pill}>Ruby on Rails</li>
            <li style={styles.pill}>Sass</li>
            <li style={styles.pill}>Stylus</li>
            <li style={styles.pill}>LESS</li>
            <li style={styles.pill}>Gulp</li>
            <li style={styles.pill}>Grunt</li>
            <li style={styles.pill}>Webpack</li>
            <li style={styles.pill}>Browserify</li>
            <li style={styles.pill}>Firebase</li>
            <li style={styles.pill}>Git</li>
            <li style={styles.pill}>Heroku</li>
            <li style={styles.pill}>MySQL</li>
            <li style={styles.pill}>MongoDB</li>
            <li style={styles.pill}>Illustrator</li>
            <li style={styles.pill}>Photoshop</li>
            <li style={styles.pill}>Sketch</li>
            <li style={styles.pill}>Balsalmiq</li>
            <li style={styles.pill}>InDesign</li>
            <li style={styles.pill}>Agile</li>
            <li style={styles.pill}>Scrum</li>
            <li style={styles.pill}>Client Interaction</li>
            <li style={styles.pill}>Team Dynamics</li>
          </ul>
        </div>
      </section>


      <section style={styles.section}>
        <h1 style={styles.sectionHeader}>Experience</h1>
        <div style={styles.jobBlock}>
          <h3 style={styles.h3}>Looplist</h3>
          <span style={styles.jobTitle}>Front End Developer</span><br />
          <span style={styles.jobLength}>October 2016 to present</span>
        </div>

        <div style={styles.jobBlock}>
          <h3 style={styles.h3}>Havenly</h3>
          <span style={styles.jobTitle}>Front End Developer</span><br />
          <span style={styles.jobLength}>April 2016 to October 2016</span>
        </div>

        <div style={styles.jobBlock}>
          <h3 style={styles.h3}>Colorado.gov</h3>
          <span style={styles.jobTitle}>Front End Developer</span><br />
          <span style={styles.jobLength}>August 2014 to April 2016</span>
        </div>

        <div style={styles.jobBlock}>
          <h3 style={styles.h3}>Rootspring Studios</h3>
          <span style={styles.jobTitle}>Art Director</span><br />
          <span style={styles.jobLength}>April 2013 to November 2014</span>
        </div>

        <div style={styles.jobBlock}>
          <h3 style={styles.h3}>Helium</h3>
          <span style={styles.jobTitle}>Creative</span><br />
          <span>June 2012 to April 2013</span>
        </div>
      </section>

      <section style={styles.section}>
        <h1 style={styles.sectionHeader}>Education</h1>
        <div style={styles.jobBlock}>
          <h3 style={styles.h3}>Colorado Tech</h3>
          <span style={styles.jobTitle}>A.A. Digital Media Design</span><br />
          <span style={styles.jobLength}>June 2013</span>
        </div>
      </section>
    </CSSTransitionGroup>
    );
  }
}

export default Radium(Experience);
