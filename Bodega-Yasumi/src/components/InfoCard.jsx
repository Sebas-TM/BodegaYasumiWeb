import React from "react";

const InfoCard = () => {
  return (
    <article className='infocard__container'>
      <div className='infocard__image'>MEDALLA</div>
      <div className='inforcard__text'>
        <p className='infocard__title'>TITLE</p>
        <p className='inforcard__subtitle'>Subtitle</p>
      </div>
      <div className='infocard__percent'>
        <p className='infocard__number'>NUMBER</p>
      </div>
    </article>
  )
}

export default InfoCard;