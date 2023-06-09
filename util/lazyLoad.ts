export const observeScroll = new IntersectionObserver((scrollHTML: IntersectionObserverEntry[]) => {
  scrollHTML?.forEach((ele: IntersectionObserverEntry) => {
    if(ele.isIntersecting) {
      ele.target.classList.add('scrolled')
    } else {
      ele.target.classList.remove('scrolled')
    }
  })
})
