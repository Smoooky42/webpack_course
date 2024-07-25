import {Configuration} from "webpack";
import {buildOptions} from "./types/types";
import path from "path";


export function buildResolves(options: buildOptions): Configuration['resolve'] {
    return {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            '@': options.paths.src,
        }
    }
}