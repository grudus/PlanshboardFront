import React, { Component } from "react"
import { connect } from "react-redux";

class User extends Component {
    render() {
        return (
            <div>
                <span>User:</span>
                <span>{this.props.user.name}</span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(User);