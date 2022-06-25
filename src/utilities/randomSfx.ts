export const randomSfx = () => {
  const arr = [
    "/sounds/punch1.mp3",
    "/sounds/punch2.wav",
    "/sounds/punch3.wav",
    "/sounds/punch4.wav",
    "/sounds/punch5.wav",
  ]
  return arr[Math.floor(Math.random() * arr.length)]
}
