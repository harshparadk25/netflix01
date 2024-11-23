import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMoviesSuggestion from './GPTMoviesSuggestion'

const GPTSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
       <img  className=' w-full h-full' src='https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg' alt='logo'/>
       </div>
      <GPTSearchBar/>
      <GPTMoviesSuggestion/>
    </div>
  )
}

export default GPTSearch;