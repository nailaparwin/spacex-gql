import gql from 'graphql-tag';
export const QUERY_ROCKETS = gql`
query rockets
{
    rockets {
      company
      cost_per_launch
      country
      description
      diameter {
        feet
        meters
      }
      first_flight
      id
      engines {
        number
        type
        version
      }
    }
  }
  `