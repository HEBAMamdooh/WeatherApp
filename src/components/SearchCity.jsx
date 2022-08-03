import React from 'react'
import { MdLocationSearching } from "react-icons/md";
import { MdSearch } from "react-icons/md";

function SearchCity(props) {
  return (
    <>
      <form role="search" onSubmit={props.getData}>
        <div className='row justify-content-start input-group flex-nowrap p-3'>
          <label className="col-2 fs-2 text-center" id="addon-wrapping" htmlFor="city"> <MdSearch /> </label>
          <input className="col-6 form-control border-0 rounded-5" type="search" name="city" id="city" placeholder="Search city..." aria-label="Search City" aria-describedby="addon-wrapping" />
          <button className='col-1 btn btn-light bg-text-light rounded-circle fs-5 text-center mx-1' type="submit" title='Search'> <MdLocationSearching /> </button>
        </div>
      </form>
    </>
  )
}

export default SearchCity