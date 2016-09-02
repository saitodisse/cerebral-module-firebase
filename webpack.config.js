const path = require('path');
const webpack = require('webpack');

const loaders = [
  {
    'test': /\.js?$/,
    'exclude': /node_modules/,
    'loader': 'babel',
    'query': {
      'presets': [
        'es2015',
        'stage-0'
      ],
      'plugins': []
    }
  }
];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('lib', 'index.js'),
  output: {
    path: path.resolve('build'),
    filename: 'index.js',
    library: 'CerebralFirebase',
    libraryTarget: 'umd'
  },
  externals: {
    'firebase': 'firebase'
  },
  module: {
    loaders: loaders
  }
};
