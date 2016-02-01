import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class ProjectGallery extends React.Component {

  constructor(props) {
  	super(props);

    this.state = {
      currentImg : this.props.project.gallery[Object.keys(this.props.project.gallery)[0]].path 
    }
  }

  render() {
    var p = this.props.project,
        currentImg = this.state.currentImg;

    return (
      <CSSTransitionGroup component={"div"}
                          className="gallery"
                          transitionName="fadeIn"
                          transitionAppear={true}
                          transitionAppearTimeout={0}
                          transitionEnterTimeout={1000}
                          transitionLeaveTimeout={1000}>

          <div className="current-img">
            <img src={currentImg} alt=""/>
          </div>

          <ul className="gallery-image-thumbs">
           {
              Object.keys(p.gallery).map(function(img, key) {
                return (
                  <li className="gallery-image" key={key}>
                    <img src={p.gallery[img].path} alt=""/>
                  </li>
                )
              })
           }
          </ul>
      </CSSTransitionGroup>
    )
  }
}

export default ProjectGallery