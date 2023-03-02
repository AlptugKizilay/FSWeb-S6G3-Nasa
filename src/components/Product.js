import React from 'react'
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
const Product = (props) => {
  return (
    /*     <div className="product-item" >
      {console.log(props.props)}
      
      <img src={props.props.url} alt={props.props.title} />
      </div> */
    <Card className="my-2"
    style={{
      margin: "20%",
      
    }}
    >
      <CardBody
      
     >
        <CardTitle tag="h1">
        {props.props.title} 
        </CardTitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </CardText>
        <CardText>
          <small className="text-muted">
            Last updated 3 mins ago
          </small>
        </CardText>
      </CardBody>
      <CardImg
      

        bottom
        src={props.props.url}
        alt={props.props.title}
        style={{
          width: "100%"
          /* height: 180 */
        }}
        width="70%"
      />
    </Card>


  )

}

export default Product;