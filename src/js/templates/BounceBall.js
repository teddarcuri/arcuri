import React from 'react';
import Radium from 'radium';
import {Motion, spring, presets} from 'react-motion';
import {Router, Link} from 'react-router';

class BounceBall extends React.Component {

	getDefaults() {

	}

	getEnds() {

	}

  render() {
  	let styles= {
  		bubble: {
  			position: "relative",
  			perspective: "1000px",
  			WebkitPerspective: "1000px", 
  			width: "120px",
  			height: "120px",
  			display: "flex",
  			justifyContent: "center",
  			alignItems: "center",
  			marginBottom: 20,
  			marginRight: 20,
  			":hover" : {
  				border: "solid red 2px"
  			}
  		},
  		img: {
  			width: "100%",
  			height: "100%",
  			borderRadius: "50%",
  			postion: "relative",
  			margin: "0px auto",
  			zIndex: 1
  		},
  		shadow: {
  			width: "100px",
  			height: "100px",
  			background: "rgba(0,0,0,0.2)",
  			borderRadius: "50%",
  			WebkitFilter: "blur(12px)",
  			WebkitTransform: "translateY(70%) rotateX(100deg)",
  			position: "absolute",
  			top: 0,
  			left: 35,
  			zIndex: 0
  		},
 
  	}
    return (
    	<Link to={this.props.path}>
		<Motion defaultStyle={{x: -200, width: 300, blur: 100}} style={{x: spring(0, {stiffness: 80, damping: 40}), width: spring(50, {stiffness: 80, damping: 40}), blur: spring(6, {stiffness: 80, damping: 40}) }}>
		  {value => {
		  	styles.img.WebkitTransform = "translateY(" + value.x + "px)";
		  	styles.shadow.width = value.width;
		  	styles.shadow.WebkitFilter = `blur(${value.blur}px)`;

		  	return (
		  		<div style={styles.bubble}>
				  	<img style={styles.img} src={this.props.background} alt=""/>
				  	<div style={styles.shadow}></div>	
				</div>
		  	)
		  }}
		</Motion>
		</Link>
    )
  }
}

export default BounceBall;