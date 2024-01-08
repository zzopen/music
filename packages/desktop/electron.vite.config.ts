import { resolve } from 'node:path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'

export default defineConfig({
  main: {
    build: {
      rollupOptions: {
        input: {
          index: resolve('src/main/index.ts'),
          worker: resolve('src/main/worker/worker.ts')
        }
      }
    },
    plugins: [externalizeDepsPlugin({ exclude: ['chalk'] })],
    resolve: {
      alias: {
        '@main': resolve('src/main'),
        '@preload': resolve('src/preload'),
        '@common': resolve('src/common'),
        '@resources': resolve('resources')
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@preload': resolve('src/preload'),
        '@common': resolve('src/common'),
        '@resources': resolve('resources')
      }
    }
  },
  renderer: {
    resolve: {
      alias: {
        '@': resolve('src/renderer/src'),
        '@preload': resolve('src/preload'),
        '@common': resolve('src/common')
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        },
        scss: {
          additionalData: '@import "@/styles/index.scss";'
        }
      }
    },
    plugins: [
      vue(),
      Components({
        dts: resolve('src/renderer/src/plugin-components.d.ts'),
        dirs: [], // 不能删除
        resolvers: [
          AntDesignVueResolver({
            importStyle: false // css in js
          })
        ]
      }),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dts: resolve('src/renderer/src/auto-import.d.ts')
      }),
      Unocss()
    ],
    optimizeDeps: {
      include: ['vue', 'ant-design-vue/es/locale/zh_CN', 'ant-design-vue/es/locale/en_US']
    }
  }
})
