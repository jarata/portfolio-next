import {useState} from 'react';

const Nav = () => {
	// const [hideNav, setHideNav] = useState(false);
	// const [showNav, setShowNav] = useState(false);
	//
	// const shadowStyle = showNav ? 'shadow' : '';
	// const hiddenStyle = hideNav ? 'hidden' : '';
	return (
		// <header className={`header ${scrollStyle} ${shadowStyle}`}>
		<header>
			<nav>
				<a href="#about">About</a>
				<a href="#skills">Skills</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
			</nav>
		</header>
	)
};

export default Nav;