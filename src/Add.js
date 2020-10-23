import React,{useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './App.css';

const Add = ({AddNewContact}) => {
    

    const [newUserContact, setNewUserContact] = useState({
      name: "",
      Email: "",
      imageSrc: "",

      });
      const handlChange = (e) => {
        setNewUserContact({ ...newUserContact, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = () => {
        AddNewContact(newUserContact);
        setNewUserContact({name:"", Email: "", imageSrc: "" });
      };

    return (
        <div className='add-user'>
            <Form className="add-Form"  >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="Email" onChange={handlChange} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="name" name="name" onChange={handlChange}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Picture</Form.Label>
    <Form.Control type="url" placeholder="picture" name="imageSrc" onChange={handlChange} />
  </Form.Group>
  <div className='button'>
  <Link to='/contact list'><Button variant="primary" type="submit" style={{backgroundColor:"green"}} onClick={() => { handleSubmit() }}>
    Submit
  </Button></Link> 
  <Link to='/contact list'><Button variant="primary" type="cancel"  style={{backgroundColor:"gold"}}>
    Cancel
  </Button></Link> 

  </div>
</Form>

        </div>
    )
}

export default Add
