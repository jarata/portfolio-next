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
	const submitContactForm = async (event) => {
		event.preventDefault();
		const recipientMail = process.env.NEXT_PUBLIC_EMAIL_CONTACT;
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
					placeholder="Enter you name here..."
					type="text"
					value={name}
					name="fname"
					onChange={onNameChange}
				/>
				<label htmlFor="email">Email</label>
				<input
					placeholder="Enter your email here..."
					type="email"
					value={senderMail}
					name="email"
					onChange={onMailChange}
				/>
				<label htmlFor="message">Message</label>
				<textarea
					placeholder="Enter your message here..."
					name="text"
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