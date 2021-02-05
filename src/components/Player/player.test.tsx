import { buildPlayer, render } from 'test-utils';
import { formatNumber } from 'utils/number';
import { getWinsLoses } from '../../utils/player';
import Player from './Player';

test('should display all the information', () => {
  const player = buildPlayer();
  const { getByText, getByAltText } = render(<Player player={player} />);
  const [wins, loses] = getWinsLoses(player.stats.last);

  expect(getByText(player.firstname)).toBeInTheDocument();
  expect(getByText(player.lastname)).toBeInTheDocument();
  expect(getByText(player.shortname)).toBeInTheDocument();
  expect(getByAltText('player_picture')).toHaveAttribute('src', player.picture.url);
  expect(getByAltText('country_flag')).toHaveAttribute('src', player.country.picture.url);
  expect(getByText(player.stats.rank)).toBeInTheDocument();
  expect(getByText(formatNumber(player.stats.points))).toBeInTheDocument();
  expect(getByText(formatNumber(player.stats.weight / 1000, { style: 'unit', unit: 'kilogram' }))).toBeInTheDocument();
  expect(getByText(formatNumber(player.stats.height / 100, { style: 'unit', unit: 'meter' }))).toBeInTheDocument();
  expect(getByText(formatNumber(player.stats.age))).toBeInTheDocument();
  expect(getByText(formatNumber(wins))).toBeInTheDocument();
  expect(getByText(formatNumber(loses))).toBeInTheDocument();
});
