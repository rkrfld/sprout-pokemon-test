import React, { useEffect, useState } from 'react'
import { Outlet, useParams, Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import TypeCard from '../components/TypeCard';

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams()
  const [detail, setDetail] = useState();
  const [color, setColor] = useState('')
  const [isLoading, setLoading] = useState(true);

  const textColor = color === 'white' || color === 'yellow' ? 'black' : 'white'


  const fetchDetail = async () => {
    try {
      const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      setDetail(resp.data);
      const baseColor = await axios.get(resp.data.species.url)
      setColor(baseColor.data.color.name);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchDetail()
  }, [])


  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div className='flex justify-center pt-10 rounded-md'>
      <div className='flex-col border-2'>
        <div className='flex flex-col justify-center z-0  px-4' style={{ backgroundColor: color }}>
          <div className='mt-5 cursor-pointer' onClick={() => navigate('/')}>
            <FaArrowLeft size={20} color='black'/>
          </div>
          <div id="header" className='flex justify-between items-center'>
            <div id="name-type" className='flex flex-col items-start'>
              <div id="name" className='my-2 mx-1 capitalize font-bold text-4xl' style={{ color: textColor }}>
                {detail.name}
              </div>
              <div id="type" className='flex'>
                {detail.types !== undefined ? detail.types.map((el, i) => {
                  return (
                    <TypeCard key={i} data={[el, textColor]} />
                  )
                }) : null}
              </div>
            </div>
            <div id="poke-id">
              <h1 className='text-2xl font-semibold' style={{ color: textColor }}># {detail.id}</h1>
            </div>
          </div>
          <div className='z-40'>
            <div className='bg-contain bg-center' style={{ backgroundImage: `url(${detail.sprites.other.home.front_default})`, width: 'full', height: 300, backgroundRepeat: 'no-repeat', }} />
          </div>
        </div>
        <div className="z-20 bg-white rounded-t-3xl relative  px-4" style={{ top: -35 }}>
          <div id="detail-header" className='flex flex-col pt-14 border-b-2 pb-2 mb-2'>
            <div style={{ top: -30 }}>
              Click to see details
            </div>
            <div className='flex'>
              <Link to='about' state={{ detail }}>
                <h1 className='m-2 text-xl font-semibold'>About</h1>
              </Link>
              <Link to='stat' state={{ detail }}>
                <h1 className='m-2 text-xl font-semibold'>Base Stats</h1>
              </Link>
              <h1 className='m-2 text-xl font-semibold'>Evolution</h1>
              <h1 className='m-2 text-xl font-semibold'>Moves</h1>
            </div>
          </div>

          <div className='ml-2 '>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}