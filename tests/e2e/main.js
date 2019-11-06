const getRandomNumber = require('./utilities/getRandomNumber');

const launch = require('./setup/launch');
const setup = require('./setup/setup');

const TableGrid = require('./table/TableGrid.spec');
const TableGenerator = require('./table/TableGenerator.spec');
const TableTool = require('./table/TableTool.spec');

(async () => {
    const env = await launch();
    await setup(env.page, env.browser);

    //test table grid, tool, generator: random (10-15) times
    let testRepeats = getRandomNumber(10, 15),
        testsResults = [];

    while(testRepeats > 0) {
        testsResults.push(
            await TableGrid(env.page),
            await TableGenerator(env.page),
            await TableTool(env.page)
        );

        --testRepeats;
    }

    console.log('Everything done. Results:', testsResults);
})();
