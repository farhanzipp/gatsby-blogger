import React from 'react'

const CardItemImage = ({ imageUrl, title }) => {
  return (
    <div>
        <img src={imageUrl} alt={title} />
    </div>
  )
}

export default CardItemImage