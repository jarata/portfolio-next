import Link from 'next/link';

const Nav = () => {
	return (
		<header>
			<Link href="/">
				<h1>LOGO</h1>
			</Link>
			<nav>
				<Link href="#about">
					<a>About Me</a>
				</Link>
				<Link href="#skills">
					<a>Skills</a>
				</Link>
				<Link href="#projects">
					<a>Projects</a>
				</Link>
				<Link href="#contact">
					<a>Contact</a>
				</Link>
			</nav>
		</header>
	)
};

export default Nav;