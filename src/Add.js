import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './App.css';

const Add = ({AddNewContact,handlChange,setNewUserContact,newUserContact,Edit,editContact}) => {
    


    return (
        <div className='add-user'>
            <Form className="add-Form"  >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={newUserContact.Email}  name="Email" onChange={handlChange} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="name" value={newUserContact.name}  name="name" onChange={handlChange}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Picture</Form.Label>
    <Form.Control type="url" placeholder="picture" name="imageSrc" value={newUserContact.imageSrc}  onChange={handlChange} />
  </Form.Group>
  <div className='button'>
  <Link to='/contact list'><Button variant="primary" type="submit" style={{backgroundColor:"green"}}  onClick={() => { 
    if (Edit===false) {AddNewContact();setNewUserContact({name:"", Email: "", imageSrc: "" })} else {editContact(newUserContact);setNewUserContact({name:"", Email: "", imageSrc: "" })} }}>
    Submit
  </Button></Link> 
  <Link to='/contact list'><Button variant="primary" type="cancel" style={{backgroundColor:"gold"}} >
    Cancel
  </Button></Link> 
  </div>
</Form>

        </div>
    )
}

export default Add
