import React, { Component } from 'react';

import Errors from './Errors';

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onSubmit({
      email: this.state.email,
      password: this.state.password
    });
  }

  render() {
    return (
      <div className="row">
        <form className="col s4" onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" id="email" placeholder="E-mail"
              onChange={e => this.setState({ email: e.target.value })}
              value={this.state.email} />
          </div>
          <div className="input-field">
            <input type="password" placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
              value={this.state.password} />
          </div>

          {this.props.errors.length > 0 && <Errors errors={this.props.errors} />}

          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
