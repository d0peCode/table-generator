const launch = require('./setup/launch');
const setup = require('./setup/setup');

(async () => {
    const env = await launch();
    await setup(env.page, env.browser);

    console.log('Everything done!');
})();
