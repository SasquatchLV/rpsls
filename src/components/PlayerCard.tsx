import { ProgressBar } from "react-bootstrap"
import Toast from "react-bootstrap/Toast"

type PlayerCardProps = {
  img: string
  name: string
  score: number
  pick: string
}

const PlayerCard = (props: PlayerCardProps) => {
  return (
    <Toast className="mb-3">
      <Toast.Header closeButton={false}>
        <img src={props.img} className="rounded me-2" alt="" width={80} />
        <strong className="me-auto">{props.name}</strong>
      </Toast.Header>
      <Toast.Body>
        <h4>Health: {props.score === 0 ? "Dead" : props.score}</h4>
        <ProgressBar
          variant="danger"
          animated
          max={5}
          now={props.score}
          label={props.score + " / 5"}
        />
        <h4 className="mt-2">Current pick: {props.pick} </h4>
      </Toast.Body>
    </Toast>
  )
}

export default PlayerCard
