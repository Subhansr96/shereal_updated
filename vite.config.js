import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build:{
    outDir,
    emptyOutDir:true,
    rollupOptions:{
      input:{
        main: resolve(root, 'index.html'),
        blog: resolve(root, 'blog' , 'blog.html'),
        nft: resolve(root, 'nft' , 'nft.html'),
        social: resolve(root, 'social' , 'social.html'),
        metaverse: resolve(root, 'metaverse' , 'metaverse.html'),
        tokens: resolve(root, 'tokens' , 'tokens.html'),
      }
    }
  }
})
