import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
  {
    id:1,
    image: require('../img/simple.jpg'),
    time: '7 April 2023',
    title: 'Easy Homemade Simply Syrup',
    description: 'How To Make Simple Syrup for Cocktails & More',
    link: 'https://www.thekitchn.com/how-to-make-simple-syrup-240337'
  },
  {
    id:2,
    image: require('../img/distillery.jpg'),
    time: '22 Sept 2023',
    title: 'Best Portland Oregon Distilleries',
    description: 'A complete list of distilleries open to the public',
    link: 'https://portlandfoodanddrink.com/your-guide-to-distilleries-in-portland-oregon/'
  },
  {
    id:3,
    image: require('../img/simple.jpg'),
    time: '7 April 2023',
    title: 'Easy Homemade Simply Syrup',
    description: 'How To Make Simple Syrup for Cocktails & More',
    link: 'https://www.thekitchn.com/how-to-make-simple-syrup-240337'
  }

]

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
            {
              blogData.map(blog  => {
                return(
                <Col sm={4} key={blog.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <time>{blog.time}</time>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                        <a href={blog.link} target="_blank" rel="noreferrer" className='btn btn-primary'>Read More<i class="fas fa-chevron-right"></i></a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                )
              })
            }
            
          </Row>
        </Container>
      </section>
    </div>
  )
}
