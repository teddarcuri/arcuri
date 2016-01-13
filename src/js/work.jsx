class Work extends React.Component {
  getInitialState() {
    return {
      projects: [
        {
          name: "Stratus",
          size: "small",
          coverImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/166133/stratus_cover.jpg"
        },
        {
          name: "Colorado.gov",
          size: "small",
          coverImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/166133/colorado_gov_cover.jpg"
        },
        {
          name: "Colorado Governor Hickenlooper",
          size: "small",
          coverImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/166133/colorado_gov_cover.jpg"
        },
        {
          name: "Olive Real Estate",
          size: "small",
          coverImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/166133/colorado_gov_cover.jpg"
        }
      ]
    }
  }

  componentDidMount() {
    $('.projects-grid').masonry({
      itemSelector: '.project',
      gutter: 0,
      columnWidth: 100
    });
  }

  render() {
    var projects = this.state.projects;
    return (
      <div>
        <h1>My Work</h1>
        <div className="projects-grid">
          {projects.map(function(project) {
            var classes = "project " + project.size;
            return ( 
              <div className={classes}>
                <img src={project.coverImage} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Work;