import React from "react"
import Moment from "react-moment"
import { Link } from "react-router-dom"
import defaultProfileImg from "../images/PinClipart.com_man-symbol-clip-art_4045564.png"

const MessageItem = ({date, profileImageUrl, text, username}) => (
    <div>
        <img src={profileImageUrl || defaultProfileImg} alt={username} height="100" width="100"></img>
        <div className="message-area">
            <Link to="/">@{username} &nbsp;</Link>
            <span className="text-muted">
                <Moment className="text-muted" format="Do MMM YYYY">
                    {date}
                </Moment>
            </span>
            <p>
                {text}
            </p>
        </div>
    </div>
)

export default MessageItem;