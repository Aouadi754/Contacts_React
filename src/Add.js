import React from 'react'
import {Form, Button} from 'react-bootstrap'

const Add = () => {
    return (
        <div>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control type="password" placeholder="Name" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Picture</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <div className='button'>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Button variant="primary" type="submit">
    Cancel
  </Button>
  </div>
</Form>

        </div>
    )
}

export default Add
