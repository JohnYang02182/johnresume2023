import type { CardInfoDetail } from "/@/interface/CardInfoDetail";
// export interface CardInfoDetail {
//     name: string
//     bannerImg: string
//     title: string
//     link?: string
//     team: string
//     period: string
//     character: string
//     tags: string[]
//     sideProject: boolean
// }
export interface ProjectListItem extends CardInfoDetail {
    slug: string
    isCMS: true
}

export interface ProjectListResponse {
    items: ProjectListItem[]
    total: number
    page: number
    perPage: number
    totalPages: number
}
