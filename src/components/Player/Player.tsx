import React, { useMemo } from 'react';
import { IPlayer } from '../../interfaces/player';
import { capitalizeFirstLetter } from '../../utils/string';
import { formatNumber } from '../../utils/number';
import { getWinsLoses } from '../../utils/player';

interface Props {
  player: IPlayer;
}

const Player = ({ player }: Props) => {
  const [wins, loses] = getWinsLoses(player.stats.last);

  const statsInfo = useMemo(
    () => ({
      points: formatNumber(player.stats.points),
      weight: formatNumber(player.stats.weight / 1000, { style: 'unit', unit: 'kilogram' }),
      height: formatNumber(player.stats.height / 100, { style: 'unit', unit: 'meter' }),
      age: formatNumber(player.stats.age),
      wins: formatNumber(wins),
      loses: formatNumber(loses),
      shortName: player.shortname,
    }),
    [player, wins, loses],
  );

  return (
    <div className="border-2 border-red-500 rounded-tr-3xl rounded-bl-3xl p-2 bg-card flex flex-col space-y-4">
      <div>
        <div className="flex justify-between items-center">
          <div className="text-red-500 md:text-3xl text-xl">
            <span>{player.firstname}</span> <span>{player.lastname}</span>
          </div>

          <img className="w-5 h-3 md:w-9 md:h-5" src={player.country.picture.url} alt="country_flag" />
        </div>

        <div className="text-white">
          <b>
            #<span>{player.stats.rank}</span>
          </b>
        </div>
      </div>

      <img className="w-16 h-16" src={player.picture.url} alt="player_picture" />

      <div className="text-white">
        {Object.keys(statsInfo).map((key) => {
          const value = statsInfo[key as keyof typeof statsInfo];

          return (
            <div className="text-xs sm:text-base md:text-lg" key={key}>
              <span>{capitalizeFirstLetter(key)}: </span>
              <span className="text-red-500">{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Player;
