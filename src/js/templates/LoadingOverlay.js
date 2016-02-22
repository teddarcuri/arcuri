import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class LoadingOverlay extends React.Component {
	render() {
		var styles = {
			overlay: {
				background: "#eee",
				width: "100%",
				height: "100%",
				position: "absolute",
				top: 0, left: 0,
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			},
			dot: {
				background: this.props.color ? this.props.color : "#111"
			}
		}
		return(
			<CSSTransitionGroup transitionAppear={true}
							transitionAppearTimeout={2000}
							transitionName="fadeIn"
							transitionEnterTimeout={2000}
							transitionLeaveTimeout={2000}
							style={styles.overlay}>
				<div className="spinner">
				  <div style={styles.dot} className="dot1"></div>
				  <div style={styles.dot} className="dot2"></div>
				</div>
			</CSSTransitionGroup>		
		);
	}
}

export default LoadingOverlay;