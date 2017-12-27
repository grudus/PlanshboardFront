import React from "react"
import { connect } from "react-redux";
import Auth from "./auth/auth.component"
import { Route, Redirect } from "react-router-dom";

const App = (props) => {
    console.log("Dupa");
    return (
        <div>
            <Auth/>
            <Route exact path="/" render={() =>
                !props.auth.isLogged
                    ? <Redirect to="/auth/login"/>
                    : <div>Dupa</div>}/>
        </div>
    )
};

const mapStateToProps = (state) => ({auth: state.auth});

export default connect(mapStateToProps)(App);

