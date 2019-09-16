import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
      <button onClick={this.onRedirect}>redirect</button>
    );
  }
}

export default Menu;
