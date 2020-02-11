const ProjectCard = (props) => {
	return (
		<div className="project-card">
			<h3>{props.prj.title}</h3>
			<p>{props.prj.desc}</p>
			<ol>
				{props.prj.stack.map(stk => (<li key={stk}>{stk}</li>))}
			</ol>
			<ul>
				{props.prj.highlights.map(hgl => (<li key={hgl}>{hgl}</li>))}
			</ul>
			<a href={props.prj.deployed_url} target="_blank">Deployed Link</a>
			<a href={props.prj.repo_url} target="_blank">Repo Link</a>
		</div>
	)
};

const Projects = (props) => {
	return (
		<section id="projects">
			<h1>Projects</h1>
			<div>
				{props.projects.map(prj => (<ProjectCard key={prj.title} prj={prj}/>))}
			</div>
		</section>
	)
};

export default Projects;