import React from 'react';
import { useLanuchesQuery } from '../../generated/graphql';
import Mission from './Mission';

const MissionQuery = () => {
    const { data, error, loading } = useLanuchesQuery();
    if (loading){
        return <div> loading...</div>
    }
    if (error || !data){
        return <div> error...</div>
    }
    return <Mission data={data}/>
}

export default MissionQuery;