import React from "react";
import { FaMedal as IconMedal } from "react-icons/fa"

const InfoCard = () => {
  return (
    <article className='infocard__container align-center justify-between'>
      <div className='infocard__image button-medal center'>
        <IconMedal/>
      </div>
      <div className='inforcard__text'>
        <p className='infocard__title'>TITLE</p>
        <p className='inforcard__subtitle m-0'>Subtitle</p>
      </div>
      <div className='infocard__percent'>
        <p className='infocard__number'>NUMBER</p>
      </div>
    </article>
  )
}

export default InfoCard;