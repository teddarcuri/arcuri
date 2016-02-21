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

  renderGalleryTrack() {
    return (
       <CSSTransitionGroup component={"div"}
                          className="gallery-image-track"
                          transitionName="gallerySlide"
                          transitionAppear={true}
                          transitionAppearTimeout={1000}
                          transitionEnterTimeout={700}
                          transitionLeaveTimeout={700}>
          <div className="gallery-image" key={this.state.currentImage}>
            <img src={this.props.project.gallery[Object.keys(this.props.project.gallery)[this.state.currentImage]].path} alt=""/>
          </div>
      </CSSTransitionGroup>
    )
  }

  renderArrows() {
    var imageCount = Object.keys(this.props.project.gallery).length;
    if (imageCount > 1) {
      return (
        <ul style={this.getStyles().arrows}>
          <div key="NEXT" onClick={this.nextImg.bind(this)} style={this.getStyles().arrows.next}>
            <i style={this.getStyles().icon}className="fa fa-chevron-left"></i>
          </div>
          <div key="PREV" onClick={this.prevImg.bind(this)} style={this.getStyles().arrows.prev}>
            <i style={this.getStyles().icon}className="fa fa-chevron-right"></i>
          </div>
        </ul>
      )
    }
  }

  getStyles() {
    return {
       icon: {
          color: "#fff",
          padding: 10
       },
       arrows: {
        color: "#fff",
        position: "absolute",
        right: 0,
        top: 0, 
        padding: 0,
        margin: 0,
        next: {
          fontSize: "0.66em",
          background: "rgba(0,0,0,0.6)",
          padding: 10,
          display: "inline-block",
          ":hover" : {
            cursor: "pointer",
            background: "rgba(255,255,255,0.1)"
          }
        },
        prev: {
          fontSize: "0.66em",
          background: "rgba(0,0,0,0.6)",
          padding: 10,
          display: "inline-block",
          ":hover" : {
            cursor: "pointer",
            background: "rgba(255,255,255,0.1)"
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
                          transitionAppearTimeout={1000}
                          transitionEnterTimeout={1000}
                          transitionLeaveTimeout={1000}>

          <div className="gallery-image-viewer">
              {this.renderGalleryTrack()}
              {this.renderArrows()}
              {/*<ul className="dots">
                {
                  Object.keys(p.gallery).map(function(img, key) {
                    return (
                      <li key={key} onClick={this.setCurrentImage.bind(this, key)}>
                        •
                      </li>
                    )
                  }, this)
                }
              </ul> */}
          </div>
          <ul className="gallery-image-thumbs">
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
      </CSSTransitionGroup>
    )
  }
}

export default Radium(ProjectGallery)