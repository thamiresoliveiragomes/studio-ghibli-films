import React from 'react';
import Logo from '../../images/logo.png';
import './styles.css'

function Header(){
	return(
		<header className='header' onClick={() => window.location.href= '/'}>
				<img className='logo' alt='logo' src={Logo}></img>
		</header>
	)
}

export default Header