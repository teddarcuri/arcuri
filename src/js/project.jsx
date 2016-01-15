import React from 'react';

let projects = [
		{
			id: 1,
			name: "Colorado.gov",
			types: ["Web"],
			roles: ["Front End Development"],
			images: ["images/stuff.jpg"],
			logo: "src/img/logos/co-logo.png",
			background: "src/img/backgrounds/colorado.jpg"
		},
		{
			id: 2,
			name: "Colorado Interactive",
			types: ["Brand"],
			roles: ["Designer"],
			images: ["images/stuff.jpg"],
			logo: "src/img/logos/ci-logo.png",
			background: "src/img/backgrounds/coloradointeractive.jpg"
		},
		{
			id: 3,
			name: "Colorado Governor",
			types: ["Web"],
			roles: ["Front End Development"],
			images: ["images/stuff.jpg"],
			logo: "src/img/logos/co-state-seal.png",
			background: "src/img/backgrounds/hickenlooper.jpg"
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
    return (
    	<div className="project-page">
	    	<div className="project-sidebar">
	    		<header>
	    			<h1>{this.state.project.name}</h1>
	    			<img src={this.state.project.background} className="bg"/>
	    		</header>	
	    		<ul>
	    			<li><span>Gallery</span></li>
	    			<li><span>Overview</span></li>
	    			<li><span>Details</span></li>
	    		</ul>
	    	</div>
	    	<section className="project-content">
	    		<div className="container">
		    		<p>
		    			Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.
						Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
					</p>
					<p>
		    			Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.
						Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
					</p>
					<p>
		    			Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.
						Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
					</p>
					<p>
		    			Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.
						Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
					</p>
					<p>
		    			Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.
						Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
					</p>
					<p>
		    			Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.
						Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
					</p>
				</div>
	    	</section>
	    	<img src={this.state.project.background} className="bg"/>
	   </div>
    );
  }
}

export default Project