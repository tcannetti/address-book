import React, { useState, useEffect } from 'react';
import User from './components/User'

const App = () => {
  const [listUsers, setUsers] = useState([])
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch('https://randomuser.me/api?results=25')
      .then(res => res.json())
      .then(data => {
        setIsLoaded(true)
        setListUsers(data.results)
      })
  }, [])

  if(!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className='container'>
        {listUsers.map(( user, index ) => {
          return <User key={index} user={user} />
        })}
      </div>
    )
  }
}

export default App;
