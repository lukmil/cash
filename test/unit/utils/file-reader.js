import { describe, it } from 'mocha';
import assert from 'assert';
import fileReader from '../../../app/utils/file-reader';

describe('File reader', () => {
  it('file not found', () => {
    const block = () => fileReader.read('not-exist');
    assert.throws(block, Error("ENOENT: no such file or directory, open 'not-exist'"));
  });

  it('empty file', () => {
    const block = () => fileReader.read('test/fixtures/empty-file.txt');
    assert.throws(block, SyntaxError('Unexpected end of JSON input'));
  });

  it('read json file with data', () => {
    const actual = fileReader.read('test/fixtures/with-correct-data.json');
    assert.deepStrictEqual(actual, [{
      date: '2019-10-18',
    }]);
  });

  it('read txt file with stringified data', () => {
    const actual = fileReader.read('test/fixtures/with-correct-stringified-data.txt');
    assert.deepStrictEqual(actual, [{
      name: 'Lukas',
    }]);
  });
});
