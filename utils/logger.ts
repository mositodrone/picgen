const { createLogger, transports, format } = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.Console(), // Log to the console
        new transports.File({ filename: 'combined.log' })
    ]
});

export default logger;
