import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ElementQuery from 'react-element-query';


class ProjectGallery extends React.Component {

  constructor(props) {
  	super(props);

    this.state = {
      currentImg : this.props.project.gallery[Object.keys(this.props.project.gallery)[0]]
    }
  }

  setCurrentImg(key) {
    console.log(key);

    this.setState({ currentImg : this.props.project.gallery[Object.keys(this.props.project.gallery)[key]] });
  }

  renderCurrentImage() {
    return (
      <img src={this.state.currentImg.path} alt="" key="currentImg"/>
    )
  }

  incrementImg() {
    this.setState({ currentImg : this.props.project.gallery[Object.keys(this.props.project.gallery)[key]] });
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

          <CSSTransitionGroup component={"div"}
                          className="current-img"
                          transitionName="fadeIn"
                          transitionAppear={true}
                          transitionAppearTimeout={0}
                          transitionEnterTimeout={1000}
                          transitionLeaveTimeout={1000}>
              {this.renderCurrentImage()}
              <ul className="dots">
                {
                  Object.keys(p.gallery).map(function(img, key) {
                    return (
                      <li key={key} onClick={this.setCurrentImg.bind(this, key)}>
                        •
                      </li>
                    )
                  }, this)
                }
              </ul>
          </CSSTransitionGroup>

          <ElementQuery sizes={[{name: 'large', width: 300}, {name: 'small', width: 150}]}>
            <ul className="gallery-image-thumbs">
              <h3>Gallery</h3>
             {
                Object.keys(p.gallery).map(function(img, key) {
                  return (
                    <li className="gallery-image" key={key} onClick={this.setCurrentImg.bind(this, key)}>
                      <img src={p.gallery[img].path} alt=""/>
                    </li>
                  )
                }, this)
             }
            </ul>
          </ElementQuery>
      </CSSTransitionGroup>
    )
  }
}

export default ProjectGallery