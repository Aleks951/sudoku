import React, { useEffect, useState } from 'react';
import Square from './components/Square';
import { Layout, Button, Row, Col, Spin } from 'antd';

import { useSelector, useDispatch } from 'react-redux'
import './App.scss';
import { RootState } from './reducer'
import { newGame } from './reducer/sudoku'

const { Footer, Content } = Layout

function App() {
  const game = useSelector((state: RootState) => state.sudoku.board)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  const createGame = () => {
    const promise = new Promise(res => {
      setLoading(true)
      res(true)
    })

    promise
      .then(() => dispatch(newGame()))
      .then(() => setLoading(false))
  }

  useEffect(() => {
    createGame()
  }, [])

  return (
    <Layout>
      <Content style={{ marginTop: '40px' }}>
        <Row gutter={[48, 32]}>
          <Col span={5} />
          {loading
            ?
            <Spin />
            :
            <Col span={14} style={{ display: 'grid' }}>
              <div className='myGridWrap2'>
                {
                  game.map((square, i) => (
                    <div key={i} style={{ display: 'grid' }}>
                      <Square
                        square={square}
                      />
                    </div>
                  ))
                }
              </div>
            </Col>
          }
          <Col span={5} />
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <Button onClick={createGame}>Create new puzzle</Button>
      </Footer>
    </Layout>
  )
}

export default App;
