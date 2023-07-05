import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'
import vue from '@vitejs/plugin-vue'
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import {resolve} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: `${resolve("src")}`,
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
      scss: {
        additionalData: '@import "@/styles/index.scss";',
      },
    },
  },
  optimizeDeps: {
    include: ['vue', 'ant-design-vue/es/locale/zh_CN', 'ant-design-vue/es/locale/en_US']
  },
  plugins: [
    vue(),
    Components({
      dirs: [], // 清空默认值
      resolvers: [AntDesignVueResolver()],
    }),
    electron([
      {
        entry: "electron/main/main.ts",
      },
      {
        entry: "electron/preload/preload.ts",
        onstart(options) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
          // instead of restarting the entire Electron App.
          options.reload();
        },
      },
    ]),
    renderer(),
  ],
});
