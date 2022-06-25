import Toast from "react-bootstrap/Toast"

type PlayerCardProps = {
  img: string
  name: string
  score: number
  pick: string
}

function PlayerCard(props: PlayerCardProps) {
  return (
    <Toast className="mb-3">
      <Toast.Header closeButton={false}>
        <img src={props.img} className="rounded me-2" alt="" width={60} />
        <strong className="me-auto">{props.name}</strong>
      </Toast.Header>
      <Toast.Body>
        <h4>Score: {props.score}</h4>
        <h5>Current pick: {props.pick} </h5>
      </Toast.Body>
    </Toast>
  )
}

export default PlayerCard
