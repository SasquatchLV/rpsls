const pcLoadingMessages = [
  "Hmmmm, a tough one, working on it...",
  "I'm still learning how to play this game...",
  "I have a lot of free time, so beating me won't be easy...",
  "Easy as 1,2,3",
  "Never gonna give you up, never gonna let you down",
  "Tell me mortal, can you beat this?",
  "I'm not a mind reader, I'm a brain",
  "It's time to kick ass and chew bubble gum…and I'm all outta gum",
  "The only thing that can defeat power, is more power",
]

const randomMessage = () => {
  return pcLoadingMessages[Math.floor(Math.random() * pcLoadingMessages.length)]
}

export default randomMessage
