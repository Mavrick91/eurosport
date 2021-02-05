import { useQuery } from '@apollo/client';
import React from 'react';
import Player from '../../components/Player';
import QueryResult from '../../container/QueryResult';
import GET_ALL_PLAYERS_QUERY from '../../graphql/queries/allPlayer';
import { IHeadToHead, IPlayer } from '../../interfaces/player';

const Homepage = () => {
  const { loading, error, data } = useQuery<IHeadToHead>(GET_ALL_PLAYERS_QUERY);

  return (
    <div className="container p-4">
      <QueryResult loading={loading} error={error} data={data}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.headToHead.map((item: IPlayer) => (
            <Player player={item} key={item.firstname} />
          ))}
        </div>
      </QueryResult>
    </div>
  );
};

export default Homepage;
