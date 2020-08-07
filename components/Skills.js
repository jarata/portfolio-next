const SkillCard = (props) => {
	return (
		<div className="skill-card">
			<a href={props.skl.website} target="_blank">
				<img src={props.skl.logo} alt={`${props.skl.language} Logo`} />
				<p>{props.skl.language}</p>
			</a>
		</div>
	)
};

const Skills = (props) => {
	return (
		<section id="skills">
			<h1>Skills</h1>
			<ul>
				{props.skills.map(skl => (
					<SkillCard key={skl.language} skl={skl}/>
				))}
			</ul>
		</section>
	)
};

export default Skills;