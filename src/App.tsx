import React, { createRef, useEffect } from 'react';
import { Alert, Button } from 'react-bootstrap'
import Square from './components/sudoku/Square';

import { useSelector, useDispatch } from 'react-redux'
import './App.scss';
import { RootState } from './reducer'
import { newGame } from './reducer/sudoku'

function App() {
  const game = useSelector((state: RootState) => state.sudoku.board)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(newGame())
  }, [])

  // const myNumber: React.RefObject<HTMLInputElement> = createRef()

  return (
    <div className='wrap'>
      {game.map(square => (
        <Square
          square={square}
        />
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
