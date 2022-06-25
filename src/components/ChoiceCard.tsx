import { Button, Card, Toast } from "react-bootstrap"
import { ChoiceProps } from "../context/GameEngineContext"

export function ChoiceCard({ name, img }: ChoiceProps) {
  return (
    <>
      <Toast className="mb-3">
        <Toast.Header closeButton={false}>
          <strong className="me-auto">{name}</strong>
        </Toast.Header>
        <Toast.Body className="d-flex justify-content-center align-items-center">
          <img
            src={img}
            className="rounded me-2 p-3"
            alt=""
            width={200}
            style={{ objectFit: "cover" }}
          />
        </Toast.Body>
      </Toast>
    </>
  )
}
