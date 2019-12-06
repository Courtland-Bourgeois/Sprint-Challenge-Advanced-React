import React from 'react';

const Players = (props) => {

  return (
    <div>
      <div className='players'>
        <h2>{props.player.name}</h2>
        <h3>Country: {props.player.country}</h3>
        <h4>Number of Searches: {props.player.searches}</h4>
        <hr />
      </div>
    </div>
  )
}

export default Players