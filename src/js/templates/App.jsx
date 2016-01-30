// React
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, Navigation} from 'react-router';
import ReactTransitionGroup from 'react-addons-transition-group';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import projectList from '../utilities/project-list';

// Utility
import h from '../utilities/helpers';
import BackgroundSmoke from '../utilities/background-smoke';

// Routes
import Index from './index';
import About from './about';
import Projects from './projects';
import ProjectDiagonals from './ProjectDiagonals';
import Project from './project';
import Contact from './contact';

// Firebase
import Rebase from 're-base';
var base = Rebase.createClass('https://tedd-arcuri.firebaseio.com/');

/*
  Application
*/
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isProjectPage: false,
      currentProject: {},
      projects: []
    }
  }

  componentDidMount() {

    //BackgroundSmoke.init(); 
    // Check to see if the loaded route will be a project component
    this.checkIfProjectPage(this.props);

    // Go get projects from Firebase
    base.syncState('projects', {
      context: this,
      state: 'projects',
      asArray: true,
      then() {
        console.log(this.state.projects);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    // Check to see if the next route will be a project component
    this.checkIfProjectPage(nextProps);
  }

  checkIfProjectPage(props) {
    var path = props.location.pathname;

    // If the pathname contains work/
    if (path.indexOf('work/') != -1) {

      // Set to Project Page
      this.setState({isProjectPage: true});

      // Set Current Project
      const id = props.params.name;
      this.setState({currentProject: this.findById(this.state.projects, id)});
    } else {
      this.setState({isProjectPage: false});
    }
  }

  findById(source, id) {
    for (var i = 0; i < source.length; i++) {
      if (source[i].name == id) {
        return source[i];
      }
    }
  }

  render() {
    var logoClasses = this.state.isProjectPage ? "light" : "dark";
    return (
    <div className="app-window">
    
        <header id="main" className={logoClasses}>
          
           <Link id="close-btn" to="/work">
              <svg version="1.1" id="Layer_1"  x="0px" y="0px"
                 viewBox="0 0 80 80" enable-background="new 0 0 80 80" >
              <g>
                <path fill="#FFFFFF" d="M38.9,77.5c-19.9,0-36-16.2-36-36c0-19.9,16.2-36,36-36c19.9,0,36,16.2,36,36
                  C74.9,61.3,58.8,77.5,38.9,77.5z M38.9,12.5c-16,0-29,13-29,29s13,29,29,29s29-13,29-29S54.9,12.5,38.9,12.5z"/>
              </g>
              <g>
                <path fill="#FFFFFF" d="M24.8,58.7c-0.8,0-1.6-0.3-2.3-0.9c-1.2-1.2-1.2-3.3,0-4.5l28.7-28.7c1.2-1.2,3.3-1.2,4.5,0
                  c1.2,1.2,1.2,3.3,0,4.5L27.1,57.7C26.5,58.3,25.7,58.7,24.8,58.7z"/>
              </g>
              <g>
                <path fill="#FFFFFF" d="M53.6,58.7c-0.8,0-1.6-0.3-2.3-0.9L22.6,29c-1.2-1.2-1.2-3.3,0-4.5c1.3-1.2,3.3-1.2,4.5,0l28.7,28.7
                  c1.2,1.2,1.2,3.3,0,4.5C55.2,58.3,54.4,58.7,53.6,58.7z"/>
              </g>
              </svg>
           </Link>
           <Link to="/">
              <div id="logo" >   
                  <svg className="letter" width="614px" height="619px" viewBox="0 0 614 619" version="1.1">
                      <defs></defs>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                          <g id="Page-1-Copy">
                              <g id="Fill-1-+-Fill-2">
                                  <path className="svg-fill"  d="M0,191.454578 L613.484079,191.454578 L613.484079,0.4253125 L0,0.4253125 L0,191.454578 Z" id="Fill-1"></path>
                                  <path className="svg-fill"  d="M211.249048,619 L402.225238,619 L402.225238,0.4253125 L211.249048,0.4253125 L211.249048,619 Z" id="Fill-2"></path>
                              </g>
                          </g>
                      </g>
                  </svg>
              </div>
            </Link>
            <div id="menu">
                <span>
                    <svg id="menu-icon"  width="60px" height="60px" viewBox="40 0 70 80" version="1.1">
                        <defs></defs>
                        <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd" >
                            <g className="svg-fill"> 
                                <rect className="svg-fill"  id="Rectangle-1" x="30" y="0" width="90" height="17"></rect>
                                <rect className="svg-fill"  id="Rectangle-2" x="30" y="33" width="90" height="17"></rect>
                                <rect className="svg-fill"  id="Rectangle-3" x="30" y="66" width="90" height="17"></rect>
                            </g>
                        </g>
                    </svg>
                </span>
                <ul>
                   <li><Link to="/about">About</Link></li>
                   <li><Link to="/work">My Work</Link></li>
                   <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
             <svg className="letter" version="1.1" id="D-1" x="0px" y="0px"
                 viewBox="-355.2 -98 94.4 102" enable-background="new -355.2 -98 94.4 102" >
                <g className="svg-fill" >
                  <path fill="none" d="M-288.4-46.9c0-14.2-8.6-25.1-25.1-25.1H-328v50h14.5C-297.6-22-288.4-33.4-288.4-46.9z"/>
                  <path className="svg-fill"  d="M-315-98h-40.2V4h40.2c32,0,54.1-20.2,54.1-50.9C-260.8-77.7-283-98-315-98z M-328-72h14.5
                    c16.4,0,25.1,10.9,25.1,25.1c0,13.6-9.2,24.9-25.1,24.9H-328V-72z"/>
                </g>
              </svg>
              <svg className="letter" version="1.1" id="D-2" x="0px" y="0px"
                 viewBox="-355.2 -98 94.4 102" enable-background="new -355.2 -98 94.4 102" >
                <g className="svg-fill" >
                  <path  fill="none" d="M-288.4-46.9c0-14.2-8.6-25.1-25.1-25.1H-328v50h14.5C-297.6-22-288.4-33.4-288.4-46.9z"/>
                  <path className="svg-fill"  d="M-315-98h-40.2V4h40.2c32,0,54.1-20.2,54.1-50.9C-260.8-77.7-283-98-315-98z M-328-72h14.5
                    c16.4,0,25.1,10.9,25.1,25.1c0,13.6-9.2,24.9-25.1,24.9H-328V-72z"/>
                </g>
              </svg>
        </header>

        <div id="app-window" className="center">
          <ReactTransitionGroup component='div'
                                className='transition-group'>
    	       {React.cloneElement(this.props.children, {
                key: this.props.location.pathname,
                isProjectPage: this.state.isProjectPage,
                projects: this.state.projects,
                currentProject: this.state.currentProject
              })}
           </ReactTransitionGroup>
	     </div>

       <div id="background-smoke">
       </div>
      </div>       
    )
  }
}

/*
  Render Routes
*/
ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
    	<IndexRoute component={Index}/>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="work" component={Projects} >
        <IndexRoute component={ProjectDiagonals} />
        <Route path=":name" component={Project} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
