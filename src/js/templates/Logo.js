import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from 'react-router';
import ProjectIndex from './ProjectIndex';
import LoginForm from './LoginForm';

class Logo extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			menuActive: false,
		    loginActive: false
		}
	}

	componentWillReceiveProps(nextProps){
		this.setState({menuActive: false})
	}

	toggleMenu() {
		this.setState({menuActive: !this.state.menuActive});
	}

	toggleLogin() {
		this.setState({loginActive: !this.state.loginActive});
	}

	render() {

		var active = this.state.menuActive ? "active" : null,
			activeStyle = {
				background: "#444"
			};

		var menuDOM = (
			<ul className="main">
             <li>
              <Link activeStyle={activeStyle} to="/about">
                About Me
              </Link>
            </li>
            <li>
              <Link activeStyle={activeStyle} to="/experience">
                Experience + Knowledge
              </Link>
            </li>
             <li>
              <Link activeStyle={activeStyle} to="/work">
                My Work
              </Link>
            </li>
            <li>
            <ProjectIndex projects={this.props.projects}
    					  currentProject={this.props.currentProject}
     					  type="BARS"/>
            </li>
             <li><Link to="/contact">Contact Me</Link></li>
          </ul>
		)

		var loginDOM = (
			<LoginForm
			 authenticate={this.props.authenticate}
			 unauthenticate = {this.props.unauthenticate}
			 uid = {this.props.uid}>
			</LoginForm>
		)

		var menu = this.state.menuActive ? menuDOM : null;
		var renderLogin = this.state.loginActive && !this.props.uid ? loginDOM : null;
		return(
			<div
			  id="logo"
			  style={{display: "flex", alignItems: "center", marginLeft: 20}}>
				 <Link to="/">
	                <svg className="letter" viewBox="0 0 614 619" version="1.1">
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
		          </Link>
		          <CSSTransitionGroup 
		          	id="menu" 
					className={active}
					transitionAppear={true}
					transitionAppearTimeout={1000}
					transitionName="menuFade"
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={1000}>
	                  <svg id="menu-icon" onClick={this.toggleMenu.bind(this)} onTouchStart={this.toggleMenu.bind(this)}  width="60px" height="65px" viewBox="40 0 70 80" version="1.1">
	                      <defs></defs>
	                      <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd" >
	                          <g className="svg-fill"> 
	                              <rect className="svg-fill"  id="Rectangle-1" x="30" y="0" width="90" height="17"></rect>
	                              <rect className="svg-fill"  id="Rectangle-2" x="30" y="33" width="90" height="17"></rect>
	                              <rect className="svg-fill"  id="Rectangle-3" x="30" y="66" width="90" height="17"></rect>
	                          </g>
	                      </g>
	                  </svg>
		              {menu}
		          </CSSTransitionGroup>
		          <svg className="letter" version="1.1" id="D-1" x="0px" y="0px"viewBox="-355.2 -98 94.4 102" enable-background="new -355.2 -98 94.4 102">
		            <g className="svg-fill" >
		              <path fill="none" d="M-288.4-46.9c0-14.2-8.6-25.1-25.1-25.1H-328v50h14.5C-297.6-22-288.4-33.4-288.4-46.9z"/>
		              <path className="svg-fill"  d="M-315-98h-40.2V4h40.2c32,0,54.1-20.2,54.1-50.9C-260.8-77.7-283-98-315-98z M-328-72h14.5
		                c16.4,0,25.1,10.9,25.1,25.1c0,13.6-9.2,24.9-25.1,24.9H-328V-72z"/>
		            </g>
		          </svg>
		          <div style={{height: 40}}>
		            <svg onClick={this.toggleLogin.bind(this)} className="letter" version="1.1" id="D-2" x="0px" y="0px"
		               viewBox="-355.2 -98 94.4 102" enable-background="new -355.2 -98 94.4 102" >
		              <g className="svg-fill" >
		                <path  fill="none" d="M-288.4-46.9c0-14.2-8.6-25.1-25.1-25.1H-328v50h14.5C-297.6-22-288.4-33.4-288.4-46.9z"/>
		                <path className="svg-fill"  d="M-315-98h-40.2V4h40.2c32,0,54.1-20.2,54.1-50.9C-260.8-77.7-283-98-315-98z M-328-72h14.5
		                  c16.4,0,25.1,10.9,25.1,25.1c0,13.6-9.2,24.9-25.1,24.9H-328V-72z"/>
		              </g>
		            </svg>
		          	{renderLogin}
		          </div>
		    </div>
		)
	}
}

export default Logo;