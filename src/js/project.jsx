import React from 'react';

let projects = [
		{
			id: 1,
			name: "Colorado.gov",
			types: ["Web"],
			roles: ["Front End Development"],
			images: ["images/stuff.jpg"],
			logo: "images/stuff.jpg",
			background: "images/stuff.jpg"
		},
		{
			id: 2,
			name: "Colorado Governor",
			types: ["Web"],
			roles: ["Front End Development"],
			images: ["images/stuff.jpg"],
			logo: "images/stuff.jpg",
			background: "images/stuff.jpg"
		}
]

class Project extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		projects: projects,
  		project: projects[0]
  	}
  }

  componentDidMount() {
      const id = this.props.params.name
      this.setState({project: this.findById(this.state.projects, id) })
  }

  findById(source, id) {
	  for (var i = 0; i < source.length; i++) {
	    if (source[i].name == id) {
	      return source[i];
	    }
	  }
	}

  render() {
    return <h1>{this.state.project.name}</h1>
  }
}

export default Project