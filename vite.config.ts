// vite.config.ts
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path';
import { ConfigEnv, loadEnv, UserConfig } from 'vite';
import { createVitePlugins } from './library/vite';
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => { 
  const env = loadEnv(mode, process.cwd());
  const isBuild = command === 'build'
  return {
    plugins: createVitePlugins(isBuild),
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')// 设置 `@` 指向 `src` 目录
      }
    },
    base: './', // 设置打包路径
    server: {
      port: 4000, // 设置服务启动端口号
      open: false, // 设置服务启动时是否自动打开浏览器
      cors: true // 允许跨域

      // 设置代理，根据我们项目实际情况配置
      // proxy: {
      // 依据环境获取 .env.development 或 .env.production 文件中的配置
        // [env.VITE_GLOB_API_URL]: {
        //   // '/api'
        //   target: env.VITE_PROXY, // 在 .env.development 中配置
        //   changeOrigin: true, // 修改源
        //   // ws: true, // if you want to proxy websockets
        //   rewrite: path =>
        //     path.replace(new RegExp(`^${env.VITE_GLOB_API_URL}`), '')
        // }
      //   '/api': {
      //     target: 'http://xxx.xxx.xxx.xxx:8000',
      //     changeOrigin: true,
      //     secure: false,
      //     rewrite: (path) => path.replace('/api/', '/')
      //   }
      // }
    }
  }
}
