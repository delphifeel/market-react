import React from "react"
import Header from "./header"
import Body from "./body"
import {connect} from "react-redux"
import itemsActions from "common/actions/itemsActions"

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.props.loadItems();
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadItems: () => dispatch(itemsActions.loadItems())
    };
};

export default connect(null, mapDispatchToProps)(Application);