import React, {useEffect, useState } from 'react'

function App() {

  const [backEndData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  let i = 0;

  useEffect(() => {
    console.log("Hello");
    console.log(i);
    console.log("End!")
    i++;
  }, [backEndData])

  return (
    <div>

      {(typeof backEndData.users === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backEndData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}

    </div>
  )
}

export default App