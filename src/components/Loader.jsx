import React from 'react'
import 'ldrs/reuleaux'

function Loader() {
  return (
    <div className='absolute flex h-screen w-screen bg-gray-400 bg-opacity-40 justify-center items-center'>

<l-reuleaux
  size="37"
  stroke="5"
  stroke-length="0.15"
  bg-opacity="0.1"
  speed="1.2"
  color="black" 
></l-reuleaux>

    </div>
  )
}

export default Loader