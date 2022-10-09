/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    envDir: "../",
    server: {
      proxy: {
        "/api": "http://localhost:5000",
      },
    },
    plugins: [react()],
    define: {
      "process.env.VITE_MODE": `"${env.VITE_MODE}"`,
      "process.env.VITE_DEMO_USER": `"${env.VITE_DEMO_USER}"`,
      "process.env.VITE_DEMO_PASS": `"${env.VITE_DEMO_PASS}"`,
    },
  });
};
