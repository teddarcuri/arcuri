// React
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactTransitionGroup from 'react-addons-transition-group';
import createBrowserHistory from 'history/lib/createBrowserHistory';


// Routes
import Index from './index';
import About from './about';
import Projects from './projects';
import ProjectIndex from './ProjectIndex';
import Project from './project';

// Utility
import h from './helpers';

String.prototype.contains = function(s) {
  return this.indexOf(s) !== -1;
}

/*
  Application
*/

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isProjectPage: false
    }
  }

  render() {
    var logoClasses = this.state.isProjectPage ? "light" : "dark"; 
    return (
    <div className="app-window">
        <header id="main" className={logoClasses}>
           <Link to="/">
              <div id="logo" >   
                  <svg width="614px" height="619px" viewBox="0 0 614 619" version="1.1">
                      <title>Fill 1 + Fill 2</title>
                      <desc>Created with Sketch.</desc>
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
             <svg version="1.1" id="D-1" x="0px" y="0px"
                 viewBox="-355.2 -98 94.4 102" enable-background="new -355.2 -98 94.4 102" >
                <g className="svg-fill" >
                  <path fill="none" d="M-288.4-46.9c0-14.2-8.6-25.1-25.1-25.1H-328v50h14.5C-297.6-22-288.4-33.4-288.4-46.9z"/>
                  <path className="svg-fill"  d="M-315-98h-40.2V4h40.2c32,0,54.1-20.2,54.1-50.9C-260.8-77.7-283-98-315-98z M-328-72h14.5
                    c16.4,0,25.1,10.9,25.1,25.1c0,13.6-9.2,24.9-25.1,24.9H-328V-72z"/>
                </g>
              </svg>
              <svg version="1.1" id="D-2" x="0px" y="0px"
                 viewBox="-355.2 -98 94.4 102" enable-background="new -355.2 -98 94.4 102" >
                <g className="svg-fill" >
                  <path  fill="none" d="M-288.4-46.9c0-14.2-8.6-25.1-25.1-25.1H-328v50h14.5C-297.6-22-288.4-33.4-288.4-46.9z"/>
                  <path className="svg-fill"  d="M-315-98h-40.2V4h40.2c32,0,54.1-20.2,54.1-50.9C-260.8-77.7-283-98-315-98z M-328-72h14.5
                    c16.4,0,25.1,10.9,25.1,25.1c0,13.6-9.2,24.9-25.1,24.9H-328V-72z"/>
                </g>
              </svg>
        </header>

        <div id="app-window" className="center">
          <ReactTransitionGroup 
                        component='div'
                        className='transition-group'>
    	       {React.cloneElement(this.props.children, {
                key: this.props.location.pathname,
                isProjectPage: this.state.isProjectPage
              })}
           </ReactTransitionGroup>
	     </div>
      </div>       
    )
  }
}

/*
  Routes
*/

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
    	<IndexRoute component={Index}/>
      <Route path="about" component={About}/>
      <Route path="work" component={Projects}>
          <IndexRoute component={ProjectIndex}/>
          <Route path=":name" component={Project} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
