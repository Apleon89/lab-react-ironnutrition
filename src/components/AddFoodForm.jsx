import { Button, Divider, Input } from "antd"
import { useState } from "react"


function AddFoodForm(props) {

    const { setFoodList, setFilterFood } = props

    const [ inputName, setInputName ] = useState('')
    const [ inputImage, setInputImage ] = useState('')
    const [ inputCalories, setInputCalories ] = useState(0)
    const [ inputServings, setInputServings ] = useState(0)

    const inputStyles = {
        textAlign:'center'
    }

    const handleInputName = (event) => {
        setInputName(event.target.value)
    }

    const handleInputImage = (event) => {
        setInputImage(event.target.value)
    }

    const handleInputCalories = (event) => {
        setInputCalories(event.target.value)
    }

    const handleInputServings = (event) => {
        setInputServings(event.target.value)
    }

    const handleSubmitForm = (event) => {

        event.preventDefault()
        const newFood = {
            name: inputName,
            image: inputImage,
            calories: inputCalories,
            servings: inputServings
        }
        setFoodList( foodList => [newFood, ...foodList])
        setFilterFood( filterFood => [newFood, ...filterFood])


        setInputName('')
        setInputImage('')
        setInputCalories(0)
        setInputServings(0)
    }

  return (
    <form style={{
        maxWidth:'70%',
        margin:'0 auto'
    }}>

        <Divider>Add Food Entry</Divider>

        <label htmlFor="name">Name</label>
        <Input style={inputStyles} type="text" name="name" value={inputName} onChange={handleInputName}/>

        <label htmlFor="image">Image</label>
        <Input style={inputStyles} type="text" name="image" value={inputImage} onChange={handleInputImage}/>

        <label htmlFor="calories">Calories</label>
        <Input style={inputStyles} type="number" name="calories" value={inputCalories} onChange={handleInputCalories}/>

        <label htmlFor="servings">Servings</label>
        <Input style={inputStyles} type="number" name="servings" value={inputServings} onChange={handleInputServings}/>

        <Button onClick={handleSubmitForm}>Create</Button>



    </form>
  )
}

export default AddFoodForm