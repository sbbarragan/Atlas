import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.onRedirect = this.onRedirect.bind(this);
  }

  onRedirect() {
    this.setState({ redirect: !this.state.redirect });
  }

  render() {
    const { redirect } = this.state;
    return redirect ? (
      <Redirect to="/" />
    ) : (
      <Button type="primary" onClick={this.onRedirect}>
        redirect
      </Button>
    );
  }
}

export default Menu;
