import React from 'react'

const Search = () => {
  return (
        <form>
            <div className='search-form-control'>
                <input type='text' placeholder='Search your product here...' />
                <button type='button'>
                  <img src='/assets/search.svg' alt="Search" height={45} />
                </button>
            </div>
        </form>

  )
}

export default Search