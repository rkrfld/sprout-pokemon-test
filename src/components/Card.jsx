import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TypeCard from './TypeCard'
import pokeball from '../assets/pokeball.png'

export default function Card({ data }) {
  const [pokemonContent, setPokemonContent] = useState({})

  const fetchPokemonContent = async () => {
    try {
      const resp = await axios.get(data.url)
      setPokemonContent(resp.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPokemonContent()
  }, [])
  
  return (
    <div id='card-container' >
      <div id='card' className='rounded-lg px-2 m-2 bg-red-600' style={{ backgroundImage: `url(${pokeball})`, backgroundRepeat: 'no-repeat', backgroundSize: 140, backgroundPosition: '130% 200%' }}>
        <div id='poke-id' className='flex justify-end mr-4 pt-4'>
          <h1 className='font-bold text-white'># {pokemonContent.id}</h1>
        </div>
        <div id="name" className='flex capitalize'>
          <h1 className='text-white font-bold text-xl'>{pokemonContent.name}</h1>
        </div>
        <div id="content" className='flex'>
          <div id="detail">

            <div id="type">
              {pokemonContent.types !== undefined ? pokemonContent.types.map((el, i) => {
                return (
                  <TypeCard key={i} data={el} />
                )
              }) : null}
            </div>
          </div>
          <div id="poke-img" style={{ backgroundImage: `url(${pokemonContent.sprites !== undefined ? pokemonContent.sprites.front_default : null})`, width: 150, height: 100, backgroundPosition: '40% 50%', backgroundRepeat: 'no-repeat', backgroundSize: 180 }}>
          </div>
        </div>
      </div>
    </div>
  )
}