import React from 'react'
import { useLocation } from "react-router-dom"

export default function About() {
  const location = useLocation()
  const data = location.state.detail
console.log(data);

function ability() {
  let output = '';
  for ( let i = 0; i < data.abilities.length; i++) {
    if (data.abilities[i + 1] === undefined) {
      output += data.abilities[i].ability.name
    } else {
      output += data.abilities[i].ability.name += ', '
    }
  }

  return output
}
  return (
    <div className='flex pb-6 '>
      <div id="title" className='flex flex-col items-start mr-6 text-gray-600 font-semibold'>
        <h1 className='py-1'>Species</h1>
        <h1 className='py-1'>Height</h1>
        <h1 className='py-1'>Weight</h1>
        <h1 className='py-1'>Abilities</h1>
      </div>
      <div id="data" className='flex flex-col items-start font-semibold'>
        <h1 className='py-1 capitalize'>{data.species.name}</h1>
        <h1 className='py-1'>{data.height}</h1>
        <h1 className='py-1'>{data.weight}</h1>
        <h1 className='py-1 capitalize'>{ability()}</h1>
        </div>
    </div>
  )
}