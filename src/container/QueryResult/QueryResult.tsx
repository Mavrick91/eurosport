import { ApolloError } from '@apollo/client';
import React from 'react';
import { Spinner } from 'react-bootstrap';

interface Props {
  data: any;
  error?: ApolloError;
  loading: boolean;
  children: React.ReactNode;
}

const QueryResult = ({ loading, error, data, children }: Props) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
      <div className="text-center" data-testid="spinner-query-result">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  return <>{children}</>;
};

export default QueryResult;
