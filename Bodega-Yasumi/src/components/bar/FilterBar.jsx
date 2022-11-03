import React from 'react'

const FilterBar = ({setOrder}) => {

  return (
    <section className='w-full bg-white my-8 rounded-lg shadow-md flex justify-end pr-8 py-4'>
      <section>
      <select name="select" defaultValue="value2">
        <option value="normal">Destacados</option>
        <option value="mayor">Mayor precio</option>
        <option value="menor">Menor precio</option>
      </select>
      </section>
    </section>
  )
}

export default FilterBar