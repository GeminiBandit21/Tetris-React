import React, {useState} from 'react'
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'
import {createStage} from '../gameHelpers'

//Styled components
import {StyledTetrisWrapper, StyledTetris} from './Styles/StyledTetris'
//Custom Hooks
import {usePlayer} from '../hooks/usePlayer'
import {useStage} from '../hooks/useStage'


function Tetris() {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player);
    var leftArrow = 37
    var dKey = 68
    var rightArrow = 39
    var aKey = 65
    var downArrow = 40
    var sKey = 83

    console.log("re-rendered")

const movePlayer = dir =>{
    updatePlayerPos({x:dir, y:0, });
}

const startGame = () =>{
    //Resets Everything
    setStage(createStage());
    resetPlayer();
}

const drop = () =>{
    updatePlayerPos({x:0, y:1, collided:false})
}

const dropPlayer = () =>{
    drop();
}


//movePlayer(-1)is moving the player -1 on the x-axis and vice versa for movePlayer(1) it goes to the right 1.
const move = ({keyCode}) =>{
    if(!gameOver){
        if(keyCode === leftArrow || keyCode === dKey){
            movePlayer(-1)
        }
        else if (keyCode === rightArrow || keyCode === aKey){
            movePlayer(1)
        }
        else if (keyCode === downArrow || keyCode === sKey){
            dropPlayer();
        }
    }
}

  return (
    <StyledTetrisWrapper role='button' tabIndex='0' onKeyDown= {e => move(e)}>
        <StyledTetris>
        <Stage stage={stage}/>
        <aside>
            {gameOver ?(
                <Display gameOver={gameOver} text="Game Over!"/>
            ): (
            <div>
            <Display text ="Score"/>
            <Display text ="Rows"/>
            <Display text ="Level"/>
            </div>
            )}
            <StartButton onClick={startGame}/>
        </aside>
        </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris