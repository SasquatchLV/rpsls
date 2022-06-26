const audio = new Audio("/sounds/nyan.mp3")

const togglePlayAudio = () => {
  audio.volume = 0.2
  if (audio.paused) {
    audio.play()
  } else {
    audio.load()
  }
}

export default togglePlayAudio
