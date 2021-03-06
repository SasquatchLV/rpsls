import { Button } from "react-bootstrap"
import { useGameEngine, ChoiceProps } from "../context/GameEngineContext"

const ChoiceButton = (props: ChoiceProps) => {
  const { clickHandler, isPlaying, playerHealth, computerHealth } =
    useGameEngine()

  return (
    <Button
      onClick={() => {
        clickHandler(props)
      }}
      variant="outline-danger"
      disabled={isPlaying || playerHealth <= 0 || computerHealth <= 0}
      style={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundOrigin: "content-box",
        padding: "20px",
        fontWeight: "bold",
        color: "white",
      }}
    >
      {props.name}
    </Button>
  )
}

export default ChoiceButton
