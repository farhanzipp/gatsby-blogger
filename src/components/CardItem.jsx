import React from 'react'
import CardItemImage from './CardItemImage'
import CardItemBody from './CardItemBody'

const CardItem = ({ imageUrl, title, label, excerpt,  author, published }) => {
  return (
    <div>
        <CardItemImage imageUrl={imageUrl} title={title} />
        <CardItemBody label={label} title={title} excerpt={excerpt} author={author} published={published} />
    </div>
  )
}

export default CardItem