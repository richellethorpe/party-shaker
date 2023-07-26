import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card }  from 'react-bootstrap'
import { useNavigate } from "react-router-dom"

export default function Home() {

  const navigate =useNavigate();

  return (
    <>
      <div className='HomeMultiplyDrink'>
       <header className='HomeMultiplyDrink-header'>
        <Card style={{color: "#000"}}>
          <Card.Img src="https://www.cupofzest.com/wp-content/uploads/2021/01/Guide-to-Batching-Cocktails-Thumbnail-of-Cocktails.jpg" />
          <Card.Body>
            <Card.Title>
              Already have a drink you want to multiply?
            </Card.Title>
            <Card.Text>
              Find out how much of each ingrediant you need to multiply your cocktail or mocktail to serve all your guests.
            </Card.Text>
            <Button onClick={()=> {navigate("/MultiplyForm")}} variant="success">Multiply your cocktail!</Button>
          </Card.Body>
        </Card>
       </header>
      </div>
      
    </>
    
  )
}
