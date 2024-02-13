import { useRef, useState } from "react"
import Paddle from "../Paddle/paddle"

const GameBoard = ( props: any ) => {
    const [ playerX, setPlayerX ] = useState<number>(0)
    const [ playerY, setPlayerY ] = useState<number>(0)

    const redSideDivRef: any = useRef()
    const blueSideDivRef: any = useRef()

    const handleRedPlayerInput = (e: { clientX: number, clientY: number}) => {
        const { clientX, clientY } = e
        const blueSideHeight = blueSideDivRef?.current.clientHeight

        setPlayerX(clientX)
        setPlayerY(clientY-blueSideHeight)
    }

    return <div className={props?.className}>
        <div ref={ blueSideDivRef }
            className={"h-1/2 w-full border-blue-500 border"}>
                <Paddle playerX={0} playerY={0}></Paddle>
        </div>
        <div ref={ redSideDivRef }
            onMouseMoveCapture={(e) => handleRedPlayerInput(e)}
            className={"h-1/2 w-full border-red-500 border"}>
                {blueSideDivRef?.current && <Paddle playerX={playerX} playerY={playerY}></Paddle>}
        </div>
    </div>

}

export default GameBoard
