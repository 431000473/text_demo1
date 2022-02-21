<!-- !! npm i 下载 -->
# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

[vite-plugin-vue-setup-extend setup name 增强插件](https://www.npmjs.com/package/vite-plugin-vue-setup-extend)

```shell
# 选择一个你喜欢的包管理器

# NPM
npm install vite-plugin-vue-setup-extend -D

# Yarn
yarn add vite-plugin-vue-setup-extend -D

# PNPM
pnpm install vite-plugin-vue-setup-extend -D
```

使用setup语法带来的第一个问题就是无法自定义name，而我们使用keep-alive往往是需要name的，解决这个问题通常是通过写两个script标签来解决，一个使用setup，一个不使用，

[@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy) 为打包后的文件提供传统浏览器兼容性支持

```shell
# 选择一个你喜欢的包管理器

# NPM
npm install @vitejs/plugin-legacy -D

# Yarn
yarn add @vitejs/plugin-legacy -D

# PNPM
pnpm install @vitejs/plugin-legacy -D

```

[vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression) 压缩插件
[vite-plugin-compression 是 vite-plugin-compress](https://github.com/alloc/vite-plugin-compress)的升级版，vite-plugin-compression支持gzip等多种压缩算法

```shell
# 选择一个你喜欢的包管理器

# NPM
npm install vite-plugin-compression -D

# Yarn
yarn add vite-plugin-compression -D

# PNPM
pnpm install vite-plugin-compression -D
```

[vite-plugin-imagemin](https://github.com/anncwb/vite-plugin-imagemin) 图片压缩

```shell
# 选择一个你喜欢的包管理器
# 科学上网
# NPM
npm install vite-plugin-imagemin -D

# Yarn
yarn add vite-plugin-imagemin -D

# PNPM
pnpm install vite-plugin-imagemin -D

```

[element-plus](https://element-plus.gitee.io/zh-CN/)
按需导入#
需要使用额外的插件来导入要使用的组件。
首先需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件

```shell
npm install -D unplugin-vue-components unplugin-auto-import
```

[vue-global-api](https://github.com/antfu/vue-global-api)
解决使用unplugin-auto-import开发时VSCode出现错误提示问题

```shell
# 选择一个你喜欢的包管理器

# NPM
npm install vue-global-api -D

# Yarn
yarn add vue-global-api -D

# PNPM
pnpm install vue-global-api -D 
```

[vite-plugin-optimize-persist](https://github.com/antfu/vite-plugin-optimize-persist)
Vite 可以智能地检测动态依赖关系,按需自然有时会使复杂项目的启动变得非常缓慢
可以显式设置依赖项，optimizeDeps.include以便在服务器第一次启动时对其进行优化。当您的项目变得更加复杂时，这可能会有点费力

```shell
# 选择一个你喜欢的包管理器

# NPM
npm install vite-plugin-optimize-persist vite-plugin-package-config -D

# Yarn
yarn add vite-plugin-optimize-persist vite-plugin-package-config -D

# PNPM
pnpm install vite-plugin-optimize-persist vite-plugin-package-config -D
```

[unplugin-icons](https://github.com/antfu/unplugin-icons)

```shell
# 选择一个你喜欢的包管理器

# NPM
npm install unplugin-icons -D

# Yarn
yarn add unplugin-icons -D

# PNPM
pnpm install unplugin-icons -D
```

[iconify](https://iconify.design/)图标数据源

```shell
# 选择一个你喜欢的包管理器

# NPM
npm install @iconify/json -D

# Yarn
yarn add @iconify/json -D

# PNPM
pnpm install @iconify/json -D
```

[图标](https://icones.js.org/)
如果您只想使用几个图标集而不想下载整个集合，您也可以使用@iconify-json/[collection-id]。 该collection字段遵循[Iconify 的集合 IDs](https://iconify.design/icon-sets/)。例如，要安装[Remix Icons](http://www.remixicon.cn/)，你可以这样做：

```shell
# 选择一个你喜欢的包管理器

# NPM
npm install @iconify-json/ri -D

# Yarn
yarn add @iconify-json/ri -D

# PNPM
pnpm install @iconify-json/ri -D
```

```ts
// 安装 Pinia 包 当前版本 2.0.11
npm install pinia@latest
```

### 动态路由

动态路由：依据 src/views 视图目录下文件或目录自动生成对应路由信息。如：src/views/404.vue 文件对应路由为：/404；src/views/about/me/index.vue 文件对应路由为：/about/me 等等。

```ts
npm i lodash-es -D
```

```ts
npm i @types/lodash-es -D
```

## 集成 Prettier 配置

[prettier.io/](https://prettier.io/)

```ts
npm i prettier -D
```

[配置项信息](https://prettier.io/docs/en/options.html)

```ts
# 格式化所有文件 （. 表示所有文件）
npx prettier --write .
```

### 集成 ESLint 配置

[ESLint](https://github.com/eslint/eslint) 是一款用于查找并报告代码中问题的工具，并且支持部分问题自动修复。其核心是通过对代码解析得到的 AST（Abstract Syntax Tree 抽象语法树）进行模式匹配，来分析代码达到检查代码质量和风格问题的能力。

```ts
// 安装
npm i eslint -D
```

```ts
// 配置
 npx eslint --init
```

How would you like to use ESLint? （你想如何使用 ESLint?）
选择 To check syntax, find problems, and enforce code style（检查语法、发现问题并强制执行代码风格）
What type of modules does your project use?（你的项目使用哪种类型的模块?）
选择 JavaScript modules (import/export)
Which framework does your project use? （你的项目使用哪种框架?）
选择 Vue.js
Does your project use TypeScript?（你的项目是否使用 TypeScript？）
选择 Yes
Where does your code run?（你的代码在哪里运行?）
这里选择 Browser 和 Node（按空格键进行选择，选完按回车键确定）
How would you like to define a style for your project?（你想怎样为你的项目定义风格？）
选择 Use a popular style guide（使用一种流行的风格指南）
选择 [Airbnb](https://github.com/airbnb/javascript)
What format do you want your config file to be in?（你希望你的配置文件是什么格式?）
选择 JavaScript
Would you like to install them now with npm?（你想现在就用 NPM 安装它们吗?）
no
手动安装

``` ts
npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-base eslint-plugin-import eslint-plugin-vue -D
```

## 解决 Prettier 和 ESLint 的冲突

eslint-plugin-prettier 将 Prettier 的规则设置到 ESLint 的规则中。

eslint-config-prettier 关闭 ESLint 中与 Prettier 中会发生冲突的规则。

最后形成优先级：Prettier 配置规则 > ESLint 配置规则。

```ts
npm i eslint-plugin-prettier eslint-config-prettier -D
```
