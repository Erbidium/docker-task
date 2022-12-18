const express = require('express');

const app = express();

const path = `${__dirname}/views/`;
const port = 80;

app.use(express.static(path));

app.get('/', (req, res) => {
    res.sendFile(`${path}index.html`);
});

app.get('/health-check', (req, res) => {
    res.send('Health check passed');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
