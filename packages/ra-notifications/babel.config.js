module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["@babel/preset-typescript", "@babel/preset-react"],
    plugins: [
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-class-properties",
    ],
  };
};
