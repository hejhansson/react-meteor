Profile = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user(),
    }
  },
  render() {
    return (
      <div className="container">
        <h1>Profile</h1>
        <p>E-mail: { this.data.currentUser.emails[0].address }</p>
      </div>
    )
  }
});
