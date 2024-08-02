import postcssGlobalData from '@csstools/postcss-global-data';
import postcssPresetEnv from 'postcss-preset-env';

const config = {
	plugins: [
		postcssGlobalData({
			files: [
				'./src/assets/styles/global/tools.custom-media.pcss'
			]
		}),
		postcssPresetEnv({
			stage: 2,
			features: {
				'nesting-rules': false
			}
		})
	]
};

export default config;
