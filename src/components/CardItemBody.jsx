import React from 'react'

const CardItemBody= ({ label, title, excerpt, author, published }) => {
  return (
    <div>
        <p>{label}</p>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <h4>{author}</h4>
        <p>{published}</p>
    </div>
  )
}

export default CardItemBody
