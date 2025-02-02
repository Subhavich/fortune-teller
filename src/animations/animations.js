export const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.5 + 1 }, // Delay based on index, 1 second per section
  }),
};
