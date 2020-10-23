
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
  const [newUserContact, setNewUserContact] = useState({
    name: "",
    Email: "",
    imageSrc: ""});

  const handlChange = (e) => {
      setNewUserContact({ ...newUserContact, [e.target.name]: e.target.value });
    };

  const AddNewContact = () => SetUsersList([...UsersList, newUserContact]);

  const Delete=(element)=>{
    let filtered= UsersList.filter(el=>el.Email!==element.Email)
    SetUsersList(filtered)}

  return (
    <div className="body">
    <header className="App">
     <Link to='/contact list'><Button variant="primary">contact list</Button> </Link> 
     <Link to='/add contact'> <Button variant="primary">add contact</Button></Link>
     </header>
     <div className='user'>
      <Route path='/add contact' render={ () => <Add AddNewContact={AddNewContact} handlChange={handlChange} setNewUserContact={setNewUserContact}/>} />
        <Route path='/contact list' render={ () => <div className='container' style={{maxWidth:"95%"}}>{UsersList.map((User, i)=><UserCard key={i} UserData={User} Delete={Delete}/>)} </div>}  />
        </div>
    </div>
  );
}
export default App
