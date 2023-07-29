import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default function Blog() {
  return (
    <div>
      <section id="blog" className='block blog-block'>
        <Container fluid>
          <div className='title-holder'>
            <h2>The latest from Party Animal</h2>
            <div className='subtitle'>Tips and tricks to make the best batched cocktails!</div>
          </div>
          <Row>
            <Col>1 of 1</Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
