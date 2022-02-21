import Vue from '@vitejs/plugin-vue'
// setup name增强插件
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
// 打包文件提供传统浏览器兼容性支持
import legacy from '@vitejs/plugin-legacy'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'
// 压缩插件
import {configCompressPlugin} from './compress'
import {configImageminPlugin} from './imagemin'
// element-plus按需引入
import { configAutoImportPlugin,configVueComponentsPlugin, configVueIconsPlugin } from './unplugin'

export function createVitePlugins(isBuild: boolean) {
  const plugins = [
    Vue(),
    vueSetupExtend(),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
    PkgConfig(),
    OptimizationPersist(),
  ];
  if (isBuild) {
    // vite-plugin-compress
    plugins.push(configCompressPlugin());
    // vite-plugin-imagemin
    plugins.push(configImageminPlugin());
  }
  // unplugin-auto-import
  plugins.push(configAutoImportPlugin());
  // unplugin-vue-components
  plugins.push(configVueComponentsPlugin());
  // unplugin-icons
  plugins.push(configVueIconsPlugin());
  return plugins;
}
