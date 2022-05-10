import React from 'react'
import {StyledCell} from "./Styles/StyledCell"
import {TETROMINOS} from "../tertrominos"

function Cell({type}) {
  return (
    <StyledCell type={type} color={TETROMINOS[type].color}></StyledCell>
  )
}

export default Cell