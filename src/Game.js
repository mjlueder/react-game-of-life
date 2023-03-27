import React from "react"
import './Game.css'

const CELL_SIZE = 20
const WIDTH = 800
const HEIGHT = 600

const cellColors = ['#CDB4DB', '#FFC8DD', '#FFAFCC', '#BDE0FE', '#A2D2FF']

class Cell extends React.Component {
  render () {
    const { x, y } = this.props
    return (
      <div className="Cell"
        style={{
          left: `${CELL_SIZE * x + 1}px`,
          top: `${CELL_SIZE * y + 1}px`,
          width: `${CELL_SIZE - 1}px`,
          height: `${CELL_SIZE - 1}px`,
          backgroundColor: `${cellColors[Math.floor(Math.random()*6)]}`
        }}
      />
    )
  }
}

class Game extends React.Component {

  constructor () {
    super()
    this.rows = HEIGHT / CELL_SIZE
    this.cols = WIDTH / CELL_SIZE
    this.board = this.makeEmptyBoard()
  }

  state = {
    cells: [],
    isRunning: false,
    interval: 100,
  }
}