import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

import copy from "rollup-plugin-copy";
import css from "rollup-plugin-import-css";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import jsx from 'rollup-plugin-jsx'


const packageJson = require("./package.json");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
      name: "bog-component-library"
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
      name: "bog-component-library"
    },
    {
      file: "dist/index.js",
      format: "umd",
      sourcemap: true,
      name: "bog-component-library"
    },
  ],
  external: ["styled-components", "react"],
  plugins: [
    peerDepsExternal(),
    copy({
      targets: [
        {
          src: [
            "src/assets/Fonts/Open_Sans/OpenSans-Bold.ttf",
            "src/assets/Fonts/Open_Sans/OpenSans-BoldItalic.ttf",
            "src/assets/Fonts/Open_Sans/OpenSans-ExtraBold.ttf",
            "src/assets/Fonts/Open_Sans/OpenSans-ExtraBoldItalic.ttf",
            "src/assets/Fonts/Open_Sans/OpenSans-Italic.ttf",
            "src/assets/Fonts/Open_Sans/OpenSans-Light.ttf",
            "src/assets/Fonts/Open_Sans/OpenSans-LightItalic.ttf",
            "src/assets/Fonts/Open_Sans/OpenSans-Regular.ttf",
            "src/assets/Fonts/Open_Sans/OpenSans-SemiBold.ttf",
            "src/assets/Fonts/Open_Sans/OpenSans-SemiBoldItalic.ttf",
          ],
          dest: "dist/Fonts/Open_Sans",
        },
        {
          src: [
            "src/assets/Fonts/Poppins/Poppins-Black.ttf",
            "src/assets/Fonts/Poppins/Poppins-BlackItalic.ttf",
            "src/assets/Fonts/Poppins/Poppins-Bold.ttf",
            "src/assets/Fonts/Poppins/Poppins-BoldItalic.ttf",
            "src/assets/Fonts/Poppins/Poppins-ExtraBold.ttf",
            "src/assets/Fonts/Poppins/Poppins-ExtraBoldItalic.ttf",
            "src/assets/Fonts/Poppins/Poppins-ExtraLight.ttf",
            "src/assets/Fonts/Poppins/Poppins-ExtraLightItalic.ttf",
            "src/assets/Fonts/Poppins/Poppins-Italic.ttf",
            "src/assets/Fonts/Poppins/Poppins-Light.ttf",
            "src/assets/Fonts/Poppins/Poppins-LightItalic.ttf",
            "src/assets/Fonts/Poppins/Poppins-Medium.ttf",
            "src/assets/Fonts/Poppins/Poppins-MediumItalic.ttf",
            "src/assets/Fonts/Poppins/Poppins-Regular.ttf",
            "src/assets/Fonts/Poppins/Poppins-SemiBold.ttf",
            "src/assets/Fonts/Poppins/Poppins-SemiBoldItalic.ttf",
            "src/assets/Fonts/Poppins/Poppins-Thin.ttf",
            "src/assets/Fonts/Poppins/Poppins-ThinItalic.ttf",
          ],
          dest: "dist/Fonts/Poppins",
        },
        {
          src: [
            "src/assets/Fonts/VisbyCF/VisbyCF-Bold.ttf",
            "src/assets/Fonts/VisbyCF/VisbyCF-BoldOblique.ttf",
            "src/assets/Fonts/VisbyCF/VisbyCF-DemiBold.ttf",
            "src/assets/Fonts/VisbyCF/VisbyCF-DemiBoldOblique.ttf",
            "src/assets/Fonts/VisbyCF/VisbyCF-ExtraBold.ttf",
            "src/assets/Fonts/VisbyCF/VisbyCF-ExtraBoldOblique.ttf",
            "src/assets/Fonts/VisbyCF/VisbyCF-Heavy.ttf",
            "src/assets/Fonts/VisbyCF/VisbyCF-HeavyOblique.ttf",
            "src/assets/Fonts/VisbyCF/VisbyCF-Light.ttf",
            "src/assets/Fonts/VisbyCF/VisbyCF-LightOblique.ttf",
            "src/assets/Fonts/VisbyCF/VisbyCF-Medium.ttf",
            "src/assets/Fonts/VisbyCF/VisbyCF-MediumOblique.ttf",
            "src/assets/Fonts/VisbyCF/VisbyCF-Thin.ttf",
            "src/assets/Fonts/VisbyCF/VisbyCF-ThinOblique.ttf",
            
          ],
          dest: "dist/Fonts/VisbyCF",
        },
      ],
    }),
    resolve(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    jsx( {factory: 'React.createElement'} ),
    postcss({
      extract: "styles.css",
    }),
    commonjs(),
    css(),
  ]
};