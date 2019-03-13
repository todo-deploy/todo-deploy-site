import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'

import Menu from './Menu'
import "../style/style.css"

export default ({ children }) => {
  return (
    <div>
      <Head>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css'
        />
      </Head>

      <Container>
        <Row>
          <Col>
            <Menu />
            {children}
          </Col>
        </Row>
        <footer className="footer">
          <p>by <a href="https://github.com/danielsiwiec" target="_blank">Dan Siwiec</a></p>
        </footer>
      </Container>
    </div >
  )
}