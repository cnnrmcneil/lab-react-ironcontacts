import React, {useState} from 'react'
import Contacts from './components/Contacts'
import contacts from './contacts.json'
import './App.css';

let newContactArr = contacts
let usedContacts = contacts.slice(0, 4)
newContactArr.splice(0,4)


function App() {
  const [contactArr, setContactArr] = React.useState(usedContacts)
  return (
    <div className="App">
    <h1>Iron Contacts</h1>
    <table id="table">
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
    </tr>
    {contactArr.map(person =>{
      return (
      <tr>
      <td><img id="imgStyle" src={person.pictureUrl} /></td>
      <td>{person.name}</td>
      <td>{person.popularity}</td>
      </tr>
      )
    })}
     </table>
    </div>
  );
}

export default App;