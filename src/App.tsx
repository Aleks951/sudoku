import React, { useEffect } from 'react';
import Square from './components/sudoku/Square';
import { Layout, Button, Row, Col } from 'antd';

import { useSelector, useDispatch } from 'react-redux'
import './App.scss';
import { RootState } from './reducer'
import { newGame } from './reducer/sudoku'

const { Footer, Content } = Layout

function App() {
  const game = useSelector((state: RootState) => state.sudoku.board)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(newGame())
  }, [])

  return (
    <Layout>
      <Content style={{ marginTop: '40px' }}>
        <Row gutter={[48, 32]}>
          <Col span={5} />
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
          <Col span={5} />
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <Button onClick={() => { dispatch(newGame()) }}>Create new puzzle</Button>
      </Footer>
    </Layout>
  )
}

export default App;
