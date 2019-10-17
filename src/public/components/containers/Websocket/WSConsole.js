import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import JSONPretty from 'react-json-pretty';
import { messageTerminal } from '../../../../utils/general-functions';

class WSConsole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  componentWillMount() {
    const client = new W3CWebSocket(
      'ws://127.0.0.1:3000?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIwIiwiYXVkIjoib25lYWRtaW4iLCJqdGkiOiJkYzNjMmJkMDhlODM3MmU0NWY5MDVmNjE0ZjdkMDE0YmQ2ZmE3ZTVjYjlmNjU1OTRjNjRjYzMzZjNiYmYxY2IyIiwiaWF0IjoxNTY5MjIxOTgwLCJleHAiOjE1NzA0MzE1ODB9.ESxu8xeGNVQCAJ2T5-93y2cWofXCNxvsAdT0Jt5Qt5I'
    );

    client.onopen = () => {
      const config = {
        color: 'green',
        type: 'ERROR',
        message: 'WebSocket Client Connected'
      };
      messageTerminal(config);
    };

    client.onmessage = message => {
      if (message && message.data) {
        this.setState({
          data: JSON.parse(message.data)
        });
      }
    };
  }

  render() {
    const { data } = this.state;
    return <JSONPretty id="json-pretty" data={data} />;
  }
}

export default WSConsole;
