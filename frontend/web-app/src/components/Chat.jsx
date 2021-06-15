import React, { Component } from "react";
import {
  Chat,
  Channel,
  ChannelHeader,
  Thread,
  Window
} from "stream-chat-react";
import { MessageList, MessageInput } from "stream-chat-react";
import { StreamChat } from "stream-chat";

import "stream-chat-react/dist/css/index.css";
import "../css/Chat.css"

const chatStyle = {
  float: "right",
  width: "50%"
}


class ChatComponent extends Component {
  constructor(props) {
    super(props);
    this.client = StreamChat.getInstance(process.env.REACT_APP_STREAM_API_KEY);
    console.log(process.env.REACT_APP_STREAM_API_KEY);
    this.client.connectUser(
      {
        id: localStorage.getItem('username'),
        username: localStorage.getItem('username'),
        image: "https://getstream.io/random_svg/?id=cool-sky-9&name=Cool+sky"
      },
      localStorage.getItem('streamToken')
    );

    this.channel = this.client.channel("messaging", "godevs", {
      image:
        "https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png",
      name: "Talk about Go"
    });
  }

  render() {
    return (
      <div style={chatStyle}>
      <Chat client={this.client} theme={"messaging light"}>
        <Channel channel={this.channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
      </div>
    );
  }
}

export default ChatComponent;