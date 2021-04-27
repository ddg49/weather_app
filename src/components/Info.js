import React from 'react'   

const Info = (props) => {
    return (
        <div>
        <h1>Weather for {props.city}</h1>
        <h2>{props.temp} °F</h2>
        <h3>{props.desc}</h3>
        <h3>High: {props.max} °F</h3>
        <h3>Low: {props.min} °F</h3>
        </div>
    )
}

export default Info