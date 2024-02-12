import { useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/web'

const MAX_X = 100
const MIN_X = 0

const Paddle = (props: any) => {
  const [ springs, api ] = useSpring(() => ({
    from: { x: MIN_X },
  }))
  const [ currentX, setCurrentX ] = useState(MIN_X)
  const divRef: any = useRef()



  const handleClick = ({ clientX, clientY }: { clientX: number, clientY: number}) => {
    const newXLocation = currentX === MAX_X ? MIN_X : MAX_X
    let currentXLocation: number

    const boundingClient = divRef.current.getBoundingClientRect()
    console.log(boundingClient)
    
    if (boundingClient.x !== MAX_X && boundingClient.x !== MIN_X) {

      currentXLocation = boundingClient.x

      console.log(currentXLocation)
      console.log(newXLocation)
    } else {

      currentXLocation = currentX

      console.log(currentXLocation)
      console.log(newXLocation)
    }
    
    api.start({
      from: {
        x: currentXLocation,
      },
      to: {
        x: newXLocation,
      },
    })

    setCurrentX(newXLocation)

  }


  return (
    <animated.div
      ref={divRef}
      onClick={ (e: any) => handleClick(e) }
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs
      }}
    />
  )

}

export default Paddle;
