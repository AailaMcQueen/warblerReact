import React, {Component} from "react"
import {connect} from "react-redux"
import {fetchMessages, removeMessage} from "../store/actions/messages"
import MessageItem from "../components/MessageItem"

class MessageList extends Component {
    componentDidMount(){
        this.props.fetchMessages();
    }
    render(){
        const {messages, removeMessage, currentUser} = this.props;
        let messageList = [];
        for(let i=0;i<messages.length;i++){
            let a = <MessageItem 
                key={messages[i]._id} 
                date={messages[i].createdAt} 
                text={messages[i].text} 
                isCorrectUser={currentUser===messages[i].user._id}
                username={messages[i].user.username}
                removeMessage={removeMessage.bind(this, messages[i].user._id, messages[i]._id)}
                profileImageUrl={messages[i].user.profileImageUrl}
            />
            messageList.push(a);
        }
        return (
            <div className="row col-sm-8">
                <div className="offset-1 col-sm-10">
                    <ul className="list-group" id="messages">
                        {messageList}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages,
        currentUser: state.currentUser.user.id
    }
}

export default connect(mapStateToProps, {fetchMessages, removeMessage})(MessageList)