import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader} from 'unplugin-icons/loaders'
export function configAutoImportPlugin() {
  return AutoImport({
    imports: ['vue'],
    resolvers: [ElementPlusResolver()],
    // 指定文件生成路径
    dts: 'library/unplugin/auto-imports.d.ts',
  })
}
export function configVueComponentsPlugin() {
  return Components({
    // 用于搜索组件的目录的相对路径。
    dirs: ['src/components'],
    resolvers: [
      ElementPlusResolver(),
      IconsResolver({ prefix: 'icon', customCollections: ['custom']}),
    ],
    // 指定文件生成路径
    dts: 'library/unplugin/components.d.ts',
    // 组件的有效文件扩展名。
    // extensions: ['vue'],
    // 允许子目录作为组件的命名空间前缀。
    // directoryAsNamespace: false,
    // deep: true,
  })
}

export function configVueIconsPlugin(){
  return Icons({
    compiler: 'vue3',
    customCollections:{
      // 这里是存放svg图标的文件地址，custom是自定义图标库的名称
      custom: FileSystemIconLoader("./src/assets/icons"),
    },
    autoInstall: true,
  })
}