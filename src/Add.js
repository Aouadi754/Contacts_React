import React,{useState} from 'react'
import {Form, Button} from 'react-bootstrap'

const Add = ({AddNewContact}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [newUserContact, setNewUserContact] = useState({
        name: "",
        email: "",
        picture: "",
      });
      const handlChange = (e) => {
        setNewUserContact({ ...newUserContact, [e.target.name]: e.target.value });
      };
    
      const handlSubmit = () => {
        AddNewContact(newUserContact);
        setNewUserContact({ name: "", email: "", picture: "" });
      };

      function closeModal() {
        setIsOpen(false);
      }
    return (
        <div>
            <Form className="add-Form"  >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handlChange} />
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
    <Form.Control type="url" placeholder="picture" name="picture" onChange={handlChange} />
  </Form.Group>
  <div className='button'>
  <Button variant="primary" type="submit"  onClick={() => { handlSubmit();  closeModal(); }}>
    Submit
  </Button>
  <Button variant="primary" type="cancel" onClick={closeModal} >
    Cancel
  </Button>
  </div>
</Form>

        </div>
    )
}

export default Add
