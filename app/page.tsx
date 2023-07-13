'use client'

import React from 'react'

import { Container } from '@/app/styles'

import axios from 'axios'

const Home: React.FC = () => {

  const getData = async () => {
    const response = await axios.get('/api/hello')

    console.log(response.data)
  }

  return (
    <Container>
      <input />
      <button onClick={() => getData()}>Avaliar</button>
    </Container>
  )
}

export default Home
