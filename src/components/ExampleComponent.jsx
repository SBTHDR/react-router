import React from 'react'

export default function ExampleComponent(props) {
    const user = {
        firstName: 'User',
        lastName: 'One',
      }
      
      function formatName(user) {
        return user.firstName + ' ' + user.lastName
      }
  
      function getGreeting(user) {
        if (user) {
          return <h1>{formatName(user)}</h1>
        }
        return <h1> Stranger </h1>
      }
      
  return (
    <div>
        <h1>{ getGreeting(user) }</h1>

        <h1>{ props.name }</h1>
        { props.children }
    </div>
  )
}
