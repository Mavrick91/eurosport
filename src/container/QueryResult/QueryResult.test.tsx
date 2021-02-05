import React from 'react';
import { render } from '@testing-library/react';

import QueryResult from './QueryResult';
import { ApolloError } from '@apollo/client';

test('It should display a loading state', () => {
  const { queryByTestId } = render(
    <QueryResult data={undefined} loading={true} error={undefined}>
      <div />
    </QueryResult>,
  );

  expect(queryByTestId(/spinner-query-result/i)).toBeInTheDocument();
});

test('It should display an error message', () => {
  // We only need the message property from the interface
  // @ts-ignore
  const error: ApolloError = {
    message: 'Error message test',
  };

  const { getByText } = render(
    <QueryResult data={undefined} loading={false} error={error}>
      <div />
    </QueryResult>,
  );

  expect(getByText(/Error message test/i)).toBeInTheDocument();
});

test("It should display a message 'Nothing to show...'", () => {
  const { getByText } = render(
    <QueryResult data={undefined} loading={false} error={undefined}>
      <div />
    </QueryResult>,
  );

  expect(getByText(/Nothing to show.../i)).toBeInTheDocument();
});

test('It should display the children when it is defined', () => {
  const text = 'Children displayed';

  const { getByText } = render(
    <QueryResult data={[]} loading={false} error={undefined}>
      <div>{text}</div>
    </QueryResult>,
  );

  expect(getByText(text)).toBeInTheDocument();
});
