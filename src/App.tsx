import React, { createRef, StyleHTMLAttributes } from 'react';
import { Alert, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { RootState } from './reducer'
import { increment, decrement, incrementByAmount } from './reducer/notes'
import { createGame } from './logic'

function App() {
  const game = createGame()

  const notes = useSelector((state: RootState) => state.notes)
  const dispatch = useDispatch()
  const myNumber: React.RefObject<HTMLInputElement> = createRef()

  return (
    <div className='wrap'>
      {game.map(box => (
        <div className='box'>
          {box.map(number => (
            <div className='number'>
              {number === -1
                ?
                <textarea className='textE' />
                :
                number}
            </div>
          ))}
        </div>
      ))}
    </div>
  )












  // return (
  //   <div className="App">
  //     <Alert variant='success'>
  //       <h1>{notes.value}</h1>
  //     </Alert>
  //     <Button
  //       variant="success"
  //       size="lg"
  //       onClick={() => { dispatch(increment()) }}
  //     >
  //       +
  //     </Button>
  //     <Button
  //       variant="danger"
  //       size="lg"
  //       onClick={() => { dispatch(decrement()) }}
  //     >
  //       -
  //     </Button>
  //     <div>
  //       <input
  //         ref={myNumber}
  //         type={'number'}
  //       />
  //       <Button
  //         variant='primary'
  //         onClick={() => {
  //           if (typeof (myNumber.current?.value) == 'string') {
  //             let myNumberIn: number = Number(myNumber.current?.value)
  //             dispatch(incrementByAmount(myNumberIn))
  //           }
  //         }}
  //       >
  //         Ok
  //       </Button>
  //     </div>
  //   </div>
  // );
}

export default App;
