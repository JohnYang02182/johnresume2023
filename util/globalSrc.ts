export const getImgUrl = (url: string):string => {
  let urlNow = `../assets/images/${url}`
  let currentUrl = import.meta.glob<{default: string}>('../assets/images/*', { eager: true })
  let mod = currentUrl[urlNow] as { default: string}
  return mod.default
}