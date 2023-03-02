import React, { useState } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="sticky-top">
        <div className='header-section' style={{
            position: "sticky", top: "0",
                             

       }}>

            <form onSubmit={(e) => handleDateSubmission(e)} >
                <label htmlFor="birthday"></label>
                <input onChange={(e) => handleDateChange(e)} type="date" name="datePicker" style={{
                    width: '100%'

                }} />
                <div>
                    <Button
                        block
                        color="primary"
                        outline
                        size="sm"
                        type="submit"
                    >
                        Let's See
                    </Button>
                </div>
                {/* <button type="submit">Let's See</button> */}
            </form>
        </div>
        </div>
        

    )
}
export default Header;