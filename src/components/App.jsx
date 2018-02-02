class App extends React.Component {
  constructor( props ) {
    super( props );
    
    
    this.state = {
      video: null,
      videos: null
    };
    
  }
  
  componentDidMount() {
    this.videoSearch('minecraft');
  }

  videoSearch(query) {
    var options = {
      key: this.props.API_KEY,
      query: query 
    };

    this.props.searchYouTube(options, ( videos ) =>
      this.setState({
        videos: videos,
        video: videos[0]
      })
    );
  }

  
  onListVideoClick(index) {
    this.setState({ video: this.state.videos[index] });
  }
  
  render() {
    if (this.state.video) {
      return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <div><Search videoSearch={this.videoSearch.bind(this)}/></div>
            </div>
          </nav>
          <div className="row">
            <div className="col-md-7">
              <div><VideoPlayer video={this.state.video}/></div>
            </div>
            <div className="col-md-5">
              <div><VideoList videos={this.state.videos} onListVideoClick={ this.onListVideoClick.bind(this) }/></div>
            </div>
          </div>
        </div>
      );
    } else {
      return (<div>Page loading...</div>);
    }
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

