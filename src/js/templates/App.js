// React
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, Navigation, History, browserHistory} from 'react-router';
import ReactTransitionGroup from 'react-addons-transition-group';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// Routes 
import Index from './index';
import About from './about';
import Experience from './experience';
import Projects from './projects';
import Project from './project';
import Contact from './contact';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

// Components
import AlertBar from './AlertBar';
import Logo from './Logo';
import ProjectDiagonals from './ProjectDiagonals';
import ProjectBar from './ProjectBar';
import ProjectIndex from './ProjectIndex';
import NewProjectForm from './NewProjectForm';
import LoadingOverlay from './LoadingOverlay';

// Firebase
import Firebase from 'firebase';
//const ref = new Firebase("https://tedd-arcuri.firebaseio.com/");
import Rebase from 're-base';
//var base = Rebase.createClass('https://tedd-arcuri.firebaseio.com/');

// Utility
import h from '../utilities/helpers';
import projectList from '../utilities/project-list';
import imagesLoaded from 'imagesloaded';
import Catalyst from 'react-catalyst';
import reactMixin from 'react-mixin';
import {Motion, spring, presets} from 'react-motion';

// Styles 
import * as styles from "../../sass/app.scss";


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
      // Alert
      alertConfig: {
        active: false,
        message: "",
        icon: "",
        type: "",
        timeout: 50
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

  componentWillMount() {
    // Check to see if user is authenticated
    //this.checkIfAuthenticated();
  }

  componentDidMount() {
    // Check to see if the loaded route will be a project component
    this.checkIfProjectPage(this.props);

    // Go get projects from Firebase
    // base.syncState('projects', {
    //   context: this,
    //   state: 'projects',
    //   asArray: true
    // });

    this.setState({projects: projectList});

    // Images Loaded
    this.imagesLoaded();
  }

  componentWillReceiveProps(nextProps) {
    // Check to see if the next route will be a project component
    this.checkIfProjectPage(nextProps);
  }

  componentDidUpdate() {
    this.imagesLoaded();
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

  imagesLoaded() {
    // Images Loaded
    var imgLoad = imagesLoaded( this.refs.appWindow, {background: true});

    imgLoad.on('progress', function(imgLoad, image) {
      var result = image.isLoaded ? 'loaded' : 'broken';
      image.img.classList.remove("is-loading")
      image.img.classList.add(result)
    }) 

    imgLoad.on( 'done', function( instance ) {
    });
  }

  /* 
    Auth
  */
  authenticate(credentials) {
    ref.authWithPassword({
      email: credentials.email,
      password: credentials.password
    }, (error, authData) => {
      if (error) {
        console.log("failed", error);
        var alertConfig = {
           active: true,
           message: "Hold onto your butts.",
           icon: "fa fa-exclamation-triangle",
           type: "ERROR",
           timeout: 5000
        }
        this.setState({alertConfig: alertConfig});
      } else {
        this.setState({uid: authData.uid});
        var alertConfig = {
           active: true,
           message: "Successfully signed in!",
           icon: "fa fa-check",
           type: "SUCCESS",
           timeout: 5000
        }
        this.setState({alertConfig: alertConfig});
      }
    });
  }

  unauthenticate() {
    ref.unauth();
    this.setState({uid: ""});
    var alertConfig = {
           active: true,
           message: "Successfully logged out",
           type: "SUCCESS",
           timeout: 5000
        }
    this.setState({alertConfig: alertConfig});
  }

  checkIfAuthenticated() {
    if (localStorage.getItem("firebase:session::tedd-arcuri")) {
      let session = localStorage.getItem("firebase:session::tedd-arcuri");
          session = JSON.parse(session);
      this.setState({uid: session.uid});

      var config ={
        active: true,
        message: "Logged in",
        icon: "fa fa-check",
        type: "SUCCESS",
        timeout: 5000
      }
      this.setState({alertConfig: config});
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

  hideAlertBar() {
    this.state.alertConfig.active = false;
    this.setState({alertConfig: this.state.alertConfig});
  }

  renderLogoutButton() {
    if (this.state.uid != "") {
       return (
        <a id="logout-button"
              className={ this.state.isProjectPage ? "light" : null }
              onClick={this.unauthenticate.bind(this)}>
            Logout
        </a>
      )
    }
  }

  render() {
    var logoClasses = this.state.isProjectPage ? "light" : "dark",
        logo = this.props.location.pathname !== "/" ? <Logo projects={this.state.projects} currentProject={this.state.currentProject}/>: null;

    let styles = {
      pageContainer: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "100%",
        width: "100%"
      }
    }

    return (
    <div ref="appWindow">

      <AlertBar config={this.state.alertConfig}
                hideAlertBar={this.hideAlertBar.bind(this)}></AlertBar>

      {this.renderLogoutButton()} 

      <header id="main" className={logoClasses}> 
        {logo}       
      </header>

      <div style={styles.pageContainer}>
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
            setProjectMode: this.setProjectMode.bind(this),
            //Auth
            authenticate: this.authenticate.bind(this),
            unauthenticate: this.unauthenticate.bind(this),
            uid: this.state.uid
          })}
      </div>

      <ProjectBar projects={this.state.projects}
                 currentProject={this.state.currentProject}
                 uid={this.state.uid}
                 location={this.props.location} />

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
      <Route path="dashboard" component={Dashboard}></Route>
      <Route path="experience" component={Experience}/>
      <Route path="work" component={Projects} >
        <IndexRoute component={ProjectIndex} />
        <Route path="new" component={Project} />
        <Route path=":name" component={Project} />
      </Route>
      <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>
), document.getElementById('app'));

export default App;