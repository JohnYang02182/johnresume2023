export function GloSrc(imgPath:string){
  const path = new URL('/@/assets/images/',import.meta.url)
  return path+imgPath
}