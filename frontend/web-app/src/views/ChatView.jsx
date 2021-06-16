import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Chat from '../components/Chat.jsx'

const CreateRequestViewStyle = {
    height: "100vh",
    width: "100%"
}

const containerStyle = {
    width: '80%',
    height: '100vh',
    backgroundColor: "#FFFFFF",
    float: 'right',
    padding: "5%",
    display: 'flex',
    fontFamily: "Saira",
    fontStyle: "normal",
    flexDirection: 'column',
    alignItems: 'center',
    texAlign: 'center'
};

const headingStyle = {
    padding: 'auto',
    marginBottom: '5%'
}

function ChatView() {
    const [id, setId] = React.useState(0);
    return (
        <div style={CreateRequestViewStyle}>
            <Sidebar/>
            <div style={containerStyle}>
                <Chat />
            </div>
        </div>
    )
}

export default ChatView;