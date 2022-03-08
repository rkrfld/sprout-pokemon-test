import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TypeCard from './TypeCard'
import pokeball from '../assets/pokeball.png'

export default function Card({ data }) {
  const [pokemonContent, setPokemonContent] = useState({})
  const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'


  useEffect(() => {

  }, [])
  
  return (
    <div id='card-container' >
      <div id='card' className='rounded-lg px-2 m-2 bg-red-600' style={{ backgroundImage: `url(${pokeball})`, backgroundRepeat: 'no-repeat', backgroundSize: 140, backgroundPosition: '130% 200%' }}>
        <div id='poke-id' className='flex justify-end mr-4 pt-4'>
          <h1 className='font-bold text-white'># {data.id}</h1>
        </div>
        <div id="name" className='flex'>
          <h1 className='text-white font-bold text-xl'>Bulbasaur</h1>
        </div>
        <div id="content" className='flex'>
          <div id="detail">

            <div id="type">
              <TypeCard />
              <TypeCard />
            </div>
          </div>
          <div id="poke-img" style={{ backgroundImage: `url(${imgUrl})`, width: 150, height: 100, backgroundPosition: '40% 50%', backgroundRepeat: 'no-repeat', backgroundSize: 280 }}>
          </div>
        </div>
      </div>
    </div>
  )
}