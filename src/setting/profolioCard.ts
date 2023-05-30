export interface CardInfoDetail {
  params: string
  name: string
  bannerImg: string
  title: string
  link?: string
  team: string
  period: string
  character: string
  tags: string[]
  sideProject: boolean
}
export const designCardInfo: CardInfoDetail[] = [{
  params: '1',
  name: 'AnimeDetail',
  bannerImg: 'anime_banner.png',
  title: 'HomeProfolio.AnimePlateFormTitle',
  link: '',
  team: 'Team.BahamutAnime',
  period: '2021',
  character: 'Character.UIUXDesigner',
  tags: ['Skill.WebDesign', 'Skill.RWD', 'Skill.HTML5', 'Skill.SCSS', 'Skill.jQuery', 'Skill.JavaScript'],
  sideProject: false
}, {
  // params: 'https://www.behance.net/gallery/125095859/_',
  params: '2',
  name: 'BahawallDetail',
  bannerImg: 'braver_banner.png',
  title: 'HomeProfolio.BahaWallTitle',
  link: '',
  team: 'Team.BahamutProduce',
  period: '2020',
  character: 'Character.UIUXDesigner',
  tags: ['Skill.WebDesign', 'Skill.RWD', 'Skill.HTML5', 'Skill.SCSS', 'Skill.jQuery'],
  sideProject: false
}, {
  params: '3',
  name: 'ECDetail',
  bannerImg: 'shopping_banner.png',
  title: 'HomeProfolio.BShoppingMallTitle',
  link: '',
  team: 'Team.BahamutEC',
  character: 'Character.UIUXDesigner',
  period: '2019',
  tags: ['Skill.UIAndUX', 'Skill.Sketch', 'Skill.iOS', 'Skill.Andriod', 'Skill.AI', 'Skill.PS'],
  sideProject: false
}, {
  // params: 'https://www.behance.net/gallery/56143553/APP_Project',
  params: '4',
  name: 'HuanShunDetail',
  bannerImg: 'https://mir-s3-cdn-cf.behance.net/projects/404/d6a21a56143553.Y3JvcCwyMjkyLDE3OTQsOTAsNjc.png',
  title: 'HomeProfolio.HuanShunTitle',
  link: '',
  team: 'Team.HuanShunDevelope',
  character: 'Character.UIUXDesigner',
  period: '2018',
  tags: ['Skill.UIAndUX', 'Skill.Sketch', 'Skill.iOS', 'Skill.Andriod', 'Skill.AI', 'Skill.PS'],
  sideProject: false
}, {
  // params: 'https://www.behance.net/gallery/56143553/APP_Project',
  params: '5',
  name: 'ChatWithChatGPT',
  bannerImg: 'pic_vue.png',
  title: 'SidePorject.ChatingWithChatGPT',
  link: '',
  team: 'Team.Myself',
  character: 'Character.FEDeveloper',
  period: '202304',
  tags: ['Skill.UIAndUX', 'Skill.TypeScript', 'Skill.JavaScript', 'Skill.Vue3', 'Skill.Vite', 'Skill.PS'],
  sideProject: false
}]
