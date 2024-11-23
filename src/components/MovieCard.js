import React from 'react'
import { IMG_CND } from '../utils/constant'

const MovieCard = ({posterPath}) => {
    if(!posterPath) return null;
  return (
    <div className='w-48 pr-4'>
        <img  alt='movie card'
        src={IMG_CND+posterPath}/>
    </div>
  )
}

export default MovieCard