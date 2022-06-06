import React from 'react'
import { useState, useEffect } from 'react'

export default function Posts() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json() )
            .then((data) => setUsers(data))
            .catch((err) => {
                console.log(err)
            })
    }, []) 

  return (
    <div>
        <ul>
            { users.map((user) => {
                return <li key={user.id}>{user.name} {user.website}</li>
            } )}
        </ul>
    </div>
  )
}
