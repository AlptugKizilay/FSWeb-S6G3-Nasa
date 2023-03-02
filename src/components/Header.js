import React, { useState } from 'react'

const Header = (props) => {
    const [date, setDate] = useState(props.date);

    


    const handleDateSubmission = (event) => {
        event.preventDefault();
        console.log("Baaaak");


    }
    const handleDateChange = (event) => {
        event.preventDefault();
        setDate(event.target.value)
        console.log(event.target.value);
    }
    console.log("date" + date)
    console.log("dateeeeeeee " + props.dater(date))
    
    
    return (
        
        <div className='header-section'>
            <h1> {props.props.title} </h1>
            <form onSubmit={(e) => handleDateSubmission(e)}>
                <label htmlFor="birthday">Birthday:</label>
                <input onChange={(e) => handleDateChange(e)} type="date" name="datePicker" value={props.date} />
                <button type="submit">Let's See</button>
            </form>
        </div>

    )
}
export default Header;