import Footer from "./Footer";
import Nav from "./Nav";
import Head from "./Head";

const Layout = (props) => {
	console.log("Layout:", props);
	return (
		<div>
			<Head />
			<Nav />
			{props.children}
			<Footer />
		</div>
	)
};

export default Layout;