import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import icon from '../../images/plus.png';

function Card({ film }){

	return(
		<section className='card'>
			<div className='card-front'>
				<img alt={film.title} src={require(`../../images/${film.id}.jpeg`)} className='card-image'></img>
			</div>
			<div className='card-back'>
				<h1 className='card-title'>{film.title.toUpperCase()}</h1>
				<p className='card-description'>{film.description.substring(0, 200)}...</p>
				<p className='card-director'>DIRECTED BY</p>
				<p className='card-director'>{film.director.toUpperCase()}</p>
				<Link to={`/films/${film.id}`}>
					<img alt='icon' src={icon} className='card-icon'></img>
				</Link>
			</div>
		</section>
	)
}

export default Card