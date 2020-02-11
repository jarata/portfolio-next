const Footer = () => {
	return (
		<footer>
			<div>
				<a href="https://github.com/jarata/" target="_blank">
					<img src="/github_logo.png" alt="Github Logo"/>
				</a>
				<a href="https://www.linkedin.com/in/justin-arata/" target="_blank">
					<img src="/linkedin_logo.png" alt="LinkedIn Logo"/>
				</a>
			</div>
			<div>
				<p>
					This website was built with
					<a href="https://zeit.co/" target="_blank">
						<img src="/nextjs-black-logo.svg" alt="Next.js"/>
					</a>
					and deployed with
					<a href="https://nextjs.org/" target="_blank">
						<img src="/zeit-black-triangle.svg" alt="Zeit" />
					</a>
				</p>
			</div>
			<div>
				<p>Copyright © 2018-{new Date().getFullYear()}</p>
				<p>Justin Arata, All rights reserved.</p>
			</div>
		</footer>
	)
};

export default Footer;