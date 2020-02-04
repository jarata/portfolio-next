import 'isomorphic-unfetch';

import Layout from "../components/Layout";

import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const Index = (props) => {
	console.log("Index:", props);
	return (
		<Layout>
			<About />
			<Skills />
			<Projects />
			<Contact />
		</Layout>
	)
};

export default Index;