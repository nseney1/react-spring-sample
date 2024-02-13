import { useRef, useState } from "react"
import Paddle from "../Paddle/paddle"

const GameBoard = ( props: any ) => {
    const [ currentPlayerXLocation, setCurrentPlayerXLocation ] = useState<number>(0)
    const [ currentPlayerYLocation, setCurrentPlayerYLocation ] = useState<number>(0)

    const currentSide: any = useRef()
    const otherSide: any = useRef()

    const handleRedPlayerInput = (e: { clientX: number, clientY: number}) => {
        const { clientX, clientY } = e
        const otherSideeight = otherSide?.current.clientHeight

        setCurrentPlayerXLocation(clientX)
        setCurrentPlayerYLocation(clientY-otherSideeight)
    }

    return <div className={props?.className}>
        <div ref={ otherSide }
            className={"h-1/2 w-full border-blue-500 border"}>
                <Paddle playerX={0} playerY={0}></Paddle>
        </div>
        <div ref={ currentSide }
            onMouseMoveCapture={(e) => handleRedPlayerInput(e)}
            className={"h-1/2 w-full border-red-500 border"}>
                {otherSide?.current && <Paddle playerX={currentPlayerXLocation} playerY={currentPlayerYLocation}></Paddle>}
        </div>
    </div>

}

export default GameBoard
