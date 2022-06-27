import { motion } from "framer-motion"
import { useState } from "react"
import { Button, Container, Nav, Navbar as NavBarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import togglePlayAudio from "../utilities/togglePlayAudio"

export const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <motion.div
      animate={{ y: [-300, 0] }}
      transition={{ ease: "easeOut", duration: 0.6, delay: 0.5 }}
    >
      <NavBarBs className="bg-white shadow-sm mb-3 p-3 opacity-75">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/game" as={NavLink}>
              Game
            </Nav.Link>
          </Nav>
          <Button
            onClick={() => {
              togglePlayAudio()
              setIsPlaying(!isPlaying)
            }}
            style={{ width: "3rem", height: "3em", position: "relative" }}
            variant="outline-danger"
            className="rounded-circle"
          >
            {isPlaying ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  clipRule="evenodd"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            )}
          </Button>
        </Container>
      </NavBarBs>
    </motion.div>
  )
}
