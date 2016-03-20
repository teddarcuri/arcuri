import React from 'react';
import Radium from 'radium';

class SocialIcons extends React.Component {

  render() {
    let styles= {
          icon: {
            textAlign: "center",
            margin: "0px 20px",
            fontSize: "1.5em",
            lineHeight: "1.5em",
            color: "#aaa",
            ":hover" : {
              color: "#111"
            }
          }
        }
      return(
        <div style={{textAlign: "center", margin: "10px 0px"}}>
            <a ref="codepen" style={styles.icon} href="http://codepen.io/teddarcuri/">
              <i className="fa fa-codepen"></i>
            </a>
            <a ref="github" style={styles.icon} href="https://github.com/teddarcuri">
              <i className="fa fa-github"></i>
            </a>
            <a ref="linkedin" style={styles.icon} href="https://www.linkedin.com/in/teddarcuri">
              <i className="fa fa-linkedin"></i>
            </a>  
        </div>
      )
  }
}

export default Radium(SocialIcons)


