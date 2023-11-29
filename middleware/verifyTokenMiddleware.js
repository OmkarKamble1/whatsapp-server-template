async function verifyToken(req, res, next) {

	const authHeader = req.headers.authorization;
  
	if (!authHeader) {

		return res.status(401).json({ message: 'No token provided.' });
	
	}
  
	if (authHeader !== process.env.TOKEN) {

		return res.status(401).json({ message: 'Access denied.' });
	
	}
  
	await next();

}
  
module.exports = verifyToken;
  
