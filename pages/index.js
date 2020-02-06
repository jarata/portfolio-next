import fetch from 'isomorphic-unfetch';
import { server } from '../config';
import '../style.less'

// Components
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const Index = (props) => {
	console.log("Index:", props.skills, props.resume, props.projects);
	return (
		<Layout>
			<Banner />
			<About />
			<Skills skills={props.skills}/>
			<Projects projects={props.projects}/>
			<Contact />
		</Layout>
	)
};
Index.getInitialProps = async () => {
	const [resume, projects, skills] = await Promise.all([
		fetch(`${server}/api/resume`).then(r => r.json()),
		fetch(`${server}/api/projects`).then(r => r.json()),
		fetch(`${server}/api/skills`).then(r => r.json())
	]);
	return {resume, projects, skills};
};

export default Index;