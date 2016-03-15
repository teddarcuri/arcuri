import React from 'react';
import Radium from 'radium';
import {Motion, spring, presets} from 'react-motion';
import {Router, Link} from 'react-router';

class BounceBall extends React.Component {


	constructor(props) {
		super(props);

		this.state = {
			hover: false
		}
	}

	handleHover() {
		this.setState({hover: true})
		this.props.setActiveProject(this.props.id)
	}

	handleHoverOut() {
		this.setState({hover: false})
		this.props.setActiveProject(null);
	}

  render() {

  	let styles = {
		bubble: {
			position: "relative",
			perspective: "1000px",
			WebkitPerspective: "1000px", 
			MozPerspective: "1000px", 
			width: "100%",
			height: "100%",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		images: {
			width: "100%",
			height: "100%",
			display: "flex",
			position: "relative",
			justifyContent: "center",
			alignItems: "center",
			borderRadius: "50%",
			overflow: "hidden",
			transition: "all ease 0.25s",
			WebkitTransform: this.state.hover ? "translateY(-33%)" : "translateY(0px)",
			MozTransform: this.state.hover ? "translateY(-33%)" : "translateY(0px)"
		},
		img: {
			width:  "100%",
			height: "100%",
			position: "absolute",
			left: 0,
			top: 0,
			postion: "relative",
			margin: "0px auto",
			transition: "all ease 0.25s",
			zIndex: -1,
		},
		logo: {
			transition: "all ease 0.25s",
			width: this.state.hover ? "75px" : "0px",
			height: this.state.hover ? "75px" : "0px",
			zIndex: 1
		},
		shadow: {
			width: this.state.hover ? "100px" : "30px",
			height: "100px",
			background: "rgba(0,0,0,0.25)",
			borderRadius: "50%",
			WebkitFilter: this.state.hover ? "blur(20px)" : "blur(10px)",
			WebkitTransform: "translateY(70%) rotateX(100deg) translateX(-50%)",
			MozFilter: this.state.hover ? "blur(20px)" : "blur(10px)",
			MozTransform: "translateY(70%) rotateX(100deg) translateX(-50%)",
			filter: this.state.hover ? "blur(20px)" : "blur(10px)",
			transform: "translateY(70%) rotateX(100deg) translateX(-50%)",
			position: "absolute",
			top: 0,
			left: "50%",
			zIndex: -1,
			transition: "all ease 0.25s"
		}
	}
	var name = this.props.name && this.state.hover ? this.props.name : null,
		background = this.props.background ? <img style={styles.img} src={this.props.background} alt=""/> : null,
		logo = this.props.logo ? <img style={styles.logo} src={this.props.logo} alt=""/> : null;
  
    return (
    	<Link to={this.props.path} 
    		  ref={this.props.ref} 
    		  style={{
					width: this.props.size === "SMALL" ? "60px" : "140px",
		  			height: this.props.size === "SMALL" ? "60px" : "140px",
		  			padding: 10,
		  			position: "relative"
		  		}}>
	  		<div onMouseOver={this.handleHover.bind(this)}  onMouseOut={this.handleHoverOut.bind(this)}  style={styles.bubble}>
	  			<div style={styles.images}>
	  				{background}
	  				{logo}
	  			</div>
			  	<div style={styles.shadow}></div>	
			  	<h4 style={{
			  		position: "absolute",
			  		bottom: -70,
			  		left: 0,
			  		padding: "10px 0px",
			  		width: "100%",
			  		textAlign: "center",
			  		color: "#aaa",
			  		fontWeight: 300,
			  		fontSize: "1em"
			  		}}>
			  		{/*name*/}
			  	</h4>
			</div>
		</Link>
    )
  }
}

export default Radium(BounceBall);