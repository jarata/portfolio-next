/*
	Skills
 */

const SkillCard = (props) => {
	return (
		<div className="skill-card">
			<a href={props.skl.website} target="_blank">
				<img src={props.skl.logo} alt={`${props.skl.language} Logo`} />
			</a>
		</div>
	)
};

const Skills = (props) => {
	return (
		<section className="skills-wrapper">
			<h1>Skills</h1>
			<ul className="skill-cards">
				{props.skills.map(skl => (
					<SkillCard key={skl.language} skl={skl}/>
				))}
			</ul>
		</section>
	)
};

export default Skills;