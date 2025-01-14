const path = require('path');
const rules = require('require.all')('./tasks/rules');
const plugins = require('require.all')('./tasks/plugins');

module.exports = (env, options) => {
  const modes = {
    development: 'development',
    production: 'production'
  };

  const environment = modes[options.mode] || modes.development;

  rules((name, rule) => rule(environment));
  plugins((name, rule) => rule(environment));

  return {
    mode: environment,
    entry: {
      app: path.resolve(__dirname, 'src/app/app.js')
    },
    output: {
      filename: '[name].js'
    },
    module: {
      rules: [...rules.files, rules.scripts, rules.styles]
    },
    plugins: [plugins.html, plugins.images, plugins.extractStyles, plugins.purgeStyles],
    devServer: {
      open: true,
      port: 4000,
      https: false,
      hot: true,
      historyApiFallback: false,
      watchOptions: {
        poll: true
      }
      // proxy: { '/api': 'http://localhost:3000' }
    },
    optimization: {
      minimizer: [plugins.uglify],
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: path.resolve(__dirname, 'node_modules'),
            name: 'vendor',
            enforce: true
          }
        }
      }
    },
    resolve: {
      alias: {
        styles: path.resolve(__dirname, 'src/styles'),
        assets: path.resolve(__dirname, 'src/assets'),
        '~': path.resolve(__dirname, 'src/app')
      }
    }
  };
};
