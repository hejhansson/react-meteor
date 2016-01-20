MainLayout = React.createClass({
  propTypes: {},
  mixins: [],
  getMeteorData() {

  },
  render() {
    return (
        <div>
          {this.props.header}
          {this.props.content}
          {this.props.footer}
        </div>
    )
  }
});
