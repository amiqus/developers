module.exports = ProductionServers;

/** @type {import('@redocly/cli').OasDecorator} */
function ProductionServers({ servers }) {
  return {
    Root: {
        leave(Root) {
            Root.servers = servers
        },
        skip() {
            return process.env.PRODUCTION === undefined
        }
    }
  }
};
