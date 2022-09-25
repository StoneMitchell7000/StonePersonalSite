export const appConfig = {
    port: process.env.PORT || 3000,
    isDevelopment: true,
    uploadFilePath: 'dist/f/',
    uploadFileUrl: 'http://localhost:3000/f/',
    database: {
        host: 'textterra.com',
        database: 'chlawfir_textterra_test',
        port: 5432,
        user: 'chlawfir_textterra_user',
        password: '1TextTerra#1'
    },
    cors: {
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
        credentials: true,
        methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
        origin: 'http://localhost:4200',
        preflightContinue: false
    },
    mail: {
        apiKey: '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'
    },
    agents: [
        { name: 'DeBosier', twilioId: 'AC08cf542504ad14e9385faa519b48ed48' },
        { name: 'Berg', twilioId: 'AC1dde2d7d7629b3bf29b1655441fd8adb' },
        { name: 'Joye', twilioId: 'ACea10221e005ecee43c091ba67d21ae56' },
        // { name: 'Ponce', twilioId: 'AC0144326ee0e82f5d0c4ce7e846766666' }
    ]
}