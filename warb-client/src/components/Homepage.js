import React from "react"
import {Link} from "react-router-dom"

const Homepage = () => (
    <div className="home-hero">
        <h1>Hello there!</h1>
        <Link to="/signup" className="btn btn-primary">
            Sign up!
        </Link>
    </div>
)

export default Homepage;