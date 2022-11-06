import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
// import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    // return {
    //   background: {
    //     color: "#", // this sets a background color for the canvas "#000"
    //   },
    //   fullScreen: {
    //     enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
    //     zIndex: 2, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
    //   },
    //   interactivity: {
    //     events: {
    //       onClick: {
    //         enable: true, // enables the click event
    //         mode: "push", // adds the particles on click
    //       },
    //       onHover: {
    //         enable: true, // enables the hover event
    //         mode: "repulse", // make the particles run away from the cursor
    //       },
    //     },
    //     modes: {
    //       push: {
    //         quantity: 10, // number of particles to add on click
    //       },
    //       repulse: {
    //         distance: 100, // distance of the particles from the cursor
    //       },
    //     },
    //   },
    //   particles: {
    //     links: {
    //       enable: true, // enabling this will make particles linked together
    //       distance: 200, // maximum distance for linking the particles
    //     },
    //     move: {
    //       enable: true, // enabling this will make particles move in the canvas
    //       speed: { min: 1, max: 5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
    //     },
    //     opacity: {
    //       value: { min: 0.3, max: 0.9 }, // using a different opacity, to have some semitransparent effects
    //     },
    //     size: {
    //       value: { min: 1, max: 3 }, // let's randomize the particles size a bit
    //     },
    //   },
    // };
   return {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 0,
          "color": "#ffffff",
          "opacity": 0.4088700755207079,
          "width": 4.329212564336908
        },
        "move": {
          "enable": true,
          "speed": 4,
          "direction": "top-right",
          "random": true,
          "straight": true,
          "out_mode": "bounce",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 3928.3595491205274,
            "rotateY": 1763.7532669520733
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": false
    }
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent