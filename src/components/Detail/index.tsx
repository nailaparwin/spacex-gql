import React from 'react';
import { useLanuchesQuery } from '../../generated/graphql';
import Detail from './Detail';

const LaunchQuery = () => {
    const { data, error, loading } = useLanuchesQuery();
    if (loading){
        return <div> loading...</div>
    }
    if (error || !data){
        return <div> error...</div>
    }
    console.log(data);
    return <Detail data={data}/>
}

export default LaunchQuery;