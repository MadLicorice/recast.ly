
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }
  
  searchYouTubeVideos(e) {
    this.props.videoSearch(e.target.value);
    this.setState({ value: e.target.value });
    //props.videoSearch(e.target.value);
  }

  clickSearch() {
    
    this.props.videoSearch( this.state.value );
  }
  
  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.state.value} onChange={this.searchYouTubeVideos.bind(this)}/>
        <button className="btn hidden-sm-down" onClick={this.clickSearch.bind(this)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }

}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
