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


class ChatComponent extends Component {
  constructor(props) {
    super(props);
    this.client = StreamChat.getInstance(process.env.REACT_APP_STREAM_API_KEY);
    const task = localStorage.getItem('task');

    console.log(task);
    this.client.connectUser(
      {
        id: localStorage.getItem('username'),
        username: localStorage.getItem('username'),
        image: "https://getstream.io/random_svg/?id=cool-sky-9&name=Cool+sky"
      },
      localStorage.getItem('streamToken')
    );

    this.channel = this.client.channel("messaging", props.id, {
      name: task
    });
  }

  render() {
    return (
      <div>
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