// import React from 'react';
import './Game.css'

const CELL_SIZE = 20
// switch to props

const Cell = (props) => {
  const { x, y } = this.props
  return (
    <div className='Cell' style={{
      left: `${CELL_SIZE * x + 1 }px`,
      top: `${CELL_SIZE * y + 1 }px`,
      width: `${CELL_SIZE - 1 }px`,
      height: `${CELL_SIZE * x + 1 }px`,
      backgroundColor: `${cellColors[Math.floor(Math.random()*6)]}`
    }}>
    </div>
  )
}

export default Cell