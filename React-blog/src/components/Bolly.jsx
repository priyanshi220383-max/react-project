import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'

const Bolly = () => {
  const BollyData = Data.filter((item) => item.category === "Bollywood");

  return (
    <div>
      {BollyData.map((bollyData) => (
        <div key={bollyData.id}>
          <Link to={`/details/${bollyData.id}`}>
            <h1>{bollyData.title}</h1>
            <img src={bollyData.img_url} alt={bollyData.title} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Bolly