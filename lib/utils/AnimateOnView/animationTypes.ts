//object with animation types
const animationTypes = {
  fadeInLeft: {
    active: {
      opacity: 1,
      transform: "translateX(0px)",
      transition: "all 0.5s ease-in-out",
    },
    inactive: {
      opacity: 0,
      transform: "translateX(-20px)",
    },
  },
  fadeInRight: {
    active: {
      opacity: 1,
      transform: "translateX(0px)",
      transition: "all 0.5s ease-in-out",
    },
    inactive: {
      opacity: 0,
      transform: "translateX(20px)",
    },
  },

  fadeInUp: {
    active: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: "all 0.5s ease-in-out",
    },
    inactive: {
      opacity: 0,
      transform: "translateY(20px)",
    },
  },
  fadeInDown: {
    active: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: "all 0.5s ease-in-out",
    },
    inactive: {
      opacity: 0,
      transform: "translateY(-20px)",
    },
  },
  fadeIn: {
    active: {
      opacity: 1,
      transition: "all 0.5s ease-in-out",
    },
    inactive: {
      opacity: 0,
    },
  },

  zoomIn: {
    active: {
      transform: "scale(1)",
      transition: "all 0.5s ease-in-out",
    },
    inactive: {
      transform: "scale(0)",
    },
  },

  zoomOut: {
    active: {
      transform: "scale(1)",
      transition: "all 0.5s ease-in-out",
    },
    inactive: {
      transform: "scale(0.1)",
    },
  },

  slideRotateIn: {
    active: {
      transform: "translateX(0px) rotate(0deg)",
      transition: "all 0.5s ease-in-out",
    },
    inactive: {
      transform: "translateX(-100px) rotate(-45deg)",
    },
  },

  slideRotateOut: {
    active: {
      transform: "translateX(0px) rotate(0deg)",
      transition: "all 0.5s ease-in-out",
    },
    inactive: {
      transform: "translateX(100px) rotate(45deg)",
    },
  },

  bounce: {
    active: {
      transform: "translateY(0px)",
      transition: "all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)",
    },
    inactive: {
      transform: "translateY(-20px)",
    },
  },

  heartBeat: {
    active: {
      transform: "scale(1.1)",
      transition: "all 0.5s ease-in-out",
    },
    inactive: {
      transform: "scale(1)",
    },
  },

  swing: {
    active: {
      transform: "rotate(0deg)",
      transition: "all 0.5s ease-in-out",
    },
    inactive: {
      transform: "rotate(10deg)",
    },
  },

  shake: {
    active: {
      transform: "translateX(0px)",
      transition: "all 0.5s ease-in-out",
    },
    inactive: {
      transform: "translateX(10px)",
    },
  },

  rubberBand: {
    active: {
      transform: "scaleX(1.1)",
      transition: "all 0.5s ease-in-out",
    },
    inactive: {
      transform: "scaleX(0.9)",
    },
  },

  wobble: {
    active: {
      transform: "translateX(0px)",
      transition: "all 0.5s ease-in-out",
    },
    inactive: {
      transform: "translateX(10px)",
    },
  },

  flipInX: {
    active: {
      transform: "rotateX(0deg)",
      transition: "all 0.5s ease-in-out",
    },
    inactive: {
      transform: "rotateX(90deg)",
    },
  },

  flipInY: {
    active: {
      transform: "rotateY(0deg)",
      transition: "all 0.5s ease-in-out",
    },
    inactive: {
      transform: "rotateY(90deg)",
    },
  },

  rollIn: {
    active: {
      transform: "translateX(0px) rotate(0deg)",
      transition: "all 0.5s ease-in-out",
    },
    inactive: {
      transform: "translateX(-100%) rotate(-120deg)",
    },
  },

  lightSpeedIn: {
    active: {
      transform: "translateX(0px) skewX(0deg)",
      transition: "all 0.5s ease-in-out",
    },
    inactive: {
      transform: "translateX(100%) skewX(-30deg)",
    },
  },

  flash: {
    active: {
      animation: "neonFlash 3s forwards",
    },
    inactive: {
      opacity: 1,
    },
  },
};

export default animationTypes;
