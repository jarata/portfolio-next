const Contact = () => {
	return (
		<section id="contact">
			<h1>Contact</h1>
			<ul>
				<a href="https://www.linkedin.com/in/justin-arata/" target="_blank">LinkedIn</a>
				<a href="https://github.com/jarata/" target="_blank">Github</a>
				<a href="mailto:contact@justinarata.com">Email</a>
			</ul>
			<p>Interested in more? Have a question? Send me a message and I will respond as soon as possible.</p>
			<form action="https://formspree.io/xvokaaaj" method="POST">
				<input type="hidden" name="_subject" value="New Contact Inquiry" />
				<label htmlFor="name">Name</label>
				<input
					id="name"
					type="text"
					name="name"
				/>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="email"
					name="email"
				/>
				<label htmlFor="message">Message</label>
				<textarea
					id="message"
					name="message"
				/>
				<br/>
				<button type="submit" value="send">Send Message</button>
			</form>
		</section>
	)
};

export default Contact;