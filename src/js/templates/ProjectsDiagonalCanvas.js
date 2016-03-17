import React from 'react';
import {Router, Link} from 'react-router';

class ProjectsDiagonalCanvas extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Set scroll position to top of page
    window.scrollTo(0, 0);
  }


  canvasInit() {
    // Canvas Configuration
    var canvas = document.getElementById('projects-canvas');
    var ctx = canvas.getContext('2d');

    var left = 0;
    this.props.projects.map(function(){
      left = left + 80;
      ctx.fillStyle = "rgb(0,0,0, 1)";
      ctx.fillRect (10, 10, 55, left);
    });
    
  }

  render() {
    return (
    	<canvas 
        id="projects-canvas"
        style={{
          position: "absolute",
          left: 0, top: 0,
          background: "#111"
        }}
        width={window.innerWidth}
        height={window.innerHeight}
      >
        Uh oh. Looks like you're using a browser that does not support the canvas element.
      </canvas>
    )
  }
}

export default ProjectsDiagonalCanvas