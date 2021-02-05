import { getWinsLoses } from '../player';

test('should return the correct numbers of wins and loses', () => {
  const winsLoses = [true, false, true, false];

  const [wins, loses] = getWinsLoses(winsLoses);

  expect(wins).toEqual(2);
  expect(loses).toEqual(2);
});
