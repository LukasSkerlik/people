import React from "react"
import './App.css';
import firebase from "./firebase"
import PersonInput from "./components/PersonInput"

function App() {
  const[people, setPeople] = React.useState([])
  const[newFirstName, setNewFirstName] = React.useState([])
  const[newLastName, setNewLastName] = React.useState([])


  React.useEffect(() => {
      const db = firebase.firestore();
      const unsubscribe = db.collection("people").onSnapshot(snapshot => {
        const peopleData= [];
        snapshot.forEach(doc => peopleData.push({...doc.data(), id :doc.id}))
        setPeople(peopleData)
        })
      return unsubscribe;
  }, [])

  const onCreate=()=>{
        const db = firebase.firestore()
        db.collection("people").add({fName:newFirstName, lName:newLastName})
  }

  return (
          <ul>
            <label>First Name: </label>
            <input value={newFirstName} onChange={(e)=> setNewFirstName(e.target.value)}/>
            <label>Last Name: </label>
            <input value={newLastName} onChange={(e)=> setNewLastName(e.target.value)}/>
            <button onClick={onCreate}>Create new person!</button>

            {people.map(person => (
              <li key={person.id}>
              <PersonInput person={person} />
              </li>
            ))}
          </ul>
);
}

export default App;
