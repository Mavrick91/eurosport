import { gql } from '@apollo/client';

const GET_ALL_PLAYERS_QUERY = gql`
  query data {
    headToHead {
      firstname
      lastname
      shortname
      sex
      picture {
        url
      }
      country {
        picture {
          url
        }
        code
      }
      stats {
        rank
        points
        weight
        height
        age
        last
      }
    }
  }
`;

export default GET_ALL_PLAYERS_QUERY;
