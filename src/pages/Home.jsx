import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    try {
      const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/')
      console.log(resp.data);
      setPokemon(resp.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  return (
    <div className='flex flex-col bg-blue-200'>
      <div className='flex p-2'>
        <h1 className='font-bold text-5xl'>Pokedex</h1>
      </div>
      <div className='grid grid-cols-3'>
        {pokemon.map((el) => {
          return (
            <Card data={el} />
          )
        })}
      </div>
    </div>
  )
}