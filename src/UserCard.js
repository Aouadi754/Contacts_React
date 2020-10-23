import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './App.css';



function UserCard({UserData,Delete}) {
    return (
        <div className ='List-card'>
        <div className="movie" style={{margin:"20px",width:"270px",height:"400px", float:"left"}} >
<Card >
    <Card.Img style={{height:"200px"}} variant="top" src={UserData.imageSrc} alt='' />
    <Card.Body style={{background:"#B6B8B8 "}} >
    <Card.Title className="text-center"  ><h4>{UserData.name}</h4></Card.Title>
      <Card.Text style={{fontSize:"13px",height:"50%",fontWeight:"bold",fontFamily:" Arial,Sans-Serif"}} >
  {UserData.Email}
      </Card.Text>
    </Card.Body>
    <div className='butn'>

            <Link to='/add contact'><Button variant="primary" style={{backgroundColor:"green"}}>Edit</Button></Link>
            <Button variant="primary" style={{backgroundColor:"red"}} onClick={()=> Delete(UserData)} >Delete</Button>

            </div>
  </Card>
            
        </div>
       
        </div>
    )
}

export default UserCard