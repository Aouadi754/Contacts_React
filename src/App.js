import React, { useState } from 'react';
import './App.css';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Add from './Add';


function App() {
  const [UserContact, SetUserContact] = useState("")
  const AddNewContact = (x) => SetUserContact([...UserContact, x]);
  return (
    <div className='List'>
    <div className="App">
     <Link to='/contact list'><Button variant="primary">contact list</Button> </Link> 
     <Link to='/add contact'> <Button variant="primary">add contact</Button></Link>
     </div>
       <Add AddNewContact={AddNewContact}/>
    </div>

  );
}

export default App;
