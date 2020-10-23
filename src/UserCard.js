import React from 'react'
import {Card} from 'react-bootstrap'
import './App.css';

function UserCard({UserData}) {
    return (
        <div>
        <div className="movie" >
<Card style={{margin:"20px",width:"270px",height:"400px"}}>
    <Card.Img style={{height:"200px"}} variant="top" src={UserData.imageSrc} alt='' />
    <Card.Body style={{background:"#B6B8B8 "}} >
    <Card.Title className="text-center"  ><h4>{UserData.name}</h4></Card.Title>
      <Card.Text style={{fontSize:"13px",height:"50%",fontWeight:"bold",fontFamily:" Arial,Sans-Serif"}} >
  {UserData.Email}
      </Card.Text>
    </Card.Body>
   
    
  </Card>
            
        </div>
        </div>
    )
}

export default UserCard
