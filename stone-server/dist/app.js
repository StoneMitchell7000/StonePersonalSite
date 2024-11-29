"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors = __importStar(require("cors"));
const app_config_1 = require("./config/app-config");
const log4js_1 = require("log4js");
const log4js_config_1 = require("./config/log4js-config");
const express_1 = __importDefault(require("express"));
log4js_1.configure(log4js_config_1.log4jsConfig);
const logger = log4js_1.getLogger('app');
logger.debug('app startup');
const app = express_1.default();
const server = require('http').createServer(app);
app.use(express_1.default.json());
if (app_config_1.appConfig.isDevelopment) {
    app.use(cors.default(app_config_1.appConfig.cors));
}
app.use(express_1.default.static('wwwroot/'));
app.get('/test', function (req, res) {
    res.send({ test: 'test' });
});
app.get('/', function (req, res) {
    res.redirect('index.html');
});
app.all('/*', function (req, res, next) {
    res.sendFile('index.html', { root: 'wwwroot/' });
});
server.listen(app_config_1.appConfig.port, () => {
    logger.info(`Server running on port ${app_config_1.appConfig.port}`);
});
