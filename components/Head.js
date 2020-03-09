import NextHead from 'next/head'

const Header = (props) => {
	return (
		<NextHead>
			<title>{props.title || "Justin Arata - Portfolio"}</title>
			<meta charSet="UTF-8" />
			<meta name="author" content="Justin Arata" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content={props.description || "Full Stack Web Developer Portfolio"} />
			<meta name="keywords" content={props.keywords || "HTML, CSS, Less, JavaScript, JS, Next.js, Next, React, React.js, Node, Node.js"} />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
			<link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
			<link rel="manifest" href="/site.webmanifest"/>
		</NextHead>
	)
};

export default NextHead;