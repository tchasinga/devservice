export const containerVariant = (delay = 0.5) => ({
    offscreen: {
      opacity: -0,
      y: 50,
    },
    onscreen: {
      opacity: 10,
      y: 0,
      transition: {
        delay: delay,
        duration: 2.5,
        type: "spring",
      },
    },
  });