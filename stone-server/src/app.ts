import * as cors from 'cors';
import { appConfig } from './config/app-config';
import { configure, getLogger } from 'log4js';
import { log4jsConfig } from './config/log4js-config';
import express from 'express';

configure(log4jsConfig);
const logger = getLogger('app');
logger.debug('app startup');
const app = express();
const server = require('http').createServer(app);
app.use(express.json());
if (appConfig.isDevelopment) { app.use(cors.default(appConfig.cors)); }

app.use(express.static('/'));
app.get('/', (req, res) => { res.redirect('index.html'); });

// this will allow deep links to work.
app.all('/*', (req, res, next) => {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: '/' });
});

server.listen(appConfig.port, () => {
    logger.info(`Server running on port ${appConfig.port}`);
});
