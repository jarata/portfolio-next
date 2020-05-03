import NextHead from 'next/head'

const Header = (props) => {
	return (
		<NextHead>
			<title>Justin Arata - Portfolio</title>
			<meta charSet="UTF-8" />
			<meta name="author" content="Justin Arata" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content="Hello, I'm Justin Arata, a Full-Stack Developer.
			I am passionate about developing and learning new languages that I can implement in creating projects
			for both web and mobile devices." />
			<meta name="robots" content="index,follow" />
			<meta name="googlebot" content="index,follow" />
			{/*Facebook Open Graph*/}
			<meta property="og:url" content="https://justinarata.com" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="Justin Arata - Portfolio" />
			<meta property="og:image" content="https://justinarata.com/fb-tw-img.png" />
			<meta property="og:image:alt" content="A simple JA to represent the portfolio owner" />
			<meta property="og:description" content="Hello, I'm Justin Arata, a Full-Stack Developer.
			I am passionate about developing and learning new languages that I can implement in creating projects
			for both web and mobile devices." />
			<meta property="og:locale" content="en_US" />
			{/*Twitter Card*/}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:url" content="https://justinarata.com" />
			<meta name="twitter:title" content="Justin Arata - Portfolio" />
			<meta name="twitter:description" content="Hello, I'm Justin Arata, a Full-Stack Developer.
			I am passionate about developing and learning new languages that I can implement in creating projects
			for both web and mobile devices." />
			<meta name="twitter:image" content="https://justinarata.com/fb-tw-img.png" />
			<meta name="twitter:image:alt" content="A simple JA to represent the portfolio owner" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
			<link rel="manifest" href="/site.webmanifest"/>
		</NextHead>
	)
};

export default NextHead;