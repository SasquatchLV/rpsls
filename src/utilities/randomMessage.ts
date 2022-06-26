const pcLoadingMessages = [
  "Hmmmm, a tough one, working on it...",
  "I'm still learning how to play this game...",
  "I have a lot of free time, so beating me won't be easy...",
  "Easy as 1,2,3",
  "Never gonna give you up, never gonna let you down",
  "Tell me mortal, can you beat this?",
]

const randomMessage = () => {
  return pcLoadingMessages[Math.floor(Math.random() * pcLoadingMessages.length)]
}

export default randomMessage
