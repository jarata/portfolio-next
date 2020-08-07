import { useState } from "react";
import { sendContactMail } from "./mail";

const Contact = () => {
	const [content, setContent] = useState('');
	const [senderMail, setSenderMail] = useState('');
	const [name, setName] = useState('');
	const [formButtonText, setFormButtonText] = useState("Send");
	const [formButtonDisabled, setFormButtonDisabled] = useState(false);
	const btnClass = formButtonDisabled ? "disabled" : "";
	const onNameChange = (event) => {
		setName(event.target.value);
	}
	const onMailChange = (event) => {
		setSenderMail(event.target.value)
	}
	const onFormContentChange = (event) => {
		setContent(event.target.value)
	}
	console.log("name:",name);
	const submitContactForm = async (event) => {
		event.preventDefault();
		const recipientMail = process.env.EMAIL_CONTACT;
		const res = await sendContactMail(recipientMail, name, senderMail, content);
		if (res.status < 300) {
			setFormButtonDisabled(true);
			setFormButtonText("Thanks for your message");
			setContent('');
			setSenderMail('');
			setName('');
		} else {
			setFormButtonText("Please fill out all fields.")
		}
	}
	return (
		<section id="contact">
			<h1>Contact</h1>
			<form>
				<p>Interested in more? Have a question? Send me a message and I will respond as soon as possible.</p>
				<label htmlFor="name">Name:</label>
				<input
					// id="name"
					// type="text"
					// name="name"
					// value={contactMsg.name}
					// onChange={(e) => setContactMsg({ ...contactMsg, name: e.target.value })}
					// placeholder="Enter you name here..."
					type="text"
					placeholder="Name"
					value={name}
					name="fname"
					onChange={onNameChange}
				/>
				<label htmlFor="email">Email</label>
				<input
					// id="email"
					// type="email"
					// name="email"
					// value={contactMsg.sender}
					// onChange={(e) => setContactMsg({ ...contactMsg, sender: e.target.value })}
					// placeholder="Enter your email here..."
					type="email"
					placeholder="E-Mail"
					value={senderMail}
					name="email"
					onChange={onMailChange}
				/>
				<label htmlFor="message">Message</label>
				<textarea
					// id="message"
					// name="message"
					// value={contactMsg.content}
					// onChange={(e) => setContactMsg({ ...contactMsg, content: e.target.value })}
					// placeholder="Enter your message here..."
					name="text"
					placeholder="Message"
					value={content}
					onChange={onFormContentChange}
				/>
				<button
					className={btnClass}
					type="submit"
					onClick={submitContactForm}
					disabled={formButtonDisabled}>
					{formButtonText}
				</button>
			</form>
		</section>
	)
};

export default Contact;