
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  
  
  useEffect(()=>{
      fetch('http://localhost:5000/users')
      .then(res=>res.json())
      .then(data => setUsers(data))
  },[])


  const handleAddUser = (e) =>{
    e.preventDefault();
    // console.log("clicked the button");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = [name, email];


    fetch('http://localhost:5000/users', {
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res =>res.json())
    .then(data => {
      console.log(data)
      //  const newUser = [...users, data]
      //  setUsers(newUser)
    })

   

  }

  return (
    <>
      <div>
        <h1>
          {
            users.map(user => <li key = {user.id}> {user.name} </li>)
          }
        </h1>
        <div>
          <form onSubmit = {handleAddUser}>
            <input type="text" name ="name" placeholder="Enter your name"/><br />
            <input type="email" name = "email" placeholder = "Enter your email" /> <br />
            <input type="submit" value = "Add User" />
          </form>
        </div>
      </div>
      
    </>
  )
}

export default App
