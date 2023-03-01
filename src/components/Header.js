import React from 'react'

const Header = (props) => {
    const  getRandomDate = () => {
        const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);

    } 
    
console.log(getRandomDate());
    return (
        <div className='header-section'>
            <h1> {props.props.title} </h1>
            <button onClick={getRandomDate} type="button" className="btn btn-primary">I feel lucky</button>
        </div>

    )
}
export default Header;