import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className=' p-4 bg-white'>
        <div className='flex gap-2 border p-2 rounded-md'>
            <Search className='h-5 w-5'/>
            <input className='outline-none' type='text' placeholder='Search...'/>
        </div>

    </div>
  )
}

export default Header