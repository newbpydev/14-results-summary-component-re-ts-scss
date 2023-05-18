import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `
  //       @use 'reset';
  //       @import 'base';
  //     @import 'components';
  //     @import 'fonts';
  //     @import 'layout';
  //     @import 'mixins';
  //     @import 'variables';
  //       `,
  //     },
  //   },
  // },
});
