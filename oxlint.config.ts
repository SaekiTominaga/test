import config from '@w0s/oxlint-config/node';
import { defineConfig } from 'oxlint';

export default defineConfig({
	extends: [config],
	rules: {
		'import/unambiguous': 'off',
	},
});
