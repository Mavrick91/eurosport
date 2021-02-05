import { MockedProvider } from '@apollo/client/testing';
import GET_ALL_PLAYERS_QUERY from 'graphql/queries/allPlayer';
import React from 'react';
import { render, waitForElementToBeRemoved, buildPlayer } from 'test-utils';
import Homepage from './Homepage';

const player1 = buildPlayer();
const player2 = buildPlayer();
const mocks = [
  {
    request: { query: GET_ALL_PLAYERS_QUERY },
    result: { data: { headToHead: [player1, player2] } },
  },
];

test('It should render the data', async () => {
  const { getByTestId, getByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Homepage />
    </MockedProvider>,
  );

  expect(getByTestId(/spinner-query-result/i)).toBeInTheDocument();

  await waitForElementToBeRemoved(() => expect(getByTestId(/spinner-query-result/i)));

  expect(getByText(player1.firstname)).toBeInTheDocument();
  expect(getByText(player2.firstname)).toBeInTheDocument();
});
