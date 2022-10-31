import React from 'react'

const FilterBar = () => {
  return (
    <section className='w-full bg-white my-8 rounded-lg shadow-md flex justify-end pr-8 py-4'>
      <section>
      <select name="select" defaultValue="value2">
        <option value="value1">Destacados</option>
        <option value="value2">Mayor precio</option>
        <option value="value3">Menor precio</option>
      </select>
      </section>
    </section>
  )
}

export default FilterBar