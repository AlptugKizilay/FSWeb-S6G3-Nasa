import React, { useState } from 'react'

const Header = (props) => {
    const [date, setDate] = useState(props.props.date);
    
    console.log(props.props.date);




    const handleDateSubmission = (event) => {
        event.preventDefault();
        props.dater(date)

    }
    const handleDateChange = (event) => {
        event.preventDefault();
        setDate(event.target.value)

    }
    console.log("date: " + date)



    return (

        <div className='header-section'>
            <h1> {props.props.title} </h1>
            <form onSubmit={(e) => handleDateSubmission(e)}>
                <label htmlFor="birthday"></label>
                <input onChange={(e) => handleDateChange(e)} type="date" name="datePicker"  />
                <button type="submit">Let's See</button>
            </form>
        </div>

    )
}
export default Header;