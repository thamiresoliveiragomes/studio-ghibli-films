import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css'

function Film(props){
	const { id } = props.match.params
	const [filmDetails, setFilmDetails] = useState([])
	const [people, setPeople] = useState([])

	useEffect(() => {
		const loadFilmDetails = async () => {
			const responseFilms = await api.get(`/films/${id}`);
			const responsePeople = await api.get('/people')
			setFilmDetails(responseFilms.data)
			const people = responsePeople.data.filter(item => item.films.includes(`https://ghibliapi.herokuapp.com/films/${id}`))
			setPeople(people)
		}
		loadFilmDetails()
	}, [id])
	
	return(
		<main>
			{filmDetails.length === 0 ? <p>Loading...</p> :
			<section className='film-info'>
				<img alt={filmDetails.title} src={require(`../../images/${id}.jpeg`)} className='image'></img>
				<div>
					<h1 className='film-title'>{filmDetails.title} ({filmDetails.release_date})</h1>
					<p className='film-description'>{filmDetails.description}</p>
					<div className='film-details'>
						<p><b>Director:</b> {filmDetails.director}</p>
						<p><b>Producer:</b> {filmDetails.producer}</p>
						<p><b>Rotten Tomatoes:</b> {filmDetails.rt_score}%</p>
					</div>
					{people.length !== 0  ? 
						<p className='film-characters'><b>Characters: </b> 
						{people.map(people => <>{people.name}; </>)}</p> : null}
						<p><Link to="/" className='back'><b>Go Back</b></Link></p>
				</div>
			</section>
			}
		</main>
	)
}

export default Film