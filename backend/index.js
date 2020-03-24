const express = require('express');

const app = express();

app.get('/users', (req, res) => {
    const params = req.query;

    console.log(params);

    return res.json({
        nome: "guilherme",
        idade: 21
    });
});

app.listen(3333);