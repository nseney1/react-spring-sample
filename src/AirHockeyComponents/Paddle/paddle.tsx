import { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/web'

const PADDLE_WIDTH = 80
const PADDLE_HEIGHT = 80

const Paddle = (props: { playerX: number, playerY: number }) => {
  /*
    @playerX: New X location on the Gameboard for this players paddle
    #playerY: New Y location on the Gameboard for this players paddle

    Uses playerX and playerY to animation a new location for this

  */
  const [ springs, api ] = useSpring(() => ({ }))

  const [ currentX, setCurrentX ] = useState(props?.playerX)
  const [ currentY, setCurrentY ] = useState(props?.playerY)

  const animatedDivRef: any = useRef()

  useEffect(() => {
    api.start({
      from: { x: currentX },
      to: { x: props?.playerX }
    })
    setCurrentX(props?.playerX)
  }, [ props.playerX ])

  useEffect(() => {
    api.start({
      from: { y: currentY },
      to: { y: props?.playerY }
    })
    setCurrentY(props?.playerY)
  }, [ props.playerY ])


  return (
    <animated.div
      ref={ animatedDivRef }
      style={{
        width: PADDLE_WIDTH,
        height: PADDLE_HEIGHT,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs
      }}
    />
  )

}

export default Paddle;
