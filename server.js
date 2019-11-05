import config from './config';
import express from 'express';
import apiRouter from './api';
import path from 'path';

const app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Home' })
});

app.get('/about', function (req, res) {
    res.render('about', { title: 'About', message: 'About' })
});

app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, 'public')))

app.listen(config.port, () => {
    console.log(`Express server is running on: ${config.port}`);
});