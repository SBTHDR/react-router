import React from 'react'
import { useState } from 'react'

export default function Create() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [item, setItem] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, description, item }

        console.log(blog)
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
                    <select className='bg-transparent w-full p-3 border-2 border-indigo-500 rounded-md ml-2 cursor-pointer' value={item} onChange={(e) => setItem(e.target.value)}>
                        <option value="">Select Item</option>
                        <option value="1">Item one</option>
                        <option value="2">Item two</option>
                    </select>
                </div>
            </div>

            <button className='bg-indigo-500 text-white px-4 py-3 rounded-md'>Submit</button>
        </form>
        <p className='text-xl mt-3'>Output:</p>
        <div className='text-2xl border mt-3 p-2'>
            <p className=''>{title}</p>
            <p className=''>{description}</p>
            <p className=''>{item}</p>
        </div>
    </div>
  )
}
