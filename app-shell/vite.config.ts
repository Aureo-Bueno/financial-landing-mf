import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const introUrl =
    env.VITE_REMOTE_INTRO_URL ?? 'http://localhost:4175/remoteEntry.js'
  const planningUrl =
    env.VITE_REMOTE_PLANNING_URL ?? 'http://localhost:4176/remoteEntry.js'

  return {
    plugins: [
      react(),
      federation({
        name: 'app-shell',
        remotes: {
          intro: {
            type: 'module',
            name: 'intro',
            entry: introUrl,
          },
          planning: {
            type: 'module',
            name: 'planning',
            entry: planningUrl,
          },
        },
        shared: ['react', 'react-dom', 'styled-components'],
        dts: false,
      }),
    ],
    server: {
      port: 5173,
    },
  }
})
