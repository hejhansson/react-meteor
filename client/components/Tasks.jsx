ShowTasks = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      tasks: Tasks.find({}).fetch(),
    }
  },
  renderTasks() {
    return this.data.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },
  render() {
    return (
      <div className="container">
        <h1>Tasks</h1>
          <ul className="px2">
            {this.renderTasks()}
          </ul>

          <a className="btn btn-primary mb2" href="/add-task">Add task</a>
      </div>
    )
  }
});
