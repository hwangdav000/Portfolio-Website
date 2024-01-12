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
      y: '29vh',
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
      y: '29vh',
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 2.0,
        delay: 3,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    hidden: {
      y: '29vh',
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -160 : 0,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: 0.5,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
  };
};

export const fadeInOut = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 400 : direction === 'down' ? -900 : 0,
      opacity: 0.0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',
        duration: 3.0,
        delay: 1.5,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 1000,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 4.0,
        delay: 1.0,
        ease: [0.25, 0.25, 0.25, 0.7],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 1.5, // You can adjust the exit duration as needed
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
  };
};
