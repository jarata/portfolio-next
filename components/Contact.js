const Contact = () => {
	return (
		<section id="contact">
			<h1>Contact</h1>
			<form>
				<p>Interested in more? Have a question? Send me a message and I will respond as soon as possible.</p>
				<label htmlFor="name">Name:</label>
				<input
					id="name"
					type="text"
					name="name"
					placeholder="Enter you name here..."
				/>
				<label htmlFor="email">Email:</label>
				<input
					id="email"
					type="email"
					name="email"
					placeholder="Enter your email here..."
				/>
				<label htmlFor="message">Message:</label>
				<textarea
					id="message"
					name="message"
					placeholder="Enter your message here..."
				/>
				<button>Send Message</button>
			</form>
		</section>
	)
};

export default Contact;