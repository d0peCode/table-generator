const getRandomNumber = require('./utilities/getRandomNumber');

const launch = require('./setup/launch');
const setup = require('./setup/setup');

const grid = require('./table/grid');

(async () => {
    const env = await launch();
    await setup(env.page, env.browser);

    //test table grid, tool, generator: random (10-15) times
    let testRepeats = getRandomNumber(10, 15),
        testsResults = [];

    while(testRepeats > 0) {


        testsResults.push(
            await grid(env.page)
        );


        --testRepeats;
    }

    testsResults = [...new Set(testsResults)];
    console.log('Everything done. Results:', testsResults);
})();
