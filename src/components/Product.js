import React from 'react'
const Product = (props) => {
    return (
        <div className="product-item" >
      {console.log(props.props)}
      
      <img src={props.props.url} alt={props.props.title} />
      </div>
    )

}

export default Product;