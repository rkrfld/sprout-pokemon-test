import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchPokemon = async () => {
    try {
      const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/')
      setPokemon(resp.data.results);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col bg-blue-200'>
      <div className='flex p-2'>
        <h1 className='font-bold text-5xl'>Pokedex</h1>
      </div>
      <div className='grid grid-cols-3'>
        {pokemon.map((el, i) => {
          return (
            <Card key={i} data={el} />
          )
        })}
      </div>
    </div>
  )
}