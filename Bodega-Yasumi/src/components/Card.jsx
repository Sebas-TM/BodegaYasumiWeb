import React from "react";

const Card = ({
  children,
  title = "TITLE",
  quantity = "1,350"
}) => {
  return (
    <section className="justify-between button w-equal text-center">
      <div className="button-medal">
        {children}
      </div>
      <p>{title}</p>
      <p>{`s/${quantity}`}</p>
    </section>
  )
}

export default Card;