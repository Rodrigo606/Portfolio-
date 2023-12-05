import React from 'react'
import style from './card.module.scss'


function Card() {
  const image = '/assets/skills_img/paisaje1.jpg';
  const image2 = '/assets/skills_img/paisaje1.jpg';
  return (
    <div className={style.model}>
      <div className={style.img}>
        <img
          alt='GIF'
          src={image}
        />
      </div>
    </div>
  )
}

export default Card