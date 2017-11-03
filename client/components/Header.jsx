import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser'
import { Link } from 'react-router';
import mutation from '../mutations/Logout';

class Header extends Component {
  onLogout() {
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) { return <div></div> }

    if (user) {
      return (
        <div>
          <li>{user.email}</li>
          <li>
            <a onClick={this.onLogout.bind(this)}>Logout</a>
          </li>
        </div>
      )
    } else {
      return (
        <div>
          <li><Link to="login">Login</Link></li>
          <li><Link to="signup">Signup</Link></li>
        </div>
      )
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">Home</Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(mutation)(
  graphql(query)(Header)
);
