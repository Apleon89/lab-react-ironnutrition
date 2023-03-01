import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search(props) {

    const { foodList, setFilterFood } = props

    const [ inputSearch, setInputSearch ] = useState('')

    const handleInputSearch = (event) => {
        setInputSearch(event.target.value)

        console.log(event.target.value);
        const filteredFood = foodList.filter( each => {
            
            const eachName = each.name.toLowerCase()
            const searchValue = event.target.value.toLowerCase()
            
            return eachName.includes(searchValue)})

        setFilterFood(filteredFood)
    }

  return (
    <div  style={{
        maxWidth:'70%',
        margin:'0 auto'
    }}>

        <Divider>Search</Divider>

        <label htmlFor="search"></label>
        <Input type="text" name="search" value={inputSearch} onChange={handleInputSearch}/>

    </div>
  )
}

export default Search