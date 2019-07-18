module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      unitPrecision: 4,
      viewportUnit: 'vw',
      minPixelValue: 1,
      mediaQuery: false 
    },
    // "postcss-px2rem": {
    //   remUnit: 37.5
    // }
  }
};
