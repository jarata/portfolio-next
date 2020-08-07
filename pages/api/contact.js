import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: process.env.EMAIL_PORT,
	secure: false,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS
	}
})

export default async (req, res) => {
	const { senderMail, name, content, recipientMail } = req.body;

	if (senderMail === "" || name === "" || content === "" || recipientMail === "") {
		res.status(403).send("")
		return
	}

	const mailerRes = await mailer({ senderMail, name, text: content, recipientMail })
	res.send(mailerRes)
}

const mailer = ({ senderMail, name, text, recipientMail }) => {
	const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`
	const message = {
		from,
		to: `${recipientMail}`,
		subject: `Contact Inquiry from ${from}`,
		text,
		replyTo: from
	}

	return new Promise((resolve, reject) => {
		transporter.sendMail(message, (error, info) =>
			error ? reject(error) : resolve(info)
		)
	})
}