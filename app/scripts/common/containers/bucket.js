import React from "react"
import _ from "underscore"
import {connect} from "react-redux"

const getSummary = (items) => {
    let result = 0;
    _.each(items, (item) => {
        result += item.count * item.price;
    });
    return result;
};

class Bucket extends React.Component{

    createBucketItem (item) {
        return (
            <div key={item.id}>{item.count} {item.name}</div>
        );
    }

    getBucketItems () {
        if (this.props.items.length === 0) {
            return <div>No items in bucket :(</div>
        } else {
            return this.props.items.map(this.createBucketItem);
        }
    }

    getSummaryPrice () {
        if (this.props.items.length <= 0) {
            return;
        }
        return <div>Summary: {getSummary(this.props.items)}</div>
    }

    render () {
        return (
            <div>
                {this.getBucketItems()}
                {this.getSummaryPrice()}
            </div>
        );
    }
}

Bucket.propTypes = {
    items: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.bucket
    };
};

export default connect(mapStateToProps)(Bucket);