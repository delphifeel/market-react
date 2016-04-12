/**
 * Created by Zeron on 05.04.2016.
 */
var React = require("react");

var CreateItemForm = React.createClass({
    getInitialState: function () {
        return {
            nameValid: true,
            priceValid: true,
            quantityValid: true
        };
    },

    onSubmit: function (e) {
        var name, price, quantity, nameValid, priceValid, quantityValid;

        e.preventDefault();

        name = this.refs.name.value;
        price = this.refs.price.value;
        quantity = this.refs.quantity.value;

        nameValid = !!name;
        priceValid = parseInt(price) > 0;
        quantityValid = parseInt(quantity) > 0;

        if (!nameValid || !priceValid) {
            this.setState({
                nameValid: nameValid,
                priceValid: priceValid,
                quantityValid: quantityValid
            });
        } else {
            this.props.onCreate({
                name: name,
                price: price,
                quantity: quantity
            });
        }
    },

    setStateValid: function (stateProperty) {
        if (!this.state[stateProperty]) {
            var valid = {};
            valid[stateProperty] = true;
            this.setState(valid);
        }
    },

    render: function () {
        return (
            <div className="create-item-form">
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" ref="name" onChange={this.setStateValid.bind(null, "nameValid")} type="text" placeholder="Name"/>
                    {this.state.nameValid ? null : <span className="error-message">Name required.</span>}
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <input id="price" ref="price" onChange={this.setStateValid.bind(null, "priceValid")} type="number" placeholder="0"/>
                    {this.state.priceValid ? null : <span className="error-message">Price required.</span>}
                </div>

                <div>
                    <label htmlFor="quantity">Quantity</label>
                    <input id="quantity" ref="quantity" onChange={this.setStateValid.bind(null, "quantityValid")} type="number" placeholder="0"/>
                    {this.state.quantityValid ? null : <span className="error-message">Quantity required.</span>}
                </div>

                <button onClick={this.onSubmit}>Add</button>
                <button onClick={this.props.onBack}>Back</button>
            </div>
        );
    }
});

module.exports = CreateItemForm;