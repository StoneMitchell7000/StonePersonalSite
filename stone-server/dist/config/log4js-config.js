"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log4jsConfig = void 0;
exports.log4jsConfig = {
    appenders: {
        file: {
            type: 'file',
            filename: 'logs/stonemitchell.log',
            maxLogSize: 104800,
            backups: 3
        },
        console: {
            type: 'stdout'
        }
    },
    categories: {
        default: {
            appenders: [
                'file',
                'console'
            ],
            level: 'debug'
        }
    }
};
