import React from "react";
import { connect } from "react-redux"
import { Switch, Route, withRouter, Redirect} from "react-router-dom"
import Homepage from "../components/Homepage"
import AuthForm from "../components/AuthForm"
import {authUser} from "../store/actions/auth"

const Main = props => {
    const {authUser} = props;
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={ props => <Homepage {...props}/>}></Route>
                <Route exact path="/signin" render={ props => {
                    return (
                        <AuthForm onAuth={authUser} buttonText="Log In!" heading="Welcome back!" {...props}></AuthForm>
                    )
                }}
                />
                <Route exact path="/signup" render={ props => {
                    return (
                        <AuthForm onAuth={authUser} signUp buttonText="Sign Up!!" heading="Join the Community!" {...props}></AuthForm>
                    )
                }}
                />
            </Switch>
        </div>
    )
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default withRouter(connect(mapStateToProps, {authUser})(Main));