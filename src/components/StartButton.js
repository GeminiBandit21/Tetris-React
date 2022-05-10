import React from 'react'
import{StyledStartButton} from './Styles/StyledStartButton'

function StartButton({callback}) {
  return (
    <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
  )
}

export default StartButton