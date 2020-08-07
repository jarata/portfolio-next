const ProjectCard = (props) => {
	return (
		<div className="project-card">
			<h3>
				<a href={props.prj.deployed_url} target="_blank">
					{props.prj.title}
				</a>
			</h3>
			<ol>
				{props.prj.stack.map(stk => (<li key={stk}>{stk}</li>))}
			</ol>
			<div className="project-img">
				<img src={props.prj.image} alt={`${props.prj.title} Thumbnail`} />
			</div>
			<p>{props.prj.desc}</p>
			<ul>
				{props.prj.highlights.map(hgl => (<li key={hgl}>{hgl}</li>))}
			</ul>
			<a className="project-repo" href={props.prj.repo_url} target="_blank">Github Repo</a>
		</div>
	)
};

const Projects = (props) => {
	return (
		<section id="projects">
			<h1>Projects</h1>
			<ul className="project-cards">
				{props.projects.map(prj => (<ProjectCard key={prj.title} prj={prj}/>))}
			</ul>
		</section>
	)
};

export default Projects;