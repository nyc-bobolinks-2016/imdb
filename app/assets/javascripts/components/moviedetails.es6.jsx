class MovieDetails extends React.Component{

  render(){
    let { Title, Year, Rated, Released, Director, Writer, Actors, Plot } = this.props.moviedetails

    return(
      <div>
      <p><b>Title:</b> {Title}</p>
      <p><b>Year:</b> {Year}</p>
      <p><b>Released:</b> {Released}</p>
      <p><b>Director:</b> {Director}</p>
      <p><b>Writer:</b> {Writer} </p>
      <p><b>Actors:</b> {Actors}</p>
      <p><b>Plot:</b> {Plot} </p>
      </div>
    )
  }
}
