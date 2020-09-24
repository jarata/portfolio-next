/*
	Layout
 */
import React from "react";
import Meta from "./Meta";
import Footer from "./Footer";

const Layout = (props) => {
	return (
		<div className="layout-wrapper">
			<Meta />
			{props.children}
			<Footer />
		</div>
	)
};

export default Layout;