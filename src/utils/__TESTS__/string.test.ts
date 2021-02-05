import { capitalizeFirstLetter } from '../string';

test('should return the correct format', () => {
  const str = 'this is a test';
  const str2 = 'ANOTHER TEST';

  expect(capitalizeFirstLetter(str)).toEqual('This is a test');
  expect(capitalizeFirstLetter(str2)).toEqual('ANOTHER TEST');
});
