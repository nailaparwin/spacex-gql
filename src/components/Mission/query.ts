import gql from 'graphql-tag';
export const QUERY_LAUNCHES = gql`
query lanuches
  {
  launches {
    details
    launch_year
    launch_success
    launch_date_local
    mission_name
    mission_id
    rocket {
      rocket_name
      rocket_type
    }
    links {
      flickr_images
    }
  }
}
`

