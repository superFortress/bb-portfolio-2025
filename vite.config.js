import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  build: {
    assetsDir: 'asset'
  },
  plugins: [
    react(),
    svgr({
      // https://react-svgr.com/docs/options/
      include: "**/*.svg",
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true
      }
    })
  ],
  server: {
    host: true
  }
})
