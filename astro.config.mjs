import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	build: {
		// ビルド時 `page/index.html` のかわりに `page.html` を生成します
		format: 'file'
	}
});
