import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ElementQuery from 'react-element-query';
import Radium from 'radium';
import Flickity from 'flickity';


class ProjectGallery extends React.Component {

  constructor(props) {
  	super(props);

    this.state = {
      currentImage : 0
    }

    this.flkty;
  }

  componentDidMount() {
    this.transitionHighlighter();
    this.setupFlickity();
  }

  setupFlickity() {
    var elem = document.querySelector('.main-carousel');
    this.flkty = new Flickity( elem, {
      // options
      cellAlign: 'center',
      contain: true,
      infinite: true,
      imagesLoaded: true,
      prevNextButtons: false,
      pageDots: false
    });

    this.flkty.on( 'cellSelect', () => {
      if (this.flkty.selectedIndex != this.state.currentImage) {
        this.setCurrentImage(this.flkty.selectedIndex)
      }
    });
  }

  updateFlickity(key) {
    this.flkty.select(key);
  }

  nextImg() {
    var key = this.flkty.selectedIndex + 1;
    this.flkty.select(key);
  }

  prevImg() {
    var key = this.flkty.selectedIndex - 1;
    this.flkty.select(key);
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

    this.setState({ currentImage : key }, function() {
      this.transitionHighlighter();
    });
  }

  transitionHighlighter() {
    var currentThumb = this.refs.currentThumb,
        highlighter = this.refs.highlighter,
        leftPos = currentThumb.offsetLeft,
        topPos = currentThumb.offsetTop,
        width = currentThumb.offsetWidth,
        height = currentThumb.offsetHeight;

        highlighter.style.left = leftPos + "px";
        highlighter.style.top = topPos + "px";
        highlighter.style.width = width + "px";
        highlighter.style.height = height + "px";
  }
  
  // Render Stuff
  renderGalleryTrack() {
    return (
       <CSSTransitionGroup component={"div"}
                          className="gallery-image-track"
                          transitionName="fadeIn"
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
          <div key="PREV" onClick={this.prevImg.bind(this)} style={this.getStyles().arrows.prev}>
            <i style={this.getStyles().icon}className="fa fa-chevron-left"></i>
          </div>
          <div key="NEXT" onClick={this.nextImg.bind(this)} style={this.getStyles().arrows.next}>
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
        transition: "all ease 0.7s",
        next: {
          fontSize: "0.66em",
          background: "rgba(60,60,60,0.4)",
          padding: 10,
          display: "inline-block",
          ":hover" : {
            cursor: "pointer",
            background: "rgba(0,0,0,1)"
          }
        },
        prev: {
          fontSize: "0.66em",
          background: "rgba(60,60,60,0.4)",
          padding: 10,
          display: "inline-block",
          ":hover" : {
            cursor: "pointer",
            background: "rgba(0,0,0,1)"
          }
        }
      }
    }
  }
 
  render() {
    var p = this.props.project,
        currentImage = this.props.project.gallery[Object.keys(this.props.project.gallery)[this.state.currentImage]],
        small = window.innerWidth < 700;

    return (
      <CSSTransitionGroup component={"div"}
                          className="gallery"
                          transitionName="fadeIn"
                          transitionAppear={true}
                          transitionAppearTimeout={1000}
                          transitionEnterTimeout={1000}
                          transitionLeaveTimeout={1000}>
            {/* THUMBS */}                
            <ul className="gallery-image-thumbs">
              <div ref="highlighter" className="current-image-highlighter"></div>
             {
                Object.keys(p.gallery).map(function(img, key) {
                  var ref = key == this.state.currentImage ? "currentThumb" : "thumb" + key,
                      activeStyles =  key == this.state.currentImage ? {opacity: 1} : null;
                  return (
                    <li ref={ref} className="gallery-image" key={key} onClick={this.updateFlickity.bind(this, key)}>
                      <img style={activeStyles} src={p.gallery[img].path} alt=""/>
                    </li>
                  )
                }, this)
             }
          </ul>
          
          {/* Carousel */}
          <div className="gallery-image-viewer">
              <div className="main-carousel" 
                   style={{
                    height: "auto",
                    minHeight: small ? 200 : 500,
                    width: "100%"
                   }}>
              {
                Object.keys(p.gallery).map(function(img, key) {
                  return (
                    <div style={{
                          width: "100%",
                          flex: "1 0 100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                         }}>
                      <img style={{width: "auto", height: "auto", maxWidth: "100%", padding: 20}} src={p.gallery[img].path} alt=""/>
                    </div>
                  )
                }, this)
              }
              </div>
              {/*this.renderGalleryTrack()*/}
              {this.renderArrows()}
          </div>
      </CSSTransitionGroup>
    )
  }
}

export default Radium(ProjectGallery)