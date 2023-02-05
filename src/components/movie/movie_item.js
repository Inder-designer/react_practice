import React from 'react'

const movie_item = (props) => {
  return (
        <div className="card" >
            <img src={props.poster} alt=""  />
            <div className='content'>
                <h4>Name: {props.title}</h4>
                <p>Year: {props.year}</p>
            </div>
        </div>
  )
}

export default movie_item