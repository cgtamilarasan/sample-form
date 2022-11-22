import { Col, Row, Select, Input, Button } from 'antd';
import Box from '@mui/material/Box';
import './App.css';


function App() {
  return (
    <Box><br />
      <div className='container'> Assets
        <p>Confirm existing assets</p>

        <Row>
          <Col lg={{ span: 2 }}>
            Asset Type: <Col>
              <Select style={{ width: 150 }} value={'Caravan'}></Select>
            </Col>
          </Col>

          <Col lg={{ span: 2, offset: 2 }}>
            Value: <Col><Input value={'€8,000'} /></Col>
          </Col>
          <Col lg={{ span: 2, offset: 2 }}>
            Owned By: <Col><Input value={'Jane Smith'} /></Col>
          </Col>
        </Row>
        <div><br /><p>Any other assets? (e.g., property in UK/abroad, vehicles, stocks, shares, other)</p></div>
        <Row>
          <Col lg={{ span: 2 }}>
            Asset Type: <Col>
              <Select style={{ width: 150 }} value={'Please Choose'}></Select>
            </Col>
          </Col>

          <Col lg={{ span: 2, offset: 2 }}>
            Value: <Col><Input /></Col>
          </Col>
          <Col lg={{ span: 2, offset: 2 }}>
            Owned By: <Col><Input /></Col>
          </Col>
        </Row> <br />
        <Col offset={8}>
          <Button type='primary' style={{ width: 100, textAlign: 'center' }} onClick={() => {
            alert('Added')
          }}>Add More</Button>
        </Col>
      </div>

    </Box>

  )
}

export default App;
