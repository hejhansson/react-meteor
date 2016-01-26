AddTask = React.createClass({
  handleSubmit(event) {
    event.preventDefault();
    var task = event.target.add.value;

    Tasks.insert({
      text: task,
      createdAt: new Date()
    });

    FlowRouter.go('Tasks');
  },
  render() {
    return (
      <div className="container">
        <h2>Add task</h2>
          <form className="add-task" onSubmit={ this.handleSubmit }>
            <input type="text" name="add" placeholder="Add new task" />
          </form>
      </div>
    )
  }
});
