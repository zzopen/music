# 初始化项目
```shell
pnpm create @quick-start/electron my-app --template vue-ts 版本可能优点落后，自行检查升级

pnpm i -D @vitejs/plugin-vue
pnpm i -D vite
pnpm i -D typescript
pnpm i -D vue-tsc
pnpm i -D unplugin-auto-import
pnpm i -D unplugin-auto-import
pnpm i -D unplugin-vue-components

pnpm i electron
pnpm i electron-store
pnpm i -D electron-builder
pnpm i -D electron-devtools-installer
pnpm i -D vite-plugin-electron
pnpm i -D vite-plugin-electron-renderer
pnpm i -D rimraf

pnpm i -D @electron/rebuild
./node_modules/.bin/electron-rebuild -f -w better-sqlite3

pnpm i electron-store
pnpm i fs-extra
pnpm i -D @types/fs-extra
pnpm i type-fest

pnpm i -D ant-design-vue
pnpm i @ant-design/icons-vue
pnpm i vue-dompurify-html
pnpm i vue-router
pnpm i pinia
pnpm i pinia-plugin-persistedstate
pnpm i dayjs
pnpm i axios
pnpm i mitt
pnpm i @vue/runtime-core // pnpm i @vueuse/electron
pnpm i @vueuse/core
pnpm i lodash-es
pnpm i -D @types/lodash-es
pnpm i chalk
pnpm i -D sass
pnpm i normalize.css
pnpm i -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
pnpm i -D unocss

pnpm i comlink

// 本地存储
pnpm i sequelize
pnpm i sequelize-typescript
pnpm i sqlite3
pnpm i @types/validator
pnpm i better-sqlite3
pnpm i -D @types/better-sqlite3
pnpm i typeorm
pnpm i -D reflect-metadata
pnpm i -D @types/validator
pnpm i electron-log

// server
pnpm i koa
pnpm i -D @types/koa @types/koa @types/koa__cors
pnpm i @koa/cors koa-body
-- pnpm i koa-swagger-decorator
pnpm install @koa/router
pnpm i -D @types/koa__router
// lint
pnpm i -D @zzopen/eslint-config-vue
```
```shell

```

# dev模式
```shell
pnpm run dev
```

# 网址
[ant-design-vue](https://www.antdv.com/components/overview-cn/)
[tailwindcss](https://www.tailwindcss.cn/docs/guides/vite)
[electron-vite](https://cn.electron-vite.org/guide/troubleshooting.html#%E6%9E%84%E5%BB%BA)
[eslint.vuejs](https://eslint.vuejs.org/rules/first-attribute-linebreak.html)

# 问题
- [ ] electron-log 颜色失效
- [ ] electron-log 日志位置 ~/Library/Logs/{app name}/{process type}.log
- [ ] electron-store 存储位置 userData  /Users/xulei/Library/Application Support/@zzopen/music-desktop



# 设计脑图
- 主进程，与其他进程交互
- 渲染进程，主界面
- 隐藏渲染进程，执行耗时任务
- 本地server,go开发
