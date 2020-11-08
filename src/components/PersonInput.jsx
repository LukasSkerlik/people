import React from "react"


function PersonInput({person}) {
  const [firstName,setFirstName] = React.useState(person.fName);
  const [lastName,setLastName] = React.useState(person.lName);


  return (<>
            <input value= {firstName}></input>
            <input value= {lastName}></input>
            <br />
          </>)
}

export default PersonInput
