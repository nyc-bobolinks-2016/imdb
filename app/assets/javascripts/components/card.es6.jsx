class Card extends React.Component {

  constructor(){
    super()
    this.state = {
      moviedetails:
        { Title:"",
          Year:"",
          Rated:"",
          Released:"" ,
          Director:"",
          Writer:"",
          Actors:"",
          Plot:"" }
    }
  }

  componentDidMount(){
    $.ajax({
      url: 'imdb/search/details/'+ this.props.movie.Title,
      method: 'get'
    }).done((response) => {
      this.setState({
        moviedetails : response
    })
  })
}

  render(){

    let { Title, Year, imdbID, Type, Poster } = this.props.movie;
    return(
      <li>
      <div className="col s12 m7 l1">
        <h3 className="header">{Title}</h3>
          <div className="card horizontal">
            <div className="card-image">
              <img src={Poster}/>
            </div>
            <div className="card-stacked">
            <div className="card-content">

              <MovieDetails moviedetails={this.state.moviedetails}/>
            </div>
            <div className="card-action">
              <a className="btn">Cast!</a>
            </div>
          </div>
        </div>
      </div>
    </li>
    )
  }
}
