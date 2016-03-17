import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class AdminBar extends React.Component {

  constructor(props) {
  	super(props);

    this.state = {
      menuActive: false
    }
  }

  toggleMenu() {
    this.setState({menuActive: !this.state.menuActive});
  }

  render() {
    let styles = {
      container: {
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999
      },
      bar: {
        width: "auto",
        maxWidth: 500,
        height: 40,
        background: "#222",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
      },
      greeting: {
        color: "#fff",
        textTransform: "uppercase",
        textAlign: "center",
        letterSpacing: 1,
        fontSize: "0.8em",
        padding: "0px 20px 0px 0px",
        flex: "1 0 auto",
        borderRight: "solid 1px rgba(0,0,0,0.2)"
      },
      avatar: {
        width: 40,
        height: 40,
        verticalAlign: "middle",
        marginRight: 20,
        marginLeft: 0
      },
      menu: {
        textAlign: "left",
        flex: "1 0 auto",
        padding: "0px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative", 
        ":hover" : { 
          background: "rgba(0,0,0,0.1)",
          cursor: "pointer"
        }
      },
      menuTitle: {
        margin: 0,
        lineHeight: "2em",
        fontSize: "0.8em",
        letterSpacing: 1,
        color: "whitesmoke"
      },
      menuUl: {
        background: "rgba(0,0,0,0.8)",
        position: "absolute",
        top: 40,
        left: 0,
        minWidth: 180,
        width: "auto",
        zIndex: -1
      },
      menuLi: {
        padding: 12,
        color: "whitesmoke",
        ":hover" : {
          background: "rgba(0,0,0,0.5)"
        }
      }
    }

    var menu = (
      <ul style={styles.menuUl} key="menu">
        <li key="item1" style={styles.menuLi}>
          <Link to="/work/new"> 
            <i style={{marginRight: 10}} className="fa fa-plus"></i> 
            Add Project
          </Link>
        </li>
        <li key="item4" style={styles.menuLi}>
          <a target="_blank" href="https://console.aws.amazon.com/s3/home?region=us-west-2&bucket=teddarcuri&prefix=colorado.gov/gallery/">
            <i style={{marginRight: 10}} className="fa fa-file"></i>
            Amazon S3
          </a>          
        </li>
        <li key="item5" style={styles.menuLi}>
          <a target="_blank" href="https://tedd-arcuri.firebaseio.com/">
            <i style={{marginRight: 10}} className="fa fa-fire"></i>
            Firebase
          </a>          
        </li>
        <li key="item2" style={styles.menuLi}>
          <Link to="/dashboard"> 
            <i style={{marginRight: 10}} className="fa fa-sitemap"></i>
            Manage Projects
          </Link>
        </li>
        <li key="item3" style={styles.menuLi}>
          <a href="#"
              onClick={this.props.unauthenticate}>
            <i style={{marginRight: 10}} className="fa fa-adjust"></i>
            Logout
          </a> 
        </li>
      </ul>
    )
    var renderMenu = this.state.menuActive ? menu : null,
        menuText = this.state.menuActive ? "CLOSE" : "MENU",
        menuIcon = this.state.menuActive ? "fa fa-caret-up" : "fa fa-th";
    return (
    <div style={styles.container} >
      <div id="admin-bar" style={styles.bar}>
        <span style={styles.greeting}>
          <img style={styles.avatar} src="https://lh4.googleusercontent.com/-2qeuQQr-24c/AAAAAAAAAAI/AAAAAAAAAAA/I3aLsM6bU2o/s456-p/photo.jpg" alt=""/>
          Welcome back, Tedd!
        </span>

        <div style={styles.menu} onClick={this.toggleMenu.bind(this)}>
          <p style={styles.menuTitle}>
            <i style={{marginRight: 7, verticalAlign: "middle" }} className={menuIcon}></i>
            {menuText}
          </p>
          <CSSTransitionGroup
            transitionName="fadeIn"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000} 
            >
            {renderMenu}
          </CSSTransitionGroup>
        </div>
      </div>
    </div>
    );
  }
}

export default Radium(AdminBar);