const express = require('express');
const app = express();

app.get('/healthcheck', (req, res) => {
	const health = Math.random() > 0.05;
	if (health) {
		res.status(200).send('yes');
	} else {
		res.status(500).send('no');
	}
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))