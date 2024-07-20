import React from 'react'
import { Top } from '../../data'

const BHomeComponent = () => {
  return (
    <div className="container mx-auto my-5">
      <div className="flex justify-between">
        {Top.map(item => (
          <div key={item.id} className="flex">
            <img src={item.img} alt={`Image ${item.id}`} className=" h-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BHomeComponent
