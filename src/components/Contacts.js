import React from "react";
import contacts from "../contacts.json"



let newContactArr = [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]

const Contacts = () => {
const imgStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '100px',
    objectFit: 'contain'

}
function randomizer(arr){
let i = Math.floor(Math.random()*newContactArr.length)
return arr[i]
}
let iteratedPerson = randomizer(newContactArr)
const textStyle = {
    textAlign: 'center'
}
const [person, editPerson] = React.useState('')
    return(
        <tr>
            <td><img style={imgStyle} src={iteratedPerson.pictureUrl}/></td>
            <td style={textStyle}>{iteratedPerson.name}</td>
            <td style={textStyle}>{iteratedPerson.popularity}</td>
        </tr>
    )
}

export default Contacts