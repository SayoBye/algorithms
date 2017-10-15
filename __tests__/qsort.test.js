// @flow

import qsort from '../src/bin/algorithms/qsort.js';

const arr = [6,4,7,12,41,5,7]


test('qsort', () => {
  expect(qsort(arr)).toBe([4,5,6,7,12,41]);
});
