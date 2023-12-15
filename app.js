const express = require('express');
const app = express();
const router = require('./routes');
const log = require('./middleware/logger');

app.use(log);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);
app.use((req, res, next) => {
    res.status(404);
    res.send({
        status: 'failed',
        message: req.originalUrl + ' Tidak ditemukan'
    })
});

app.listen(3000, () => console.log('Server: http://localhost:3000'));

