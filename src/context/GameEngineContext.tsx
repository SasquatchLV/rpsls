import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react"
import gameChoices from "../data/choices.json"
import useSound from "use-sound"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { randomSfx } from "../utilities/randomSfx"

type GameEngineProviderProps = {
  children: ReactNode
}

type GameEngineContext = {
  playerChoice?: ChoiceProps
  computerChoice?: ChoiceProps
  clickHandler: (choice: ChoiceProps) => void
  getGameWinner: () => string | null
  gameResult: string | null
  isPlaying: boolean
  playerScore: number
  computerScore: number
  highScore: number
}

export type ChoiceProps = {
  id: number
  name: string
  img: string
}

const GameEngineContext = createContext({} as GameEngineContext)

export const useGameEngine = () => {
  return useContext(GameEngineContext)
}

export function GameEngineProvider({ children }: GameEngineProviderProps) {
  const [playerChoice, setPlayerChoice] = useState<ChoiceProps>()
  const [computerChoice, setComputerChoice] = useState<ChoiceProps>()
  const [isPlaying, setIsPlaying] = useState(false)
  const [gameResult, setGameResult] = useState<string | null>(null)
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [highScore, setHighScore] = useLocalStorage("highScore", 0)
  const [play] = useSound(randomSfx(), {
    volume: 0.5,
  })

  useEffect(() => {
    setGameResult(getGameWinner(playerChoice, computerChoice))
  }, [playerChoice, computerChoice])

  useEffect(() => {
    if (playerScore > highScore) {
      setHighScore(playerScore)
    }
  }, [playerScore])

  const playerWinningPlays = [
    "ScissorsPaper",
    "RockScissors",
    "PaperRock",
    "LizardPaper",
    "SpockScissors",
    "RockLizard",
    "PaperSpock",
    "SpockRock",
    "ScissorsLizard",
    "LizardSpock",
  ]

  const getGameWinner = (
    playerChoice?: ChoiceProps,
    computerChoice?: ChoiceProps
  ) => {
    if (!playerChoice || !computerChoice) return null
    else if (playerChoice.id === computerChoice.id) return "It's a tie!"
    else if (
      playerWinningPlays.includes(`${playerChoice.name}${computerChoice.name}`)
    ) {
      setPlayerScore(playerScore + 1)
      return "You win!"
    } else {
      setComputerScore(computerScore + 1)
      return "You lose!"
    }
  }

  const clickHandler = (choice: ChoiceProps) => {
    if (isPlaying) return

    setGameResult(null)
    setComputerChoice(undefined)
    setPlayerChoice({ ...choice })
    randomChoiceGenerator()
  }

  const randomChoiceGenerator = () => {
    setIsPlaying(true)
    const randomSelection =
      gameChoices[Math.floor(Math.random() * gameChoices.length)]
    setTimeout(() => {
      setComputerChoice({ ...randomSelection })
      setIsPlaying(false)
      play()
    }, 3000)
  }

  return (
    <GameEngineContext.Provider
      value={{
        getGameWinner,
        clickHandler,
        playerChoice,
        computerChoice,
        gameResult,
        isPlaying,
        playerScore,
        computerScore,
        highScore,
      }}
    >
      {children}
    </GameEngineContext.Provider>
  )
}
