import React from "react"
import defaultProfileImg from "../images/PinClipart.com_man-symbol-clip-art_4045564.png"

const userAside = ({profileImageUrl, username}) => (
    <aside className="col-sm-2">
        <div className="panel panel-default">
            <div className="panel-body">
                <img src={profileImageUrl||defaultProfileImg}
                    alt={username}
                    height="200"
                    width="200"
                    className="img-thumbnail"
                ></img>
            </div>
        </div>
    </aside>
)

export default userAside;