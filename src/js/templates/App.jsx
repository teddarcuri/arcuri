// React
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, Navigation, History} from 'react-router';
import ReactTransitionGroup from 'react-addons-transition-group';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import projectList from '../utilities/project-list';

// Routes 
import Index from './index';
import About from './about';
import Projects from './projects';
import ProjectDiagonals from './ProjectDiagonals';
import ProjectBar from './ProjectBar';
import ProjectIndex from './ProjectIndex';
import NewProjectForm from './NewProjectForm';
import Project from './project';
import Contact from './contact';

// Firebase
import Rebase from 're-base';
var base = Rebase.createClass('https://tedd-arcuri.firebaseio.com/');

// Utility
import h from '../utilities/helpers';
import imagesLoaded from 'imagesloaded';
import Catalyst from 'react-catalyst';
import reactMixin from 'react-mixin';

/*
  Application
*/
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // Projects
      projects: [],
      isProjectPage: false,
      currentProject: {},
      projectMode: "CREATE",
      newProject: {
        name: "New Project",
        description: "Enter description",
        background: "http://www.backgroundsy.com/file/large/light-colorful-background.jpg",
        logo: "https://s3.amazonaws.com/launchkey-resources/logo/logo/launchkey-logos_launchkey-icon-white.png",
        types: "CHANGE ME",
        role: "uhh",
        gallery: {}
      },
      // Notification Bar
      notificationBar: {
        isActive: false,
        type: "alert"
      },
      // User
      uid: ""
    }
  }

  /*
    Life Cycle 
  */

  componentDidMount() {
    // Check to see if the loaded route will be a project component
    this.checkIfProjectPage(this.props);

    // Go get projects from Firebase
    base.syncState('projects', {
      context: this,
      state: 'projects',
      asArray: true
    });

    // // Images Loaded
    // var imgLoad = imagesLoaded( this.refs.appWindow, function( instance ) {
    //   //console.log(instance);
    // });

    // imgLoad.on('progress', function(imgLoad, image) {
    //   var result = image.isLoaded ? 'loaded' : 'broken';
    //   //console.log( 'image is ' + result + ' for ' + image.img.src );
    // }) 

    // imgLoad.on( 'done', function( instance ) {
    // });
  }

  componentWillReceiveProps(nextProps) {
    // Check to see if the next route will be a project component
    this.checkIfProjectPage(nextProps);
  }

  /* 
    Page Detection
  */

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

  setProjectMode(mode) {
    if (mode === "CREATE") {
      this.setState({projectMode: "CREATE"});
    } else {
      this.setState({projectMode: "EDIT"});
    }
  } 

  /*
    CRUD 
  */
  findById(source, id) {
    for (var i = 0; i < source.length; i++) {
      if (source[i].name == id) {
        return source[i];
      }
    }
  }

  addProject() {
    var project = this.state.newProject;
    this.state.projects.push(project);
    this.setState({projects: this.state.projects});
    this.history.pushState(null, '/work/' + project.name);
  }

  updateProject() {
    var key = this.state.currentProject.key;

    this.state.projects[key] = this.state.currentProject;
    this.setState({projects: this.state.projects})

    var notification = {
      isActive: true,
      type: "update-success"
    }
  }

  removeProject(project) {
    var key = this.state.currentProject.key;
    this.state.projects[key] = null
    // Update state -> Go to work index page
    this.setState({projects: this.state.projects});
    this.history.pushState(null, '/work');
  }

  addGalleryImage() {
    var timestamp = (new Date()).getTime();

    if (this.state.projectMode === "CREATE") {
      this.state.newProject.gallery['image' + timestamp] = {path: "http://mbeyacityfc.com/wp-content/themes-wp-appkit/wpak-tabs-android/img/img-icon.svg"}
      this.setState({newProject: this.state.newProject});
    } else {
      this.state.currentProject.gallery['image' + timestamp] = {path: "http://mbeyacityfc.com/wp-content/themes-wp-appkit/wpak-tabs-android/img/img-icon.svg"}
      this.setState({currentProject: this.state.currentProject});
    }
  }

  removeGalleryImage(key) {
    if (this.state.projectMode === "CREATE") {
      delete this.state.newProject.gallery[key];
      this.setState({newProject: this.state.newProject});
    } else {
      delete this.state.currentProject.gallery[key];
      this.setState({currentProject: this.state.currentProject});
    }
  }

  /*
    Render 
  */

  renderProjectBubbles() {
    return (
      <ProjectIndex projects={this.state.projects}
                    currentProject={this.state.currentProject} />
    )
  }

  render() {
    var logoClasses = this.state.isProjectPage ? "light" : "dark",
        renderBubbles = this.renderProjectBubbles(); 

    return (
    <div className="app-window"
          ref="appWindow">
    
        <header id="main" className={logoClasses}>
  
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
                <ul className="main">
                   <li><Link to="/about">About</Link></li>
                   <li>
                    <Link to="/work">
                      My Work
                    </Link>
                  </li>
                  <li>
                      {renderBubbles} 
                  </li>
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
                                className='f-center'>
    	       {React.cloneElement(this.props.children, {
                key: this.props.location.pathname,
                isProjectPage: this.state.isProjectPage,
                projects: this.state.projects,
                currentProject: this.state.currentProject,
                newProject: this.state.newProject,
                addProject: this.addProject.bind(this),
                updateProject: this.updateProject.bind(this),
                removeProject: this.removeProject.bind(this),
                linkState: this.linkState.bind(this),
                addGalleryImage: this.addGalleryImage.bind(this),
                removeGalleryImage: this.removeGalleryImage.bind(this),
                projectMode: this.state.projectMode,
                setProjectMode: this.setProjectMode.bind(this)
              })}
           </ReactTransitionGroup>
	     </div>

       <div id="background-smoke">
       </div>

       <ProjectBar projects={this.state.projects}
                   currentProject={this.state.currentProject} />

      </div>       
    )
  }
}

// Mixins
reactMixin.onClass(App, Catalyst.LinkedStateMixin);
reactMixin.onClass(App, History);

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
        <Route path="new" component={Project} />
        <Route path=":name" component={Project} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));

export default App;