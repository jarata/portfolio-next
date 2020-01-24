const Head = (props) => {
	return (
		<head>
			<title>{props.title || "Justin Arata - Portfolio"}</title>
			<meta charSet="UTF-8" />
			<meta name="author" content="Justin Arata" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content={props.description || "Full Stack Web Developer Portfolio"} />
			<meta name="keywords" content={props.keywords || "HTML, CSS, Less, JavaScript, JS, Next.js, Next, React, React.js, Node, Node.js"} />
		</head>
	)
};

export default Head;