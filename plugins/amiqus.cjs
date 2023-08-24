const ProductionServers = require('./decorators/production-servers.cjs');
const id = 'amiqus';

/** @type {import('@redocly/cli').DecoratorsConfig} */
const decorators = {
    oas3: {
        'production-servers': ProductionServers,
    },
};

module.exports = {
    id,
    decorators,
};
