export function GloSrc(imgPath:string){
  // const path = new URL(`/src/assets/images`,import.meta.url).href
  // console.log(path)
  return new URL(`../assets/images/${imgPath}`, import.meta.url).href
}