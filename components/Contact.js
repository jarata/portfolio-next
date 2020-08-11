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
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		})
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
			<form>
				<p>Interested in more? Have a question? Send me a message and I will respond as soon as possible.</p>
				<label htmlFor="name">Name:</label>
				<input
					placeholder="Enter you name here..."
					type="text"
					name="name"
					onChange={onFormChange}
				/>
				<label htmlFor="email">Email</label>
				<input
					placeholder="Enter your email here..."
					type="email"
					name="senderMail"
					onChange={onFormChange}
				/>
				<label htmlFor="message">Message</label>
				<textarea
					placeholder="Enter your message here..."
					name="content"
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