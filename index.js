const express = require('express');
const app = express();
const port = 3013;
const { engine } = require("express-handlebars");

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use('/public', express.static('public'))

app.get("/", (req, res) => {
	res.render("start");
});

app.get("/platform", (req, res) => {
	res.render("platform");
});

app.get('*', (req, res) => {
	res.sendStatus(404);
})

app.listen(port, () => {
	console.log('App listening on port'+ port)
})
