const randomRGB = () => {
  return `rgba(
      ${Math.round(Math.random() * 255)},
      ${Math.round(Math.random() * 255)},
      ${Math.round(Math.random() * 255)},0.4
    )`;
};
export default randomRGB;
