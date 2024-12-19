/**
 * @format
 */

import {add} from '@/add';

// Note: import explicitly to use the types shipped with jest.
import {test, expect} from '@jest/globals';

test('should return the sum of two numbers', () => {
  expect(add(2, 3)).toBe(5);
});
