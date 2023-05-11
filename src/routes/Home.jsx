import React from 'react'
import { Link } from 'react-router-dom'
import Cpm from './Cpm'
import Pert from './Pert'
import Risk from './Risk'
function Home() {
  return (
    <div>
      <Link to='/risk'><Risk /></Link>
      <Link to='/cpm'><Cpm /></Link>
      <Link to='/pert'><Pert /></Link>
    </div>
  )
}

export default Home