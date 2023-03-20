import React from 'react'


function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.title } <span>({ selected.year })</span></h2>
				<p className="rating">Rating: {selected.vote_average}</p>
				<div className="plot">
					<img src={selected.poster_path} />
					<p>{selected.overview}</p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup