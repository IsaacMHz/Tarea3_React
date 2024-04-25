import React from 'react'

export const GameSearch = (props) => {

  

  return (
    <input className='GameSearch' 
    placeholder='Mario Bros xd'
    value={props.searchValue}
    onChange={ (event) => {
      props.setSearchValue(event.target.value)
      console.log(event.target.value)
    } 
    } />
  )
}

export default GameSearch