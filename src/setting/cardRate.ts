export interface CardContent {
  type: string,
  probability: number,
  imageUrl: string,
  describe: string
}
export const cardInfo: CardContent[] = ([
  {
    type: 'SuperLucky',
    probability: 10,
    imageUrl: 'foutune_bigluck.png',
    describe: '大吉'
  },{
    type: 'Lucky',
    probability: 25,
    imageUrl: 'foutune_luck.png',
    describe: '吉'
  },{
    type: 'LittleLucky',
    probability: 35,
    imageUrl: 'foutune_smallluck.png',
    describe: '末吉'
  },{
    type: 'BadLucky',
    probability: 30,
    imageUrl: 'foutune_bigunluck.png',
    describe: '大凶'
  }]
)