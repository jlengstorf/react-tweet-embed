module.exports = function(api) {
  api.cache(true);

  const options = process.env.BABEL_ENV === 'es' ? { modules: false } : {};

  return {
    presets: [['@babel/preset-env', options], '@babel/preset-react'],
  };
};
