import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import pxtoviewport from 'postcss-px-to-viewport';
import svgLoader from 'vite-svg-loader';
import vueJsx from '@vitejs/plugin-vue-jsx';

import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    svgLoader({
      svgoConfig: {
        plugins: ['prefixIds'],
      },
    }),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      dts: path.resolve(__dirname, './src/auto-imports.d.ts'),
    }),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: false })],
      dts: path.resolve(__dirname, './src/components.d.ts'),
    }),
    ...(process.env.TARGET !== 'pc'
      ? [
          legacy({
            targets: ['chrome 80', 'safari 13.1'],
            modernPolyfills: ['es/global-this'],
          }),
        ]
      : []),
  ],
  css: {
    postcss: {
      plugins: [
        pxtoviewport({
          viewportWidth: 375,
          propList: ['*', '!font*'],
          // viewportUnit: 'vmin',
        }),
      ],
    },
  },
  base: process.env.NODE_ENV !== 'production' ? '/' : '/ghm',
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  // outDir: 'dist',
  server: {
    // hostname: '0.0.0.0 localhost',
    host: '0.0.0.0',
    port: 3333,
    // // 是否自动在浏览器打开
    // open: true,
    // // 是否开启 https
    // https: false,
    // // 服务端渲染
    // ssr: false,
    proxy: {
      '/ghm/api': {
        target: 'http://10.46.7.54:7893/prod-api/',
        changeOrigin: true,
        ws: true,
        rewrite: pathStr => pathStr.replace('/ghm/api', ''),
      },
    },
  },
  resolve: {
    // 导入文件夹别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
