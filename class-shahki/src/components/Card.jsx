import React from 'react'

export default function Card({ id, image, description}) {
  return (
    <div>
        <h1>Id: {id}</h1>
        <img src={image} alt="" className='w-20'/>
    </div>
  )
}
