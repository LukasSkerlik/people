import React from "react"
import firebase from "../firebase"

function PersonInput({person}) {
  const [firstName,setFirstName] = React.useState(person.fName);
  const [lastName,setLastName] = React.useState(person.lName);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("people").doc(person.id).set({...person, fName:firstName, lName:lastName});
  }
  const onDelete = ()=>{
    const db = firebase.firestore();
    db.collection("people").doc(person.id).delete();

  }

  return (<>
            <input value= {firstName} onChange= {(e)=>{setFirstName(e.target.value)}}></input>
            <input value= {lastName} onChange= {(e)=>{setLastName(e.target.value)}}></input>
            <button onClick={onUpdate}>Update</button>
            <button onClick={onDelete}>Delete</button>
            <br></br>
          </>)
}

export default PersonInput
