import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function Detail() {
  const { id } = useParams()
  const [detail, setDetail] = useState();

  const fetchDetail = async () => {
    try {
      const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      setDetail(resp.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchDetail()
  }, [])

  return (
    <div>
      <h1>asd</h1>
    </div>
  )
}