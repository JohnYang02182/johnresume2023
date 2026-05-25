import { describe, it, expect } from 'vitest'
import { getCardInfo } from '/@/hooks/useProtfolioCard'
import type { CardInfoDetail } from '/@/setting/profolioCard'
import { designCardInfo } from '/@/setting/profolioCard'

describe('useProtfolioCard', () => {
    describe('getCardInfo', () => {
        it('應回傳 index 1 對應的卡片資料（陣列已 reverse，index 1 為第一張）', () => {
            const result = getCardInfo(1)
            expect(result).toBeDefined()
            expect(result).toHaveProperty('name')
            expect(result).toHaveProperty('bannerImg')
            expect(result).toHaveProperty('title')
            expect(result).toHaveProperty('tags')
        })

        it('回傳值符合 CardInfoDetail 介面', () => {
            const result: CardInfoDetail = getCardInfo(1)
            expect(typeof result.name).toBe('string')
            expect(typeof result.bannerImg).toBe('string')
            expect(typeof result.title).toBe('string')
            expect(typeof result.team).toBe('string')
            expect(typeof result.period).toBe('string')
            expect(typeof result.character).toBe('string')
            expect(Array.isArray(result.tags)).toBe(true)
            expect(typeof result.sideProject).toBe('boolean')
        })

        it('各 index 應回傳不同的卡片', () => {
            const card1 = getCardInfo(1)
            const card2 = getCardInfo(2)
            expect(card1.name).not.toBe(card2.name)
        })

        it('超出範圍的 index 應回傳 undefined', () => {
            const result = getCardInfo(999)
            expect(result).toBeUndefined()
        })

        it(`全部卡片共 ${designCardInfo.length} 筆`, () => {
            expect(designCardInfo).toHaveLength(designCardInfo.length)
        })

        it('designCardInfo 經 reverse 後第一筆應為 FortuneSeeking', () => {
            expect(designCardInfo[0].name).toBe('FortuneSeeking')
        })

        it('所有卡片的 tags 不可為空陣列', () => {
            designCardInfo.forEach((card) => {
                expect(card.tags.length).toBeGreaterThan(0)
            })
        })

        it('sideProject 欄位只允許 boolean', () => {
            designCardInfo.forEach((card) => {
                expect(typeof card.sideProject).toBe('boolean')
            })
        })
    })
})
