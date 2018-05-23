import path from 'path';
import cosmiconfig from 'cosmiconfig';

const explorer = cosmiconfig('example');

async function cosmiconfigAllExample(searchPath) {
    const results = [];
    async function getNext(currentPath) {
        const currentResult = await explorer.search(currentPath);

        // if no result found, end search
        if (!currentResult) {
            return;
        }

        // add current result to end of array
        results.push(currentResult);

        const parsedFilePath = path.parse(currentResult.filepath);

        // Get the next parent directory
        const nextPath = path.resolve(parsedFilePath.dir, '../');

        // eslint-disable-next-line consistent-return
        return getNext(nextPath);
    }

    await getNext(searchPath);

    return results;
}

function cosmiconfigAllExampleSync(searchPath) {
    const results = [];
    function getNext(currentPath) {
        const currentResult = explorer.searchSync(currentPath);

        // if no result found, end search
        if (!currentResult) {
            return;
        }

        // add current result to end of array
        results.push(currentResult);

        const parsedFilePath = path.parse(currentResult.filepath);

        // Get the next parent directory
        const nextPath = path.resolve(parsedFilePath.dir, '../');

        // eslint-disable-next-line consistent-return
        return getNext(nextPath);
    }

    getNext(searchPath);

    return results;
}

export { cosmiconfigAllExample, cosmiconfigAllExampleSync };
