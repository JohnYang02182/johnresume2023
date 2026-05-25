import { describe, it, expect, vi } from 'vitest'
import { get, post, put, del } from '../../api/common/APIMethod'

// Minimal subset of AxiosInstance that our wrappers use
type MinimalAxiosInstance = {
    get: (url: string) => Promise<{ status: number; data: any }>
    post: (url: string, data: any) => Promise<{ status: number; data: any }>
    put: (url: string, data: any) => Promise<{ status: number; data: any }>
    delete: (url: string) => Promise<{ status: number; data: any }>
    defaults?: { baseURL?: string }
}

function makeMockInstance(responseData: any, statusMap?: Partial<Record<'get' | 'post' | 'put' | 'delete', number>>): MinimalAxiosInstance {
    const getStatus = (method: 'get' | 'post' | 'put' | 'delete') => statusMap?.[method] ?? (method === 'post' ? 201 : method === 'delete' ? 204 : 200)

    return {
        get: vi.fn((url: string) => Promise.resolve({ status: getStatus('get'), data: responseData })),
        post: vi.fn((url: string, data: any) => Promise.resolve({ status: getStatus('post'), data: responseData })),
        put: vi.fn((url: string, data: any) => Promise.resolve({ status: getStatus('put'), data: responseData })),
        delete: vi.fn((url: string) => Promise.resolve({ status: getStatus('delete'), data: responseData })),
        defaults: { baseURL: 'https://example.com' },
    }
}

describe('APIMethod wrappers', () => {
    it('get should return response data', async () => {
        const mock = makeMockInstance({ hello: 'world' })
        const res = await get(mock as any, '/test')
        expect(res).toEqual({ hello: 'world' })
        expect((mock.get as any)).toHaveBeenCalledWith('/test')
    })

    it('post should return response data', async () => {
        const mock = makeMockInstance({ ok: true })
        const res = await post(mock as any, '/test', { a: 1 })
        expect(res).toEqual({ ok: true })
        expect((mock.post as any)).toHaveBeenCalledWith('/test', { a: 1 })
    })

    it('put should return response data', async () => {
        const mock = makeMockInstance({ ok: true })
        const res = await put(mock as any, '/test', { a: 1 })
        expect(res).toEqual({ ok: true })
        expect((mock.put as any)).toHaveBeenCalledWith('/test', { a: 1 })
    })

    it('del should return response data', async () => {
        const mock = makeMockInstance({})
        const res = await del(mock as any, '/test')
        expect(res).toEqual({})
        expect((mock.delete as any)).toHaveBeenCalledWith('/test')
    })

    it('should throw on non-2xx response (GET)', async () => {
        const mock = makeMockInstance({ error: 'no' }, { get: 404 })
        await expect(get(mock as any, '/not-found')).rejects.toThrow(`GET /not-found failed`)
    })

    it('should throw on non-2xx response (POST)', async () => {
        const mock = makeMockInstance({ error: 'bad' }, { post: 500 })
        await expect(post(mock as any, '/bad', {})).rejects.toThrow(`POST /bad failed`)
    })
})
