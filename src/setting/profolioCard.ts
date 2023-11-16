export interface CardInfoDetail {
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
export const designCardInfo: CardInfoDetail[] = [
  {
    name: 'BahaWorld',
    bannerImg: 'braver_banner.png',
    title: 'HomeProfolio.BahaWallTitle',
    link: '',
    team: 'Team.BahamutProduce',
    character: 'Character.UIUXDesigner',
    period: '2019',
    tags: ['Skill.UIAndUX', 'Skill.Sketch', 'Skill.iOS', 'Skill.Andriod', 'Skill.AI', 'Skill.PS'],
    sideProject: false
  },{ 
    name: 'BahaECShop',
    bannerImg: 'shopping_banner.png',
    title: 'HomeProfolio.BShoppingMallTitle',
    link: '',
    team: 'Team.BahamutEC',
    period: '2020',
    character: 'Character.UIUXDesigner',
    tags: ['Skill.WebDesign', 'Skill.RWD', 'Skill.HTML5', 'Skill.SCSS', 'Skill.jQuery'],
    sideProject: false
  },{
    // params: 'https://www.behance.net/gallery/125095859/_',
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
    name: 'ECWebsite',
    bannerImg: 'pic_vue.png',
    title: 'HomeProfolio.ShinchiEC',
    link: '',
    team: 'Team.ShinchiDevelope',
    character: 'Character.FEDeveloper',
    period: '2022',
    tags: ['Skill.UIAndUX', 'Skill.TypeScript', 'Skill.JavaScript', 'Skill.Vue3', 'Skill.Vite', 'Skill.UNOCSS'],
    sideProject: false
  }, {
    name: 'FortuneSeeking',
    bannerImg: 'foutune_cardbackground.png',
    title: 'HomeProfolio.FortuneSeeking',
    link: '',
    team: 'Team.Myself',
    character: 'Character.FEDeveloper',
    period: '2023',
    tags: ['Skill.TypeScript', 'Skill.JavaScript', 'Skill.Vue3', 'Skill.Vite', 'Skill.AI', 'Skill.PS'],
    sideProject: false
  }

  // , {
  //   // params: 'https://www.behance.net/gallery/56143553/APP_Project',
  //   name: 'HuanShunDetail',
  //   bannerImg: 'https://mir-s3-cdn-cf.behance.net/projects/404/d6a21a56143553.Y3JvcCwyMjkyLDE3OTQsOTAsNjc.png',
  //   title: 'HomeProfolio.HuanShunTitle',
  //   link: '',
  //   team: 'Team.HuanShunDevelope',
  //   character: 'Character.UIUXDesigner',
  //   period: '2018',
  //   tags: ['Skill.UIAndUX', 'Skill.Sketch', 'Skill.iOS', 'Skill.Andriod', 'Skill.AI', 'Skill.PS'],
  //   sideProject: false
  // }
].reverse()
