import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Card from '../../components/card';
import './styles.css';

function Main(){
	const [allFilms, setAllFilms] = useState([])

	useEffect(() => {
		loadAllFilms()
	},[])

	const loadAllFilms = async () => {
		const response = await api.get('/films');
		setAllFilms(response.data)
	}

	return(
		<main className='container'>
			{allFilms.map((film, index) =>
				<Card key={index} film={film}/>
			)}
			{allFilms.length === 0 ? <p>Loading...</p> : null}
		</main>
	)
}

export default Main