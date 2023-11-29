const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
let Instance;

const sendMessage = async (req, res) => {

	// # Get message and phone number from request body (phone number with country code)
	const { message, phone } = req.body;

	// # Send text message
	try {

		await Instance.sendMessage(`${phone}@c.us`, message);

		res.status(200).json({
			success: true,
			message: 'Message sent successfully'
		});

	} catch {

		res.status(400).json({
			success: false,
			message: 'Failed to send message'
		});

	}

};

async function start() {

	const client = new Client();

	client.on('qr', async (qr) => {

		// Generate and scan this code with your phone
		console.log('QR RECEIVED');
		qrcode.generate(qr, { small: true });
	
	});

	client.on('ready', () => {

		console.log('Client is ready!');
	
	});

	await client.initialize();

	Instance = client;

}

start();

module.exports = { sendMessage, start };
