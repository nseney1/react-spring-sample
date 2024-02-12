import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import { useSpring, animated } from '@react-spring/web'
import './App.css';
import Paddle from './AirHockeyComponents/Paddle/paddle';

const MAX_X = 100
const MIN_X = 0

function App() {
  const [springs, api] = useSpring(() => ({
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
    <Paddle />
  )

}

export default App;
