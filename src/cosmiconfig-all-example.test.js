import path from 'path';
import { cosmiconfigAllExample } from './cosmiconfig-all-example';

test('finds all configs', async () => {
    const searchPath = path.resolve(__dirname, '__sandbox__/a/b/c/d/e/');
    const result = await cosmiconfigAllExample(searchPath);

    // eslint-disable-next-line no-console
    console.log('result:', result);

    expect(result).toMatchSnapshot();
});
