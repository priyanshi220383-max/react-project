import React from 'react'
import Data from '../Data'

const Bolly = () => {
  const BollyData = Data.filter((item)=>item.category==="Bollywood");
  console.log(BollyData)
  return (
    <div>
      {BollyData.map((bollyData)=>
      <>
      <h1>{bollyData.title}</h1>
      <img src={bollyData.img_url}/>
      </>)}
    </div>
  )
}

export default Bolly