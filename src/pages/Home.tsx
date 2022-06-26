import { Button, Col, Container, Row } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Home() {
  return (
    <>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center">
          <h1 className="text-white">Rock, Paper, Scissors, Lizard, Spock</h1>
        </Col>
      </Row>
      <Row
        className="mt-5 rounded p-5"
        style={{
          backgroundColor: "rgba(245, 245, 245, 0.75)",
          boxShadow: "0px 0px 10px #e3e3e3",
        }}
      >
        <Col className="d-flex align-items-center flex-column">
          <p className="text-black fs-3 text-center">
            Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, Lizard
            poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard,
            Lizard eats Paper, Paper disproves Spock, Spock vaporizes Rock, (and
            as it always has) Rock crushes Scissors
          </p>
          <p className="text-black fs-3 text-center">
            Made with love, by Elvis
          </p>

          <NavLink to="/game">
            <Button variant="danger" size="lg">
              Play
            </Button>
          </NavLink>
        </Col>
      </Row>
    </>
  )
}
