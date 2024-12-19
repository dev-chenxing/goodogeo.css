import { join } from "path";
import fsExtra from "fs-extra";
const { mkdirp, readFile, writeFile } = fsExtra;
import postCssConfig from "../postcss.config.cjs";
import postcss from "postcss";

const encoding = "utf8";
const inDir = "src";
const outDir = "dist";
await mkdirp(outDir);

async function postcssProcess(css, options) {
    const { plugins, ...config } = postCssConfig;
    const result = await postcss(plugins).process(css, {
        ...config,
        ...options,
    });
    return result;
}

const from = join(inDir, `index.scss`);
const to = join(outDir, `goodogeo.css`);
const result = await postcssProcess(await readFile(from, encoding), { from, to });

await Promise.all([writeFile(to, result.css, "utf8"), result.map ? writeFile(`${to}.map`, result.map.toString(), encoding) : null]);
