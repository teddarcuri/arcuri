import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ElementQuery from 'react-element-query';
import Radium from 'radium';


class ProjectGallery extends React.Component {

  constructor(props) {
  	super(props);

    this.state = {
      currentImage : 0
    }
  }

  nextImg() {
    var key = this.state.currentImage + 1;
    this.setCurrentImage(key);

  }

  prevImg() {
    var key = this.state.currentImage - 1;
    this.setCurrentImage(key);
  }

  setCurrentImage(key) {

    var images = Object.keys(this.props.project.gallery),
        length = images.length - 1; // Off by one 

    if (key  > length) {
      // set first
      key = 0;
    } else if (key < 0) {
      // set last
      key = length
    }

    this.setState({ currentImage : key });
  }

  renderCurrentImage() {
    return (
      <img src={this.props.project.gallery[Object.keys(this.props.project.gallery)[this.state.currentImage]].path} alt="" key="currentImage"/>
    )
  }

  renderArrows() {
    var imageCount = Object.keys(this.props.project.gallery).length;
    if (imageCount > 1) {
      return (
        <ul style={this.getStyles().arrows}>
          <div key="NEXT" onClick={this.nextImg.bind(this)} style={this.getStyles().arrows.next}>NEXT</div>
          <div key="PREV" onClick={this.prevImg.bind(this)} style={this.getStyles().arrows.prev}>PREV</div>
        </ul>
      )
    }
  }

  getStyles() {
    return {
       arrows: {
        color: "#fff",
        position: "absolute",
        right: 10,
        top: 0, 
        next: {
          fontSize: "0.66em",
          background: "rgba(0,0,0,0.6)",
          padding: 10,
          ":hover" : {
            background: "rgba(0,0,0,0.3)"
          }
        },
        prev: {
          fontSize: "0.66em",
          background: "rgba(0,0,0,0.6)",
          padding: 10,
          ":hover" : {
            background: "rgba(0,0,0,0.3)"
          }
        }
      }
    }
  }
 
  render() {
    var p = this.props.project,
        currentImage = this.props.project.gallery[Object.keys(this.props.project.gallery)[this.state.currentImage]];


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
              {this.renderArrows()}
              <ul className="dots">
                {
                  Object.keys(p.gallery).map(function(img, key) {
                    return (
                      <li key={key} onClick={this.setCurrentImage.bind(this, key)}>
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
                    <li className="gallery-image" key={key} onClick={this.setCurrentImage.bind(this, key)}>
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

export default Radium(ProjectGallery)