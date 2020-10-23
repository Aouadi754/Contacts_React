
import React,{useState} from 'react';
import './App.css';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,Route } from 'react-router-dom';
import Add from './Add';
import {UsersData} from './UsersData'
import UserCard from './UserCard';


function App() {
  const [UsersList, SetUsersList] = useState(UsersData);
  const AddNewContact = (x) => SetUsersList([...UsersList, x]);

  const Delete=(element)=> {
    let filtered= UsersList.filter(el=>el.Email!==element.Email)
  SetUsersList(filtered)}

  return (
    <div className='List'>
    <div className="App">
     <Link to='/contact list'><Button variant="primary">contact list</Button> </Link> 
     <Link to='/add contact'> <Button variant="primary">add contact</Button></Link>
     </div>
     <div className='user'>
  <Route path='/add contact' render={ () => <Add AddNewContact={AddNewContact}/>} />
        <Route path='/contact list' render={ () => <div>{UsersList.map((User, i)=><UserCard key={i} UserData={User} Delete={Delete} />)} </div>}  />
    </div>
  );
}
export default App
