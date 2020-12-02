import React, {Component} from "react"
import {connect} from "react-redux"
import {fetchMessages} from "../store/actions/messages"
import MessageItem from "../components/MessageItem"

class MessageList extends Component {
    componentDidMount(){
        this.props.fetchMessages();
    }
    render(){
        const {messages} = this.props;
        let messageList = [];
        for(let i=0;i<messages.length;i++){
            let a = <MessageItem 
                key={messages[i]._id} 
                date={messages[i].createdAt} 
                text={messages[i].text} 
                username={messages[i].user.username}
                profileImageUrl={messages[i].user.profileImageUrl}
            />
            messageList.push(a);
        }
        return messageList;
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps, {fetchMessages})(MessageList)