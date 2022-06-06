import React from 'react'
import { useState } from 'react'

export default function Create() {

    const [users, setUsers] = useState([
        {
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "id": 2,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
    ])

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [id, setId] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const userInput = { title, description, id }

        setTitle('')
        setDescription('')

        setUsers([ ...users, userInput])
    }
    
  return (
    <div>
        <h2 className='text-lg mt-3'>Create Input filed</h2>
        <form onSubmit={handleSubmit}>
            <div className='flex items-center justify-between w-full space-x-2 border mt-3 mb-3'>
                <div className='w-1/3 flex p-4 items-center'>
                    <label htmlFor="">Title</label>
                    <input className='border-2 border-indigo-500 rounded-md ml-2 w-full p-3' type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div className='w-1/3 flex p-4 items-center'>
                    <label htmlFor="">Description</label>
                    <textarea className='border-2 border-indigo-500 rounded-md w-full p-2 ml-2' required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                <div className='w-1/3 flex p-4 items-center'>
                    <label htmlFor="">Select</label>
                    <select className='bg-transparent w-full p-3 border-2 border-indigo-500 rounded-md ml-2 cursor-pointer' value={id} onChange={(e) => setId(e.target.value)}>
                        <option value="">Select Item</option>
                        <option value="1">Item one</option>
                        <option value="2">Item two</option>
                    </select>
                </div>
            </div>

            <button className='bg-indigo-500 text-white px-4 py-3 rounded-md'>Submit</button>
        </form>
        
        <h2 className='text-2xl mt-3 font-bold'>User List:</h2>

        <ul className='bg-white rounded-md p-5 mt-3 border border-indigo-500'>
            { users.map((user) => { 
                return <div key={user.id} className='text-xl mb-2 border border-indigo-500 rounded-md p-3'>
                        <li><span className='text-indigo-500'>User ID:</span> {user.id}</li>
                        <li><span className='text-indigo-500'>Title:</span> {user.title}</li>
                        <li><span className='text-indigo-500'>Description:</span> {user.description}</li>
                    </div>
            }) }
        </ul>

    </div>
  )
}
