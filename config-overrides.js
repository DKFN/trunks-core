// config-overrides.js
module.exports = {
    webpack: function(config, env) {
        if (env === "production") {
            config.optimization.runtimeChunk = false;
            config.optimization.splitChunks = {
                cacheGroups: {
                    default: false
                }
            }

            // Overrides from https://github.com/facebook/create-react-app/issues/3855#issuecomment-406653733
            //JS Overrides
            config.output.filename = 'static/[name].js';
            config.output.chunkFilename = 'static/[name].chunk.js';

            //CSS Overrides
            config.plugins[5].options.filename = 'static/[name].css';
            config.plugins[5].options.chunkFilename = 'static/[name].css';
        }
        return config;
    }
};