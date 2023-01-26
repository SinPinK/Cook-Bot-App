import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Button } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'
import { CustomNavbar } from './mainComponents/CustomNavbar'
import { CustomFooter } from './mainComponents/CustomFooter'
//import { CustomContainer } from './mainComponents/Container'
import { Container, Header, Content, Footer, Sidebar } from 'rsuite'
import { Input } from 'rsuite'
import Grid from 'rsuite/Grid'
import Row from 'rsuite/Row'
import Col from 'rsuite/Col'
import { BrowserRouter } from 'react-router-dom'

import { Bot } from './bot/Bot'

function App() {

  const [content, setContent] = useState([])
  const [isClick, setIsClick] = useState(false)

  const handleOnClick = (event) => {
    event.preventDefault()
    console.log('Start working')
    axios({
        method: 'GET',
        url: window.location.origin+'/api/test/',
        headers: {
            Authorization : localStorage.getItem('access_token'),
            Group : localStorage.getItem('detailRole'),
            'Content-Type' : 'application/json',
        }
    }).then(response => {
        console.log(response.data)
        console.log('End working')
        setContent(JSON.parse(response.data))
        setIsClick(true)
    }).catch(error => {
        console.log('Error: ' + error)
    })
  }


  return (
        <div className="show-container" >
        <BrowserRouter>
            <Container>

                <Header>
                    <CustomNavbar/>
                </Header>
                <Content className='main-container' >
                    <Bot/>
                    <div>

                        <Grid>
                            <Row>
                                <Col xs={3}>
                                    <Button onClick={handleOnClick} appearance="primary">
                                        Click
                                    </Button>
                                </Col>
                                <Col xs={1}/>
                                <Col xs={2}>
                                    {
                                        (isClick === true) && (
                                            <body>
                                                {content}
                                            </body>
                                        )
                                    }
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </Content>
                <CustomFooter />
            </Container>

        </BrowserRouter>
        </div>
  )
}

export default App;
