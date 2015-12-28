const { Router,
        Route,
        IndexRoute,
        AboutRoute,
        Redirect,
        Link,
        IndexLink
      } = ReactRouter

const App = React.createClass({displayName: "App",
  componentDidMount: function() {
    $("#app").flowtype({
      minimum : 700,
      maximum : 1200
    });
  },
  render() {
    return (
      React.createElement("div", null, 
        React.createElement("header", {id: "main"}, 
           React.createElement(Link, {to: "/"}, 
              React.createElement("div", {id: "logo"}, 
                  React.createElement("svg", {width: "614px", height: "619px", viewBox: "0 0 614 619", version: "1.1"}, 
                      React.createElement("title", null, "Fill 1 + Fill 2"), 
                      React.createElement("desc", null, "Created with Sketch."), 
                      React.createElement("defs", null), 
                      React.createElement("g", {id: "Page-1", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd"}, 
                          React.createElement("g", {id: "Page-1-Copy", fill: "#333333"}, 
                              React.createElement("g", {id: "Fill-1-+-Fill-2"}, 
                                  React.createElement("path", {d: "M0,191.454578 L613.484079,191.454578 L613.484079,0.4253125 L0,0.4253125 L0,191.454578 Z", id: "Fill-1"}), 
                                  React.createElement("path", {d: "M211.249048,619 L402.225238,619 L402.225238,0.4253125 L211.249048,0.4253125 L211.249048,619 Z", id: "Fill-2"})
                              )
                          )
                      )
                  )
              )
            ), 
            React.createElement("div", {id: "menu"}, 
                React.createElement("span", null, 
                    React.createElement("svg", {id: "menu-icon", width: "60px", height: "60px", viewBox: "40 0 70 80", version: "1.1"}, 
                        React.createElement("defs", null), 
                        React.createElement("g", {stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd"}, 
                            React.createElement("g", {fill: "#333333"}, 
                                React.createElement("rect", {id: "Rectangle-1", x: "30", y: "0", width: "90", height: "17"}), 
                                React.createElement("rect", {id: "Rectangle-2", x: "30", y: "33", width: "90", height: "17"}), 
                                React.createElement("rect", {id: "Rectangle-3", x: "30", y: "66", width: "90", height: "17"})
                            )
                        )
                    )
                ), 
                React.createElement("ul", null, 
                   React.createElement("li", null, React.createElement(Link, {to: "/about"}, "About")), 
                   React.createElement("li", null, React.createElement(Link, {to: "/work"}, "My Work")), 
                   React.createElement("li", null, React.createElement(Link, {to: "/contact"}, "Contact"))
                )
            ), 
             React.createElement("svg", {version: "1.1", id: "D-1", x: "0px", y: "0px", 
                 viewBox: "-355.2 -98 94.4 102", "enable-background": "new -355.2 -98 94.4 102"}, 
                React.createElement("g", null, 
                  React.createElement("path", {fill: "none", d: "M-288.4-46.9c0-14.2-8.6-25.1-25.1-25.1H-328v50h14.5C-297.6-22-288.4-33.4-288.4-46.9z"}), 
                  React.createElement("path", {fill: "#333333", d: "M-315-98h-40.2V4h40.2c32,0,54.1-20.2,54.1-50.9C-260.8-77.7-283-98-315-98z M-328-72h14.5" + ' ' +
                    "c16.4,0,25.1,10.9,25.1,25.1c0,13.6-9.2,24.9-25.1,24.9H-328V-72z"})
                )
              ), 
              React.createElement("svg", {version: "1.1", id: "D-2", x: "0px", y: "0px", 
                 viewBox: "-355.2 -98 94.4 102", "enable-background": "new -355.2 -98 94.4 102"}, 
                React.createElement("g", null, 
                  React.createElement("path", {fill: "none", d: "M-288.4-46.9c0-14.2-8.6-25.1-25.1-25.1H-328v50h14.5C-297.6-22-288.4-33.4-288.4-46.9z"}), 
                  React.createElement("path", {fill: "#333333", d: "M-315-98h-40.2V4h40.2c32,0,54.1-20.2,54.1-50.9C-260.8-77.7-283-98-315-98z M-328-72h14.5" + ' ' +
                    "c16.4,0,25.1,10.9,25.1,25.1c0,13.6-9.2,24.9-25.1,24.9H-328V-72z"})
                )
              )
        ), 
        React.createElement("div", {id: "app-window", className: "center"}, 
                this.props.children
        )
      )
    )
  }
})

const Index = React.createClass({displayName: "Index",
  componentDidMount: function() {
    var camera, scene, renderer,
    geometry, material, mesh, 
    renderW, renderH,
    textGeo, textTexture, textMaterial, text,
    smokeParticles,
    clock, cubeSineDriver, delta;
 
    init();
    animate();

    function init() {
        clock = new THREE.Clock();

        renderW = document.getElementById("scene").offsetWidth;
        renderH = document.getElementById("scene").offsetHeight;
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( renderW, renderH );
        renderer.setClearColor(0xE9E4DC, 1)
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera( 75, renderW / renderH , 1, 10000 );
        camera.position.z = 1250;
        scene.add( camera );

        geometry = new THREE.CubeGeometry( 200, 200, 200 );
        material = new THREE.MeshLambertMaterial( { color: 0xaa6666, wireframe: false } );
        mesh = new THREE.Mesh( geometry, material );
        cubeSineDriver = 0;

        textGeo = new THREE.PlaneGeometry(300,300);
        THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
        textTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/166133/t.svg');
        textMaterial = new THREE.MeshLambertMaterial({color: 0x222222, opacity: 0.8, map: textTexture, transparent: true, blending: THREE.AdditiveAlphaBlending})
        text = new THREE.Mesh(textGeo,textMaterial);
        text.position.z = 1100;
        text.scale.x = 0.33;
        text.scale.y = 0.33;
        scene.add(text);

        var light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(-1,0,1);
        scene.add(light);

        var colors = [0x6ecbea/*, 0xf99d9d*/];
        var color = colors[Math.floor(Math.random() * colors.length)];
        var smokeTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png');
        var smokeMaterial = new THREE.MeshLambertMaterial({color: color, opacity: 1, map: smokeTexture, transparent: true});
        var smokeGeo = new THREE.PlaneGeometry(300,300);
        smokeParticles = [];
     
        var p;
        for (p = 0; p < 20; p++) {
            var particle = new THREE.Mesh(smokeGeo,smokeMaterial);
            particle.position.set(Math.random()*200-100,Math.random()*200-100,Math.random()*1000-100);
            particle.rotation.z = Math.random() * 360;
            scene.add(particle);
            smokeParticles.push(particle);
        }

        document.getElementById("scene").appendChild( renderer.domElement );
   }

    function animate() {

        // note: three.js includes requestAnimationFrame shim
        delta = clock.getDelta();
        requestAnimationFrame( animate );
        evolveSmoke();
        render();
        if (textMaterial.opacity < 0.5) {
           //textMaterial.opacity =  textMaterial.opacity + 0.0015;
        } 
    }

    function evolveSmoke() {
        var sp = smokeParticles.length;
        while(sp--) {
            smokeParticles[sp].rotation.z += (delta * 0.2);
        }
    }

    function render() {
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.01;
        cubeSineDriver += .01;
        mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500);
        renderer.render( scene, camera );
    }

    window.onresize = function() {
      renderW = document.getElementById("scene").offsetWidth;
      renderH = document.getElementById("scene").offsetHeight;
      renderer.setSize( renderW, renderH );
      camera.aspect = renderW / renderH ;
      camera.updateProjectionMatrix();
    }
    
    setTimeout(function(){
       this.context.router.transitionTo("about");
    }.bind(this), 2000);
  },
  render() {
    return (
      React.createElement("div", {id: "scene"}
      )
    )
  }
})

const About = React.createClass({displayName: "About",
  
  componentDidMount: function() {
    $(".typed").typed({
        strings: ["a Designer", "a Developer", "a creative thinker", "a human being.", "a Front end engineer", "a geek", "a Problem Solver", "passionate about my craft."],
        // typing speed
        typeSpeed: 150,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 2000,
        // loop
        loop: true
      });
  },
  render() {
    return (
      React.createElement("div", null, 
        React.createElement("h3", null, 
          "Hello, My Name is ", React.createElement("span", {className: "highlight light"}, "Tedd Arcuri"), ". ", React.createElement("br", null), 
          "I am ", React.createElement("span", {className: "highlight typed light"}), React.createElement("br", null), 
          "Currently living in Denver, CO.", React.createElement("br", null), 
          "Checkout some of", React.createElement("span", {className: "highlight "}, "  ", React.createElement(Link, {to: "work"}, "My Work")), ".", React.createElement("br", null), 
          "Like what you see?", React.createElement("span", {className: "highlight"}, " ", React.createElement(Link, {to: "contact"}, "Hire Me")), "."
        ), 
        React.createElement("div", {className: "btns"}, 
          React.createElement("a", {className: "btn"}, "About Me"), 
          React.createElement("a", {className: "btn"}, "See My Work"), 
          React.createElement("a", {className: "btn"}, "Get In Touch")
        ), 
        React.createElement("img", {id: "about-image", src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/166133/someguy.png"})
      )
    )
  }
})

const Work = React.createClass({displayName: "Work",
  getInitialState: function() {
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
  },
  componentDidMount: function() {
    $('.projects-grid').masonry({
      itemSelector: '.project',
      gutter: 0,
      columnWidth: 100
    });
  },
  render() {
    var projects = this.state.projects;
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "My Work"), 
        React.createElement("div", {className: "projects-grid"}, 
          projects.map(function(project) {
            var classes = "project " + project.size;
            return ( 
              React.createElement("div", {className: classes}, 
                React.createElement("img", {src: project.coverImage})
              )
            );
          })
        )
      )
    );
  }
})

const Contact = React.createClass({displayName: "Contact",
  render() {
    return (
      React.createElement("div", null, 
        React.createElement("h5", null, "tedd.arcuri@gmail.com"), 
        React.createElement("h5", null, "C: 719-440-4732")
      )
    )
  }
})

React.render((
  React.createElement(Router, null, 
    React.createElement(Route, {path: "/", component: App}, 
      React.createElement(IndexRoute, {component: Index}), 
      React.createElement(Route, {path: "about", component: About}), 
      React.createElement(Route, {path: "work", component: Work}), 
      React.createElement(Route, {path: "contact", component: Contact})
    )
  )
), document.getElementById('app'))
