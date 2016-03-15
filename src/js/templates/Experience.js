import React from 'react';
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
        marginBottom: 0
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
        color: colors.highlightBlue,
        lineHeight: "1.5em"
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
        padding: "20px 0px"
      },
      jobTitle: {
        fontSize: "1.1em",
        lineHeight: "2em",
        color: "#000",
        fontWeight: 700
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
              transitionName="menuFade"
              style={styles.page}
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={2000}>

      <h1 style={{letterSpacing: "1.2em", textAlign: "center", fontSize: "1.3em", textTransform: "uppercase"}}>
        Tedd Arcuri
      </h1>
      <h3 style={{textAlign: "center", fontSize: "0.9em", color: "#666", margin: "20px 0px 30px", fontWeight: 300}}>
        UI/UX Designer • Front End Developer
      </h3>

      <section style={styles.section}>
        <h1 style={styles.sectionHeader}>Expertise</h1>
        <div style={styles.jobBlock}>
          <ul style={styles.pillList}>
            <li style={styles.pill}>Javascript</li>
            <li style={styles.pill}>CSS</li>
            <li style={styles.pill}>HTML</li>
            <li style={styles.pill}>PHP</li>
            <li style={styles.pill}>Ruby</li>
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
          </ul>
        </div>
      </section>


      <section style={styles.section}>
        <h1 style={styles.sectionHeader}>Experience</h1>
        <div style={styles.jobBlock}>
          <h3 style={styles.h3}>Colorado.gov</h3>
          <span style={styles.jobTitle}>Front End Developer</span><br />
          <span style={styles.jobLength}>August 2014 to present</span>
          <p>
            Worked in an agile team that delivered products for the state of Colorado on the Drupal CMS and Java based web applications.
            Led front end implementation and development across our suite of Drupal products, including the Colorado.gov portal website.
            Designed and built the theme for Colorado Governor, John Hickenlooper's, website.
            <ul className="bullet">
              <li>Responsible for integration of new technologies within the company’s workflow resulting in more project efficiency and production</li>
              <li>Performed due diligence on new platforms, technologies and languages to provide the best possible ROI and ensure use of latest web technologies</li>
              <li>Utilized business acumen in client interaction, team and project management, business development and marketing.</li>
              <li>Worked within and adapted to various platforms / content management systems for optimal client satisfaction.</li>
            </ul>
          </p>
        </div>

        <div style={styles.jobBlock}>
          <h3 style={styles.h3}>Rootspring Studios</h3>
          <span style={styles.jobTitle}>Art Director</span><br />
          <span style={styles.jobLength}>April 2013 to November 2014</span>
          <p>
          Started the branding and advertising agency Rootspring Studios with two fellow Colorado Technical University graduates. 
            <ul className="bullet">
              <li>Led art direction and design for many projects across a wide array of clientele and project types. Oversaw and ensured quality within corporate identity, package, collateral, and website/application design.</li>
              <li>Implemented technological solutions and methodologies that led to an efficient workflow that allowed us to be profitable from day one. </li>
              <li>Responsible for client communication and interaction that was translated into documented project overviews for myself and the team to use for proper execution of the client’s needs.</li>
              <li>Worked with the team to ensure a high level of communication and efficiency between team members while maintaining the integrity and quality of our work. Took the lead on the pursuit of balance between using modern technologies that our clients desired while still being productive and making 100% of our deadlines.</li>
            </ul>
          </p>
        </div>

        <div style={styles.jobBlock}>
          <h3 style={styles.h3}>Helium</h3>
          <span style={styles.jobTitle}>Creative</span><br />
          <span>June 2012 to April 2013</span>
          <p>Started as an intern while in college but was quickly hired on as a full time junior designer within my first month of working at Helium.</p>
          <ul className="bullet">
            <li>Responsible for designing and coding website themes for clients on a variety of content management systems. Worked on several full on branding projects that include logo, collateral, brand and website design/development.</li>
            <li>Helped implement more efficient means of team communication that led to a more streamlined workflow and better engagement across all members of the team.</li>
            <li>Took initiative to redesign and implement a new website for the company that provided a more modern, responsive web presence that helped to attract additional clientele and showcased abilities within the modern trends of web design + development.</li>
          </ul>
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

      <section style={styles.section}>
        <h1 style={styles.sectionHeader}>Status</h1>
         <p>Currently looking for a position in UX/UI design and/or front end engineering. I am a highly passionate person that has a burning desire to work on products I believe make a difference in people's lives. I desire to work in an environement that is highly collaborative where I can learn, grow and help others along the way.</p>
      </section>

    </CSSTransitionGroup>
    );
  }
}

export default Experience;