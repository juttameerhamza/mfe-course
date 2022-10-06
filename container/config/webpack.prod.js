const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');

const prodDomain = process.env.PROD_DOMAIN || 'http://mfe-dashboard-st.s3-website-us-east-1.amazonaws.com';

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${prodDomain}/marketing/latest/remoteEntry.js`
            },
            shared: packageJSON.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);