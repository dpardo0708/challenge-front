import React from 'react'
import search from '../../../images/search.svg'

import './search.scss'

const Search = ({
  label,
  id,
  name,
  type,
  onChange,
  onClick,
  value,
  placeholder,
  ...atributes
}: any) => {   

    return (
        <div className= "search">
            <input
                {...atributes}
                id={id}
                name={name}                
                type={type}
                value={value}
                onChange={onChange}             
                placeholder = {placeholder}
             />
             <button className='search-button' onClick={onClick}></button>                        
        </div>
    )
}

export default Search;