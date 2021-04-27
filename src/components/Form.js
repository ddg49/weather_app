import React, {useState} from 'react'

const Form = (props) => {

    const [formData, setFormData] = useState({
        zipcode: ""
    }) 

    const handleChange = (event) => {
        setFormData({
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
     event.preventDefault()
     props.getWeather(formData.zipcode)   
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="number" name="zipcode" value={formData.zipcode} maxLength={100000} onChange={handleChange} placeholder="Enter a Zip Code"/>
            <input type="submit" value="Search"/>
        </form>
    </>
    )
}

export default Form