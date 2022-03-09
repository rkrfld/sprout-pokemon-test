import React from 'react'
import { useLocation } from "react-router-dom"

export default function About() {
  const location = useLocation()
  const data = location.state.detail
  console.log(data);


  return (
    <div className='flex pb-6 '>
      <div id="title" className='flex flex-col items-start mr-6 text-gray-600 font-semibold'>
        <h1 className='py-1'>HP</h1>
        <h1 className='py-1'>Attack</h1>
        <h1 className='py-1'>Defense</h1>
        <h1 className='py-1'>Sp. Atk</h1>
        <h1 className='py-1'>Sp. def</h1>
      </div>
      <div id="data" className='flex flex-col items-start mr-6 font-semibold'>
        <h1 className='py-1'>{data.stats[0].base_stat}</h1>
        <h1 className='py-1'>{data.stats[1].base_stat}</h1>
        <h1 className='py-1'>{data.stats[2].base_stat}</h1>
        <h1 className='py-1'>{data.stats[3].base_stat}</h1>
        <h1 className='py-1'>{data.stats[4].base_stat}</h1>
      </div>
      <div id="bar" className='flex flex-col items-start font-semibold justify-around'>
        <div className='' style={{ width: (data.stats[0].base_stat * 2), height: 5, backgroundColor: (data.stats[0].base_stat < 50 ? 'red' : 'green') }} />
        <div className='' style={{ width: (data.stats[1].base_stat * 2), height: 5, backgroundColor: (data.stats[1].base_stat < 50 ? 'red' : 'green') }} />
        <div className='' style={{ width: (data.stats[2].base_stat * 2), height: 5, backgroundColor: (data.stats[2].base_stat < 50 ? 'red' : 'green') }} />
        <div className='' style={{ width: (data.stats[3].base_stat * 2), height: 5, backgroundColor: (data.stats[3].base_stat < 50 ? 'red' : 'green') }} />
        <div className='' style={{ width: (data.stats[4].base_stat * 2), height: 5, backgroundColor: (data.stats[4].base_stat < 50 ? 'red' : 'green') }} />
      </div>
    </div>
  )
}