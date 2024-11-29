export const appConfig = {
    port: process.env.PORT || 3000,
    isDevelopment: true,
    cors: {
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
        credentials: true,
        methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
        origin: 'http://localhost:4200',
        preflightContinue: false
    },
}