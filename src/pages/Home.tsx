import { Button, Col, Container, Row } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export function Home() {
  const navigate = useNavigate()
  return (
    <>
      <motion.div
        animate={{ y: [-300, 0] }}
        transition={{ ease: "easeOut", duration: 0.6 }}
      >
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
              Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard,
              Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates
              Lizard, Lizard eats Paper, Paper disproves Spock, Spock vaporizes
              Rock, (and as it always has) Rock crushes Scissors
            </p>
            <p className="text-black fs-3 text-center">
              Made with love, by Elvis
            </p>
            <motion.button
              onClick={() => navigate("/game")}
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn btn-danger btn-lg"
            >
              Play
            </motion.button>
          </Col>
        </Row>
      </motion.div>
    </>
  )
}
