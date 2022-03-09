import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import TypeCard from './TypeCard'
import pokeball from '../assets/pokeball.png'

export default function Card({ data }) {
  const navigate = useNavigate();
  const [pokemonContent, setPokemonContent] = useState({});
  const [color, setColor] = useState('')

  const textColor = color === 'white' || color === 'yellow' ? 'black' : 'white'

  const fetchPokemonContent = async () => {
    try {
      const resp = await axios.get(data.url)
      setPokemonContent(resp.data);
    } catch (err) {
      console.log(err);
    }
  }

  const cardColor = async () => {
    try {
      const resp = await axios.get(pokemonContent.species.url)
      setColor(resp.data.color.name);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPokemonContent()
  }, [])

  useEffect(() => {
    cardColor()
  }, [pokemonContent])
  
  return (
    <div className='cursor-pointer' id='card-container' onClick={() => navigate(`/detail/${pokemonContent.id}/`)} >
      <div id='card' className='rounded-lg px-2 m-2' style={{ backgroundImage: `url(${pokeball})`, backgroundRepeat: 'no-repeat', backgroundSize: 180, backgroundPosition: '150% 220%', backgroundColor:color }}>
        <div id='poke-id' className='flex justify-end mr-4 pt-4'>
          <h1 className='font-bold' style={{color: textColor}}># {pokemonContent.id}</h1>
        </div>
        <div id="name" className='flex capitalize'>
          <h1 className='font-bold text-xl' style={{color: textColor}}>{pokemonContent.name}</h1>
        </div>
        <div id="content" className='flex justify-between'>
          <div id="detail">

            <div id="type">
              {pokemonContent.types !== undefined ? pokemonContent.types.map((el, i) => {
                return (
                  <TypeCard key={i} data={[el, textColor]} />
                )
              }) : null}
            </div>
          </div>
          <div id="poke-img" className='bg-contain bg-center' style={{ backgroundImage: `url(${pokemonContent.sprites !== undefined ? pokemonContent.sprites.other.home.front_default : null})`, width: 150, height: 150, backgroundRepeat: 'no-repeat', }} />

        </div>
      </div>
    </div>
  )
}