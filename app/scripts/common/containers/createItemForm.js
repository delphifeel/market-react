/**
 * Created by Zeron on 05.04.2016.
 */
var React = require("react");

var CreateItemForm = React.createClass({
    getInitialState: function () {
        return {
            nameValid: true,
            priceValid: true
        };
    },

    onSubmit: function (e) {
        var name, price, nameValid, priceValid;

        e.preventDefault();

        name = this.refs.name.value;
        price = this.refs.price.value;

        nameValid = !!name;
        priceValid = parseInt(price) > 0;

        if (!nameValid || !priceValid) {
            this.setState({
                nameValid: nameValid,
                priceValid: priceValid
            });
        } else {
            this.props.onCreate({
                name: name,
                price: price,
                quantity: 1
            });
        }
    },

    setNameValid: function () {
        if (!this.state.nameValid) {
            this.setState({
                nameValid: true
            });
        }
    },

    setPriceValid: function () {
        if (!this.state.priceValid) {
            this.setState({
                priceValid: true
            });
        }
    },

    render: function () {
        return (
            <div className="create-item-form">
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" ref="name" onChange={this.setNameValid} type="text" placeholder="Name"/>
                    {this.state.nameValid ? null : <span className="error-message">Name required.</span>}
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <input id="price" ref="price" onChange={this.setPriceValid} type="number" placeholder="0"/>
                    {this.state.priceValid ? null : <span className="error-message">Price required.</span>}
                </div>

                <button onClick={this.onSubmit}>Add</button>
                <button onClick={this.props.onBack}>Back</button>
            </div>
        );
    }
});

module.exports = CreateItemForm;