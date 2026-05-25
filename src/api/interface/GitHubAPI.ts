export interface GitHubContentsResponse {
    content: string
    encoding: 'base64' | 'none' | 'utf-8'
    name: string
    path: string
    sha: string
    size: number
    type: 'file' | 'dir' | 'symlink' | 'submodule'
    url: string
    download_url: string | null
}

export type BufferLike = {
    from(input: string, enc: 'base64'): { toString(enc?: 'utf-8'): string }
}

export interface GlobalAtobBuffer {
    atob?: (input: string) => string
    Buffer?: BufferLike
}
