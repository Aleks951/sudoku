import React, { useState, useMemo } from 'react';
import Square from './components/Square';
import GameSelection from './components/GameSelection';
import { Layout, Button } from 'antd';

import { useSelector, useDispatch } from 'react-redux'
import './App.scss';
import { RootState } from './reducer'
import { newGame, setState } from './reducer/sudoku'

const { Header, Content } = Layout

function App() {
  const { board, sizeBoard } = useSelector((state: RootState) => state.sudoku)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [visibleModal, setVisibleModal] = useState(true)

  const gridTemplate = useMemo(() => {
    const sqrt = Math.sqrt(sizeBoard)
    return new Array(sqrt).fill('auto').join(' ')
  }, [sizeBoard])

  const createGame = (difficultyLevel: number, sizeBoard: number) => {
    const promise = new Promise(res => {
      setLoading(true)
      res(true)
    })

    promise
      .then(() => dispatch(setState({ difficultyLevel, sizeBoard })))
      .then(() => dispatch(newGame(sizeBoard)))
      .then(() => setLoading(false))
  }

  return (
    <Layout>
      <GameSelection
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
        createGame={createGame}
        closable={board.length !== 0}
      />
      <Header className='header'>
        <Button onClick={() => setVisibleModal(true)}>Menu</Button>
      </Header>
      <Content className='content'>
        {loading
          ?
          null
          :
          <div className='center-f'>
            <div className='myGridWrap2' style={{ gridTemplateColumns: gridTemplate, gridTemplateRows: gridTemplate }}>
              {
                board.map((square, i) => (
                  <Square
                    key={i}
                    square={square}
                    gridTemplate={gridTemplate}
                  />
                ))
              }
            </div>
          </div>
        }
      </Content>
    </Layout>
  )
}

export default App;
