export interface buildPaths{
    entry: string,
    html: string,
    public: string,
    output: string,
    src: string,
}

export type BuildMode = 'production' | 'development'

export interface buildOptions {
    port: number,
    paths: buildPaths,
    mode: BuildMode,
}