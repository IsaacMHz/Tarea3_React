import React from 'react'

export const GameCounter = (props) => {
  
  const {completed , total} = props;

  return (

    <div className='GameCouter'>
      {completed === total ? <h2>¡Excelente! Has completado todos los juegos</h2> : <h2>Has completado <span>{props.completed}</span> de <span>{props.total}</span> juegos</h2>}
    </div>
  )
}

export default GameCounter