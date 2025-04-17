import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  // 让prettier格式化下一行将数组分行显示,不要显示在一行
  plugins: [
    vue(),
    tailwindcss(),
    Components({
      dts: true,
      resolvers: [ElementPlusResolver()],
    }),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      resolvers: [ElementPlusResolver()],
      dts: './auto-imports.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  exclude: ['vue-demi'],
  clearScreen: false,

  server: {
    port: 5173,
    strictPort: true,
  },
}))
