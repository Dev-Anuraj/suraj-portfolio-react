export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      X: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// Fade In / Out
export const fadeInOut = (direction, delay) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    exit: {
      opacity: 0,
      y: direction === "up" ? -40 : direction === "down" ? 40 : 0,
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
      transition: {
        type: "tween",
        duration: 1.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

//   Slide In / Out
export const slideInOut = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.0,
        delay: delay,
        ease: "easeInOut",
      },
    },
    exit: {
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 1.0,
        ease: "easeInOut",
      },
    },
  };
};

// Flip Animation (Flip Left / Right / Up / Down)

export const flip = (direction, delay) => {
  return {
    hidden: {
      rotateY: direction === "left" ? 90 : direction === "right" ? -90 : 0,
      rotateX: direction === "up" ? 90 : direction === "down" ? -90 : 0,
      opacity: 0,
    },
    show: {
      rotateY: 0,
      rotateX: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1,
        delay: delay,
      },
    },
    exit: {
      rotateY: direction === "left" ? -90 : direction === "right" ? 90 : 0,
      rotateX: direction === "up" ? -90 : direction === "down" ? 90 : 0,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1,
      },
    },
  };
};

// Zoom In / Out
export const zoomInOut = (delay) => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.0,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        type: "spring",
        duration: 1.0,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

//   Rotate In / Out

export const rotateInOut = (delay) => {
  return {
    hidden: {
      rotate: -90,
      opacity: 0,
    },
    show: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.0,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    exit: {
      rotate: 90,
      opacity: 0,
      transition: {
        type: "spring",
        duration: 1.0,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
