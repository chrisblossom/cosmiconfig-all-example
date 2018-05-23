import path from 'path';
import {
    cosmiconfigAllExample,
    cosmiconfigAllExampleSync,
} from './cosmiconfig-all-example';

test('cosmiconfigAllExample', async () => {
    const searchPath = path.resolve(__dirname, '__sandbox__/a/b/c/d/e/');
    const result = await cosmiconfigAllExample(searchPath);

    // eslint-disable-next-line no-console
    console.log('cosmiconfigAllExample:', result);

    expect(result).toMatchSnapshot();
});

test('cosmiconfigAllExampleSync', () => {
    const searchPath = path.resolve(__dirname, '__sandbox__/a/b/c/d/e/');
    const result = cosmiconfigAllExampleSync(searchPath);

    // eslint-disable-next-line no-console
    console.log('cosmiconfigAllExampleSync:', result);

    expect(result).toMatchSnapshot();
});
