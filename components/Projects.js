/*
	Projects
 */

const ProjectCard = (props) => {
	return (
			<div className="project-card">
				<img src={props.prj.image} alt={`${props.prj.title} Thumbnail`} className="project-img"/>
				<div className="project-card-content">
					<h3>
						<a href={props.prj.deployed_url} target="_blank">
							{props.prj.title}
						</a>
					</h3>
					<ul className="project-stack">
						{props.prj.stack.map(stk => (<li key={stk}>{stk}</li>))}
					</ul>
					<p className="project-desc">{props.prj.desc}</p>
					<ul className="project-highlights">
						{props.prj.highlights.map(hgl => (<li key={hgl}>{hgl}</li>))}
					</ul>
					<a className="project-repo" href={props.prj.repo_url} target="_blank" rel="noopener">Github Repo</a>
				</div>
			</div>
	)
};

const Projects = (props) => {
	return (
		<section className="projects-wrapper">
			<h1>Projects</h1>
			<ul className="project-cards">
				{props.projects.map(prj => (<ProjectCard key={prj.title} prj={prj}/>))}
			</ul>
		</section>
	)
};

export default Projects;