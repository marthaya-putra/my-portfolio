import { defineConfig } from "vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import { cloudflare } from "@cloudflare/vite-plugin"
import viteReact from "@vitejs/plugin-react"
import path from "path"

const isDev = process.env.NODE_ENV !== "production"

export default defineConfig({
  plugins: [
    // Skip Cloudflare plugin in dev for HMR support
    ...(isDev ? [] : [cloudflare({ viteEnvironment: { name: "ssr" } })]),
    tanstackStart({ srcDirectory: "app" }),
    viteReact(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
})
