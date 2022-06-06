import React from 'react'

export default function Home() {
    const names = [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
    ]

    
  return (
    <div>
        <h2 className='text-2xl mt-3 font-bold'>Items List:</h2>

        <ul className='bg-white rounded-md p-5 mt-3 border border-indigo-500'>
            { names.map((name) => { 
                return <div key={name.id} className='text-xl mb-2 border border-indigo-500 rounded-md p-3'>
                        <li><span className='text-indigo-500'>User ID:</span> {name.id}</li>
                        <li><span className='text-indigo-500'>Title:</span> {name.title}</li>
                        <li><span className='text-indigo-500'>Description:</span> {name.body}</li>
                    </div>
            }) }
        </ul>
    </div>
  )
}
