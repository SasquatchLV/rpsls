import { Button, Col, Row } from "react-bootstrap"
import { ChoiceCard } from "../components/ChoiceCard"
import gameChoices from "../data/choices.json"
import Spinner from "react-bootstrap/Spinner"
import { useGameEngine } from "../context/GameEngineContext"
import ChoiceButton from "../components/ChoiceButton"
import PlayerCard from "../components/PlayerCard"
import randomMessage from "../utilities/randomMessage"
import { motion } from "framer-motion"

export const Game = () => {
  const {
    playerChoice,
    computerChoice,
    gameResult,
    isPlaying,
    playerHealth,
    computerHealth,
    highScore,
    deaths,
    resetGame,
    takingDamage,
  } = useGameEngine()

  return (
    <>
      <motion.div
        animate={{ y: [-1000, 0] }}
        transition={{ ease: "easeOut", duration: 0.6 }}
      >
        <Row className="mt-5">
          <Col className="d-flex justify-content-center">
            <h1 className="text-white">Choose your weapon</h1>
          </Col>
        </Row>
      </motion.div>
      <motion.div
        animate={{ y: [-1000, 0] }}
        transition={{ ease: "easeOut", duration: 0.6, delay: 0.5 }}
      >
        <Row>
          <Col className="d-flex justify-content-center gap-3 mt-3">
            {gameChoices.map((choice) => (
              <ChoiceButton
                key={choice.id}
                id={choice.id}
                name={choice.name}
                img={choice.img}
              />
            ))}
          </Col>
        </Row>
      </motion.div>
      {takingDamage && (
        <motion.div
          className="splash"
          animate={{
            scale: [1, 1.2, 1, 1],
            opacity: [1, 1, 0, 0],
          }}
          transition={{ ease: "easeInOut", duration: 2 }}
        ></motion.div>
      )}
      {playerChoice && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.2, 1, 1],
            }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <Row xs={3} className="g-3 mt-2 align-items-start">
              <Col className="d-flex justify-content-center flex-column align-items-center">
                <PlayerCard
                  img="/imgs/gamer.png"
                  name="Pro Player"
                  pick={playerChoice.name}
                  score={playerHealth}
                />
                <ChoiceCard {...playerChoice} />
              </Col>
              <Col className="d-flex justify-content-center align-items-center flex-column gap-3">
                <div>
                  <img
                    src="/imgs/vs.png"
                    className="img-fluid"
                    width={70}
                  ></img>
                </div>
                {gameResult && (
                  <motion.div
                    animate={{
                      scale: [1, 1, 2, 2, 1, 1],
                      rotate: [0, 180, 0, 0, 0, 0],
                    }}
                    transition={{ ease: "easeOut", duration: 1 }}
                  >
                    {gameResult === "You win!" ? (
                      <img
                        src="/imgs/win.png"
                        className="img-fluid"
                        width={200}
                      ></img>
                    ) : gameResult === "You lose!" ? (
                      <img
                        src="/imgs/lose.png"
                        className="img-fluid"
                        width={200}
                      ></img>
                    ) : (
                      <h1 className="text-white">DRAW</h1>
                    )}
                  </motion.div>
                )}
              </Col>
              {isPlaying && (
                <Col className="d-flex justify-content-center align-items-center flex-column gap-3">
                  <span className="fs-2 text-white">{randomMessage()}</span>
                  <Spinner animation="border" variant="danger" />
                  <img
                    src="/imgs/enemy.png"
                    className="img-fluid"
                    width={200}
                  ></img>
                </Col>
              )}
              {!isPlaying && computerChoice && (
                <Col className="d-flex justify-content-center flex-column align-items-center">
                  <PlayerCard
                    img="/imgs/enemy.png"
                    name="Evil Enemy"
                    pick={computerChoice.name}
                    score={computerHealth}
                  />
                  <ChoiceCard {...computerChoice} />
                </Col>
              )}
            </Row>
          </motion.div>
        </>
      )}

      <motion.div
        animate={{ y: [-1000, 0] }}
        transition={{ ease: "easeOut", duration: 0.6, delay: 1 }}
      >
        <Row className="mt-5">
          <Col className="d-flex align-items-center flex-column">
            {playerChoice && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => resetGame()}
                disabled={isPlaying}
                className="btn btn-outline-danger btn-lg mb-2"
              >
                {playerHealth <= 0 || computerHealth <= 0
                  ? "Play again"
                  : "Restart"}
              </motion.button>
            )}
            <h3 className="text-white">Your victories: {highScore}</h3>
            <h3 className="text-white">Deaths: {deaths}</h3>
          </Col>
        </Row>
      </motion.div>
    </>
  )
}
