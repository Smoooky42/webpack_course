import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {buildOptions} from "./types/types";

export function buildDevServer(options: buildOptions): DevServerConfiguration {
    return {
        port: options.port ?? 3000,
        open: true,
        historyApiFallback: true, //для разработки. При nginx надо проксировать все на index.html
        hot: true   //Hot Module Replacement (Обновление без перезагрузки с помощью ВебСокетов). Также нужен ReactRefreshWebpackPlugin и ReactRefreshTypescript
    }
}