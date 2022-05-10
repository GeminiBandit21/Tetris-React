import {useState} from 'react';
import {randomTetromino} from '../tertrominos'

export const usePlayer = () => {
    //player = the current state, setPlayer is the set state
    const [player, setPlayer] = useState({
        pos: {x:0, y:0},
        tetromino: randomTetromino().shape,
        collided:false,
    })
    return[player];
}