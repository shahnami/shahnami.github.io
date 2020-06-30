const debug = process.env.NODE_ENV !== 'production';
const withImages = require('next-images');

module.exports = withImages({
	assetPrefix: !debug ? '' : '',
	webpack(config, options) {
		return config;
	}
});
