Header = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user(),
      party: 'Wooho!',
    }
  },
  handleLogout() {
    Meteor.logout();
  },
  render() {
    let loginButton, menu;
    let { currentUser, party } = this.data;

    if(currentUser) {
      loginButton = (
        <span>
          <a href="/profile" className="btn py2">{ currentUser.emails[0].address }</a>
          <a className="btn py2" href="/" onClick={ this.handleLogout }>Logout</a>
        </span>
      )
      menu = (
        <span>
          <a href="/burgers" className="btn py2">Burgers</a>
          <a href="/fries" className="btn py2">Fries</a>
          <a href="/tasks" className="btn py2">Tasks</a>
        </span>
      )
    }
    else {
      loginButton = (
        <a className="btn py2" href="/login">Login</a>
      )
    }

    return (
      <nav className="clearfix mb4 border-bottom">
        <div className="sm-col">
          <a href="/" className="btn py2">Home { party }</a>
          { menu }
        </div>
        <div className="sm-col-right">
          { loginButton }
        </div>
      </nav>
    )
  }
});
