const express = require('express');
const app = express();
const port = 3013;

app.use('/', express.static('public'))

app.get('*', (req, res) => {
	res.sendStatus(404);
})

app.listen(port, () => {
	console.log('App listening on port'+ port)
})
