const express = require('express');

const app = express();

app.get('/users/:id', (req, res) => {
    const params = req.params;

    console.log(params);

    return res.json({
        nome: "guilherme",
        idade: 21
    });
});

app.listen(3333);