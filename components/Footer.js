const Footer = () => {
	console.log("Footer:");
	return (
		<footer>
			<span>Copyright © 2018-{new Date().getFullYear()}</span>
			<span>Justin Arata, All rights reserved.</span>
			<div>
				<a href="https://github.com/jarata/" target="_blank">
					<img src="/github_logo.png" alt="Github Logo"/>
				</a>
				<a href="https://www.linkedin.com/in/justin-arata/" target="_blank">
					<img src="/linkedin_logo.png" alt="LinkedIn Logo"/>
				</a>
			</div>
		</footer>
	)
};

export default Footer;