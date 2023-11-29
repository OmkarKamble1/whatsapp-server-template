const express = require('express');
const dotenv = require('dotenv');
const sendMessageRouter = require('./routes/sendMessageRoute.js');

const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.use('/api/v1/sendMessage', sendMessageRouter);

app.get('/status', (req, res) => {
	res.json({
		success: true,
		message: 'Server is running.',
		uptime: `${process.uptime()} seconds`
	})
});

app.listen(PORT, () => {

	console.log(`server listening at http://localhost:${PORT}`);
  
});
