import React from "react"
import {Link} from "react-router-dom"
import MessageTimeline from "./MessageTimeline"
const Homepage = ({currentUser}) => {
    if (!currentUser.isAuthenticated) {
        return (
            <div className="home-hero">
                <h1>Hello there!</h1>
                <Link to="/signup" className="btn btn-primary">
                    Sign up!
                </Link>
            </div>
        )
    }
    return (
        <div>
            <MessageTimeline></MessageTimeline>
        </div>
    )
}

export default Homepage;