import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [
        AntDesignVueResolver({
          importLess: true
        })
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      javascriptEnabled: true,
      less: {
        modifyVars: {
          'primary-color': '#004eb3',
          'link-color': '#004eb3',
          'border-radius-base': '2px',
          'warning-color': '#FF5A30',
          gap: '16px'
        },
        javascriptEnabled: true,
      }
    }
  },
})
