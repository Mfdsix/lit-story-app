const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlWebpackConfig = {
  meta: {
    viewport:
      'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
    'theme-color': '#4285f4',
  },
  templateParameters: {
    brandName: 'Our Story',
  },
};

const authPages = {
  'Register': 'register',
  'Login': 'login'
}

const mainPages = {
  'Home': 'index',
  'Post Story': 'post'
};

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/js/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [require('autoprefixer')],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    ...Object.keys(authPages).map((title) => {
      return new HtmlWebpackPlugin({
        title,
        filename: `auth/${authPages[title]}.html`,
        template: path.resolve(__dirname, `src/views/auth.html`),
        ...htmlWebpackConfig,
      });
    }),
    ...Object.keys(mainPages).map((title) => {
      return new HtmlWebpackPlugin({
        title,
        filename: `${mainPages[title]}.html`,
        template: path.resolve(__dirname, `src/views/index.html`),
        ...htmlWebpackConfig,
      });
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
