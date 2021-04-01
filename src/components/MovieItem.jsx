import React from "react";

class MovieItem extends React.Component {

	constructor(){
		super()

		this.state={
			willWatch:false
		};	
	}

	render(){

	const {moVie,removeMoVie,addMoVieToWillWatch,removeMoVieFromWillWatch}=this.props

	return	(
			<div className="card">
				<img
					className="card-img-top"
					src={`https://image.tmdb.org/t/p/w500${moVie.backdrop_path || moVie.poster_path}`}
					alt=""
				/>
				<div className="card-body">
						<h6 className="card-title">{moVie.title}</h6>
					<div className="d-flex justify-content-between align-items-center">
						<p className="mb-0">Rating: {moVie.vote_average}</p>
						{this.state.willWatch ? ( //=== true ?
							<button type="button" className="btn btn-success"
								onClick={() => {
									this.setState({
										willWatch:false
									});
								removeMoVieFromWillWatch(moVie);
								}}
							>
								Remove Will Watch
							</button>
							):(
							<button type="button" className="btn btn-secondary"
								onClick={() => {
									this.setState({
										willWatch:true
									});
								addMoVieToWillWatch(moVie);
								}}
							>Add Will Watch
							</button>)
						}
					</div>
						<button onClick={removeMoVie.bind(null,moVie)}>Delete Movie</button>
				</div>
			</div>
			);
		}
}

export default MovieItem;