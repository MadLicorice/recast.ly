class App extends React.Component {
  constructor( props ) {
    super( props );
    
    this.state = {
      defaultVid: window.exampleVideoData[0]  
    };
  }
  
  onListVideoClick(index) {
    console.log(index);
    this.setState({ defaultVid: window.exampleVideoData[index] });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer defaultVideo={this.state.defaultVid}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videoList={window.exampleVideoData} onListVideoClick={ this.onListVideoClick.bind(this) }/></div>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

