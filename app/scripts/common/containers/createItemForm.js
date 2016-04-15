/**
 * Created by Zeron on 05.04.2016.
 */
import React from "react"

class CreateItemForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nameValid: true,
            priceValid: true,
            quantityValid: true
        };
    }

    onSubmit(e) {
        let name, price, quantity, nameValid, priceValid, quantityValid;

        e.preventDefault();

        name = this.refs.name.value;
        price = this.refs.price.value;
        quantity = this.refs.quantity.value;

        nameValid = !!name;
        priceValid = parseInt(price) > 0;
        quantityValid = parseInt(quantity) > 0;

        if (!nameValid || !priceValid) {
            this.setState({
                nameValid, priceValid, quantityValid
            });
        } else {
            this.props.onCreate({
                name, price, quantity
            });
        }
    }

    setStateValid(stateProperty) {
        if (!this.state[stateProperty]) {
            this.setState({
                [stateProperty]: true
            });
        }
    }

    render() {
        return (
            <div className="create-item-form">
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" ref="name" onChange={() => this.setStateValid("nameValid")} type="text"
                           placeholder="Name"/>
                    {this.state.nameValid ? null : <span className="error-message">Name required.</span>}
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <input id="price" ref="price" onChange={() => this.setStateValid("priceValid")} type="number"
                           placeholder="0"/>
                    {this.state.priceValid ? null : <span className="error-message">Price required.</span>}
                </div>

                <div>
                    <label htmlFor="quantity">Quantity</label>
                    <input id="quantity" ref="quantity" onChange={() => this.setStateValid("quantityValid")}
                           type="number" placeholder="0"/>
                    {this.state.quantityValid ? null : <span className="error-message">Quantity required.</span>}
                </div>

                <button className="btn btn-primary" onClick={(e) => this.onSubmit(e)}>Add</button>
                <button className="btn btn-primary" onClick={this.props.onBack}>Back</button>
            </div>
        );
    }
}

export default CreateItemForm;