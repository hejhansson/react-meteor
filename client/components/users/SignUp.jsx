SignUp = React.createClass({
  handleSubmit(event) {
      event.preventDefault();

      var email = event.target.email.value;
      var password = event.target.password.value;

      Accounts.createUser({email: email, password: password}, function(err) {
        if (err)
          console.log(err);
        else
          FlowRouter.go('Welcome');
      });

  },
  render() {
    return (
      <div className="container">
        <h1>Sign up</h1>
        <form onSubmit={ this.handleSubmit }>
          <input className="field block mb2" name="email" placeholder="Email" type="email" />
          <input className="field block mb2" name="password" placeholder="Password" type="password" />
          <input className="btn btn-primary" type="submit" value="Sign up" />
        </form>
      </div>
    )
  }
});
