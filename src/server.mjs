import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send(
		'<script>window.mw = {' +
		'inspect: function() {throw new Error("`mw.inspect` should never be called!"); },' +
		'propertyToCheckFor: true,' +
		'};</script>\n'
	);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});