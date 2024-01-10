export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const fadeIn2 = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -160 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -160 : 0,
      transition: {
        type: 'tween',
        duration: 2.0,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 2.0,
        delay: 2.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const fadeInOut = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 1000,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 3,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.8, // You can adjust the exit duration as needed
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
  };
};
