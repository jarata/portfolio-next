const SkillCard = (props) => {
	return (
		<div className="skill-card">
			<a href={props.skl.website} target="_blank">
				<img src={props.skl.logo} alt={props.skl.language}/>
			</a>
		</div>
	)
};

const Skills = (props) => {
	console.log("Skills:", props.skills);
	return (
		<section id="skills">
			<h1>Skills</h1>
			<div>
				{props.skills.map(skl => (
					<SkillCard key={skl.language} skl={skl}/>
				))}
			</div>
		</section>
	)
};

export default Skills;