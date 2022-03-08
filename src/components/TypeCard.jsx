import React, { useEffect } from 'react'

export default function TypeCard({ data }) {
  return (
    <div id="type" className='my-2'>
      <div className='bg-stone-50 bg-opacity-50 rounded-lg'>
        <h1 className='mx-4 text-white capitalize font-medium'>{data.type.name !== undefined ? data.type.name : null}</h1>
      </div>
    </div>
  )
} 