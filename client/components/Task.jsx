Task = React.createClass({
  render() {
    return (
      <li className={this.props.task._id}>{this.props.task.text}</li>
    );
  }
});
