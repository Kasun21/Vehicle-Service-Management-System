import pino, { transport } from "pino";

const logger = pino({
    transport: {
        target: "pino-pretty",
        options: {
            colourze: true,
            translateTime: 'SYS:yyyy-mm-dd HH:MM:ss ',
            ignore: "pid,hostname"
        },
    },
});

export default logger;