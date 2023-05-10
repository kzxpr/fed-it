const express = require('express');
const app = express();
const port = 3013;
const { engine } = require("express-handlebars");

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use('/public', express.static('public'))

app.get("/", (req, res) => {
	res.render("start", { title: "Velkommen til det nye internet"});
});

app.get("/platform", (req, res) => {
	res.render("platform", { title: "Platforme i fediverset" });
});

app.get("/ordbog", (req, res) => {
	res.render("ordbog", { title: "Ordbog" });
});

app.get('*', (req, res) => {
	res.render("404", { title: "Siden ikke fundet" });
})

app.listen(port, () => {
	console.log('App listening on port: '+ port)
})
