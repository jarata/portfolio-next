import fetch from "isomorphic-unfetch"

export const sendContactMail = async (recipientMail, name, senderMail, content) => {
	const data = {
		recipientMail,
		name,
		senderMail,
		content
	}
	try {
		const res = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		return res
	} catch (error) {
		return error
	}
}