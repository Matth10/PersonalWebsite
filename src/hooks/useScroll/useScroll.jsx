export const useScroll = (ref, offset) => {
  if (ref && ref.current) {
    window.scroll(0, offset ? offset : ref.current.offsetTop)
  }
}
