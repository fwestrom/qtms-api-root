var crutch = require('qtort-microservices').crutch;
var defaults = {
    defaultExchange: 'topic://services',
    defaultQueue: 'qtms-api-root',
    defaultReturnBody: true,
};

crutch(defaults, function(_, logging, microservices, options, Promise, util) {
    var Log = logging.getLogger('qtms-api-root');

    return Promise.all([
        microservices.bind('topic://api/api.get', onGet),
    ]);

    function onGet(body, mc) {
        return mc.reply({
        }, {
            links: {
                self: { to: 'api' },
                auth: { to: 'api.auth' },
                users: { to: 'api.users' },
            },
        }).return(undefined);
    }
});
