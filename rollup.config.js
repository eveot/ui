import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve';
import less from 'rollup-plugin-less';
const pkg = require("./package.json");

export default {
    input: 'src/index.ts',
    output: [
        { file: pkg.main, format: "cjs" },
        { file: pkg.module, format: "esm" }
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: "./tsconfig.json",
            outDir: ".",
            include: ["src/**/*.tsx", "src/**/*.ts"],
            exclude: ["src/**/*.stories.tsx"]
        }),
        less({
            insert: true,
            output: "dist/styles/eveot.min.css",
        }),
        babel({
            extensions: ['.tsx', '.less'],
            exclude: 'node_modules/**',
        }),
        serve({
            contentBase: ['dist'],
            port: 3000,
        }),
    ],
};
