import React from 'react'

const CardItem = ({ imageUrl, title, label, excerpt,  author, published }) => {
  return (
    <div>
        <img src={imageUrl} alt={title} />
        <p>{label}</p>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <h4>{author}</h4>
        <p>{published}</p>
    </div>
  )
}

export default CardItem