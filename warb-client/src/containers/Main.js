import React from "react";
import { connect } from "react-redux"
import { Switch, Route, withRouter, Redirect} from "react-router-dom"
import Homepage from "../components/Homepage"
import AuthForm from "../components/AuthForm"
import {authUser} from "../store/actions/auth"
import {removeError} from "../store/actions/errors"
import withAuth from "../hocs/withAuth"
import MessageForm from "../containers/MessageForm"

const Main = props => {
    const {authUser, error, removeError, currentUser} = props;
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={ props => <Homepage currentUser={currentUser} {...props}/>}></Route>
                <Route exact path="/signin" render={ props => {
                    return (
                        <AuthForm removeError={removeError} errors={error} onAuth={authUser} buttonText="Log In!" heading="Welcome back!" {...props}></AuthForm>
                    )
                }}
                />
                <Route exact path="/signup" render={ props => {
                    return (
                        <AuthForm removeError={removeError} errors={error} onAuth={authUser} signUp buttonText="Sign Up!!" heading="Join the Community!" {...props}></AuthForm>
                    )
                }}
                />
                <Route path="/users/:id/messages/new" component={withAuth(MessageForm)}></Route>
            </Switch>
        </div>
    )
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        error: state.errors,
    }
}

export default withRouter(connect(mapStateToProps, {authUser, removeError})(Main));