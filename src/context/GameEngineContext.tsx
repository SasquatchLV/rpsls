import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react"
import gameChoices from "../data/choices.json"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { randomSfx } from "../utilities/randomSfx"

type GameEngineProviderProps = {
  children: ReactNode
}

type GameEngineContext = {
  clickHandler: (choice: ChoiceProps) => void
  getGameWinner: () => string | null
  resetGame: () => void
  playerChoice?: ChoiceProps
  computerChoice?: ChoiceProps
  gameResult: string | null
  isPlaying: boolean
  playerHealth: number
  computerHealth: number
  highScore: number
  deaths: number
  takingDamage: boolean
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

export const GameEngineProvider = ({ children }: GameEngineProviderProps) => {
  const [playerChoice, setPlayerChoice] = useState<ChoiceProps>()
  const [computerChoice, setComputerChoice] = useState<ChoiceProps>()
  const [isPlaying, setIsPlaying] = useState(false)
  const [gameResult, setGameResult] = useState<string | null>(null)
  const [playerHealth, setPlayerHealth] = useState(5)
  const [computerHealth, setComputerHealth] = useState(5)
  const [takingDamage, setTakingDamage] = useState(false)
  const [highScore, setHighScore] = useLocalStorage("highScore", 0)
  const [deaths, setDeaths] = useLocalStorage("deaths", 0)

  useEffect(() => {
    setGameResult(getGameWinner(playerChoice, computerChoice))
  }, [playerChoice, computerChoice])

  useEffect(() => {
    if (playerHealth <= 0) {
      setDeaths(deaths + 1)
    } else if (computerHealth <= 0) {
      setHighScore(highScore + 1)
    }
  }, [playerHealth, computerHealth])

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
    if (playerChoice.id === computerChoice.id) return "It's a tie!"
    if (
      playerWinningPlays.includes(`${playerChoice.name}${computerChoice.name}`)
    ) {
      setComputerHealth(computerHealth - 1)
      return "You win!"
    }
    showSplash()
    setPlayerHealth(playerHealth - 1)
    return "You lose!"
  }

  const resetGame = () => {
    setPlayerChoice(undefined)
    setComputerChoice(undefined)
    setIsPlaying(false)
    setGameResult(null)
    setPlayerHealth(5)
    setComputerHealth(5)
  }

  const clickHandler = (choice: ChoiceProps) => {
    if (isPlaying) return

    setGameResult(null)
    setComputerChoice(undefined)
    setPlayerChoice({ ...choice })
    randomSfx()
    randomChoiceGenerator()
  }

  const randomChoiceGenerator = () => {
    setIsPlaying(true)
    const randomSelection =
      gameChoices[Math.floor(Math.random() * gameChoices.length)]
    setTimeout(() => {
      setComputerChoice({ ...randomSelection })
      randomSfx()
      setIsPlaying(false)
    }, 2000)
  }

  const showSplash = () => {
    setTakingDamage(true)
    setTimeout(() => {
      setTakingDamage(false)
    }, 2000)
  }

  return (
    <GameEngineContext.Provider
      value={{
        getGameWinner,
        clickHandler,
        resetGame,
        playerChoice,
        computerChoice,
        gameResult,
        isPlaying,
        playerHealth,
        computerHealth,
        highScore,
        deaths,
        takingDamage,
      }}
    >
      {children}
    </GameEngineContext.Provider>
  )
}
