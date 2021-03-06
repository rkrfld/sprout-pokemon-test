import React from 'react'

export default function TypeCard({ data }) {
  const textColor = data[1] === 'white' ? 'black' : 'white'
  return (
    <div id="type" className='my-2 mx-1'>
      <div className='rounded-full' style={{backgroundColor: data[1], opacity: 0.5}}>
        <h1 className='mx-4 capitalize font-medium' style={{color: textColor}}>{data[0].type.name !== undefined ? data[0].type.name : null}</h1>
      </div>
    </div>
  )
} 