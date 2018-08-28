import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetails extends Component {
    constructor(props) {
        super(props);
    
    }


    renderDishDetails(dish) {
        if (dish != null)
            return(
                    <Card>
                      <CardImg top src={dish.image} alt={dish.name} />
                      <CardBody>
                       <CardTitle>{dish.name}</CardTitle>
                       <CardText>{dish.description}</CardText>
                     </CardBody>
                    </Card>
                
            );
        else
            return(
                <div></div>
            );
    }

    renderDishPrice(dish) {
        if (dish != null)
            return(
                    <p>
                        This food cost {dish.price}
                    </p>
                
            );
        else
            return(
                <div></div>
            );
    }
    

    render() {
        

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDishDetails(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                {this.renderDishPrice(this.props.selectedDish)}
                </div>
            </div>

        );
    }
}

export default DishDetails;