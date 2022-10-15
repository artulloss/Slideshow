import { defineConfig } from "vite";
import postcssNested from "postcss-nested";

export default defineConfig({
    css: {
        postcss: {
            plugins: [
                postcssNested
            ],
        },
    },
});