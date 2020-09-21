import { useState } from "react";
import { sendContactMail } from "./mail";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		senderMail: '',
		content: '',
		buttonText: 'Send',
		buttonDisabled: false
	});
	const btnClass = formData.buttonDisabled ? "disabled" : "";
	const onFormChange = event => {
		if (event.target.name === name) {
			if (/^[a-zA-Z]+$/.test(event.target.value)) {
				setFormData({
					...formData, name: event.target.value
				})
			}
		} else {
			setFormData({
				...formData,
				[event.target.name]: event.target.value,
			})
		}
	}
	const submitContactForm = async (event) => {
		event.preventDefault();
		const recipientMail = process.env.NEXT_PUBLIC_EMAIL_CONTACT;
		let name = formData.name;
		let senderMail = formData.senderMail;
		let content = formData.content;
		const res = await sendContactMail(recipientMail, name, senderMail, content);
		if (res.status < 300) {
			setFormData({
				name: '',
				senderMail: '',
				content: '',
				buttonText: 'Thanks for your message',
				buttonDisabled: true
			})
		} else {
			setFormData({
				...formData, buttonText: 'Please fill out all fields'
			})
		}
	}
	return (
		<section id="contact">
			<h1>Contact</h1>
			<ul>
				<a href="mai&#108;to&#58;co%6&#69;&#116;ac&#37;74&#64;jus%7&#52;%6&#57;&#110;arata&#46;&#99;om">Email</a>
				<a href="https://github.com/jarata" target="_blank" rel="noopener">GitHub</a>
				<a href="https://www.linkedin.com/in/justin-arata/" target="_blank" rel="noopener">LinkedIn</a>
			</ul>
			<form>
				<p>Interested in more? Have a question? Send me a message and I will respond as soon as possible.</p>
				<label htmlFor="name">Name:</label>
				<input
					placeholder="Enter you name here..."
					type="text"
					name="name"
					value={formData.name}
					onChange={onFormChange}
				/>
				<label htmlFor="email">Email</label>
				<input
					placeholder="Enter your email here..."
					type="email"
					name="senderMail"
					value={formData.senderMail}
					onChange={onFormChange}
				/>
				<label htmlFor="message">Message</label>
				<textarea
					placeholder="Enter your message here..."
					name="content"
					value={formData.content}
					onChange={onFormChange}
				/>
				<button
					className={btnClass}
					type="submit"
					onClick={submitContactForm}
					disabled={formData.buttonDisabled}>
					{formData.buttonText}
				</button>
			</form>
		</section>
	)
};

export default Contact;