import React from 'react';
import { useLanuchesQuery } from '../../generated/graphql';
import Launches from './Launches';

const LaunchQuery = () => {
    const { data, error, loading } = useLanuchesQuery();
    if (loading){
        return <div> loading...</div>
    }
    if (error || !data){
        return <div> error...</div>
    }
    console.log(data);
    return <Launches data={data}/>
}

export default LaunchQuery;