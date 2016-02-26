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

	getDefaults() {

	}

	getEnds() {

	}

	handleHover() {
		this.setState({hover: true})
	}

	handleHoverOut() {
		this.setState({hover: false})
	}

  render() {
  
    return (
    	<Link to={this.props.path} 
    		  ref={this.props.ref} 
    		  style={{
					width: "140px",
		  			height: "140px",
		  			padding: 10
		  		}}>
			<Motion defaultStyle={{x: -200, width: 120, blur: 40}} 
				    style={{x: spring(0, {stiffness: 80, damping: 20}), width: spring(50, {stiffness: 80, damping: 20}), blur: spring(6, {stiffness: 80, damping: 20}) }}>
			  {value => {
			  	//styles.img.WebkitTransform = "translateY(" + value.x + "px)";
			  	//styles.shadow.width = value.width;
			  	//styles.shadow.WebkitFilter = `blur(${value.blur}px)`;
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
			  		bubbleContainer: {
						width: "140px",
			  			height: "140px",
			  			padding: 10
			  		},
			  		img: {
			  			width: "100%",
			  			height: "100%",
			  			borderRadius: "50%",
			  			postion: "relative",
			  			margin: "0px auto",
			  			zIndex: 1,
			  			transition: "all ease 0.25s",
			  			WebkitTransform: this.state.hover ? "translateY(-33%)" : "translateY(" + value.x + "px)"
			  		},
			  		shadow: {
			  			width: this.state.hover ? "100px" : value.width,
			  			height: "100px",
			  			background: "rgba(0,0,0,0.36)",
			  			borderRadius: "50%",
			  			WebkitFilter: this.state.hover ? "blur(20px)" : "blur(" + value.blur +"px)",
			  			WebkitTransform: "translateY(70%) rotateX(100deg) translateX(-50%)",
			  			MozFilter: this.state.hover ? "blur(20px)" : "blur(" + value.blur +"px)",
			  			MozTransform: "translateY(70%) rotateX(100deg)",
			  			position: "absolute",
			  			top: 0,
			  			left: "50%",
			  			zIndex: 0,
			  			transition: "all ease 0.25s"
			  		},
			  	}
			  	return (
			  		<div onMouseOver={this.handleHover.bind(this)}  onMouseOut={this.handleHoverOut.bind(this)} className="bounce-ball" style={styles.bubble}>
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

export default Radium(BounceBall);