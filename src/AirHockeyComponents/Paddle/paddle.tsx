import { useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/web'

const MAX_X = 124
const MIN_X = 48

const Paddle = (props: any) => {
  const [ springs, api ] = useSpring(() => ({
    from: { x: MIN_X },
  }))
  const [ currentX, setCurrentX ] = useState(props?.playerX)
  const divRef: any = useRef()


  return (
    <animated.div
      ref={divRef}
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
