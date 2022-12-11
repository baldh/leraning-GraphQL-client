import React from "react"
import {gql, useQuery} from "@apollo/client"
import {Layout, QueryResult} from '../components'
import TrackDetail from '../components/track-detail'

const TRACK = gql`
    query GetTrack($trackId: ID!) {
        track(id: $trackId) {
            id
            author {
                name
            }
            title
            thumbnail
            length
            modulesCount
            description
            numberOfViews
            modules {
                id
                title
                length
            }
        }
    }
`
export default function Track({trackId}) {
  const {loading, error, data} = useQuery(TRACK, {
    variables: {trackId}
  })

  return <Layout>
    <QueryResult error={error} loading={loading} data={data}>
      <TrackDetail track={data?.track}/>
    </QueryResult>
  </Layout>
}