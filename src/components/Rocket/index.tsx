import React from 'react';
import { useRocketsQuery } from '../../generated/graphql';
import Rocket from './Rocket';

const RocketQuery = () => {
    const { data, error, loading } = useRocketsQuery();
    if (loading){
        return <div> loading...</div>
    }
    if (error || !data){
        return <div> error...</div>
    }
    console.log(data);
    return <Rocket data={data}/>
}

export default RocketQuery;