// Components
import Nav from "./Nav";
import Head from "./Head";
import Footer from "./Footer";

const Layout = (props) => {
	console.log("Layout:", props);
	return (
		<div className="layout">
			<Head />
			<Nav />
			{props.children}
			<Footer />
		</div>
	)
};

export default Layout;