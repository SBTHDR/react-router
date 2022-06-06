import React from 'react'
import { useState } from 'react'

export default function Message() {
    const [message, setMessage] = useState(false)

    return (
        <div className='mt-3'>
            <button className='bg-indigo-500 px-4 py-2 rounded-md text-white' onClick={ () => setMessage(!message) }>Send Message</button>
            {
            message ? 
            <div>
                <div className='w-1/3 flex p-4 items-center'>
                    <label htmlFor="">Title</label>
                    <input className='border-2 border-indigo-500 rounded-md ml-2 w-full p-3' type="text" required />
                </div>
            </div>  
             : 
            <div>Click to show message field</div>
            }
        </div>
    )
}
