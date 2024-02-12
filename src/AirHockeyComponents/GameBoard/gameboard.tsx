import { useState } from "react"
import Paddle from "../Paddle/paddle"

const GameBoard = ({children}: {children: any}, ...props: any) => {
    const [playerX, setPlayerX] = useState()
    const handlePlayerInput = (e: any) => {
        console.log(e)
        const { playerX, clientY } = e
        setPlayerX(playerX)
    }

    return <div 
        onMouseMove={(e) => handlePlayerInput(e)}
        className={"h-full w-full"}>
            <Paddle playerX={playerX} />
    </div>

}

export default GameBoard
