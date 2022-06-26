export const randomSfx = () => {
  const arr = [
    "/sounds/punch1.mp3",
    "/sounds/punch2.wav",
    "/sounds/punch3.wav",
    "/sounds/punch4.wav",
    "/sounds/punch5.wav",
    "/sounds/punch6.wav",
    "/sounds/punch7.wav",
    "/sounds/punch8.mp3",
    "/sounds/punch9.mp3",
  ]
  const audio = new Audio(arr[Math.floor(Math.random() * arr.length)])
  audio.volume = 0.5
  audio.play()
}
