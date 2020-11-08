import React from "react"
import './App.css';
import firebase from "./firebase"
import PersonInput from "./components/PersonInput"

function App() {
  const[people, setPeople] = React.useState([])


  React.useEffect(() => {
      const db = firebase.firestore();
      const unsubscribe = db.collection("people").onSnapshot(snapshot => {
        const peopleData= [];
        snapshot.forEach(doc => peopleData.push({...doc.data(), id :doc.id}))
        setPeople(peopleData)
        })
      return unsubscribe;
  }, [])

  return (
          <ul>
          {people.map(person => (
            <li key={person.id}>
              <PersonInput person={person} />
            </li>
            ))}
          </ul>
);
}

export default App;
